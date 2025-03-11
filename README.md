# Influence Operations

A full-stack application for displaying research articles with a Next.js frontend and Python backend.

## Project Structure

```
influence_ops/
├── frontend/         # Next.js frontend application
└── backend/         # Python FastAPI backend
```

## Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

The frontend will be available at http://localhost:3000

## Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the development server:
```bash
python src/main.py
```

The backend API will be available at http://localhost:8000

## Environment Variables

Create a `.env.local` file in the frontend directory and a `.env` file in the backend directory with the necessary environment variables.

## Database Setup

The application uses PostgreSQL hosted on Vercel. Make sure to set up the database connection in your environment variables.