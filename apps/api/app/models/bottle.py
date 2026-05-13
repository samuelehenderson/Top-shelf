from datetime import datetime
from uuid import UUID, uuid4

from sqlalchemy import Boolean, DateTime, Float, ForeignKey, String, func
from sqlalchemy.dialects.postgresql import UUID as PGUUID
from sqlalchemy.orm import Mapped, mapped_column

from app.db import Base


class Bottle(Base):
    """An individual bottle in a shelf. ingredient_id refers to the canonical
    flavor-graph node (e.g. 'i.bourbon'); brand/expression are the user's actual
    bottle, recognized via OCR or entered manually."""

    __tablename__ = "bottles"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    shelf_id: Mapped[UUID] = mapped_column(
        PGUUID(as_uuid=True), ForeignKey("shelves.id", ondelete="CASCADE"), index=True
    )
    ingredient_id: Mapped[str] = mapped_column(String(64), index=True)
    brand: Mapped[str | None] = mapped_column(String(128), nullable=True)
    expression: Mapped[str | None] = mapped_column(String(128), nullable=True)
    fill_pct: Mapped[float | None] = mapped_column(Float, nullable=True)
    is_open: Mapped[bool] = mapped_column(Boolean, default=False)
    added_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
