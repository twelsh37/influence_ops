# Influence Operations

A full-stack application for displaying research articles with NextJS frontend and Python backend.

## Project Structure

- `/frontend` - NextJS application with TypeScript and Tailwind CSS
- `/backend` - Python FastAPI application

## Getting Started

### Frontend

```bash
cd frontend
yarn install
yarn dev
```

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

## Environment Variables

This project uses Vercel for deployment and environment variable management. Use Vercel CLI to download environment variables:

```bash
vercel link
vercel env pull
```

## Database

The project uses a Vercel-hosted PostgreSQL database with Drizzle ORM for database interactions.