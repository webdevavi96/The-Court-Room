from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app.config.database import Base
from .SolvedCases import SolvedCase


class Player(Base):
    __tablename__ = "players"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100), nullable=False)
    username = Column(String(50), nullable=False, unique=True)
    email = Column(String(100), nullable=False, unique=True)
    age = Column(Integer, nullable=False)

    password_hash = Column(String, nullable=False)
    pin_hash = Column(String, nullable=False)

    solved_case_count = Column(Integer, default=0)
    
    # RELATIONSHIPS
    solved_cases = relationship("SolvedCase", back_populates="player")
    case_roles = relationship(
        "CaseRole", back_populates="player", cascade="all, delete-orphan"
    )

    refresh_token = Column(String, nullable=True)
