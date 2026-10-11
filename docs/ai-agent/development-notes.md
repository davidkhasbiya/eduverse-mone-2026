# EduVerse — AI Agent Development Notes

## Project Context

EduVerse is an educational web application for elementary school students, focused on creating an engaging learning experience through an adventure-based interface.

Current target:
- Elementary students (SD), especially grades 4–6
- Initial learning world: Math Kingdom
- Main learning focus: Mathematics
- AI companion: Kibo

## Development Principles

- Use AI Agent as a development assistant.
- Keep development tasks focused and incremental.
- Test changes after implementation.
- Avoid unnecessary dependencies.
- Keep frontend and backend responsibilities separated.
- Maintain responsive and accessible UI.
- Document important AI-assisted development decisions.

---

## Development Log

### 2026-10-05

#### Task: Landing Page

Status: Completed

Objective:
- Build the initial EduVerse landing page.
- Establish the visual identity and adventure-based design direction.
- Introduce EduVerse, Kibo, and Math Kingdom.
- Provide CTA navigation toward `/login`.

Planned UI:
- Navbar
- Hero section
- EduVerse introduction
- Feature cards
- Math Kingdom preview
- Final CTA
- Footer

Technical constraints:
- Next.js App Router
- TypeScript
- Tailwind CSS
- No backend changes
- No unnecessary dependencies
- Responsive design

Files changed:
- `frontend/app/page.tsx`
- `frontend/app/layout.tsx`
- `frontend/app/globals.css`
- `frontend/components/LandingPage.tsx`
- `docs/ai-agent/development-notes.md`

Validation:
- `npm.cmd run lint` passed.
- `npm.cmd run build` passed after removing the starter's network-dependent Google font imports; the build could not fetch Google Fonts in this environment.

Notes:
- Replaced the temporary backend health-check UI with a server-rendered landing page; no backend files were changed.
- Used `next/link` for all `/login` CTAs and a CSS/HTML illustration for Kibo and Math Kingdom so the page has no remote image dependency.
- Kept the visual system responsive with Tailwind utility classes, semantic sections, visible focus states, hover states, and reduced page complexity by avoiding new dependencies.

#### Landing page refinement

- Replaced the generic lower-page feature cards with a Math Kingdom quest map for The Missing Numbers, The Pizza Problem, and The Unknown X.
- Added a character-led Kibo companion section reusing the existing CSS illustration.
- Restyled the final CTA as a bold adventure signpost while preserving its `/login` destination.
- Validation after refinement: `npm.cmd run lint` and `npm.cmd run build`.

### 2026-10-06

#### Task: Login Page

Status: Completed

Objective:
- Add the `/login` experience as the entry point to the EduVerse learning adventure.
- Keep authentication as a frontend placeholder while preserving the landing page and backend.

Files changed:
- `frontend/app/login/page.tsx`
- `frontend/components/LoginPage.tsx`
- `docs/ai-agent/development-notes.md`

Design decisions:
- Reused the landing page's navy, teal, yellow-orange, cream, rounded border, shadow, and CSS illustration language.
- Added a responsive visual/form split that stacks on smaller screens.
- Added accessible labels, focus states, password visibility control, and a Google placeholder message.
- The email/password submit flow navigates to `/dashboard` without implementing authentication.

Validation:
- `npm.cmd run lint` passed.
- `npm.cmd run build` passed; `/login` was statically generated successfully.
- Browser interaction testing was not available in the current tool environment; the form, password toggle, Google placeholder, and route links were verified by implementation and build/type validation.

### 2026-10-06

#### Task: Dashboard Page

Status: Completed

Objective:
- Add the student home base at `/dashboard` with static frontend progress data.
- Give students a clear next action into Math Kingdom and lightweight links to future progress and quest routes.

Files changed:
- `frontend/app/dashboard/page.tsx`
- `frontend/components/DashboardPage.tsx`
- `docs/ai-agent/development-notes.md`

Design decisions:
- Reused the established EduVerse navy, teal, cream, yellow-orange palette, chunky borders, offset shadows, typography, and CSS-built Kibo illustration language.
- Used a single adventure composition with a prominent Math Kingdom entry point instead of an admin-style statistics grid.
- Kept mock student data in one object and used semantic progress bars, static quest statuses, responsive stacking, and `next/link` navigation to `/math-kingdom`, `/progress`, and `/quest`.
- Kept the page as a Server Component because it has no state or browser-only interaction; no backend, authentication, database, or new dependency was added.

Validation:
- `npm.cmd run lint` passed.
- `npm.cmd run build` passed; `/dashboard` was statically generated.
- Existing Landing, Login, and Register source files were not modified.
- Browser viewport testing was not available in the current tool environment; responsive behavior and route targets were verified through the implementation and build output.

#### Task: Register Page

Status: Completed

Objective:
- Add the `/register` frontend-only registration experience as a continuation of `/login`.

Files changed:
- `frontend/app/register/page.tsx`
- `frontend/components/RegisterPage.tsx`
- `docs/ai-agent/development-notes.md`

Design decisions:
- Matched the Login page's split card, Kibo CSS illustration, colors, typography, borders, shadows, spacing, and responsive stacking.
- Added accessible labels and focus states, two password visibility toggles, friendly client-side validation, and a Google placeholder message.
- Valid submissions navigate to `/login`; no account or authentication state is persisted.

Validation:
- `npm.cmd run lint` completed with one pre-existing warning in `frontend/components/LoginPage.tsx` for its existing `window.location.href` navigation; no Register page lint warnings remain.
- `npm.cmd run build` passed; `/register` was statically generated successfully.
- Browser interaction testing was not available in the current tool environment; validation behavior and links were verified by implementation and lint/build checks.

#### Task: Dashboard Page

Status: Completed

Objective:
Implemented the Dashboard page only.
Changed:
- frontend/app/dashboard/page.tsx
- frontend/components/DashboardPage.tsx
- docs/ai-agent/development-notes.md
Features included:
- Student header with XP and profile link
- Kibo welcome hero
- Math Kingdom adventure CTA to /math-kingdom
- Static XP/progress summary
- Quest previews with statuses
- Kibo learning tip
- Progress link to /progress
- Quest links to /quest
- Responsive desktop/tablet/mobile layout
- No backend, database, authentication, or new dependencies
Validation:
- npm.cmd run lint passed with one pre-existing warning in LoginPage.tsx
- npm.cmd run build passed
- /dashboard statically generated successfully
- Existing Landing, Login, Register, and backend files were not modified
- Browser testing was unavailable in the current environment
docs/prompt-log.md already had unrelated working-tree changes and was preserved.

#### Task: Math Kingdom Page

Status: Completed

Objective:
Files added:
- [MathKingdomPage.tsx]
- [math-kingdom/page.tsx]
Included:
- World 01 intro and Math Kingdom description
- Adventure map composition
- Three clickable quest destinations
- Correct quest statuses and centralized mock data reuse
- Back to Dashboard navigation
- Static Kibo guide element
- Responsive desktop/mobile layout using existing Sidebar
- Quest routes prepared:
  - /quest/the-missing-numbers
  - /quest/the-pizza-problem
  - /quest/the-unknown-x
Validation:
- npm.cmd run lint passed with one existing warning in LoginPage.tsx
- npm.cmd run build passed
- /math-kingdom generated successfully
- TypeScript validation passed
Remaining limitation: Quest detail routes are links only and intentionally remain unimplemented per scope.

#### Task: Quest Detail Page

Status: Completed

Objective:
Implemented Quest Detail MVP.
- Added dynamic route: /quest/[slug]
- Added centralized quest data with slug, status, description, learning goals, and activity info
- Added completed, active, and locked quest states
- Added Kibo contextual tip
- Added CTA navigation to /quest/[slug]/play
- Added placeholder play page
- Reused existing authenticated layout and Sidebar
- Preserved Landing, Login, Register, Dashboard, and Math Kingdom designs
Files added:
- frontend/app/(authenticated)/quest/[slug]/page.tsx
- frontend/app/(authenticated)/quest/[slug]/play/page.tsx
File modified:
- frontend/lib/mock-data.ts
Routes tested successfully:
- /quest/the-missing-numbers
- /quest/the-pizza-problem
- /quest/the-unknown-x
- /quest/the-pizza-problem/play
Validation:
- TypeScript: passed
- Production build: passed
- Lint: passed with one existing warning in LoginPage.tsx
- Route smoke tests: all returned HTTP 200
- Sidebar navigation inherits existing desktop/mobile behavior
Remaining limitations: quiz engine, result/reward logic, persistence, backend, authentication, AI features, and progress updates are not implemented yet.

#### Task: Result / Reward Page

Status: Completed

Objective:
Implemented the Result / Reward MVP flow.
Changes:
- Updated [play/page.tsx]
  - Added mock activity screen
  - Added “Selesaikan Quest / Lihat Hasil” CTA
  - Navigates to /result/
- Added [result/page.tsx]
  - Quest completion state
  - Quest title/category from centralized data
  - Mock score: 80 / 100
  - Mock correct answers: 4 / 5
  - Mock reward: +40 XP
  - Quest-specific badge label
  - Kibo celebration message
  - Navigation to Math Kingdom, Progress, and replay
Routes added:
- /result/the-missing-numbers
- /result/the-pizza-problem
- /result/the-unknown-x
Validation:
- npm.cmd run lint passed with one pre-existing warning in LoginPage.tsx
- npm.cmd run build passed
- All three result routes statically generated successfully
Remaining limitation:
- /progress is referenced by the result page and existing sidebar, but no Progress page currently exists in the repository. I did not implement it because it was outside the requested scope

#### Task: Progress / Profile Page

Status: Completed

Objective:
Implemented the Progress/Profile page.
- Added route: /progress
- Added [ProgressPage.tsx]
- Added authenticated route page
- Reused centralized student and quests mock data
- Reused existing Sidebar via authenticated layout
- Added profile header, XP progress, quest progress, badges, Kibo message, and navigation actions
- Responsive mobile/desktop layout with no intentional horizontal overflow
Validation:
- ESLint passed with one pre-existing warning in LoginPage.tsx
- TypeScript/build passed successfully
- Existing unrelated working-tree changes were preserved
- Backend, persistence, authentication, AI, leaderboard, and real calculations remain unimplemented as requested

#### Task: Quest API

Status: Completed

Objective:
Implemented the first Quest API.
Created:
- backend/src/data/quests.ts
- backend/src/routes/quest.routes.ts
Modified:
- backend/src/index.ts
Added endpoints:
- GET /api/health
- GET /api/quests
- GET /api/quests/:slug
Validation completed:
- TypeScript check: passed with npx.cmd tsc --noEmit
- Development server started successfully
- Tested all requested quest endpoints
- Invalid slug returns 404 with:
{
  "message": "Quest not found"
}
The frontend was not modified.
Remaining limitations: quest data is static mock data only; there is no authentication, persistence, quiz submission, AI integration, or user-specific progress.

#### Task: Question API + Quiz Engine

Status: Completed

Objective:
Implemented the backend Quiz / Question API.
Created:
- [questions.ts]
- [question.routes.ts]
Modified:
- [index.ts]
Added endpoints:
- GET /api/quests/:slug/questions
- POST /api/quests/:slug/submit
Features:
- 15 static questions across 3 quests
- correctOption remains backend-only
- Server-side answer evaluation
- Score: 20 points per correct answer
- XP: 10 per correct answer
- Validation for invalid answers, question IDs, and quest slugs
- Existing endpoints preserved
- Frontend unchanged
Validation:
- npx.cmd tsc --noEmit passed.
- Development server could not start because the environment raised Node.js uv_os_get_passwd ENOMEM; endpoint smoke tests could not run.
Existing unrelated modifications in docs/ were preserved.

#### Task: Question API + Quiz Engine Revision

Status: Completed

Objective:
Fixed/verified the route registration.
- Root cause: the running server was stale and did not include the question router registration.
- Registration now present in backend/src/index.ts:
app.use("/api/quests", questionRouter);
- Existing paths in question.routes.ts were already correct:
  - GET /:slug/questions
  - POST /:slug/submit
- Files involved:
  - backend/src/index.ts
  - backend/src/routes/question.routes.ts
- No question data, frontend, dependencies, or API design changed.
Validation:
- npx.cmd tsc --noEmit ✅
- All three question GET endpoints ✅
- Submit endpoint ✅
- correctOption omitted from GET responses ✅
- /api/health ✅
- /api/quests ✅
- npm run dev was blocked by an environment Node/tsx uv_os_get_passwd ENOMEM error; the compiled current backend was started successfully for route testing.

#### Task: Auth + Database Architecture

Status: Completed

Objective:
# EduVerse Authentication and Supabase Database Architecture

No project files were modified.

## 1. Recommended architecture

```text
Browser / Next.js
  ├─ Supabase Auth
  │    ├─ Email + Password
  │    └─ Google OAuth
  │
  └─ Express API
       ├─ Receives Supabase access token
       ├─ Verifies authenticated user
       ├─ Uses user UUID
       ├─ Reads public quest data
       └─ Performs secure quiz submission/scoring

Supabase
  ├─ auth.users
  ├─ profiles
  ├─ quests
  ├─ questions
  ├─ user_progress
  └─ quiz_attempts
```

Supabase Auth owns identity and credentials. The Express backend owns protected business logic such as answer validation, score calculation, XP calculation, and secure access to answer keys.

## 2. Email/password registration flow

```text
User
  → Supabase signUp()
  → auth.users created
  → database trigger creates profiles row
  → email confirmation if enabled
  → authenticated session after confirmation/login
```

Recommended profile creation strategy:

- Create `profiles` automatically with a database trigger on `auth.users`.
- Use `INSERT ... ON CONFLICT DO NOTHING` so repeated events cannot create duplicates.
- Do not create profiles independently from both the frontend and backend.
- The profile primary key should equal the Supabase Auth user UUID.

Example trigger behavior:

```text
new auth.users.id
  → profiles.id
new auth.users.raw_user_meta_data.display_name
  → profiles.display_name
```

Only trusted, non-sensitive metadata should be copied from Auth metadata.

## 3. Email/password login flow

```text
User
  → Supabase signInWithPassword()
  → Supabase validates credentials
  → Supabase returns session
  → frontend receives access token
  → frontend sends Authorization: Bearer <token> to Express
```

Passwords, refresh tokens, and access-token storage should remain under Supabase Auth control.

## 4. Google OAuth flow

```text
User
  → Supabase OAuth sign-in
  → Google authenticates user
  → Google redirects to Supabase
  → Supabase creates or reuses auth.users
  → profile trigger creates profiles row if missing
  → Supabase returns authenticated session
```

The trigger should be idempotent because Google may sign in an existing user or create a new user.

## 5. JWT → Express authentication flow

Expected request:

```http
Authorization: Bearer <supabase-access-token>
```

Express should eventually:

1. Read the `Authorization` header.
2. Confirm the `Bearer` scheme.
3. Extract the access token.
4. Validate the token using Supabase Auth facilities.
5. Obtain the authenticated Supabase user UUID.
6. Attach the identity to the request, for example:

```text
req.user = {
  id: "<auth.users UUID>"
}
```

7. Use `req.user.id` for all user-specific database queries.
8. Never accept `user_id` from the request body for authorization purposes.

The backend must derive identity from the verified token, not from frontend-provided fields.

Authentication should be required for:

- Profile access
- User progress
- Quiz submission
- Quiz attempts
- Personalized recommendations
- Any student-specific data

## 6. Database schema

### `profiles`

| Column | PostgreSQL type | Constraints |
|---|---|---|
| `id` | `uuid` | Primary key, references `auth.users(id)` |
| `display_name` | `text` | Optional |
| `avatar` | `text` | Optional |
| `created_at` | `timestamptz` | Default `now()` |
| `updated_at` | `timestamptz` | Default `now()` |

Recommended foreign key behavior:

```text
profiles.id → auth.users.id ON DELETE CASCADE
```

Do not store passwords, tokens, refresh tokens, or Google credentials.

### `quests`

| Column | PostgreSQL type | Constraints |
|---|---|---|
| `id` | `uuid` | Primary key |
| `slug` | `text` | Unique, not null |
| `title` | `text` | Not null |
| `category` | `text` | Optional |
| `topic` | `text` | Optional |
| `description` | `text` | Optional |
| `created_at` | `timestamptz` | Default `now()` |

The following quests can be seeded:

- `the-missing-numbers`
- `the-pizza-problem`
- `the-unknown-x`

Quest completion state must not be stored here.

### `questions`

| Column | PostgreSQL type | Constraints |
|---|---|---|
| `id` | `uuid` | Primary key |
| `quest_id` | `uuid` | Foreign key to `quests(id)` |
| `question` | `text` | Not null |
| `options` | `jsonb` | Not null |
| `correct_option` | `text` | Not exposed to clients |
| `explanation` | `text` | Optional |
| `difficulty` | `text` or `smallint` | Optional |
| `topic` | `text` | Optional |
| `created_at` | `timestamptz` | Default `now()` |

Recommended relationship:

```text
questions.quest_id → quests.id ON DELETE CASCADE
```

The frontend should not query this table directly if it contains `correct_option`.

Preferred approach:

- Express retrieves questions using a secure backend credential.
- Express returns a sanitized question DTO without `correct_option`.
- During submission, Express retrieves the answer key privately and calculates the result.

Alternative: create a database view excluding `correct_option`, but quiz submission should still be performed by Express.

### `user_progress`

| Column | PostgreSQL type | Constraints |
|---|---|---|
| `id` | `uuid` | Primary key |
| `user_id` | `uuid` | Foreign key to `profiles(id)` |
| `quest_id` | `uuid` | Foreign key to `quests(id)` |
| `status` | `text` | Restricted to `locked`, `in-progress`, `completed` |
| `progress` | `smallint` or `numeric` | Validated range, for example 0–100 |
| `best_score` | `numeric` or `smallint` | Optional |
| `xp_earned` | `integer` | Default 0 |
| `completed_at` | `timestamptz` | Nullable |
| `updated_at` | `timestamptz` | Default `now()` |

Required constraint:

```text
UNIQUE (user_id, quest_id)
```

Recommended foreign keys:

```text
user_progress.user_id → profiles.id ON DELETE CASCADE
user_progress.quest_id → quests.id ON DELETE CASCADE
```

### `quiz_attempts`

| Column | PostgreSQL type | Constraints |
|---|---|---|
| `id` | `uuid` | Primary key |
| `user_id` | `uuid` | Foreign key to `profiles(id)` |
| `quest_id` | `uuid` | Foreign key to `quests(id)` |
| `score` | `numeric` or `smallint` | Not null |
| `correct_answers` | `smallint` | Not null |
| `total_questions` | `smallint` | Not null |
| `xp_earned` | `integer` | Not null |
| `created_at` | `timestamptz` | Default `now()` |

Recommended foreign keys:

```text
quiz_attempts.user_id → profiles.id ON DELETE CASCADE
quiz_attempts.quest_id → quests.id ON DELETE CASCADE
```

Each quiz attempt is a separate record. No uniqueness constraint is needed.

## 7. Recommended indexes

```text
quests(slug)
questions(quest_id)
user_progress(user_id)
user_progress(quest_id)
user_progress(user_id, quest_id)
quiz_attempts(user_id)
quiz_attempts(quest_id)
quiz_attempts(user_id, created_at DESC)
```

The unique constraint on `user_progress(user_id, quest_id)` also creates a useful index.

## 8. RLS recommendations

### `profiles`

Enable RLS.

Policies:

- `SELECT`: user may read only where `profiles.id = auth.uid()`.
- `UPDATE`: user may update only where `profiles.id = auth.uid()`.
- `INSERT`: preferably handled by the Auth trigger.
- `DELETE`: preferably restricted or handled through Auth account deletion.

### `quests`

Enable RLS.

- Authenticated users may read quest metadata.
- Public read access is optional if the landing page needs quest previews.
- No client-side insert, update, or delete policies.

### `questions`

Recommended policy:

- Do not permit direct browser reads from the raw table.
- Access questions through Express, which removes `correct_option`.
- Keep insert/update/delete restricted to administrators or the backend.

If direct client reads are required, expose a sanitized view that excludes `correct_option`.

### `user_progress`

Enable RLS.

- `SELECT`: only rows where `user_id = auth.uid()`.
- `INSERT`: only where `user_id = auth.uid()`, if direct client creation is allowed.
- `UPDATE`: only where `user_id = auth.uid()`.
- `DELETE`: normally restricted.

For stronger integrity, progress updates should be performed by Express after validating a quiz attempt.

### `quiz_attempts`

Enable RLS.

- `SELECT`: only rows where `user_id = auth.uid()`.
- `INSERT`: preferably performed by Express after scoring.
- `UPDATE` and `DELETE`: restricted.

The frontend must never be able to submit an arbitrary score or XP amount.

## 9. API authentication matrix

| Endpoint | Recommended access | Notes |
|---|---|---|
| `GET /api/health` | Public | Operational health check |
| `GET /api/quests` | Authenticated, or public if desired | Contains global quest metadata only |
| `GET /api/quests/:slug` | Authenticated, or public if desired | No personal progress included |
| `GET /api/quests/:slug/questions` | Authenticated | Express returns sanitized questions |
| `POST /api/quests/:slug/submit` | Authenticated | Express verifies answers and calculates score/XP |

The current static quest endpoints can remain public during early development, but production should require authentication for student-specific behavior and question delivery.

## 10. Quiz submission model

The browser should submit answer selections, not a score:

```json
{
  "answers": [
    {
      "question_id": "question-uuid",
      "selected_option": "B"
    }
  ]
}
```

Express should:

1. Authenticate the user.
2. Verify the quest exists.
3. Load the official questions and answer key.
4. Validate submitted question IDs.
5. Calculate correct answers and score.
6. Calculate XP using server-controlled rules.
7. Insert `quiz_attempts`.
8. Upsert `user_progress`.
9. Return the result without exposing the answer key unnecessarily.

## 11. Gemini integration boundary

Gemini should operate behind Express as an application service.

Allowed responsibilities:

- Generate draft questions.
- Suggest explanations.
- Analyze learning patterns.
- Generate Kibo feedback.
- Suggest personalized practice.

Gemini must not control:

- Authentication
- User identity
- JWT validation
- Database authorization
- Final score calculation
- XP calculation
- Completion status
- Direct database writes without validation

Generated questions should be reviewed or validated before becoming production question records.

A safe flow is:

```text
Express
  → Gemini service
  → validate generated output
  → optionally review/moderate
  → store approved question
```

## 12. Migration and implementation order

1. Confirm Supabase project and environment separation.
2. Create `profiles` and the Auth-user profile trigger.
3. Create `quests` and seed the three quests.
4. Create `questions` and seed/import question data.
5. Create `user_progress`.
6. Create `quiz_attempts`.
7. Add foreign keys, check constraints, unique constraints, and indexes.
8. Enable RLS.
9. Add RLS policies.
10. Configure email/password Auth.
11. Configure Google OAuth and redirect URLs.
12. Implement backend token verification.
13. Implement sanitized question retrieval.
14. Implement server-side quiz scoring and XP.
15. Replace static mock data incrementally.
16. Add Gemini services only after deterministic scoring and authorization are stable.

## 13. Security pitfalls to avoid

- Exposing the Supabase service-role key to the frontend.
- Trusting `user_id` sent in request bodies.
- Returning `correct_option` to the browser.
- Accepting client-provided scores, XP, or completion status.
- Allowing users to query another user’s progress or attempts.
- Creating profiles from multiple independent code paths.
- Storing passwords or OAuth credentials in application tables.
- Omitting a unique constraint on `(user_id, quest_id)`.
- Using Gemini to determine authoritative scores or permissions.
- Treating a decoded JWT as valid without proper verification.
- Forgetting to configure OAuth redirect URLs securely.
- Allowing unrestricted client writes to questions or quest metadata.
- Exposing detailed answer explanations before quiz submission if that reveals answers.

## Final recommendation

Yes. This architecture is ready to implement in Supabase.

Before implementation, confirm only these decisions:

1. Whether quest metadata should be publicly readable or authenticated-only.
2. Whether all question retrieval and progress mutations must go through Express.
3. The exact scoring and XP rules.
4. Whether `progress` represents a percentage, question count, or another metric.
5. Whether email confirmation is required before the first authenticated session.

#### Task: Backend Supabase Client

Status: Completed

Objective:

Implemented the initial server-only Supabase connection for the Express backend.

- Added `@supabase/supabase-js` to `backend`.
- Added `backend/src/lib/supabase.ts`, which loads and validates `SUPABASE_URL` and `SUPABASE_SECRET_KEY` without logging secret values.
- Added `backend/.env.example` with placeholders and ignored `backend/.env` via `backend/.gitignore`.
- Imported the client during backend startup so incomplete configuration fails with a clear error.
- Preserved the existing Express, CORS, health, quest, and quiz endpoints; no schema, seed data, authentication, or frontend changes were made.
- Validation performed: `npx tsc --noEmit` passed; `git diff --check` passed; endpoint source diff was reviewed.

#### Task: Supabase Auth
Status: Completed

Objective:

Implemented email/password Supabase Auth integration.

- Added the frontend Supabase browser client using `NEXT_PUBLIC_SUPABASE_URL` and the publishable key (with the legacy anon-key name supported).
- Login uses `signInWithPassword`; registration uses `signUp` and passes only the non-sensitive `display_name` metadata for the existing profile trigger.
- Added backend `requireAuth` middleware. It verifies Bearer tokens with `supabase.auth.getUser(token)` and never trusts an unverified JWT payload.
- Added `GET /api/auth/me`, which queries `profiles` only with the verified `req.authUser.id`.
- Existing quest and quiz routes were left unchanged. No schema, RLS policy, trigger, password storage, or secret-key exposure changes were made.
- Validation completed: backend and frontend `tsc --noEmit`, and frontend `npm run lint`. A production build was not run in this change.

Required environment variables are documented in `frontend/.env.example`; the backend continues to require `SUPABASE_URL` and `SUPABASE_SECRET_KEY` in `backend/.env`.

#### Task: Backend Supabase Client

Status: Completed

Objective:
