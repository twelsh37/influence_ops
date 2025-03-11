from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from .database.config import engine, Base
from .api.articles import router as articles_router

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Influence Operations API",
    description="Backend API for Influence Operations research articles",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(articles_router)

@app.get("/")
async def root():
    return {"message": "Welcome to Influence Operations API"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
