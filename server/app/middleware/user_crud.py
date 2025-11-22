from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.inspection import inspect
from app.config.database import SessionLocal
from app.models.Player import Player
from app.schemas.Player import PlayerCreate, LoginUser, ForgotUserPassword, FindUser
from app.models.Security import hash_value, verify_hash_value
from app.utils.token_service import create_access_token, create_refresh_token


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def create_player(user: PlayerCreate, db: Session = Depends(get_db)):
    if user is None:
        return {"status": 401, "message": "All fields are required"}

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

    return {"status": 201, "message": "User successfully created"}


def login_player(user: LoginUser, db: Session = Depends(get_db)):
    if user is None:
        return {"status": 401, "message": "All fields are required"}

    is_player = db.query(Player).filter(Player.email == user.email).first()

    if not is_player:
        return {"status": 404, "messsage": "User dose not exists"}

    if not verify_hash_value(user.password, is_player.password_hash):  # type: ignore
        return {"status": 401, "messsage": "Wrong credentials"}

    access_token = create_access_token({"sub": is_player.email})
    refresh_token = create_refresh_token({"sub": is_player.email})

    is_player.refresh_token = refresh_token  # type: ignore
    db.commit()

    return {
        "status": 200,
        "player": is_player,
        "message": "Login successful",
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer",
    }


def update_user_details(user: PlayerCreate, db: Session = Depends(get_db)):
    if user is None:
        return {"status": 401, "message": "All fields are mandatory"}

    is_player = db.query(Player).filter(Player.email == user.email).first()
    if not is_player:
        return {"status": 404, "message": "User not found"}

    # Get only provided user fields
    incoming_data = user.model_dump(exclude_unset=True)

    # SQLAlchemy column keys
    mapper = inspect(Player)
    model_columns = {c.key for c in mapper.attrs}

    changed = False

    # Update only changed fields
    for key, new_value in incoming_data.items():
        if key in model_columns:
            old_value = getattr(is_player, key)
            if old_value != new_value:
                setattr(is_player, key, new_value)
                changed = True

    if not changed:
        return {"status": 200, "message": "No changes detected"}

    db.commit()
    return {"status": 200, "message": "User details updated successfully"}


def find_user(user: FindUser, db: Session = Depends(get_db)):
    if user is None:
        return

    is_player = db.query(Player).filter(Player.email == user.email).first()

    if is_player is None:
        return False

    return True


def forgot_user_password(
    user_email: FindUser, user: ForgotUserPassword, db: Session = Depends(get_db)
):
    if not user or not user_email:
        return {"status": 401, "message": "All fields are required"}

    is_player = db.query(Player).filter(Player.email == user_email.email).first()

    if not is_player:
        return {"status": 404, "message": "User not found"}

    if verify_hash_value(user.password, is_player.password_hash):  # type: ignore
        return {"status": 400, "message": "New password must be different"}

    is_player.password_hash = hash_value(user.password)  # type: ignore
    db.commit()
    db.refresh(is_player)

    return {"status": 200, "message": "Password updated successfully"}


def logout_user(user: FindUser, db: Session = Depends(get_db)):

    player = db.query(Player).filter(Player.email == user.email).first()

    if not player:
        return {"status": 404, "message": "User not found"}

    # Clear refresh token
    player.refresh_token = None  # type: ignore
    db.commit()

    return {"status": 200, "message": "User logged out successfully"}
