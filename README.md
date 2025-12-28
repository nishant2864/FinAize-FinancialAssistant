# FinAIze - AI Financial Assistant

A futuristic, AI-powered personal financial assistant built with Next.js, PostgreSQL, and OpenAI.

## Features
- 📊 **Dashboard**: Track expenses, budgets, and savings goals.
- 🤖 **AI Chatbot**: Get personalized financial advice and insights.
- 🔐 **Secure Auth**: Custom JWT authentication with secure cookies.
- 🎨 **Premium UI**: Dark mode, neon accents, and smooth animations using Tailwind CSS & ShadCN.

## Tech Stack
- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS, Recharts, Framer Motion
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL (via Docker), Prisma ORM
- **AI**: OpenAI API

## Getting Started

### Prerequisites
- Node.js 18+
- Docker & Docker Compose (for the database)

### Installation

1.  **Clone & Install Dependencies**
    ```bash
    npm install
    ```

2.  **Setup Database**
    Make sure Docker is running, then start the PostgreSQL container:
    ```bash
    docker compose up -d
    ```
    
    Initialize the database schema:
    ```bash
    npx prisma db push
    ```

3.  **Environment Variables**
    Create a `.env` file (or use the created one) and add your OpenAI Key:
    ```env
    DATABASE_URL="postgresql://postgres:password@localhost:5432/finaize?schema=public"
    NEXTAUTH_SECRET="your-secret"
    OPENAI_API_KEY="sk-..."
    ```

4.  **Run the App**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000)

## Project Structure
- `src/app`: Application routes and pages.
- `src/components`: Reusable UI components.
- `src/lib`: Utilities (DB, Auth, AI helpers).
- `prisma`: Database schema.

## License
MIT
