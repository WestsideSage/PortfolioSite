# Next.js Dashboard

An interactive dashboard built with Next.js 15, tRPC, and Drizzle ORM.

## Features

- ⚛️ Next.js 15 with App Router
- 🔧 tRPC for type-safe APIs
- 🗄️ Drizzle ORM with PostgreSQL
- 🎨 Tailwind CSS + shadcn/ui components
- 📊 Tremor React for charts and data visualization

## Development

```bash
# Start development server
pnpm --filter @nova/next-dashboard dev

# Build for production
pnpm --filter @nova/next-dashboard build

# Run database migrations
pnpm --filter @nova/next-dashboard db:migrate

# Open Drizzle Studio
pnpm --filter @nova/next-dashboard db:studio
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXT_PUBLIC_API_URL` - Hono API endpoint
- `NODE_ENV` - Environment (development/production)

## Database

This app uses Drizzle ORM with PostgreSQL. Run the database with:

```bash
pnpm docker:up
```

## Deployment

Configured to deploy to Vercel automatically.
