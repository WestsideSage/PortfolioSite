<!-- Copilot / Claude Sonnet 4 — Project-wide Custom Instructions
     Repo: Nova Portfolio Monorepo  •  Owner: WestsideSage -->

## 🧠 General reasoning & output rules

- Think step-by-step, but output **only** the final code or answer.
- 🔄 NEW • **Always kick off with `#codebase` search** to collect relevant files before answering or editing.
- If the task is unclear, ask one clarifying question, then proceed.
- Prepend every snippet with a file-path comment (`// FILE: apps/…/foo.ts`).

## 🤖 Agent-mode checklist 🔄 NEW

1. **RACE framework**
   - *R*etrieve context (`#codebase`, `#changes`, `#selection`).
   - *A*ct: outline a plan.
   - *C*ode: apply edits or generate new code.
   - *E*xplain: in ≤ 4 bullets, summarise what changed & why.
2. Prefer tools in this order: edits → terminal commands → tasks.
3. Never run terminal commands without showing a plan and asking for approval.

## 🗂️ Architecture guard-rails

- Respect existing directories; no new top-level folders without explicit approval.
- Use the `@nova/` pnpm workspace scope for all internal imports.
- Follow TypeScript 5 + Prettier config from `@nova/config` (tabs, 100-char line width).

## ✨ Design-system rules (Astro Site)

- Use Tailwind classes and color tokens from `src/design-system/`; **never** inline hex.
- Component animations must use the project’s `emeraldfade` keyframes.

## 🎧 Spotify integration caveats

- Always refresh expired tokens via `spotify.ts`; never store access tokens in client code.
- Surface graceful error states for non-Premium users.

## 📊 Next.js Dashboard conventions

- Use **tRPC** for API routes; avoid `/api/*`.
- After editing `schema.ts`, output the matching Drizzle migration file + example `pnpm db:migrate`.
- Charts = **Tremor React** components.

## 🌐 Hono API (Edge)

- Stick to Web-standard APIs (`fetch`, `crypto.subtle`); polyfill Node built-ins if needed.
- Every endpoint must expose `/healthz` returning `{ "status": "ok" }`.

## 🐍 FastAPI microservice

- Endpoints are `async def`; template responses use HTMX `hx-swap` hints.

## 🧪 Testing & QA

- Generate **Vitest** unit tests next to new TS files (`foo.test.ts`).
- Mock outbound HTTP with **MSW**; no live calls in tests.

## 🚀 Deployment & CI

- Provide Vercel edge-config snippets for Astro & Next apps.
- Default pipeline: `pnpm turbo run lint test build`.

## 🔐 Secrets & env-vars

- Reference env-vars exactly; never echo secrets.
- If a var is missing, add a `TODO:` comment instead of hard-coding.

## 📦 Commit / PR etiquette

- Use Conventional Commit prefixes and scoped packages (`feat(next-dashboard): …`).
- PR template: **Problem • Solution • Tests • Rollback plan**.

## 📝 Documentation & Comments

- Code must impress a senior recruiter: clean, modular, idiomatic.
- Favor self-documenting code; concise JSDoc only when intent isn’t obvious.
- File & folder names in kebab-case; group related logic together.
- Each exported function gets a one-line purpose comment.
- Update or create READMEs for new patterns, deps, or env-vars.
- Never leave `TODO`s—open a GitHub Issue if work remains.
