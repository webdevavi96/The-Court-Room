# bot.schema.py

from pydantic import BaseModel


class BotCreate(BaseModel):
    bot_name: str
    bot_type: str


class BotOut(BaseModel):
    id: int
    bot_name: str
    bot_type: str

    class Config:
        from_attributes = True
