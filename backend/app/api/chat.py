from fastapi import APIRouter

router = APIRouter(prefix="/chat", tags=["chat"])


@router.post("")
def chat_with_documents() -> dict:
    return {"message": "Chat endpoint ready", "status": "placeholder"}
