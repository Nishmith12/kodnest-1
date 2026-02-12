# KodNestCareers  
One Placement Platform for Discovery, Readiness, and Resume Excellence  

Confidential – Final Client Sign-off Version  
Document ID: PRD-KNC-001  
Version: 3.0 (Final)  
Date: February 11, 2026  

---

## Executive Summary

KodNestCareers is a unified placement platform combining:

- Job Notification Tracker  
- Placement Readiness Platform  
- AI Resume Builder  

It connects opportunity discovery, role-specific preparation, and ATS-ready resume generation into one workflow.

---

## Problem Statements

### Job Notification Tracker
Students miss opportunities due to scattered listings, duplicates, and non-personalized alerts.

### Placement Readiness
Students lack role-aligned preparation and round-specific tracking.

### AI Resume Builder
Resumes fail ATS due to weak relevance mapping and inconsistent formatting.

### Unified Suite
Disconnected tools cause context loss and duplicate effort.

---

## Market Overview

- Job portals: low relevance
- Interview prep: unstructured
- Resume tools: ATS inconsistent
- Workflow: fragmented

KodNestCareers unifies everything into one platform.

---

## System Architecture

Layers:

- Experience: Web UI, Dashboard  
- Application: API Gateway, Auth  
- Domain: Ingestion, Matching, Resume, Readiness  
- Data: DB, Event Bus, Storage  
- Ops: Logging, Metrics, CI/CD  

---

## High Level Design

### Job Tracker
- Source connectors  
- Parsing  
- Deduplication  
- Relevance scoring  
- Notifications  

### Placement Readiness
- JD analyzer  
- Round mapper  
- Checklist generator  
- Readiness score  

### Resume Builder
- Form engine  
- Templates  
- ATS scoring  
- PDF export  

### Suite
- Unified dashboard  
- Shared profile  
- Event sync  

---

## Low Level Design

### Job Tracker
JobPosting, JobMatch, JobTracking  

### Readiness
PrepPlan, PrepTask, RoundMap  

### Resume
Resume, ResumeSection, ATSAssessment  

### Suite
Shared profile + context propagation  

---

## Functional Requirements

### Platform

- Secure login (P0)
- Role based access (P0)
- Password recovery (P1)
- Profile management (P1)

### Job Tracker

- Scheduled ingestion (P0)
- Normalization (P0)
- Duplicate detection (P0)
- Relevance scoring (P0)
- Notifications (P1)
- Job states (P1)

### Placement Readiness

- JD ingestion (P0)
- Skill extraction (P0)
- Round mapping (P0)
- Personalized checklist (P1)
- Progress tracking (P1)

### Resume Builder

- Multi-step form (P0)
- ATS templates (P0)
- Live preview (P0)
- ATS score (P0)
- PDF export (P1)

### Suite Integration

- Shared profile (P0)
- Job context sync (P0)
- Unified dashboard (P1)
- Funnel analytics (P1)

---

## Non Functional Requirements

- API P95 < 800ms  
- PDF generation < 5s  
- Availability 99.5%  
- TLS encryption  
- Data encryption at rest  
- Audit logging  
- Horizontal scaling  
- WCAG 2.1 accessibility  

---

## Core Data Models

- User, Profile, Skill  
- JobPosting, JobMatch  
- Resume, ATSAssessment  
- PrepPlan, PrepTask  
- Notification, EventLog  

---

## Build Plan

### Phase 1 (10 weeks)
Core auth + baseline modules

### Phase 2 (8 weeks)
Ranking + reliability

### Phase 3 (8 weeks)
Personalization + analytics

---

## Testing

- Unit tests (80%+)  
- Integration  
- End-to-End  
- Performance  
- Security  
- UAT  

---

## Deployment

- CI/CD pipeline  
- Dev → QA → UAT → Production  
- Rolling deployments  
- Backups + restore drills  

---

## Security

- Role based access  
- PII minimization  
- Encryption  
- Incident response  

---

## Metrics

- MAU ≥ 70%  
- Applications +30%  
- Shortlists +20%  
- Checklist completion ≥70%  
- ATS uplift +15  
- Notifications ≥98% success  

---

## Risks

- Connector failures  
- Recommendation quality  
- AI inconsistency  
- Notification fatigue  

Mitigated via monitoring, guardrails, preferences.

---

## Acceptance Criteria

- Relevant job alerts  
- Job auto-links to resume + prep  
- ATS-ready PDF export  
- 4+ interview rounds checklist  
- Unified dashboard sync  
- NFR gates passed  

---

## Out of Scope

- Mobile apps  
- Auto job applications  
- ERP integrations  
- Real-time collaboration  

---

## Assumptions

- Job sources available  
- Email provider reliable  
- LLM available  
- Pilot cohort support  

---

## Final Sign Off

Product Manager  
Engineering Lead  
QA Lead  
Security Lead  
Client Stakeholder  

---

End of README
