from fastapi import FastAPI, Request
from app.routes.user_routes import auth

app = FastAPI()


app.include_router(auth)
