# import json
# from pathlib import Path

# from fastapi import APIRouter, HTTPException, status
# from pydantic import BaseModel

# from app.services.document_store import get_pdf_context
# from app.services.gemini_service import generate_flashcards
# from app.services.pdf_service import count_pages, extract_text

# router = APIRouter(prefix="/flashcards", tags=["flashcards"])


# class FlashcardsRequest(BaseModel):
#     saved_filename: str


# @router.post("", status_code=status.HTTP_200_OK)
# async def generate_flashcards_endpoint(payload: FlashcardsRequest) -> dict:
#     if not payload.saved_filename:
#         raise HTTPException(
#             status_code=status.HTTP_400_BAD_REQUEST,
#             detail="saved_filename is required.",
#         )

#     upload_dir = Path(__file__).resolve().parents[2] / "uploads"
#     file_path = upload_dir / payload.saved_filename

#     if not file_path.exists():
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND,
#             detail="Uploaded file not found.",
#         )

#     context = get_pdf_context(payload.saved_filename)
#     if context is None:
#         text = extract_text(file_path)
#         pages = count_pages(file_path)
#         characters = len(text)
#     else:
#         text = context["text"]
#         pages = context["pages"]
#         characters = context["characters"]
#     raw_flashcards = generate_flashcards(text)

#     print("\n===== RAW FLASHCARDS BEFORE JSON =====")
#     print(raw_flashcards)
#     print("======================================")

#     try:
#         flashcards = json.loads(raw_flashcards)
    
#     except json.JSONDecodeError:
#         return {
#             "success": False,
#             "flashcards": [],
#             "pages": pages or 0,
#             "characters": characters,
#             "error": "Invalid flashcard JSON returned by the model.",
#         }

#     return {
#         "success": True,
#         "flashcards": flashcards,
#         "pages": pages or 0,
#         "characters": characters,
#     }
import json
import re
from pathlib import Path

from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel

from app.services.document_store import get_pdf_context
from app.services.gemini_service import generate_flashcards
from app.services.pdf_service import count_pages, extract_text

router = APIRouter(prefix="/flashcards", tags=["flashcards"])


class FlashcardsRequest(BaseModel):
    saved_filename: str


@router.post("", status_code=status.HTTP_200_OK)
async def generate_flashcards_endpoint(payload: FlashcardsRequest) -> dict:
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

    raw_flashcards = generate_flashcards(text)

    print("\n========== RAW FLASHCARDS ==========")
    print(raw_flashcards)
    print("====================================\n")

    # Remove markdown code fences
    cleaned = re.sub(r"^```json\s*", "", raw_flashcards.strip())
    cleaned = re.sub(r"^```\s*", "", cleaned)
    cleaned = re.sub(r"\s*```$", "", cleaned)

    # Extract only the JSON array
    start = cleaned.find("[")
    end = cleaned.rfind("]")

    if start != -1 and end != -1:
        cleaned = cleaned[start:end + 1]

    try:
        flashcards = json.loads(cleaned)

    except Exception as e:
        print("JSON ERROR:", e)
        print(cleaned)

        return {
            "success": False,
            "flashcards": [],
            "pages": pages or 0,
            "characters": characters,
            "error": str(e),
        }

    return {
        "success": True,
        "flashcards": flashcards,
        "pages": pages or 0,
        "characters": characters,
    }