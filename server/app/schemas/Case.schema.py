# Case.Schema.py

from pydantic import BaseModel
from typing import List, Optional
from models.roles_enum import RoleEnum


class CaseCreate(BaseModel):
    case_title: str
    case_details: str


class RoleAssignment(BaseModel):
    player_id: Optional[int] = None
    role: RoleEnum


class BotRoleAssignment(BaseModel):
    bot_id: int
    role: RoleEnum


class CaseCreateWithRoles(BaseModel):
    case: CaseCreate
    player_roles: List[RoleAssignment] = []
    bot_roles: List[BotRoleAssignment] = []
