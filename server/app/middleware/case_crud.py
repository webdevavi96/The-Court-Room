from fastapi import Depends
from sqlalchemy.orm import Session
from app.config.database import get_db
from app.models.Case import Case
from app.models.Roles import CaseRole, CaseBotRole
from app.schemas.Case import (
    CaseCreate,
    RoleAssignment,
)
from app.models.Player import Player
from app.models.Bot import Bot
from app.schemas.Bot import BotCreate
from app.schemas.Bot import GetBotRole


def create_new_case(case: CaseCreate, db: Session = Depends(get_db)):
    if not case:
        return {"status": 400, "message": "Invalid data"}

    existing_case = db.query(Case).filter(Case.case_title == case.case_title).first()

    if existing_case:
        return {"status": 409, "message": "Case already exists"}

    new_case = Case(case_title=case.case_title, case_details=case.case_details)

    db.add(new_case)
    db.commit()
    db.refresh(new_case)

    return {
        "status": 201,
        "message": "New case created successfully",
        "id": new_case.id,
    }


def assign_player_role(
    role_data: RoleAssignment, case_id: int, db: Session = Depends(get_db)
):
    if not role_data:
        return {"status": 400, "message": "Invalid data"}

    # Ensure player exists
    player = db.query(Player).filter(Player.id == role_data.player_id).first()
    if not player:
        return {"status": 404, "message": "Player not found"}

    # Ensure case exists
    case = db.query(Case).filter(Case.id == case_id).first()
    if not case:
        return {"status": 404, "message": "Case not found"}

    # Check if this player already has a role in this case
    existing_role = (
        db.query(CaseRole)
        .filter(CaseRole.case_id == case_id, CaseRole.player_id == role_data.player_id)
        .first()
    )

    if existing_role:
        return {"status": 409, "message": "Player already assigned a role in this case"}

    new_role = CaseRole(
        case_id=case_id, player_id=role_data.player_id, role=role_data.role
    )

    db.add(new_role)
    db.commit()
    db.refresh(new_role)

    return {"status": 200, "message": "Player role assigned successfully"}


def create_bot(bot: BotCreate, db: Session = Depends(get_db)):
    if not bot:
        return {"status": 400, "message": "Invalid data"}

    existing_bot = db.query(Bot).filter(Bot.bot_name == bot.bot_name).first()

    if (
        existing_bot and existing_bot.bot_personality == bot.bot_personality
    ):  # type:ignore
        return {
            "status": 409,
            "message": "Bot with same name and personality already exists",
        }

    new_bot = Bot(
        bot_name=bot.bot_name,
        bot_personality=bot.bot_personality,
    )

    db.add(new_bot)
    db.commit()
    db.refresh(new_bot)

    return {"status": 200, "message": "Bot created successfully", "id": new_bot.id}


def assign_bot_role(bot: GetBotRole, db: Session = Depends(get_db)):
    if not bot:
        return {"status": 400, "message": "Invalid data"}

    # Check bot exists
    bot_instance = db.query(Bot).filter(Bot.id == bot.id).first()
    if not bot_instance:
        return {"status": 404, "message": "Bot not found"}

    # personality check
    if bot_instance.bot_personality != bot.bot_personality:  # type: ignore
        return {"status": 400, "message": "Bot personality mismatch"}

    # Check if role already assigned
    existing = (
        db.query(CaseBotRole)
        .filter(CaseBotRole.bot_id == bot.id, CaseBotRole.case_id == bot.case_id)
        .first()
    )

    if existing:
        return {"status": 409, "message": "Bot already assigned to this case"}

    new_role = CaseBotRole(
        bot_id=bot.id, case_id=bot.case_id, bot_role=bot.bot_role  # correct field name
    )

    db.add(new_role)
    db.commit()
    db.refresh(new_role)

    return {"status": 200, "message": "Bot role assigned successfully"}
