from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import relationship
from app.config.database import Base


class Bot(Base):
    __tablename__ = "bots"

    id = Column(Integer, primary_key=True, index=True)
    bot_name = Column(String(100), nullable=False)
    bot_persona = Column(String, nullable=False)

    # Relationship for bot roles in cases
    bot_roles = relationship("CaseBotRole", back_populates="bot")
