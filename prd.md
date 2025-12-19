
# Product Requirements Document (PRD)

## 1. Overview
Shaqo-Wadaag is a localized job portal designed to bridge the gap between employers and job seekers in Somalia and the diaspora. It prioritizes simplicity, mobile accessibility, and bilingual support.

## 2. Target Audience
- **Job Seekers (Shaqo-raadiyeyaasha)**: Youth, professionals, and graduates looking for local or remote opportunities.
- **Employers (Shaxo-bixiyeyaasha)**: Local businesses in Mogadishu, Hargeisa, NGOs, and international firms operating in the region.

## 3. Functional Requirements
### 3.1 User Roles
- **Guest**: Can browse jobs but must sign up to apply.
- **Seeker**: Can create a profile, upload/enter CV data, search, filter, and apply for jobs.
- **Employer**: Can post jobs, manage listings, and view/contact applicants.

### 3.2 Key Features
- **Bilingual Interface**: Support for Somali and English.
- **Job Posting**: Title, description, salary (USD/SLSH), location (e.g., Banaadir, Puntland), requirements.
- **AI Matching**: Gemini-powered tool that ranks job relevance for seekers based on their skills.
- **Analytics Dashboard**: Visual charts for employers to see view counts and application trends.
- **Application Tracking**: Seekers can see the status of their submitted applications.

## 4. Technical Requirements
- **Frontend**: React 18, Tailwind CSS, Lucide Icons.
- **Data Visualization**: Recharts for dashboard analytics.
- **AI Engine**: Google Gemini (via `@google/genai`).
- **Persistence**: Simulated via `localStorage` for the demo.

## 5. Success Metrics
- Seamless transition between Somali and English UI.
- Fast loading times on mobile networks.
- Intuitive "One-Click Apply" flow.
