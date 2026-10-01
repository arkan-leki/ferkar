# FERKAR Website

Multilingual company website for FERKAR, a technology and digital services business.

## Run & Operate

- `pnpm --filter @workspace/ferkar-website run dev` — run the React + Vite website
- `pnpm --filter @workspace/api-server run dev` — run the Express API server
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required environment: `DATABASE_URL` for PostgreSQL; `PORT` and `BASE_PATH` are supplied to artifact services by Replit.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/ferkar-website` — React + Vite website and English, Arabic, and Sorani Kurdish translations
- `artifacts/api-server` — Express API
- `lib/db` — PostgreSQL connection and Drizzle schema
- `lib/api-spec` — OpenAPI contract and generated API clients/schemas

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
