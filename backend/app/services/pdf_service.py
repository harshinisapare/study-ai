from pathlib import Path

import fitz


def extract_text(file_path: Path) -> str:
    """Extract and concatenate text from every page of a PDF file."""
    try:
        with fitz.open(file_path) as document:
            pages_text = [page.get_text() for page in document]
    except (FileNotFoundError, ValueError, RuntimeError) as exc:
        raise RuntimeError("Failed to read PDF content.") from exc

    return "\n\n".join(page for page in pages_text if page)


def count_pages(file_path: Path) -> int:
    """Return the number of pages in a PDF file."""
    try:
        with fitz.open(file_path) as document:
            return document.page_count
    except (FileNotFoundError, ValueError, RuntimeError) as exc:
        raise RuntimeError("Failed to read PDF page count.") from exc
