from fastapi import FastAPI
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pathlib import Path

app = FastAPI()

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Configure templates
templates = Jinja2Templates(directory="templates")

@app.get("/api/ping")
async def ping():
    return {"status": "ok", "message": "pong"}

@app.get("/", response_class=HTMLResponse)
async def index(request):
    return templates.TemplateResponse(
        "index.html",
        {"request": request, "title": "HTMX Demo"}
    )
