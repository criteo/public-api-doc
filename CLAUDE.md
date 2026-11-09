# CLAUDE.md

Context for AI-assisted work on this repository.

## Platform

This is a [Mintlify](https://mintlify.com) documentation site. Pages are MDX files. Navigation is configured in `docs.json`.

## API Reference — do not edit

The API Reference sections are **automatically refreshed every 24 hours via a GitHub Action** that pulls the latest OpenAPI Specification. Do not manually edit reference pages — changes will be overwritten on the next sync. If a reference page needs to change, the fix belongs in the OAS, not here.

## API Versioning Policy

Criteo Retail Media API releases twice a year: end of January and end of July.

| Version | Status |
|---|---|
| `2026-07` | Current stable — use in all curl examples |
| `2027.01-rc` | Release candidate |
| `2027.07-rc` | Release candidate |
| `2027.01` | Next stable (~January 2027) |

## Workflow Guide Template

New API Workflow guides must follow the template at `retail-media/docs/_workflow-template.mdx`. The leading underscore keeps it out of the published nav.

**Structure:** frontmatter → one-sentence outcome statement → Prerequisites → numbered Steps (one curl per guide, requests only) → Verify → Constraints

**Reference examples to consult:**

| Pattern | Example file |
|---|---|
| Async (submit / poll / download) | `retail-media/docs/performance-report.mdx` |
| Sync single-step | `retail-media/docs/real-time-performance-api.mdx` |
| Multi-step with error callouts | `retail-media/docs/retailer-budgets.mdx` |
| Legacy rewrite (before/after) | `retail-media/docs/retailer-search.mdx` |

**Key rules:**
- Guides document workflows, not endpoints. The API Reference covers individual endpoints — do not duplicate field tables here.
- One curl example per guide (the most important request in the flow). Requests only — no response examples.
- Verify section is required: name the specific field and value that confirms success.
- Prerequisites section is required: auth scope, required IDs, and any resource that must exist before the first call.
