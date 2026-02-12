# Architecture Overview

This document explains the high-level architecture of the KodNestCareers platform, following the "Modular Monolith" pattern with a separate Worker service.

## 1. Monorepo Structure

We use a **Monorepo** (controlled by `pnpm` and `turbo`) to keep all code in one place. This allows sharing code easily between the backend, frontend, and worker services without publishing to npm.

### 📂 Apps (Deployable Services)

- **`apps/web` (Next.js)**:
  - This is the **User Interface**.
  - Users interact with this to view jobs, build resumes, and check readiness.
  - It talks to the database directly for simple reads/writes (via Server Actions/APIs).
  - For heavy tasks (like parsing a resume or scraping jobs), it sends a message to the **Queue** (Redis).

- **`apps/worker` (Node.js)**:
  - This is the **Background Processor**.
  - It does the heavy lifting:
    - **Scraping**: Fetching jobs from LinkedIn/Naukri.
    - **AI Processing**: analyzing resumes, generating cover letters.
    - **Notifications**: Sending emails.
  - It listens to the **Queue** (Redis) and processes jobs one by one.

### 📦 Packages (Shared Code)

These are shared libraries used by both `web` and `worker`.

- **`packages/db`**:
  - Contains the **Prisma Schema** (database definition).
  - Both `web` and `worker` import this to talk to the PostgreSQL database.

- **`packages/modules`**:
  - The core **Business Logic**.
  - Instead of writing logic inside Next.js or the Worker, we write it here.
  - Example: `auth-profile`, `job-tracker`.
  - This keeps our code clean and reusable.

- **`packages/ai-gateway`**:
  - A smart wrapper for AI Models (OpenAI, HuggingFace, Groq).
  - It handles **cost management** and **fallbacks** (e.g., if one model fails, try another).

- **`packages/events`**:
  - Defines the **events** that happen in the system (e.g., `USER_REGISTERED`, `JOB_PARSED`).
  - Helps decouple different parts of the app.

## 2. System Flow (The "Why")

1.  **User Action**: A user uploads a resume on the **Web App**.
2.  **API Layer**: The Web App saves the file and adds a task to the **Redis Queue**.
3.  **Worker**: The Worker service picks up the task.
4.  **AI Processing**: The Worker uses `packages/ai-gateway` to analyze the resume.
5.  **Result**: The Worker saves the result to **PostgreSQL**.
6.  **Notification**: The User sees the result on the Dashboard.

## 3. Infrastructure (Local)

- **PostgreSQL**: Main database.
- **Redis**: Queue for background jobs.
- **Mailpit**: Fake SMTP server to test emails locally.
