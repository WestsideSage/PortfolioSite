# Nova Portfolio Monorepo

A modern, production-ready web technology demonstration using a monorepo structure with pnpm workspaces and Turborepo.

## 🌟 Features

- 🚀 **Astro Site** - Fast, static marketing site with Tailwind CSS
- 📊 **Next.js Dashboard** - Interactive dashboard with shadcn/ui, tRPC, and Drizzle ORM
- ⚡ **Hono API** - Edge-native API gateway running on Bun
- 🐍 **FastAPI Service** - Python microservice with HTMX demo

## 📦 Package Structure

```
nova-portfolio/
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
- Bun 1.2+
- Python 3.11+

### Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nova-portfolio.git
   cd nova-portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start PostgreSQL:
   ```bash
   pnpm docker:up
   ```

4. Start all services:
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
# Astro site
pnpm --filter astro-site dev

# Next.js dashboard
pnpm --filter next-dashboard dev

# Hono API
pnpm --filter hono-api dev

# FastAPI service
pnpm --filter fastapi-svc dev
```

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
