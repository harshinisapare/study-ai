from pathlib import Path
import uuid

from fastapi import APIRouter, File, HTTPException, UploadFile, status

from app.services.document_store import save_pdf_context
from app.services.pdf_service import count_pages, extract_text

router = APIRouter(prefix="/upload", tags=["upload"])

ALLOWED_EXTENSIONS = {".pdf", ".docx", ".txt"}
UPLOAD_DIR = Path(__file__).resolve().parents[2] / "uploads"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


def _build_saved_filename(original_filename: str) -> str:
    file_suffix = Path(original_filename).suffix.lower()
    if file_suffix not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Unsupported file type. Allowed types: PDF, DOCX, TXT.",
        )
    return f"{uuid.uuid4().hex}{file_suffix}"


@router.post("", status_code=status.HTTP_201_CREATED)
async def upload_file(file: UploadFile = File(...)) -> dict:
    if not file.filename:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No file selected.",
        )

    saved_filename = _build_saved_filename(file.filename)
    file_path = UPLOAD_DIR / saved_filename

    contents = await file.read()
    file_size = len(contents)

    with file_path.open("wb") as destination:
        destination.write(contents)

    file_suffix = Path(file.filename).suffix.lower()

    if file_suffix == ".pdf":
        try:
            extracted_text = extract_text(file_path)
            pages = count_pages(file_path)
        except Exception as exc:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Failed to extract text from the uploaded PDF.",
            ) from exc

        save_pdf_context(
            saved_filename,
            text=extracted_text,
            pages=pages,
            characters=len(extracted_text),
        )

        return {
            "success": True,
            "original_filename": file.filename,
            "saved_filename": saved_filename,
            "file_size": file_size,
            "pages": pages,
            "characters": len(extracted_text),
            "preview": extracted_text[:500],
        }

    return {
        "success": True,
        "original_filename": file.filename,
        "saved_filename": saved_filename,
        "file_size": file_size,
    }
