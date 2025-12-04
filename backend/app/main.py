from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import detection

app = FastAPI(title="RustGuard API")

origins = [
    "http://localhost:5173",      # Vite default
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(detection.router)


@app.get("/health")
def health_check():
    return {"status": "ok"}


# for `python -m app.main`
if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
