# Nova Portfolio Monorepo

A modern, production-ready web technology demonstration using a monorepo structure with pnpm workspaces and Turborepo.

## 🌟 Features

- 🚀 **Astro Site** - Fast, static marketing site with Tailwind CSS
- 📊 **Next.js Dashboard** - Interactive dashboard with shadcn/ui, tRPC, and Drizzle ORM
- ⚡ **Hono API** - Edge-native API gateway running on Bun
- 🐍 **FastAPI Service** - Python microservice with HTMX demo

## 📦 Package Structure

```
PortfolioSite/
├── apps/
│   ├── astro-site/        # Static marketing site
│   ├── next-dashboard/    # Interactive dashboard
│   ├── hono-api/          # Edge API gateway
│   └── fastapi-svc/       # Python microservice
└── packages/
    └── config/            # Shared configurations
```

## 🛠 Tech Stack

- **Build Tools**: pnpm, Turborepo
- **Languages**: TypeScript, Python
- **Frameworks**:
  - Astro 5
  - Next.js 15 (App Router)
  - Hono
  - FastAPI
- **UI**: Tailwind CSS, shadcn/ui
- **Data**: Drizzle ORM, PostgreSQL
- **Testing**: Vitest, Jest
- **Deployment**:
  - Vercel (Astro & Next.js)
  - Cloudflare Workers (Hono)
  - Fly.io (FastAPI)

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- pnpm 8.15+
- Docker & Docker Compose
- Bun 1.2+ (for Hono API)
- Python 3.11+ (for FastAPI service)
- Poetry (for Python dependency management)

### Development

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/PortfolioSite.git
   cd PortfolioSite
   ```

2. Install Node.js dependencies:

   ```bash
   pnpm install
   ```

3. Install Python dependencies for FastAPI service:

   ```bash
   pnpm --filter @nova/fastapi-svc install:poetry
   ```

4. Start PostgreSQL:

   ```bash
   pnpm docker:up
   ```

5. Start all services:
   ```bash
   pnpm dev
   ```

### Build & Test

```bash
# Build all packages
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint
```

## 📝 Development Notes

### Environment Variables

Copy `.env.example` to `.env` in each package that requires it and fill in the values.

### Package-specific Commands

Each package can be run independently:

```bash
# Astro site (port 9003)
pnpm --filter @nova/astro-site dev

# Next.js dashboard (port 3000)
pnpm --filter @nova/next-dashboard dev
pnpm --filter @nova/next-dashboard db:migrate     # Run database migrations
pnpm --filter @nova/next-dashboard db:studio      # Open Drizzle Studio

# Hono API (port 3003)
pnpm --filter @nova/hono-api dev

# FastAPI service (port 8000)
pnpm --filter @nova/fastapi-svc dev
```

### Key API Endpoints

- **Hono API**: `GET /healthz`, `GET /v1/projects`, `GET /v1/projects/:id`
- **FastAPI**: `GET /api/ping`, `GET /` (HTMX demo)

## 🚢 Deployment

Each package has its own deployment pipeline:

- **Astro Site**: Auto-deploys to Vercel
- **Next.js Dashboard**: Auto-deploys to Vercel
- **Hono API**: Deploys to Cloudflare Workers
- **FastAPI Service**: Deploys to Fly.io

See the README in each package for specific deployment instructions.

## 📄 License

- JavaScript/TypeScript packages are licensed under the MIT License
- FastAPI service is licensed under the Apache-2.0 License

See the LICENSE files in each package for details.
