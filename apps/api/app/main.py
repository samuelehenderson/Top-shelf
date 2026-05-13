from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import get_settings
from app.routers import health, menus, shelves

settings = get_settings()

app = FastAPI(
    title=settings.app_name,
    description="TopShelf API — the sentient bar backend.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(shelves.router, prefix="/v1")
app.include_router(menus.router, prefix="/v1")


@app.get("/")
async def root() -> dict[str, str]:
    return {"name": settings.app_name, "version": "0.1.0"}
