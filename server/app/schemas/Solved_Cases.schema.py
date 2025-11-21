# solved_cases.schema.py

from pydantic import BaseModel


class SolvedCaseCreate(BaseModel):
    player_id: int
    case_id: int


class SolvedCaseOut(BaseModel):
    id: int
    player_id: int
    case_id: int

    class Config:
        from_attributes = True
