# KodNestCareers Monorepo

## Overview
A unified placement platform aimed at integrating job tracking, placement readiness, and resume building into a coherent workflow.

## Structure
- **apps/web**: Next.js App Router frontend
- **apps/worker**: Node.js worker service for background jobs
- **packages/**: Shared libraries and domain modules (Modular Monolith architecture)

## Quick Start
1. **Install dependencies**:
   ```bash
   pnpm install
   ```
2. **Setup environment**:
   ```bash
   cp .env.example .env
   ```
3. **Start infrastructure**:
   ```bash
   docker-compose -f docker-compose.local.yml up -d
   ```
4. **Run development**:
   ```bash
   turbo run dev
   ```

## Documentation
- [PRD](./docs/prd/prd.md) (To be moved/linked)
- [Architecture](./docs/architecture)
