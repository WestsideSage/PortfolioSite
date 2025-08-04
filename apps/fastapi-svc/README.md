# FastAPI Service

A Python microservice built with FastAPI, featuring HTMX integration for dynamic web interfaces.

## Features

- 🐍 FastAPI for high-performance APIs
- 🔄 HTMX integration for dynamic UIs
- 🗄️ SQLAlchemy with async PostgreSQL support
- 🧪 Poetry for dependency management
- 🔧 Type hints with Pydantic

## Development

### Prerequisites

Make sure you have Poetry installed:

```bash
curl -sSL https://install.python-poetry.org | python3 -
```

### Setup

```bash
# Install Python dependencies
pnpm --filter @nova/fastapi-svc install:poetry

# Start development server
pnpm --filter @nova/fastapi-svc dev

# Run tests
pnpm --filter @nova/fastapi-svc test

# Format and lint code
pnpm --filter @nova/fastapi-svc lint
```

## API Endpoints

- `GET /api/ping` - Health check endpoint
- `GET /` - HTMX demo page

## Environment Variables

Copy `.env.example` to `.env` and configure:

- `DATABASE_URL` - PostgreSQL connection string
- `SECRET_KEY` - Secret key for sessions
- `FASTAPI_HOST` - Host to bind to (default: 0.0.0.0)
- `FASTAPI_PORT` - Port to bind to (default: 8000)

## Project Structure

- `app/main.py` - FastAPI application entry point
- `templates/` - Jinja2 templates for HTMX
- `tests/` - Test files

## Deployment

This service is configured to deploy to Fly.io using the provided Dockerfile.
