from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import declarative_base, relationship
from passlib.context import CryptContext

Base = declarative_base()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class Player(Base):
    __tablename__ = "Player"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100), nullable=False)
    username = Column(String(50), nullable=False)
    email = Column(String(100), nullable=False)
    age = Column(Integer, nullable=False)

    password_hash = Column(String, nullable=False)
    pin_hash = Column(String, nullable=False)

    solved_case_count = Column(Integer, default=0)
    solved_cases = relationship("SolvedCase", back_populates="Player")

    refresh_token = Column(String, nullable=False)


def hash_value(value: str):
    return pwd_context.hash(value)


def verify_hash_value(value: str, hashed: str):
    return pwd_context.verify(value, hashed)
