from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from app.config.database import Base
from .Case import Case


class SolvedCase(Base):
    __tablename__ = "solved_cases"

    id = Column(Integer, primary_key=True, index=True)
    player_id = Column(Integer, ForeignKey("players.id"), nullable=False)
    case_id = Column(Integer, ForeignKey("cases.id"), nullable=False)

    player = relationship("Player", back_populates="solved_cases")
    case = relationship("Case", back_populates="solved_entries")
