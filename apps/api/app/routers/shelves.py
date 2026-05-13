from fastapi import APIRouter

router = APIRouter(prefix="/shelves", tags=["shelves"])


@router.get("/")
async def list_shelves() -> list[dict]:
    """List a user's shelves. Auth + DB wiring lands with the auth milestone."""
    return []
