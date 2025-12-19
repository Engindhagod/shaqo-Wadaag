
# Development Plan - Shaqo-Wadaag

Shaqo-Wadaag is a modern, AI-enhanced job platform tailored for the Somali market.

## Phase 1: Foundation & Core Layout
- Define global types (User, Job, Application) in `types.ts`.
- Set up a clean, responsive layout with a bilingual header (Somali/English).
- Implement a simulated authentication system to switch between "Seeker" and "Employer" views.

## Phase 2: Job Search & Listing
- Create a searchable job feed with filters (Location: Banaadir, Hargeisa, etc.).
- Build detailed job cards showing salary, requirements, and "Apply" functionality.
- Mock initial data for immediate interactivity.

## Phase 3: Employer Workflow
- Build a job posting form with Somali/English fields.
- Develop an employer dashboard to view applicants and track posting performance using Recharts.

## Phase 4: Seeker Workflow
- Profile management: Skills entry and basic CV summary.
- Dashboard for tracked applications and saved jobs.

## Phase 5: AI Integration (Gemini)
- Implement `geminiService.ts` using `gemini-3-flash-preview`.
- Feature 1: **AI Match Rating** - Compare a seeker's profile to a job description.
- Feature 2: **CV Summarizer** - Help seekers polish their "About Me" section.
- Feature 3: **Job Description Generator** - Assist employers in writing clear job posts.

## Phase 6: Refinement & UX
- Mobile-first responsiveness audits.
- Polish animations and transitions with Tailwind CSS.
- Ensure cross-browser compatibility.
