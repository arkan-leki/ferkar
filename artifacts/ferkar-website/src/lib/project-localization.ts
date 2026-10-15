import fergaImage from "../../../../attached_assets/photo_2026-06-04_03-18-31_1791312696276.jpg";
import poshyaImage from "../../../../attached_assets/Screenshot_1_1791313735162.jpg";

export type ProjectCopy = {
  name: string;
  category: string;
  description: string;
};

export type ProjectDisplay = ProjectCopy & {
  imageUrl?: string | null;
};

export type ProjectCopies = {
  ferga: ProjectCopy;
  poshya: ProjectCopy;
};

// The bundled images are a FALLBACK, not an override: when the API supplies an imageUrl it
// wins, so project artwork can be replaced from the backend without touching this file. Leave
// imageUrl null in the API to fall back to these.
export function localizeProject(
  project: ProjectDisplay,
  projectCopies: ProjectCopies,
): ProjectDisplay {
  const projectKey = project.name.trim().toLowerCase();

  if (projectKey === "ferga") {
    return { ...project, ...projectCopies.ferga, imageUrl: project.imageUrl ?? fergaImage };
  }

  if (projectKey === "poshya") {
    return { ...project, ...projectCopies.poshya, imageUrl: project.imageUrl ?? poshyaImage };
  }

  return project;
}

// Project artwork served from the site's own `public/project-images` is stored as a relative
// path ("project-images/poshya.png") so it survives being deployed under a subpath
// (GitHub Pages serves this site from /ferkar/). Bundled imports and absolute/remote URLs are
// already resolved, and must not be prefixed again.
export function projectImageUrl(project: ProjectDisplay): string | null {
  const url = project.imageUrl;
  if (!url) return null;
  if (url.startsWith("/") || /^https?:\/\//.test(url) || url.startsWith("data:")) return url;
  return `${import.meta.env.BASE_URL}${url}`;
}
