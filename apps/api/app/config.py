from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Environment-driven configuration. Values read from .env or process env."""

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    app_name: str = "TopShelf API"
    environment: str = "development"

    database_url: str = "postgresql+asyncpg://topshelf:topshelf@localhost:5432/topshelf"
    redis_url: str = "redis://localhost:6379/0"

    clerk_jwks_url: str | None = None
    anthropic_api_key: str | None = None


@lru_cache
def get_settings() -> Settings:
    return Settings()
