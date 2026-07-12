from typing import Any, Optional


class DocumentStore:
    """Temporary in-memory storage for extracted document content."""

    def __init__(self) -> None:
        self._documents: dict[str, dict[str, Any]] = {}

    def save(self, saved_filename: str, *, text: str, pages: int, characters: int) -> None:
        self._documents[saved_filename] = {
            "text": text,
            "pages": pages,
            "characters": characters,
        }

    def get(self, saved_filename: str) -> Optional[dict[str, Any]]:
        return self._documents.get(saved_filename)


document_store = DocumentStore()


def save_pdf_context(saved_filename: str, *, text: str, pages: int, characters: int) -> None:
    document_store.save(saved_filename, text=text, pages=pages, characters=characters)


def get_pdf_context(saved_filename: str) -> Optional[dict[str, Any]]:
    return document_store.get(saved_filename)
