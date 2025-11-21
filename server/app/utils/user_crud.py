from fastapi import APIRouter, Depends, HTTPException
from app.models.Player import Player
from app.schemas.Player import PlayerCreate, LoginUser
from app.models.Security import hash_value, verify_hash_value
from app.config.database import SessionLocal
from sqlalchemy.orm import Session


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def create_player(user: PlayerCreate, db: Session = Depends(get_db)):
    if user is None:
        return None

    # Check username
    existing_user = db.query(Player).filter(Player.username == user.username).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists")

    # Check email
    existing_email = db.query(Player).filter(Player.email == user.email).first()
    if existing_email:
        raise HTTPException(status_code=400, detail="Email already exists")

    # Hash sensitive fields
    hashed_password = hash_value(user.password)
    hashed_pin = hash_value(user.pin)

    new_player = Player(
        full_name=user.full_name,
        username=user.username,
        email=user.email,
        age=user.age,  # FIX
        password_hash=hashed_password,
        pin_hash=hashed_pin,
    )

    db.add(new_player)
    db.commit()
    db.refresh(new_player)

    return {"message": "User successfully created", "id": new_player.id}


def login_player(user: LoginUser, db: Session = Depends(get_db)):
    if user is None:
        return None

    player = db.query(Player).filter(Player.email == user.email).first()

    if not player:
        return None

    if not verify_hash_value(user.password, player.password_hash):  # type: ignore
        return None

    return player
