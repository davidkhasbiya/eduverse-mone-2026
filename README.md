# EduVerse — Your Learning Adventure

**EduVerse** is a gamified learning web application designed to help elementary school students in grades 4–6 explore mathematics through interactive quests, progress tracking, and a friendly learning companion named Kibo.

Rather than presenting mathematics as a series of ordinary exercises, EduVerse turns learning into an adventure where students can answer questions, earn experience points (XP), and review their learning attempts.

## Preview

**Link:** 

## Features

- **Student Authentication** — Register and sign in using Supabase Authentication.
- **Learning Dashboard** — View an overview of the learning journey and available quests.
- **Math Kingdom** — Explore mathematics quests designed around different learning topics.
- **Interactive Quizzes** — Answer questions, navigate between questions, and submit quiz responses for server-side evaluation.
- **Results and Rewards** — View quiz scores and XP earned from submitted answers.
- **Learning Progress** — Review saved quiz attempts and accumulated XP.
- **Student Profile** — View account information and navigate to other learning areas.
- **Kibo Learning Companion** — A friendly mascot designed to support students during their learning journey.

## Available Quests

| Quest | Topic |
|---|---|
| The Missing Numbers | Arithmetic and missing numbers |
| The Pizza Problem | Basic fractions |
| The Unknown X | Patterns and introductory algebra |

## Technology Stack

**Frontend**
- Next.js
- React
- TypeScript
- Tailwind CSS

**Backend**
- Node.js
- Express
- TypeScript

**Database and Authentication**
- Supabase
- Supabase Authentication
- PostgreSQL

**AI Integration**
- Google Gemini API integration is included in the backend. Its live availability depends on valid configuration and successful API requests.

## Project Structure

```text
eduverse-mone-2026/
├── backend/
│   └── src/
├── frontend/
│   ├── app/
│   ├── components/
│   └── lib/
├── docs/
│   ├── ai-agent/
│   ├── prompt-journal.md
│   └── prompt-log.md
├── AGENTS.md
├── CLAUDE.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- A Supabase project
- A Google Gemini API key if testing AI endpoints

### 1. Clone the repository

```bash
git clone https://github.com/davidkhasbiya/eduverse-mone-2026.git
cd eduverse-mone-2026
```

### 2. Configure the backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```dotenv
PORT=4000
SUPABASE_URL=your_supabase_project_url
SUPABASE_SECRET_KEY=your_supabase_secret_key
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=your_configured_gemini_model
```

Use the actual environment variable names required by the current backend implementation. Keep secret keys in local environment variables; never commit them to Git.

Start the backend using the development script defined in `backend/package.json`.

### 3. Configure the frontend

Open a second terminal:

```bash
cd frontend
npm install
```

Create a `.env.local` file in the `frontend` directory:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
NEXT_PUBLIC_API_URL=http://localhost:4000
```

Configure the Supabase Authentication settings for the local application URL and any required redirect URLs.

Start the frontend using the development script defined in `frontend/package.json`.

Open `http://localhost:3000` in your browser.

## Backend API

The backend provides endpoints for health checks, authentication, quests, quiz questions, quiz submissions, learning progress, and AI assistance.

| Endpoint | Purpose |
|---|---|
| `GET /api/health` | Check backend availability |
| `GET /api/auth/me` | Retrieve the authenticated user's profile |
| `GET /api/quests` | Retrieve available quests |
| `GET /api/quests/:slug` | Retrieve quest details |
| `GET /api/quests/:slug/questions` | Retrieve quiz questions |
| `POST /api/quests/:slug/submit` | Submit quiz answers |
| `GET /api/me/progress` | Retrieve learning progress |
| `POST /api/ai/tutor` | Request AI learning assistance |
| `POST /api/ai/quiz/:slug` | Request AI-assisted quiz content |

Protected endpoints require a valid Supabase access token where applicable. The backend is responsible for evaluating quiz answers and calculating scores and XP.

## AI-Assisted Development

EduVerse maintains AI development documentation in the `docs/` directory, including:
- A curated prompt journal
- A raw prompt log
- AI agent development notes

These documents record the AI-assisted development process for transparency and reproducibility.

## Security Notes

- Never expose Supabase secret keys or Gemini API keys in frontend code.
- Only public Supabase configuration values should use the `NEXT_PUBLIC_` prefix.
- Protected backend operations must validate the user's authentication token.
- Do not commit `.env` or `.env.local` files.

## Project Status

EduVerse is being developed for the **M-ONE Telkomsel Coding Competition 2026**. Features and integrations may have