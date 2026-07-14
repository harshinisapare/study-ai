from pathlib import Path

from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel

from app.services.document_store import get_pdf_context
from app.services.gemini_service import generate_notes
from app.services.pdf_service import count_pages, extract_text

router = APIRouter(prefix="/notes", tags=["notes"])


class NotesRequest(BaseModel):
    saved_filename: str


@router.post("", status_code=status.HTTP_200_OK)
async def create_notes(payload: NotesRequest) -> dict:
    if not payload.saved_filename:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="saved_filename is required.",
        )

    upload_dir = Path(__file__).resolve().parents[2] / "uploads"
    file_path = upload_dir / payload.saved_filename

    if not file_path.exists():
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Uploaded file not found.",
        )

    context = get_pdf_context(payload.saved_filename)
    if context is None:
        text = extract_text(file_path)
        pages = count_pages(file_path)
        characters = len(text)
    else:
        text = context["text"]
        pages = context["pages"]
        characters = context["characters"]

    notes = generate_notes(text)
    success = not notes.startswith("Unable") and not notes.startswith("Failed")

    return {
        "success": success,
        "notes": notes,
        "pages": pages or 0,
        "characters": characters,
    }
