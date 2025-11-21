# roles.modle.py


from sqlalchemy import Column, Integer, String, ForeignKey, Enum
from sqlalchemy.orm import relationship
from .databse import Base
from .roles_enum import RoleEnum


class CaseRoles(Base):
    __tablename__ = "Case_roles"

    id = Column(Integer, primary_key=True, index=True)
    case_id = Column(Integer, ForeignKey("Case.id"), nullable=False)
    player_id = Column(Integer, ForeignKey("Players.id"), nullable=True)
    role = Column(Enum(RoleEnum), nullable=False)

    case = relationship("Case", back_populates="Case_roles")
    player = relationship("Player", back_populates="Case_roles")


class CaseBotRoles(Base):
    __tablename__ = "case_bot_roles"

    id = Column(Integer, primary_key=True)
    case_id = Column(Integer, ForeignKey("Case.id"))
    bot_id = Column(Integer, ForeignKey("Bot.id"))
    role = Column(Enum(RoleEnum), nullable=False)

    case = relationship("Case", back_populates="bot_roles")
    bot = relationship("Bot", back_populates="Case_roles")
