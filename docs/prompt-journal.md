# EduVerse — Curated Prompt Journal

Dokumen ini berisi prompt terpilih yang paling merepresentasikan proses AI-assisted development EduVerse.

Maksimal 5 prompt akan dipilih untuk submission.

---

## 1. Idea / PRD

Status: Pending

### Prompt
**Auth + Database Architecture**
Design the authentication and Supabase database architecture for EduVerse.

IMPORTANT:
This task is ONLY architecture and schema planning.

DO NOT:
- modify frontend code
- modify backend code
- install dependencies
- create Supabase client
- execute migrations
- create tables automatically
- implement Google OAuth
- implement JWT middleware
- implement Gemini
- change existing APIs

We will review the architecture first before implementation.

--------------------------------------------------
PROJECT CONTEXT
--------------------------------------------------

EduVerse is an educational web application for elementary school students, especially grades 4–6.

Current frontend pages:
- Landing
- Login
- Register
- Dashboard
- Math Kingdom
- Quest Detail
- Result / Reward
- Progress / Profile

Current backend:

GET /api/health
GET /api/quests
GET /api/quests/:slug
GET /api/quests/:slug/questions
POST /api/quests/:slug/submit

Current quest/question data is static mock data.

--------------------------------------------------
AUTHENTICATION REQUIREMENTS
--------------------------------------------------

EduVerse will use Supabase Auth.

Supported login methods:

1. Email + Password
2. Google OAuth

Supabase Auth is responsible for:

- user identity
- email/password authentication
- Google OAuth
- sessions
- access tokens / JWT
- refresh tokens

Do NOT create custom password storage.

Do NOT create a custom users table that duplicates auth.users.

Application-specific user information should be stored in:

profiles

with:

profiles.id → auth.users.id

--------------------------------------------------
AUTH FLOW
--------------------------------------------------

Design the intended flow for:

A. Email/password registration

User
→ Supabase Auth
→ auth.users
→ profiles
→ authenticated session

B. Email/password login

User
→ Supabase Auth
→ authenticated session
→ access token/JWT

C. Google OAuth

User
→ Google
→ Supabase Auth
→ auth.users
→ profiles
→ authenticated session

Explain where profile creation should happen and how duplicate profile creation should be avoided.

--------------------------------------------------
JWT / BACKEND ARCHITECTURE
--------------------------------------------------

The Express backend will eventually receive Supabase access tokens.

Expected request pattern:

Authorization: Bearer <supabase-access-token>

Design how Express should:

1. receive the token
2. verify/authenticate the Supabase user
3. obtain the authenticated user's UUID
4. attach the user identity to the request
5. use that UUID when querying user-specific Supabase data

Do NOT implement the middleware yet.

Explain which operations should require authentication.

--------------------------------------------------
DATABASE TABLES
--------------------------------------------------

Design the minimum database schema using:

1. profiles
2. quests
3. questions
4. user_progress
5. quiz_attempts

Do not add extra tables unless necessary.

--------------------------------------------------
PROFILES
--------------------------------------------------

Purpose:
Application-level student profile.

Suggested fields:

- id UUID PRIMARY KEY
- display_name
- avatar
- created_at
- updated_at

Relationship:

profiles.id → auth.users.id

Do not store:
- password
- access token
- refresh token
- Google password
- sensitive authentication secrets

--------------------------------------------------
QUESTS
--------------------------------------------------

Store global quest metadata.

Three current quests:

- The Missing Numbers
- The Pizza Problem
- The Unknown X

Suggested fields:

- id
- slug
- title
- category
- topic
- description
- created_at

IMPORTANT:

Quest metadata is global.

Do NOT store a student's completed/in-progress/locked state directly in quests.

Student-specific state belongs in user_progress.

--------------------------------------------------
QUESTIONS
--------------------------------------------------

Store questions belonging to quests.

Suggested fields:

- id
- quest_id
- question
- options
- correct_option
- explanation
- difficulty
- topic
- created_at

The answer key must remain backend-controlled.

Explain how the API should prevent frontend clients from directly accessing correct_option.

--------------------------------------------------
USER_PROGRESS
--------------------------------------------------

Store progress for an individual student and quest.

Suggested fields:

- id
- user_id
- quest_id
- status
- progress
- best_score
- xp_earned
- completed_at
- updated_at

Relationship:

user_id → profiles.id
quest_id → quests.id

Require one progress record per user per quest.

Recommend an appropriate unique constraint.

Possible status values:

- locked
- in-progress
- completed

--------------------------------------------------
QUIZ_ATTEMPTS
--------------------------------------------------

Store each quiz attempt.

Suggested fields:

- id
- user_id
- quest_id
- score
- correct_answers
- total_questions
- xp_earned
- created_at

Relationships:

user_id → profiles.id
quest_id → quests.id

Do not store unnecessary personal data.

--------------------------------------------------
RLS / SECURITY
--------------------------------------------------

Design basic Supabase RLS recommendations.

At minimum:

profiles:
- user can read their own profile
- user can update their own profile

quests:
- authenticated users can read quest metadata

questions:
- avoid allowing frontend clients to directly read correct_option
- explain whether questions should be accessed only through Express

user_progress:
- user can read their own progress
- user cannot read another user's progress

quiz_attempts:
- user can read their own attempts
- user cannot read another user's attempts

Explain which sensitive operations should be performed by Express using a secure backend credential rather than directly from the browser.

IMPORTANT:

Do not expose service-role credentials to the frontend.

--------------------------------------------------
API ACCESS MODEL
--------------------------------------------------

Separate APIs into:

Public:
- health
- possibly quest metadata if appropriate

Authenticated:
- user progress
- quiz submission
- profile
- personalized data

Explain the recommended authentication requirement for each current endpoint:

GET /api/health
GET /api/quests
GET /api/quests/:slug
GET /api/quests/:slug/questions
POST /api/quests/:slug/submit

--------------------------------------------------
GEMINI COMPATIBILITY
--------------------------------------------------

The future architecture will use Gemini for:

1. Question generation
2. Answer analysis
3. Kibo personalized feedback

Gemini must NOT become responsible for:
- authentication
- XP calculation
- database authorization
- final score calculation
- user identity

Explain where Gemini belongs in the architecture.

--------------------------------------------------
OUTPUT
--------------------------------------------------

Provide:

1. Recommended architecture diagram
2. Auth flow for email/password
3. Auth flow for Google OAuth
4. JWT → Express authentication flow
5. Database schema
6. Table columns and PostgreSQL types
7. Primary/foreign keys
8. Unique constraints
9. Recommended indexes
10. RLS policy recommendations
11. API authentication matrix
12. Gemini integration boundary
13. Migration/implementation order
14. Potential security pitfalls

IMPORTANT:

Do not modify project files.

End with a concise recommendation:

"Is this architecture ready to implement in Supabase?"

If not, list exactly what needs to be decided first.

### Why This Prompt Matters
Pending

### Result
Pending

---

## 2. Debugging

Status: Pending

### Prompt
Pending

### Why This Prompt Matters
Pending

### Result
Pending

---

## 3. Audit & Optimization

Status: Pending

### Prompt
Pending

### Why This Prompt Matters
Pending

### Result
Pending

---

## 4. Finishing

Status: Pending

### Prompt
Pending

### Why This Prompt Matters
Pending

### Result
Pending

---

## 5. Free Choice

Status: Pending

### Prompt
Pending

### Why This Prompt Matters
Pending

### Result
Pending