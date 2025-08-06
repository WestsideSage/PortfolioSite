# Copilot Instructions for Nova Portfolio Monorepo

## Architecture Overview

This is a **pnpm workspace monorepo** with Turborepo build orchestration, featuring four distinct applications with different deployment targets:

- **`apps/astro-site/`** - Static marketing site (Astro 5) → Vercel
- **`apps/next-dashboard/`** - Interactive dashboard (Next.js 15 + tRPC + Drizzle ORM) → Vercel
- **`apps/hono-api/`** - Edge API gateway (Hono on Bun/Node) → Cloudflare Workers
- **`apps/fastapi-svc/`** - Python microservice (FastAPI + HTMX) → Fly.io

## Development Workflow

### Key Commands

- `pnpm dev` - Start all services in parallel (ports: astro:9003, next:3000, hono:3003, fastapi:8000)
- `pnpm --filter @nova/[service-name] [command]` - Run commands for specific services
- `pnpm docker:up` - Start PostgreSQL for Next.js dashboard
- `pnpm setup` - Install all deps including Python Poetry deps

### Package Naming Convention

All packages use `@nova/` scoped naming:

- `@nova/astro-site`
- `@nova/next-dashboard`
- `@nova/hono-api`
- `@nova/fastapi-svc`
- `@nova/config` (shared configs)

## Critical Integrations

### Spotify Integration (Astro Site)

- **Location**: `apps/astro-site/src/lib/spotify.ts`
- **Pattern**: Refresh token flow with comprehensive error handling for Premium/device requirements
- **Components**: `SpotifyPlayer.astro` with real-time playback controls
- **Auth Flow**: Initial setup via `/callback` page → exchange code → store refresh token

### Database Architecture (Next.js Dashboard)

- **ORM**: Drizzle with PostgreSQL
- **Schema**: `src/server/schema.ts` (users, projects tables)
- **tRPC**: Type-safe API layer with superjson transformer and Zod validation
- **Commands**: `db:migrate`, `db:studio` for schema management

### Design System (Astro Site)

- **Location**: `apps/astro-site/src/design-system/`
- **Theme**: "Emerald Sanctuary" - sage/emerald/gold color palette with mystical gradients
- **Structure**: Tokens-based system with gradients, component utilities, and animations
- **Integration**: Tailwind CSS custom properties with tree-shakeable exports

## Service Communication Patterns

### Cross-Service Data Flow

- **Next.js ↔ Hono API**: tRPC client can call Hono endpoints via `NEXT_PUBLIC_API_URL`
- **Hono API**: Stateless gateway with sample project data (replace with real data source)
- **FastAPI**: Independent HTMX-driven service with own templates/static files

### Environment Configuration

Each service has distinct env requirements:

- **Astro**: Spotify credentials (`PUBLIC_SPOTIFY_CLIENT_ID`, `SPOTIFY_REFRESH_TOKEN`)
- **Next.js**: Database URL, API endpoints
- **Hono**: CORS origins, port config
- **FastAPI**: Database URL, host/port binding

## Development Patterns

### File Organization

- **Shared configs**: `packages/config/` for ESLint, Prettier, TypeScript
- **Workspaces**: All apps reference `@nova/config` for consistent tooling
- **Docker**: Single `docker-compose.yaml` at root for shared PostgreSQL

### Testing Strategy

- **Vitest**: Used across all TypeScript services
- **Location**: Each service has own test setup in `src/test/` or root-level test files
- **Command**: `pnpm test` runs tests across all workspaces

### Build Pipeline

- **Turborepo**: Orchestrates builds with dependency caching
- **Outputs**: `dist/`, `.next/`, `build/` dirs cached between builds
- **Deployment**: Each service has independent deployment pipeline

## Service-Specific Guidance

### When Working on Astro Site

- Design system components are in `src/design-system/` - use existing tokens/gradients
- Spotify integration requires Premium account for playback controls
- Static site generation - consider build-time vs runtime data needs

### When Working on Next.js Dashboard

- Use tRPC procedures for API routes, not traditional Next.js API routes
- Database migrations via Drizzle Kit - run `db:generate` after schema changes
- Tremor React for charts/data viz components

### When Working on Hono API

- Edge-first design - avoid Node.js-specific APIs when possible
- CORS configured for localhost:3002 (Next.js default port)
- Health endpoints follow standard patterns (`/healthz`, `/readiness`)

### When Working on FastAPI Service

- Poetry for dependency management - use `poetry add` not pip
- HTMX integration via Jinja2 templates in `templates/`
- Health check at `/api/health` follows same pattern as Hono

## Common Gotchas

- **Port conflicts**: Services run on different ports - check package.json scripts
- **Workspace references**: Use `workspace:*` for internal package dependencies
- **Environment separation**: Each service has own .env needs - don't share env files
- **Database**: Only Next.js dashboard uses PostgreSQL - others are stateless/mock data
- **TypeScript configs**: Extend from `@nova/config/tsconfig/base.json` for consistency

<!--
  Copilot / Claude Sonnet 4 — Project-wide Custom Instructions
  Repo: Nova Portfolio Monorepo  •  Owner: WestsideSage
-->

## 🧠 General reasoning & output rules

- Think step-by-step, but return only the final answer or code blocks—no inner monologue.
- If the task is unclear, ask one clarifying question before coding.
- Prepend each snippet with a file path comment (e.g. // FILE: apps/astro-site/src/pages/index.astro).

## 🗂️ Architecture guard-rails

- Respect existing directories; never invent new top-level folders without explicit user approval.
- Use the `@nova/` pnpm workspace scope for all internal imports.
- Follow TypeScript 5 + Prettier config from `@nova/config` (tabs, 100-char line width).

## ✨ Design-system rules (Astro Site)

- Use Tailwind classes and color tokens defined in `src/design-system/`; do **not** inline hex values.
- Component animations must use the project’s `emeraldfade` keyframes.

## 🎧 Spotify integration caveats

- Always refresh expired tokens via `spotify.ts`; never store access tokens in client code.
- Catch and surface error states for non-Premium users.

## 📊 Next.js Dashboard conventions

- Use **tRPC** for API routes; avoid `/api/*`.
- After editing `schema.ts`, output the matching Drizzle migration file and an example `db:migrate` command.
- Charts should use **Tremor React** components.

## 🌐 Hono API (Edge)

- Stick to Web-standard APIs (`fetch`, `crypto.subtle`); replace Node built-ins with polyfills if required.
- Every endpoint must include a `/healthz` handler returning 200 JSON `{status:"ok"}`.

## 🐍 FastAPI microservice

- Write async endpoints with `async def`.
- Template responses must use HTMX swap attributes where dynamic updates are expected.

## 🧪 Testing & QA

- Generate **Vitest** unit tests alongside new TypeScript files (`filename.test.ts` sibling).
- Mock external HTTP calls with **MSW**; do not hit live services in tests.

## 🚀 Deployment & CI

- Provide Vercel edge-config examples for Astro and Next apps.
- Use `pnpm turbo run lint test build` as the default pipeline when suggesting CI changes.

## 🔐 Secrets & env-vars

- Reference env-vars exactly as documented; never echo secret values in code samples.
- If an env-var is missing, add a TODO comment rather than hard-coding.

## 📦 Commit / PR etiquette

- Suggest Conventional Commit prefixes (`feat:`, `fix:`, `chore:`) and scope (`feat(next-dashboard): …`).
- When proposing a PR, include a bullet list: **Problem • Solution • Tests • Rollback plan**.

## 📝 Documentation & Comments

- Write code that would impress a senior-level recruiter: clean, modular, and idiomatic.
- Favor self-documenting code; add concise JSDoc/Docstrings only where intent isn’t obvious.
- Keep file & folder names in kebab-case and group related logic (components, hooks, utils) together.
- Any new function exported from `src/` must include a one-line purpose comment above it.
- Update or create READMEs when introducing a new pattern, dependency, or env-var.
- Never leave TODOs unresolved—convert to GitHub Issues if work remains.
