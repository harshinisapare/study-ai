import os
from pathlib import Path

import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv(Path(__file__).resolve().parents[2] / ".env")

API_KEY = os.getenv("GEMINI_API_KEY", "")
if API_KEY:
    genai.configure(api_key=API_KEY)

def _generate_content(prompt: str, text: str) -> str:
    """Generate content from text using Gemini with shared validation and error handling."""

    if not API_KEY:
        return "Unable to generate content because GEMINI_API_KEY is not configured."

    if not text or not text.strip():
        return "Unable to generate content because the text is empty."

    preview_text = text[:12000]

    try:
        model = genai.GenerativeModel("gemini-flash-latest")
        response = model.generate_content([prompt, preview_text])

        print("\n========== RAW GEMINI RESPONSE ==========")
        print(response.text)
        print("=========================================\n")

        return response.text.strip() if response.text else "Failed to generate content."

    except Exception as exc:
        print(f"\nGemini Error: {exc}\n")
        return f"ERROR: {exc}"   


# def _generate_content(prompt: str, text: str) -> str:
#     """Generate content from text using Gemini with shared validation and error handling."""
#     if not API_KEY:
#         return "Unable to generate content because GEMINI_API_KEY is not configured."

#     if not text or not text.strip():
#         return "Unable to generate content because the text is empty."

#     preview_text = text[:12000]

#     try:
#         model = genai.GenerativeModel("gemini-flash-latest")
#         response = model.generate_content([prompt, preview_text])
#         return response.text.strip() if response.text else "Failed to generate content."

#     except Exception as exc:
#         print(f"Gemini Error: {exc}")
#         return f"ERROR: {exc}"

def generate_summary(text: str) -> str:
    """Generate a concise study summary from text using Gemini."""
    summary_prompt = (
        "Create a concise study summary from the provided text. "
        "Keep it clear, structured, and easy to review."
    )
    return _generate_content(summary_prompt, text)


def generate_notes(text: str) -> str:
    """Generate structured study notes from text using Gemini."""
    notes_prompt = (
        "Create well-structured study notes from the provided text. "
        "Include a clear title, main headings, subheadings, bullet points, "
        "important concepts, definitions, and key takeaways. "
        "Keep the response organized and easy to study from."
    )
    return _generate_content(notes_prompt, text)


# def generate_flashcards(text: str) -> str:
#     """Generate flashcards as raw JSON using Gemini."""
#     flashcards_prompt = (
#         "Create 10 to 15 study flashcards from the provided text. "
#         "Return ONLY valid JSON as an array of objects with keys 'question' and 'answer'. "
#         "Do not include markdown, code fences, commentary, or any extra text."
#     )
#     return _generate_content(flashcards_prompt, text)
def generate_flashcards(text: str) -> str:
    """Generate flashcards as raw JSON using Gemini."""
    flashcards_prompt = (
        "Create 10 to 15 study flashcards from the provided text. "
        "Return ONLY valid JSON as an array of objects with keys 'question' and 'answer'. "
        "Do not include markdown, code fences, commentary, or any extra text."
    )

    response = _generate_content(flashcards_prompt, text)

    print("\n===== GEMINI RAW RESPONSE =====")
    print(response)
    print("===============================\n")

    return response