from app.schemas.Player import PlayerCreate, LoginUser
from app.middleware.user_crud import create_player, login_player
from app.config.database import SessionLocal

db = SessionLocal()

new_user = PlayerCreate(
    full_name="Test",
    username="Test",
    email="test@example.com",
    password="1234",
    pin="1234",
    age=25,
)

# create_player(new_user, db)


login_user = LoginUser(email="test@example.com", password="1234")

player = login_player(login_user, db)


# To print user details on console after destructring
def player_to_dict(player):
    return {
        "id": player.id,
        "full_name": player.full_name,
        "username": player.username,
        "email": player.email,
        "age": player.age,
        "solved_case_count": player.solved_case_count,
    }


print(player_to_dict(player["player"]))

# print(player)
