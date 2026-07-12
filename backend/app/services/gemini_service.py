import os
from pathlib import Path

import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv(Path(__file__).resolve().parents[2] / ".env")

API_KEY = os.getenv("GEMINI_API_KEY", "")
if API_KEY:
    genai.configure(api_key=API_KEY)


def generate_summary(text: str) -> str:
    """Generate a concise study summary from text using Gemini."""
    if not API_KEY:
        return "Unable to generate summary because GEMINI_API_KEY is not configured."

    if not text or not text.strip():
        return "Unable to generate summary because the text is empty."

    preview_text = text[:12000]
    prompt = (
        "Create a concise study summary from the provided text. "
        "Keep it clear, structured, and easy to review."
    )

    try:
        model = genai.GenerativeModel("gemini-flash-latest")
        response = model.generate_content([prompt, preview_text])
        return response.text.strip() if response.text else "Failed to generate summary."

    except Exception as exc:
        print(f"Gemini Error: {exc}")
        return "Failed to generate summary."