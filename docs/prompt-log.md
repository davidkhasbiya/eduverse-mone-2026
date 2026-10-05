# EduVerse — Raw Prompt Log

Dokumen ini mencatat seluruh prompt yang digunakan selama proses development EduVerse dengan AI Agent.

> Catatan:
> - Prompt dicatat apa adanya setelah benar-benar digunakan.
> - Jangan menghapus prompt yang sudah pernah digunakan.
> - Setiap prompt diberi nomor dan tanggal.
> - Dokumen ini merupakan raw development log, bukan curated prompt journal.

---

## 2026-10-05

### Prompt 01 — Landing Page

Status: Planned

Prompt:

We are building EduVerse, an educational web app for elementary school students (SD), especially grades 4–6, for the M-ONE Telkomsel Coding Competition 2026.

Implement ONLY the Landing Page for this task.

Tech stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Existing project structure must be preserved
- Do NOT modify the backend
- Do NOT implement Login, Dashboard, Math Kingdom, Quest Detail, Result/Reward, or Profile pages yet

Project concept:
EduVerse — "Your Learning Adventure"
EduVerse is a gamified learning platform where students learn through an adventure world. The first learning world is Math Kingdom.

Visual direction:
- Modern, polished 2D cartoon/chibi adventure style
- Colorful and energetic, suitable for SD students
- Fun and friendly, but NOT overly childish
- Avoid making the UI look like a generic admin dashboard
- Use rounded cards, playful shapes, subtle shadows, friendly typography, and an adventure/game feeling
- The design should still feel professional enough for a competition project

Landing Page structure:

1. NAVBAR
- EduVerse logo/wordmark
- Small tagline or supporting text if it fits
- CTA button: "Mulai Petualangan"
- CTA should navigate to /login
- Keep navbar clean and responsive
- On mobile, make sure navigation remains usable

2. HERO SECTION
Main headline:
"Belajar Jadi Petualangan!"

Supporting copy:
"Jelajahi dunia EduVerse, selesaikan quest, kumpulkan XP, dan jadilah pahlawan dalam perjalanan belajarmu."

Primary CTA:
"Mulai Petualangan"
→ navigate to /login

Secondary visual:
- Represent Kibo, the friendly AI learning companion
- Show Math Kingdom/adventure elements
- If there are no image assets available yet, DO NOT fetch random external images.
- Instead use tasteful CSS-based illustrations, simple vector-like shapes, gradients, emoji only where appropriate, or clearly defined local placeholder components.
- Structure the hero so real illustration assets can easily be replaced later.

3. "KENAPA EDUVERSE?" / VALUE SECTION
Create 3 concise feature cards:
- 🗺️ Math Kingdom
  "Jelajahi dunia belajar dan temukan berbagai tantangan matematika."
- 🎯 Quest & Challenge
  "Selesaikan quest untuk menguji kemampuanmu dan mendapatkan XP."
- 🤖 Kibo, Teman Belajarmu
  "Dapatkan bantuan dan petunjuk belajar dari Kibo saat menghadapi soal."

Keep this section visually interesting but not too long.

4. MINI ADVENTURE / MATH KINGDOM PREVIEW
Create a visually engaging section introducing:
"Petualanganmu Dimulai di Math Kingdom"

Brief description that students can explore math quests such as:
- The Missing Numbers
- The Pizza Problem
- The Unknown X

Do NOT implement the actual quest functionality here.
This is only a preview/marketing section.

5. FINAL CTA
Short motivational section:
"Siap Memulai Petualangan?"
Button:
"Mulai Sekarang"
→ /login

6. FOOTER
Simple footer:
- EduVerse
- "Your Learning Adventure."
- Small copyright text
Do not add unnecessary links.

UX requirements:
- Responsive for desktop, tablet, and mobile
- Clear visual hierarchy
- CTA buttons should be obvious
- Good spacing and readable text
- Use hover/focus states
- Maintain sufficient contrast
- Use semantic HTML where appropriate
- Keyboard accessible buttons/links
- Avoid excessive animations
- If adding animations, keep them subtle and performance-friendly

Implementation requirements:
- Keep the page component clean and maintainable.
- Create reusable components if useful, such as Navbar, HeroSection, FeatureCard, and Footer.
- Keep components inside the existing frontend structure.
- Do not introduce unnecessary dependencies.
- Do not change package versions unless absolutely necessary.
- Do not modify backend files.
- Do not modify unrelated pages/files.
- Do not implement authentication yet.
- Use /login as the destination even if the Login page does not exist yet.

Important:
- The current frontend page may still contain the temporary backend health-check UI used during setup. Replace that temporary UI with the EduVerse Landing Page.
- Preserve the existing frontend setup and configuration.
- Do not delete useful project configuration files.
- Do not use remote image URLs just to make the page look better.
- If visual assets are needed, create the layout so local assets can be added later.

Quality check after implementation:
1. Run the appropriate lint/type checks.
2. Fix any TypeScript/ESLint errors caused by your changes.
3. Make sure the page runs correctly with the existing development command.
4. Check responsive behavior.
5. Summarize exactly which files were changed and what was implemented.

After completing the implementation, update the relevant AI Agent documentation in the repository so it records the actual Landing Page development task, decisions, files changed, and validation performed. Do not invent work that was not performed.

Implemented the EduVerse landing page.
Changed:
- [frontend/app/page.tsx]
- [frontend/components/LandingPage.tsx]
- [frontend/app/globals.css]
- [frontend/app/layout.tsx]
- [docs/ai-agent/development-notes.md]
Implemented navbar, hero, CSS-based Kibo illustration, value cards, Math Kingdom preview, final CTA, footer, responsive layout, accessible focus states, and /login navigation.

Validation passed:
- npm.cmd run lint
- npm.cmd run build
No backend files or package versions were changed.

### Prompt 02 — Landing Page Revision

Status: Planned

Prompt:
Revise the existing EduVerse Landing Page based on the current implementation.

IMPORTANT:
The current first-pass hero design already has a strong visual identity. DO NOT redesign the page from scratch.

The main problem with the current result is that the sections below the hero look too generic and AI-generated, similar to a typical SaaS landing page:
- too many white rounded cards
- excessive whitespace
- overly symmetrical layout
- generic emoji/icon feature cards
- not enough adventure/world-building feeling

The goal is to make the entire landing page feel visually consistent with the ORIGINAL HERO STYLE, not like a generic AI landing page.

## KEEP THE CURRENT HERO STYLE

Preserve the current hero's visual language:
- Large "Belajar Jadi Petualangan!" headline
- Navy + warm yellow/orange + light cream/blue palette
- Large Kibo illustration
- Adventure/game atmosphere
- Playful decorative shapes
- Strong visual composition
- Rounded elements are okay, but should not be overused
- Keep the existing navbar style
- Keep the main CTA "Mulai Petualangan"
- Keep the overall polished 2D cartoon/chibi direction

Do NOT replace the hero with a generic template.

## REDESIGN THE CONTENT BELOW THE HERO

Instead of generic SaaS-style feature cards, make the landing page feel like the introduction to an adventure world.

Desired storytelling structure:

### SECTION 1 — INTRODUCE MATH KINGDOM

Heading:
"Petualanganmu Dimulai di Math Kingdom"

Supporting text:
"Masuki kerajaan penuh teka-teki dan asah kemampuanmu melalui quest seru."

Make this section visually connected to the adventure theme.

Use a stronger visual composition instead of a plain white card.

Include the three quests as part of the world:

- The Missing Numbers
  Arithmetic / missing-number challenges

- The Pizza Problem
  Fractions

- The Unknown X
  Patterns and introductory algebra

These should feel like three destinations/quests in a game world, not three generic feature cards.

You can use visual badges, quest markers, paths, small illustrations, stars, flags, or other lightweight CSS-based decorative elements.

Do not use random external images.

### SECTION 2 — KIBO

Introduce Kibo as the friendly learning companion.

Suggested heading:
"Kenalan dengan Kibo"

Supporting message:
"Kibo siap menemanimu belajar, memberi petunjuk, dan membantu saat kamu menghadapi soal yang menantang."

Make this section visually character-driven.

If the current Kibo illustration can be reused, reuse it rather than creating another generic robot icon.

Avoid making this look like a standard "AI feature" SaaS section.

### SECTION 3 — FINAL CTA

Keep the final CTA, but make it feel like the beginning of an adventure rather than a generic marketing CTA.

Heading:
"Siap Memulai Petualangan?"

Supporting text:
"Yuk, mulai perjalanan belajarmu bersama Kibo."

Button:
"Mulai Sekarang →"

Navigate to:
`/login`

## VISUAL DIRECTION

The most important requirement:

The landing page should feel like ONE cohesive world.

Think:
- educational adventure game
- colorful 2D world
- playful exploration
- Math Kingdom
- Kibo as a companion
- quests and discoveries

NOT:
- SaaS startup landing page
- generic AI website
- corporate education platform
- collection of identical cards

Avoid excessive:
- white cards
- giant empty whitespace
- repeated rounded rectangles
- generic emoji icons
- perfectly symmetrical three-column layouts

Use visual storytelling, hierarchy, decorative shapes, paths, badges, world elements, and varied compositions where appropriate.

Keep the existing color palette and visual identity from the current hero.

## LAYOUT

The page should have a natural visual rhythm:

Hero
↓
Math Kingdom world/quest introduction
↓
Quest destinations
↓
Kibo companion section
↓
Final adventure CTA
↓
Footer

Do not make every section look like the same component repeated.

## RESPONSIVE

Maintain responsive behavior for:
- desktop
- tablet
- mobile

On mobile, preserve the adventure feeling and visual hierarchy without creating excessive vertical whitespace.

## TECHNICAL CONSTRAINTS

- Next.js App Router
- TypeScript
- Tailwind CSS
- Do not modify backend
- Do not add unnecessary dependencies
- Do not use remote image URLs
- Reuse existing components/assets where appropriate
- Keep code maintainable
- Do not modify unrelated pages

## IMPORTANT IMPLEMENTATION RULE

Before changing anything, inspect the current Landing Page implementation and preserve what is already working well.

This is a VISUAL REFINEMENT task, not a full rebuild.

After implementation:
1. Run lint/type checks.
2. Fix any errors caused by the changes.
3. Verify `/login` CTA links still work.
4. Verify responsive layout.
5. Summarize the files changed.
6. Summarize the visual changes.
7. Update the relevant AI Agent development documentation with the actual work performed and validation results.

Do not claim anything that was not actually implemented or tested.


Implemented the EduVerse landing page refinement.
Changed:
- Replaced generic feature cards with a Math Kingdom quest map.
- Added destinations:
  - The Missing Numbers
  - The Pizza Problem
  - The Unknown X
- Added character-focused “Kenalan dengan Kibo” section.
- Restyled the final CTA as an adventure signpost.
- Preserved hero design, navbar, Kibo illustration, palette, and /login CTA links.
- Updated [development-notes.md](E:/Lomba Hackathon/M-One Telkomsel Coding Competition 2026/eduverse-mone-2026/docs/ai-agent/development-notes.md).
Validation:
- npm.cmd run lint passed.
- npm.cmd run build passed.
- /login links are present, but no /login route currently exists in the project, so navigation will resolve to the Next.js not-found page until that route is added.
