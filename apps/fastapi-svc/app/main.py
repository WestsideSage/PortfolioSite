from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pathlib import Path
import os
import time

app = FastAPI(title="FastAPI HTMX Demo", version="0.1.0")

# Track startup time
start_time = time.time()

# Get the parent directory of the app directory
base_dir = Path(__file__).parent.parent

# Mount static files
static_dir = base_dir / "static"
if static_dir.exists():
    app.mount("/static", StaticFiles(directory=str(static_dir)), name="static")

# Configure templates
templates_dir = base_dir / "templates"
templates = Jinja2Templates(directory=str(templates_dir))

@app.get("/api/ping")
async def ping():
    return {"status": "ok", "message": "pong"}

@app.get("/api/health")
async def health():
    """Health check endpoint with detailed information."""
    return {
        "status": "healthy",
        "timestamp": time.time(),
        "uptime": time.time() - start_time,
        "version": "0.1.0"
    }

@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    return templates.TemplateResponse(
        "index.html",
        {"request": request, "title": "HTMX Demo"}
    )
