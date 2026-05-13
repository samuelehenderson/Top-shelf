from datetime import datetime
from uuid import UUID, uuid4

from sqlalchemy import DateTime, Enum, ForeignKey, String, Text, func
from sqlalchemy.dialects.postgresql import UUID as PGUUID
from sqlalchemy.orm import Mapped, mapped_column

from app.db import Base


class Reaction(Base):
    """A user's reaction to a generated cocktail. Drives the personal taste graph —
    upvotes/downvotes propagate as edge-weight deltas on the user's flavor graph."""

    __tablename__ = "reactions"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    user_id: Mapped[UUID] = mapped_column(
        PGUUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), index=True
    )
    cocktail_id: Mapped[UUID] = mapped_column(
        PGUUID(as_uuid=True), ForeignKey("generated_cocktails.id", ondelete="CASCADE"), index=True
    )
    sentiment: Mapped[str] = mapped_column(
        Enum("love", "like", "neutral", "dislike", name="sentiment_enum"),
    )
    note: Mapped[str | None] = mapped_column(Text, nullable=True)
    descriptors: Mapped[str | None] = mapped_column(
        String(255), nullable=True
    )  # comma-separated: "too sweet, more smoke"
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
