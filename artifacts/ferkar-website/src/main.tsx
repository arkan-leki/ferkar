import { createRoot } from 'react-dom/client';
import { setBaseUrl } from '@workspace/api-client-react';

import App from './App';
import { installStaticApi } from './lib/static-api';

import './index.css';

// The generated API client returns root-absolute paths that ALREADY contain the api segment
// (e.g. `/api/projects`), so the prefix added here is the app's base path only — appending
// "/api" as well would produce `/api/api/projects` and every request would miss.
//
// This exists because a root-absolute path only resolves when the app is served from the
// domain root. Deployed under a subpath (GitHub Pages serves this site from /ferkar/) the
// request would otherwise go to arkan-leki.github.io/api/... instead.
//
// `import.meta.env.BASE_URL` is Vite's `base`: "/" locally, "/ferkar/" on Pages. Stripping the
// trailing slash leaves "" in dev, which setBaseUrl treats as "no prefix".
setBaseUrl(import.meta.env.BASE_URL.replace(/\/$/, ''));

// Static build (GitHub Pages): serve the API from bundled JSON, since there is no server.
// Off by default, so the same tree still builds the database-backed Replit app.
if (import.meta.env.VITE_STATIC_DATA) {
  installStaticApi();
}

createRoot(document.getElementById('root')!).render(<App />);
