from fastapi import APIRouter

router = APIRouter(prefix="/notes", tags=["notes"])


@router.post("")
def create_notes() -> dict:
    return {"message": "Notes endpoint ready", "status": "placeholder"}
