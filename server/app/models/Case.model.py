# case.model.py

from sqlalchemy import Column, String, Integer, Enum
from sqlalchemy.orm import relationship
from .databse import Base
import enum


class CaseProgress(enum.Enum):
    OPEN = "OPEN"
    IN_PROGRESS = "IN_PROGRESS"
    CLOSED = "CLOSED"
    ARCHIVED = "ARCHIVED"


class Case(Base):
    __tablename__ = "Case"

    id = Column(Integer, primary_key=True, index=True, unique=True)
    case_title = Column(String, nullable=False)
    case_details = Column(String, nullable=False)
    case_status = Column(Enum(CaseProgress), nullable=False, default=CaseProgress.OPEN)

    case_roles = relationship(
        "CaseRoles", back_populates="Case", cascade="all, delete-orphan"
    )
    bot_roles = relationship(
        "CaseBotRoles", back_populates="Case", cascade="all,delete-orphan"
    )
    solved_entries = relationship(
        "SolvedCases", back_populates="Case", cascade="all,delete-orphan"
    )
