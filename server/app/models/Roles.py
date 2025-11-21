from sqlalchemy import Column, Integer, ForeignKey, Enum
from sqlalchemy.orm import relationship
from app.config.database import Base
from .roles_enum import RoleEnum


class CaseRole(Base):
    __tablename__ = "case_roles"

    id = Column(Integer, primary_key=True, index=True)
    case_id = Column(Integer, ForeignKey("cases.id"), nullable=False)
    player_id = Column(Integer, ForeignKey("players.id"), nullable=True)
    role = Column(Enum(RoleEnum), nullable=False)

    # RELATIONSHIPS
    case = relationship("Case", back_populates="case_roles")
    player = relationship("Player", back_populates="case_roles")


class CaseBotRole(Base):
    __tablename__ = "case_bot_roles"

    id = Column(Integer, primary_key=True, index=True)
    case_id = Column(Integer, ForeignKey("cases.id"), nullable=False)
    bot_id = Column(Integer, ForeignKey("bots.id"), nullable=False)
    role = Column(Enum(RoleEnum), nullable=False)

    # RELATIONSHIPS
    case = relationship("Case", back_populates="bot_roles")
    bot = relationship("Bot", back_populates="bot_roles")
