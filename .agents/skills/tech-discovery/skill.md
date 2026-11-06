# Technical Discovery

## Objective

Build and maintain an accurate technical understanding of the repository.

Focus on discovering:

- What technologies are used.
- How the system is structured.
- How the application is executed.
- How services communicate.
- How data is stored and managed.
- How deployments are performed.
- How developers work locally.
- What external systems and third-party services are used.
- What architectural and design patterns are present.

Store verified technical knowledge under:

.agents/skills/references/technical-overview.md

The goal is not to describe every implementation detail.

The goal is to provide a reusable technical overview for future engineers.

---

# 1. Discovery Principles

- Understand the repository before inspecting individual files.
- Follow actual execution paths when possible.
- Prefer evidence over assumptions.
- Read existing technical-overview.md before starting.
- Reuse existing project knowledge.
- Focus on stable technical characteristics.
- Ignore temporary implementation details.
- Trace runtime behavior, not only file structure.
- Distinguish between confirmed architecture and inferred architecture.

---

# 2. Discovery Workflow

## Step 1: Repository Overview

Identify:

- Repository purpose
- Repository type
- Monolith, modular monolith, microservice, lambda service, frontend, backend, library, CLI, etc.
- Entry points
- Main modules
- Important directories
- Repository boundaries

Discover:

- README
- ADRs
- docs/
- architecture documentation

---

## Step 2: Technology Stack

Identify:

### Languages

Examples:

- TypeScript
- JavaScript
- Python
- Java
- Kotlin
- Go

### Frameworks

Examples:

- NestJS
- Express
- Spring Boot
- FastAPI
- ASP.NET

### Runtime

Examples:

- Node.js
- JVM
- Python Runtime

### Package Management

Examples:

- npm
- pnpm
- yarn
- maven
- gradle

Record versions whenever available.

---

## Step 3: Development Workflow

Discover:

### Prerequisites

Examples:

- Node.js version
- npm version
- Docker
- PostgreSQL
- AWS CLI

### Common Commands

Identify commands for:

- Install
- Start
- Start Dev
- Build
- Test
- Lint
- Format
- Migration
- Seed
- Deployment

Sources:

- package.json
- Makefile
- README
- scripts
- CI files

---

## Step 4: Repository Structure

Identify:

- Main directories
- Major modules
- Shared libraries
- Common utilities
- Domain boundaries

Produce a repository map.

Examples:

src/modules/device

src/modules/session

src/modules/gridx

src/common

---

## Step 5: API Discovery

Identify:

### API Style

- REST
- GraphQL
- gRPC
- WebSocket
- Event-driven

Discover:

- API entry points
- Public contracts
- Controllers
- Resolvers
- Gateways

Document exposed interfaces.

---

## Step 6: Database Discovery

Identify:

### Database Technologies

Examples:

- PostgreSQL
- MySQL
- DynamoDB
- MongoDB

### Persistence Frameworks

Examples:

- TypeORM
- Prisma
- Sequelize

Discover:

- Main entities
- Relationships
- Ownership
- Source of truth

Focus on domain-level structure.

Do not document every column.

---

## Step 7: Infrastructure Discovery

Identify:

### Infrastructure

- Docker
- Docker Compose
- Kubernetes
- ECS
- Lambda
- EventBridge
- SNS
- SQS
- API Gateway

Discover:

- Runtime architecture
- Deployment architecture
- Environment separation

Sources:

- docker-compose
- Dockerfile
- terraform
- cloudformation
- serverless configs
- CDK
- CI/CD pipelines

---

## Step 8: Integration Discovery

Identify:

### Internal Systems

### External Systems

### Third-Party Providers

Examples:

- Salesforce
- GridX
- Auth0
- Firebase
- Stripe

Document:

- Purpose
- Communication protocol
- Authentication method

Document only verified integrations.

---

## Step 9: Architecture Discovery

Identify:

### Architecture Style

Examples:

- Layered Architecture
- Hexagonal Architecture
- Event-Driven Architecture
- CQRS
- DDD
- Microservices
- Serverless

### Design Patterns

Examples:

- Repository Pattern
- Factory Pattern
- Strategy Pattern
- Dependency Injection

Only record patterns supported by evidence.

---

## Step 10: Runtime Flow Discovery

Identify important execution paths.

Examples:

Request Flow

Client
→ API
→ Service
→ Repository
→ Database

Event Flow

Producer
→ SNS
→ SQS
→ Lambda
→ Consumer

Trace actual execution paths where possible.

---

## Step 11: Validation

Validate findings using:

- Documentation
- Source code
- Tests
- Configuration
- Infrastructure files
- CI/CD configuration

Classify findings as:

### Confirmed

Evidence directly available.

### Inferred

Strong evidence but not explicitly documented.

### Unknown

Insufficient information.

If evidence conflicts:

- Document the discrepancy.
- Do not silently choose one source.

---

# 3. Knowledge Synchronization

After discovery:

Create or update:

.agents/skills/references/technical-overview.md

Update existing knowledge when appropriate.

Preserve existing manual content.

Avoid duplication.

Store only reusable knowledge.

Do not store:

- Debug sessions
- Temporary findings
- One-off investigation notes
- Line-by-line code analysis

---

# 4. Technical Overview Structure

Generate the following sections.

# Repository Summary

## Project Purpose

## Repository Type

## Main Responsibilities

---

# Technology Stack

## Languages

## Frameworks

## Runtime

## Package Management

---

# Development Workflow

## Prerequisites

## Install

## Start

## Build

## Test

## Lint

## Migration

---

# Repository Structure

## Important Directories

## Entry Points

## Recommended Reading Order

---

# API Architecture

## API Style

## Public Interfaces

---

# Data Architecture

## Databases

## Main Entities

## Persistence Layer

---

# Infrastructure

## Deployment

## Runtime Architecture

## Environments

---

# Integrations

## Internal Systems

## External Systems

## Third-Party Providers

---

# Architecture Patterns

## Architecture Style

## Design Patterns

---

# Runtime Flows

## Request Flows

## Event Flows

Include Mermaid diagrams when useful.

---

# Technical Risks

---

# Open Questions

---

# Needs Verification

---

# Knowledge Changes

- Files Created
- Files Updated
- Major Findings
