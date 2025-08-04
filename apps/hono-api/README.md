# Hono API

Edge-native API gateway built with Hono framework, designed to run on multiple runtimes.

## Features

- ⚡ Hono framework for ultra-fast APIs
- 🌐 CORS support
- 📝 Built-in logging and pretty JSON
- 🔧 TypeScript support
- 🚀 Runs on Node.js, Bun, and Cloudflare Workers

## Development

```bash
# Start development server
pnpm --filter @nova/hono-api dev

# Build for production
pnpm --filter @nova/hono-api build

# Run tests
pnpm --filter @nova/hono-api test
```

## API Endpoints

- `GET /healthz` - Health check
- `GET /v1/projects` - List all projects
- `GET /v1/projects/:id` - Get project by ID

## Environment Variables

- `PORT` - Server port (default: 3003)
- `CORS_ORIGIN` - CORS origin (default: http://localhost:3002)

## Deployment

This API is designed to deploy to Cloudflare Workers, but can also run on:

- Node.js servers
- Bun runtime
- Vercel Edge Functions
