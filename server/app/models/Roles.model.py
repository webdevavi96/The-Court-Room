from sqlalchemy import Column, Integer, String, ForeignKey, Enum
from sqlalchemy.orm import declarative_base
import enum

Base = declarative_base()
import enum


class Roles(enum.Enum):
    JUDGE = "JUDGE"
    PROSECUTOR = "PROSECUTOR"
    DEFENSE = "DEFENSE"
    WITNESS = "WITNESS"
    VICTIM = "VICTIM"
    ACCUSED = "ACCUSED"
    JUROR = "JUROR"
    OBSERVER = "OBSERVER"
    INVESTIGATOR = "INVESTIGATOR"
    POLICE = "POLICE"


class CaseRoles(Base):
    id = Column(Integer, primary_key=True)
    player_id = Column(Integer, ForeignKey("player.id"), nullable=True)
    player_role = Column(Enum(Roles), nullable=False)
    bot_id = Column(Integer, ForeignKey("bot.id"), nullable=True)
    bot_role = Column(Enum(Roles), nullable=False)
    case_id = Column(Integer, ForeignKey("case.id"))
