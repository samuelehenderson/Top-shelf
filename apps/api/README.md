# TopShelf API

FastAPI service for TopShelf. Authentication, persistence, and the vision/voice
backend land here. The Next.js app talks to it for everything that touches the
database (user shelves, menu history, taste graph). Public marketing routes and
the menu-generator demo currently live in `apps/web` and call Claude directly.

## Dev

```bash
uv sync
uv run uvicorn app.main:app --reload --port 8000
```

Then visit:

- <http://localhost:8000/> — name + version
- <http://localhost:8000/health> — `{"status":"ok"}`
- <http://localhost:8000/docs> — OpenAPI explorer

## Layout

```
app/
├── main.py            FastAPI entrypoint
├── config.py          Pydantic-settings, env-driven config
├── db.py              SQLAlchemy 2.0 async engine + Base
├── models/            ORM models (User, Shelf, Bottle, GeneratedMenu, Reaction)
└── routers/           HTTP route modules
```
