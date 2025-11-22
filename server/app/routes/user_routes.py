from fastapi import APIRouter, HTTPException, Request, Depends
from sqlalchemy.orm import Session
from app.middleware.user_crud import (
    create_player,
    login_player,
    logout_player,
    update_player_details,
    forgot_user_password,
    find_user,
)
from app.config.database import get_db
from app.schemas.Player import PlayerCreate, LoginUser, FindUser, ForgotUserPassword

auth = APIRouter(prefix="/user", tags=["User"])


@auth.post("/register")
def register(player: PlayerCreate, db: Session = Depends(get_db)):
    result = create_player(player, db)

    if isinstance(result, set):
        code, message = list(result)
        raise HTTPException(status_code=code, detail=message)  # type: ignore

    if isinstance(result, dict):
        return result

    raise HTTPException(status_code=500, detail="Unexpected server error")


@auth.post("/login")
def logIn(player: LoginUser, db: Session = Depends(get_db)):
    result = login_player(player, db)

    if result["status"] != 200:
        raise HTTPException(status_code=result["status"], detail=result["message"])

    return result


@auth.put("/update")
def update_details_route(user: PlayerCreate, db: Session = Depends(get_db)):
    result = update_player_details(user, db)

    if isinstance(result, dict):
        return result

    raise HTTPException(500, "Unexpected server error")


@auth.post("/find")
def find_user_route(user: FindUser, db: Session = Depends(get_db)):

    result = find_user(user, db)

    return {"exists": result}


@auth.post("/forgot-password")
def forgot_password_route(
    email_data: FindUser,
    body: ForgotUserPassword,
    db: Session = Depends(get_db),
):
    result = forgot_user_password(email_data, body, db)

    if isinstance(result, dict):
        return result

    raise HTTPException(500, "Unexpected server error")


@auth.post("/logout")
def logout_route(user: FindUser, db: Session = Depends(get_db)):

    result = logout_player(user, db)

    if isinstance(result, dict):
        return result

    raise HTTPException(500, "Unexpected server error")
