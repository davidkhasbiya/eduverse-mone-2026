# EduVerse — Curated Prompt Journal

Dokumen ini berisi lima prompt terpilih yang merepresentasikan proses AI-assisted development EduVerse. Prompt dipilih berdasarkan kontribusinya terhadap perencanaan, debugging, integrasi backend, evaluasi kualitas, dan finalisasi produk.

---

## 1. Idea / PRD

**Status:** Implemented incrementally

### Prompt — Auth + Database Architecture

Design the authentication and Supabase database architecture for EduVerse, an educational adventure web application for elementary school students in grades 4–6.

The architecture must cover:

- Supabase Auth for email/password authentication and future Google OAuth.
- `profiles` linked to `auth.users`, without duplicating authentication credentials.
- Database design for `profiles`, `quests`, `questions`, `user_progress`, and `quiz_attempts`.
- Express authentication using Supabase access tokens.
- Ownership and authorization of user-specific data.
- Row Level Security (RLS), foreign keys, unique constraints, indexes, and API access rules.
- Protection of answer keys so `correct_option` is never exposed to frontend clients.
- A clear boundary between Gemini's tutoring capabilities and trusted backend responsibilities such as authentication, score calculation, and XP assignment.

Plan the architecture before implementation. Do not automatically modify project files, create tables, or execute migrations during the planning stage.

### Why This Prompt Matters

This prompt established the security and data architecture before authentication and persistence were integrated. It helped distinguish authentication identity from application profile data and clarified why sensitive operations must remain under backend control.

### Result

EduVerse adopted Supabase Auth and a `profiles` table linked to the authenticated user. The Express backend verifies Supabase access tokens before accessing protected user data. The project also uses separate tables for quests, questions, progress, and quiz attempts.

**Remaining limitation:** The final database schema, RLS policies, and persistent progress-update guarantees still require verification against the actual Supabase configuration. Google OAuth and complete progress persistence should not be considered finished unless separately tested.

---

## 2. Debugging

**Status:** Implemented and validated at build/type-check level

### Prompt — Restore the Quiz API Route

Diagnose and fix the route registration problem that prevents the EduVerse question API from being reached.

Required endpoints:

- `GET /api/quests/:slug/questions`
- `POST /api/quests/:slug/submit`

Inspect the Express entry point and existing quest/question routers before making changes.

Requirements:

- Make the smallest necessary routing correction.
- Preserve the existing quest API and question data.
- Keep `correctOption` backend-only.
- Do not redesign the API or modify the frontend.
- Run the backend TypeScript check and verify the health, quest, question, and submit endpoints where the environment permits.
- Report the root cause, files changed, and actual verification results.

### Why This Prompt Matters

The quiz feature could not work end-to-end while its API route was unreachable. This prompt focused debugging on the routing issue rather than introducing unnecessary changes to the API or frontend.

### Result

The question router was registered under `/api/quests` in `backend/src/index.ts`, allowing the existing question and submission paths to be reached in the tested backend setup. The GET response was checked to ensure it did not expose `correctOption`.

Later work added authenticated quiz submission and database attempt persistence. Runtime verification against the deployed environment remains separate from TypeScript and build checks.

---

## 3. Audit & Optimization

**Status:** Audit completed; follow-up integration implemented incrementally

### Prompt — Audit End-to-End Data Integration

Audit the EduVerse repository to determine whether the frontend, Express backend, and Supabase database are genuinely integrated.

Inspect the implementation rather than relying on documentation or intended architecture.

Check:

- Whether the frontend fetches quest, question, result, and progress data from the backend.
- Whether quiz submission uses verified authentication and server-side score calculation.
- Whether attempts and XP are persisted instead of stored only in memory or mock state.
- Whether the result page displays the actual submission response.
- Whether Progress and Profile use the correct authenticated user's data.
- Whether Kibo and AI endpoints are actually called by the frontend.
- Whether API responses expose answer keys or trust client-supplied user IDs.
- Which checks passed, which failed, and which require a live runtime test.

Do not claim that an integration works unless code inspection and available tests support the claim. Do not run database migrations or modify schema without verifying the existing database structure.

### Why This Prompt Matters

A page can look complete while still displaying mock data or failing to communicate with the backend. This audit identified the difference between a visually implemented interface and a genuinely connected application, helping prioritize critical functionality before deployment.

### Result

The audit identified several gaps: quiz gameplay was initially a placeholder, result values were hardcoded, frontend pages were not consistently consuming backend APIs, and progress was not fully connected to persistent data.

Follow-up work connected the quiz flow to backend question and submission endpoints, added authenticated submission, displayed quest titles in attempt history, and connected Progress to backend data.

**Remaining limitation:** Not every page or feature is guaranteed to be fully database-driven. Gemini's live response and complete persistent progress updates must be verified independently.

---

## 4. Finishing

**Status:** Implemented; final manual visual review required

### Prompt — Finalize EduVerse UI/UX and Kibo

Refine the existing EduVerse interface without replacing its visual identity or performing a complete redesign.

Use the supplied Kibo reference as the visual standard: a small, rounded mint/turquoise robot with a thick navy outline, yellow accents, and a friendly expression.

Apply a consistent visual language across:

- Dashboard
- Math Kingdom
- Quest Detail
- Quiz Gameplay
- Kibo Chat
- Result / Reward
- Progress
- Profile
- Shared Sidebar, including minimized and mobile states

Requirements:

- Reuse a consistent Kibo illustration/component where practical.
- Give Kibo a clear role as a learning companion without obstructing quiz interaction.
- Keep Progress focused on learning history and statistics; keep Profile focused on student identity and account information.
- Preserve responsive behavior, existing routes, authentication, API contracts, and real backend values.
- Do not invent XP, scores, badges, or successful AI responses.
- Preserve existing uncommitted work and avoid unnecessary dependencies.
- Run available lint, production build, and diff checks.
- Report actual changes, validation results, and remaining limitations.

### Why This Prompt Matters

The original landing and registration pages had a stronger illustrated identity than several authenticated pages. This prompt aimed to make the entire product feel like one cohesive learning adventure while preserving working functionality and avoiding misleading mock results.

### Result

A reusable Kibo component and styling were added, and UI refinements covered the shared sidebar, Profile, Progress, Math Kingdom, and Quest Detail. The project retained its existing backend and authentication contracts during the visual refinement.

Lint and production build checks were reported as passing. Manual browser/device verification and complete adoption of the reusable Kibo illustration across every page still need confirmation.

---

## 5. Free Choice

**Status:** Implemented incrementally; runtime verification required

### Prompt — Secure Quiz Submission and Display Real Results

Implement the EduVerse quiz submission flow using the existing backend and Supabase authentication.

Requirements:

- Protect `POST /api/quests/:slug/submit` with the existing authentication middleware.
- Derive the user ID only from the verified Supabase access token.
- Resolve the quest slug to its database UUID.
- Validate submitted answers and question IDs.
- Calculate score and XP on the backend.
- Persist the quiz attempt in `quiz_attempts`.
- Return success only after the database insert succeeds.
- Never expose `correct_option` to the frontend.
- Send the authenticated session token from the frontend.
- Display the actual backend submission result rather than hardcoded score, correct-answer count, or XP.
- Handle missing or expired sessions, failed requests, and malformed result data without crashing or displaying false success.
- Do not assume that `user_progress` is safe to update until its constraints and schema are verified.
- Do not claim idempotency or protection against duplicate XP unless it is actually implemented and tested.

Run the available backend TypeScript check, frontend lint/build, and diff checks. Report any runtime tests that could not be completed.

### Why This Prompt Matters

Quiz submission is central to EduVerse: it connects the student's actions to trustworthy results and saved learning history. Server-side validation and authenticated identity prevent the frontend from deciding its own score or attributing an attempt to another user.

### Result

Quiz submission was protected with `requireAuth`, the authenticated user ID was obtained from the verified token, and attempts were saved to `quiz_attempts`. The frontend sends the access token and handles session-related errors. The result flow was updated to use actual submission data rather than relying on fixed mock values.

Backend TypeScript, frontend lint, production build, and relevant diff checks were reported as passing.

**Remaining limitation:** A live end-to-end test against the deployment environment is still required. Duplicate-submission idempotency and complete `user_progress` updates should not be claimed without the corresponding database guarantees and tests.

---

## Closing Note

These five prompts document how AI-assisted development was used for planning, debugging, auditing, implementation, and final refinement of EduVerse. The results describe the work and checks reported during development; they do not replace the raw prompt log, source-code history, or live deployment verification.
