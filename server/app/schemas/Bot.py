# bot.schema.py

from pydantic import BaseModel


class BotCreate(BaseModel):
    bot_name: str
    bot_personality: str


class BotOut(BaseModel):
    id: int
    bot_name: str
    bot_personality: str

    class Config:
        from_attributes = True


class GetBotRole(BaseModel):
    id: int
    bot_role: str
    case_id: int
    bot_personality: str
