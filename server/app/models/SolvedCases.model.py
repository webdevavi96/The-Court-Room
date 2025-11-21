# solved_cases.model.py

from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .databse import Base


class SolvedCases(Base):
    __tablename__ = "Sloved_Cases"

    id = Column(Integer, primary_key=True, unique=True, index=True)
    player_id = Column(Integer, ForeignKey("Player.id"), nullable=False)
    case_id = Column(Integer, ForeignKey("Case.id"), nullable=False)

    player = relationship("Player", back_populates="Solved_Cases")
    case = relationship("Case", back_populates="solved_entries")
