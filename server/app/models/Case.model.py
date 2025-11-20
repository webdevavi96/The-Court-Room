from sqlalchemy import Column, String, Integer, Enum
from sqlalchemy.orm import declarative_base, relationship
import enum

Base = declarative_base()


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
    roles = relationship("CaseRoles", back_populates="case")
