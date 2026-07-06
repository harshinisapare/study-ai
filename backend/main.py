from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "StudySphere AI Backend is Running 🚀"
    }