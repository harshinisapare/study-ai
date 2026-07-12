from fastapi import APIRouter

router = APIRouter(prefix="/quiz", tags=["quiz"])


@router.post("")
def generate_quiz() -> dict:
    return {"message": "Quiz endpoint ready", "status": "placeholder"}
