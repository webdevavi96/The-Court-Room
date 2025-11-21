# player.schema.py

from pydantic import BaseModel, EmailStr
from typing import Optional


# Input model (client → server)
class PlayerCreate(BaseModel):
    full_name: str
    username: str
    email: EmailStr
    password: str
    age: int
    pin: str


# DB model (database → server → client, safe fields only)
class PlayerOut(BaseModel):
    id: int
    full_name: str
    username: str
    email: EmailStr
    age: int
    solved_case_count: int

    class Config:
        from_attributes = True


class TokenData(BaseModel):
    refresh_token: Optional[str] = None
