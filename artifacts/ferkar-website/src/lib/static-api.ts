// Static-content mode: answer the app's API calls from bundled JSON instead of a server.
//
// Why this exists: the site normally reads everything from /api/*, backed by PostgreSQL. A
// static host (GitHub Pages) has no server, and the SPA fallback would return index.html
// where the pages expect JSON — the homepage then dies on `featuredProjects.map is not a
// function`. Writing the responses out as files does not work either: `/api/projects` and
// `/api/projects/featured` cannot both exist as files, and GitHub Pages has no rewrite rules.
//
// So when VITE_STATIC_DATA is set, GET requests to <base>/api/* are served from the JSON in
// src/data/. The same source tree still builds a database-backed app with the flag off — the
// shim is inert unless explicitly enabled, and never intercepts POST (the contact form is
// designed to work with or without a server).

import projectsData from "../data/projects.json";
import companyData from "../data/company.json";

const byOrder = (a, b) => a.sortOrder - b.sortOrder;
const projects = [...projectsData].sort(byOrder);

const responses = {
  "/healthz": { status: "ok" },
  "/projects": projects,
  "/projects/featured": projects.filter((p) => p.featured),
  "/company": companyData,
  "/stats": {
    projectCount: projects.length,
    serviceCount: 0,
    portfolioCount: 0,
    blogCount: 0,
    careerCount: 0,
    messageCount: 0,
    testimonialCount: 0,
  },
  // Empty on purpose: these pages carry their own translated copy and fall back to it, so the
  // text stays correct in English, Kurdish and Arabic.
  "/services": [],
  "/portfolio": [],
  "/blog": [],
  "/blog/featured": [],
  "/careers": [],
  "/testimonials": [],
};

export function installStaticApi(): void {
  const apiRoot = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/api`;
  const originalFetch = window.fetch.bind(window);

  window.fetch = (input, init) => {
    const url =
      typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
    const method = (init?.method ?? (typeof input === "object" && "method" in input ? input.method : "GET") ?? "GET").toUpperCase();

    // Normalise whatever form the client used (absolute path, full URL, or base-relative).
    let pathname = url;
    try {
      pathname = new URL(url, window.location.origin).pathname;
    } catch {
      /* keep as-is */
    }
    const withoutBase = pathname.startsWith(apiRoot) ? pathname.slice(apiRoot.length) : pathname.replace(/^.*\/api/, "");

    if (method === "GET" && Object.prototype.hasOwnProperty.call(responses, withoutBase)) {
      return Promise.resolve(
        new Response(JSON.stringify(responses[withoutBase]), {
          status: 200,
          headers: { "content-type": "application/json" },
        }),
      );
    }

    // Anything else (POST /api/contact, for instance) goes to the network as normal.
    return originalFetch(input, init);
  };
}
