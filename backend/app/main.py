from fastapi import FastAPI

from app.api.upload import router as upload_router
from app.api.chat import router as chat_router
from app.api.notes import router as notes_router
from app.api.quiz import router as quiz_router
from app.api.flashcards import router as flashcards_router
from app.api.summary import router as summary_router

app = FastAPI(
    title="LearnFlow AI Backend",
    version="1.0.0",
    description="Production-ready FastAPI scaffold for the LearnFlow AI study platform.",
)

app.include_router(upload_router)
app.include_router(chat_router)
app.include_router(notes_router)
app.include_router(quiz_router)
app.include_router(flashcards_router)
app.include_router(summary_router)


@app.get("/")
def home() -> dict:
    return {"message": "LearnFlow AI Backend is Running 🚀"}
