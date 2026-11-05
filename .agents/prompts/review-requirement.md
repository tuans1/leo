---
name: requirement-review
description: Analyze business requirements, Jira tickets, user stories, feature requests, and technical specifications before implementation. Identify business intent, affected workflows and system components, propose implementation approaches, and surface risks, assumptions, dependencies, and unanswered questions. Use when reviewing a requirement or planning a change before coding.
user-invocable: true
---

# Requirement Review

## Objective

Understand and evaluate a requirement before implementation.

The goal is to determine:

- What business problem needs to be solved and why.
- What behavior is expected to change.
- Which business workflows and technical components may be affected.
- What implementation approach fits the existing system.
- What risks, dependencies, and edge cases need attention.
- What information must be clarified before implementation.

This skill is for analysis and planning. Do not implement code or modify application behavior unless explicitly requested.

## Core Principles

### 1. Understand Business Intent First

Do not jump directly from a ticket description to a technical solution.

Understand the business objective, expected outcome, affected users, and acceptance criteria first.

Distinguish between:

- **Explicit requirements:** Directly stated in the ticket or specification.
- **Implicit requirements:** Reasonable implications of the stated requirements.
- **Assumptions:** Interpretations that have not been confirmed.
- **Unknowns:** Information that is missing or cannot be determined.

Never present assumptions as confirmed business rules.

### 2. Use Existing Project Knowledge

Use existing project documentation before investigating implementation details.

Relevant references may include:

- `.agents/skills/references/business.md`
- `.agents/skills/references/architecture.md`
- `.agents/skills/references/database.md`
- `.agents/skills/references/integrations.md`
- `.agents/skills/references/workflows.md`
- `.agents/skills/references/technical-overview.md`

Do not read every reference file for every requirement.

Select documents based on the requirement:

- Business rules or domain behavior → `business.md`
- System structure or service boundaries → `architecture.md`
- Data models or persistence → `database.md`
- External APIs, events, or service dependencies → `integrations.md`
- End-to-end business processes → `workflows.md`
- Technology, infrastructure, Lambda functions, and deployment → `technical-overview.md`

If a reference is missing or insufficient, inspect the relevant source code and configuration.

Treat project documentation and source code as evidence, not unquestionable truth. If they conflict with the requirement or with each other, report the discrepancy instead of silently choosing one.

### 3. Follow Evidence-Based Analysis

Use the following confidence levels when reporting findings:

- **Confirmed:** Explicitly stated in the requirement or verified from relevant project evidence.
- **Inferred:** A reasonable conclusion based on available evidence, but not explicitly confirmed.
- **Unknown:** Insufficient information to reach a reliable conclusion.

When describing technical impact, identify the evidence behind important conclusions where practical, such as relevant modules, functions, APIs, events, or configuration files.

Do not claim that a component is affected merely because its name appears related to the requirement.

### 4. Respect Existing Architecture

Prefer existing architectural patterns, conventions, and technologies.

Do not introduce new abstractions, services, dependencies, or design patterns without a clear justification.

Keep the analysis proportional to the requirement. A small change does not need an unnecessarily complex architecture proposal.

---

# Analysis Workflow

## Step 1: Understand the Requirement

Extract and summarize:

- Business objective
- Problem being solved
- Expected behavior
- Expected outcome
- Acceptance criteria
- Explicit requirements
- Implicit requirements
- Assumptions and unknowns

Determine what success looks like from the business and user perspectives.

If the ticket is ambiguous, identify the specific ambiguity rather than guessing.

## Step 2: Classify the Change

Identify one or more relevant categories:

- New Feature
- Enhancement
- Bug Fix
- Refactoring
- Infrastructure
- Security
- Compliance
- Migration
- Data Change
- Integration Change
- Performance or Reliability

Classification is only a way to guide the analysis. Do not spend excessive effort on categorization.

## Step 3: Analyze Business and Workflow Impact

Identify:

- Affected users and stakeholders
- Affected business domains
- Affected business rules
- Affected workflows
- Changes to existing user behavior
- Upstream and downstream business effects

For each relevant workflow, describe:

1. Trigger or starting condition.
2. Main processing steps.
3. Business rules involved.
4. Expected behavior after the change.
5. Important failure scenarios or alternative paths.

Focus only on workflows relevant to the requirement.

Generate a Mermaid diagram when it helps explain a complex workflow or interaction. Do not generate diagrams unnecessarily.

## Step 4: Analyze Technical Impact

Inspect the relevant parts of the repository and identify potentially affected components.

Consider the following areas when applicable:

### Application Components

- Modules and services
- Functions and handlers
- APIs and endpoints
- Internal service communication
- Event producers and consumers

### Data

- Entities and data models
- New or modified fields
- Data ownership and source of truth
- Data consistency and synchronization
- Migration and backward compatibility

### Integrations

- Internal and external services
- API and event contracts
- Authentication and authorization
- Data mapping
- Retry and failure handling

### Infrastructure and Runtime

- Infrastructure configuration
- IAM permissions
- Lambda triggers and event sources
- Environment variables and secrets
- Networking and AWS resources
- Timeout, concurrency, and resource constraints

Only include areas that are relevant.

For each identified impact, explain:

- What may change.
- Why it is affected.
- What should be inspected or verified.

Distinguish between a confirmed impact and a potential impact that still requires investigation.

## Step 5: Evaluate Implementation Approaches

Propose an implementation approach based on the requirement and existing architecture.

Include:

- Recommended approach
- Main components or workflows involved
- Important implementation considerations
- Alternative approaches, if there are meaningful alternatives
- Trade-offs and reasons for the recommendation

Consider:

- Compatibility with existing behavior
- Maintainability
- Performance and scalability
- Data consistency
- Reliability and failure handling
- Security and permissions
- Impact on existing integrations

Avoid presenting multiple artificial alternatives when one straightforward approach is clearly appropriate.

Do not write implementation code unless explicitly requested.

## Step 6: Identify Risks and Edge Cases

Identify risks that could affect correctness, reliability, security, or existing behavior.

Consider relevant scenarios such as:

- Missing or invalid data
- Duplicate requests or events
- Concurrent updates and race conditions
- Partial failures
- Retry behavior and idempotency
- Event ordering
- Permission or authentication failures
- Backward compatibility
- Data inconsistency
- Existing consumers affected by contract changes

For AWS Lambda or event-driven systems, consider asynchronous retries, duplicate event delivery, dead-letter queues, visibility timeouts, and message processing failures when applicable.

Do not list generic risks that have no meaningful connection to the requirement.

## Step 7: Identify Dependencies and Missing Information

Identify information that must be clarified before implementation.

Prioritize questions about:

- Ambiguous business rules
- Missing acceptance criteria
- Expected behavior in exceptional scenarios
- Data ownership and lifecycle
- Integration contracts
- Permissions and security requirements
- Compatibility expectations
- Dependencies on other teams, services, or releases

Separate questions into:

- **Blocking:** Must be clarified before implementation can proceed safely.
- **Non-blocking:** Can be clarified during implementation or testing.

Do not ask questions that can already be answered from available project evidence.

## Step 8: Assess Effort and Confidence

Provide a rough effort assessment:

- **Small:** Limited scope, localized changes, few dependencies.
- **Medium:** Multiple components or workflows, moderate testing or integration impact.
- **Large:** Cross-service changes, complex business logic, data migration, infrastructure changes, or significant uncertainty.

Explain the main factors behind the assessment.

This is a preliminary scope assessment, not a precise delivery estimate. Highlight uncertainties that could change the estimate.

---

# Output Format

Adapt the report to the complexity of the requirement. Keep it concise for straightforward changes and provide more detail for complex or cross-system changes.

## 1. Requirement Summary

- **Ticket Type:**
- **Business Objective:**
- **Expected Behavior:**
- **Success Criteria:**

Summarize the requirement in clear language without repeating the original ticket verbatim.

## 2. Business and Workflow Impact

- **Affected Users / Stakeholders:**
- **Affected Business Domains:**
- **Affected Business Rules:**
- **Affected Workflows:**
- **Expected Behavior Changes:**

Include a workflow diagram only when useful.

## 3. Technical Impact

Summarize relevant impacts by area:

- **Application Components:**
- **APIs / Events:**
- **Data / Database:**
- **Integrations:**
- **Infrastructure / Runtime:**

For each important impact, explain the reason and identify relevant files, functions, or modules when available.

## 4. Proposed Implementation

- **Recommended Approach:**
- **Key Implementation Considerations:**
- **Alternative Approaches:** Only when meaningful.

## 5. Risks and Edge Cases

List specific risks and scenarios that should be considered during implementation and testing.

## 6. Dependencies and Open Questions

Separate questions into:

- **Blocking Questions**
- **Non-blocking Questions**

Identify external dependencies when applicable.

## 7. Effort Assessment

- **Estimated Scope:** Small / Medium / Large
- **Reasoning:**
- **Estimation Uncertainty:**

## 8. Suggested Investigation Paths

List only the most relevant next steps:

- Files or modules to inspect
- APIs or event flows to trace
- Business rules to confirm
- Integrations or infrastructure to verify
- Tests or scenarios to validate

## 9. Confidence and Assumptions

Summarize important findings using:

- **Confirmed**
- **Inferred**
- **Unknown**

Explicitly call out assumptions that could change the proposed solution.

---

# Boundaries

- Do not implement the requirement unless explicitly requested.
- Do not modify application source code, infrastructure, or deployment configuration.
- Do not invent business rules or acceptance criteria.
- Do not assume current code behavior is necessarily the intended business behavior.
- Do not treat undocumented behavior as proof that a requirement is invalid.
- Do not perform a full repository discovery when the requirement only affects a limited area.
- Do not duplicate existing project documentation in the report.
- Do not update persistent project references merely because a requirement is being analyzed. Update them only when a verified, lasting change in project knowledge has been established and the relevant knowledge-maintenance process allows it.
- Clearly distinguish confirmed facts, technical inferences, assumptions, and unresolved questions.

The final output should help a developer, BA, or PO understand the requirement, agree on its scope, and make an informed implementation decision before coding.
