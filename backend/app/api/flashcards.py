from fastapi import APIRouter

router = APIRouter(prefix="/flashcards", tags=["flashcards"])


@router.post("")
def generate_flashcards() -> dict:
    return {"message": "Flashcards endpoint ready", "status": "placeholder"}
