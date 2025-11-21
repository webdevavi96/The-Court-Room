# player.model.py

from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from .databse import Base


class Player(Base):
    __tablename__ = "Player"

    id = Column(Integer, primary_key=True, index=True, unique=True)
    full_name = Column(String(100), nullable=False)
    username = Column(String(50), nullable=False, unique=True)
    email = Column(String(100), nullable=False, unique=True)
    age = Column(Integer, nullable=False)

    password_hash = Column(String, nullable=False)
    pin_hash = Column(String, nullable=False)

    solved_case_count = Column(Integer, default=0)
    solved_cases = relationship("SolvedCases", back_populates="Player")
    case_roles = relationship(
        "CaseRoles", back_populates="Player", cascade="all, delete-orphan"
    )

    refresh_token = Column(String, nullable=True)
