# bot.model.py

from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import relationship
from .databse import Base


class Bot(Base):
    __tablename__ = "Bot"

    id = Column(Integer, primary_key=True, unique=True)
    bot_name = Column(String(100), nullable=False)
    bot_type = Column(String, nullable=False)

    case_roles = relationship(
        "CaseRoles", back_populates="Bot", cascade="all, delete-orphan"
    )
