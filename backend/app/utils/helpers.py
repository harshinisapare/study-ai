def build_response(message: str, status: str = "success") -> dict:
    return {"message": message, "status": status}
