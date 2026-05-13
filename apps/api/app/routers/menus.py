from fastapi import APIRouter

router = APIRouter(prefix="/menus", tags=["menus"])


@router.get("/")
async def list_menus() -> list[dict]:
    """List a user's generated menus."""
    return []
