# roles.schema.py
from pydantic import BaseModel
from models.roles_enum import RoleEnum
from typing import List


class BotRole(BaseModel):
    bot_id: int
    bot_role: RoleEnum


class CaseRoleCreate(BaseModel):
    player_id: int
    player_role: RoleEnum
    case_id: int
    bots: List
