from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Bot(Base):

    __tablenae__ = "Bot"

    id = Column(Integer, primary_key=True)
    bot_name = Column(String(100), nullable=False)
    bot_type = Column(String, nullable=False)
