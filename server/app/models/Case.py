from sqlalchemy import Column, String, Integer, Enum
from sqlalchemy.orm import relationship
from app.config.database import Base
import enum


class CaseProgress(enum.Enum):
    OPEN = "OPEN"
    IN_PROGRESS = "IN_PROGRESS"
    CLOSED = "CLOSED"
    ARCHIVED = "ARCHIVED"


class Case(Base):
    __tablename__ = "cases"

    id = Column(Integer, primary_key=True, index=True)
    case_title = Column(String, nullable=False)
    case_details = Column(String, nullable=False)
    case_status = Column(Enum(CaseProgress), nullable=False, default=CaseProgress.OPEN)

    # RELATIONSHIPS
    case_roles = relationship(
        "CaseRole", back_populates="case", cascade="all, delete-orphan"
    )

    bot_roles = relationship(
        "CaseBotRole", back_populates="case", cascade="all, delete-orphan"
    )

    solved_entries = relationship(
        "SolvedCase", back_populates="case", cascade="all, delete-orphan"
    )
