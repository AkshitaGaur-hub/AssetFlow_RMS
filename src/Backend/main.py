from fastapi import FastAPI
from database import engine
import models

from routers import assets, users, allocation, dashboard

from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="AssetFlow RMS"
)


models.Base.metadata.create_all(bind=engine)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(assets.router)
app.include_router(users.router)
app.include_router(allocation.router)
app.include_router(dashboard.router)


@app.get("/")
def home():
    return {
        "message":"AssetFlow RMS Backend Running"
    }