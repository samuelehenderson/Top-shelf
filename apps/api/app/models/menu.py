from datetime import datetime
from uuid import UUID, uuid4

from sqlalchemy import DateTime, ForeignKey, Integer, String, Text, func
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.dialects.postgresql import UUID as PGUUID
from sqlalchemy.orm import Mapped, mapped_column

from app.db import Base


class GeneratedMenu(Base):
    """One menu generation. Stores the prompt context, the raw model output,
    and the parsed shape for fast querying."""

    __tablename__ = "generated_menus"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    user_id: Mapped[UUID] = mapped_column(
        PGUUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), index=True
    )
    shelf_id: Mapped[UUID] = mapped_column(
        PGUUID(as_uuid=True), ForeignKey("shelves.id", ondelete="CASCADE"), index=True
    )
    title: Mapped[str] = mapped_column(String(255))
    prologue: Mapped[str] = mapped_column(Text)
    mood: Mapped[str | None] = mapped_column(String(64), nullable=True)
    weather: Mapped[str | None] = mapped_column(String(64), nullable=True)
    raw_response: Mapped[dict] = mapped_column(JSONB)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())


class GeneratedCocktail(Base):
    """One drink within a generated menu."""

    __tablename__ = "generated_cocktails"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    menu_id: Mapped[UUID] = mapped_column(
        PGUUID(as_uuid=True), ForeignKey("generated_menus.id", ondelete="CASCADE"), index=True
    )
    position: Mapped[int] = mapped_column(Integer)
    name: Mapped[str] = mapped_column(String(255))
    tagline: Mapped[str] = mapped_column(String(255))
    story: Mapped[str] = mapped_column(Text)
    glass: Mapped[str] = mapped_column(String(64))
    technique: Mapped[str] = mapped_column(String(32))
    recipe: Mapped[dict] = mapped_column(JSONB)
