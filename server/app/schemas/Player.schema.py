from pydantic import BaseModel, EmailStr


# Input model (client → server)
class InputPlayer(BaseModel):
    id: int
    full_name: str
    username: str
    email: EmailStr
    password: str
    age: int
    pin: str


# DB model (database → server → client, safe fields only)
class Player(BaseModel):
    id: int
    full_name: str
    username: str
    email: EmailStr
    age: int
    solved_case_count: int

    class Config:
        from_attributes = True
