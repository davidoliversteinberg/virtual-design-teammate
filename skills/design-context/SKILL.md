---
name: design-context
description: Ground Optimizely product-design work in current products, users, voice, Axiom, and Figma evidence. Use alongside the design router and whenever an Optimizely product or cross-product experience is named. Do not use as a standalone deliverable skill.
metadata:
  version: "0.3.0"
  phase: spine
---

# Optimizely Design Context

Apply this context silently. Do not recite it unless it resolves a decision or the user asks.

## Evidence hierarchy

Use the strongest available evidence for the decision:

1. The user's stated job, constraints, and supplied source.
2. A supplied Figma node or file, fetched through Figma tools.
3. The current Axiom system, verified through connected Axiom tools or installed packages.
4. Nearby production-quality Optimizely surfaces and repository conventions.
5. Product-specific guidance in [`../design-review/references/optimizely-products.md`](../design-review/references/optimizely-products.md).
6. General product-design principles, labeled when they remain unverified locally.

Do not quote live component props, tokens, or current product behavior from memory when a connected source can verify them.

## Design system

Axiom V3 is the default source of truth for current Optimizely product components, semantic tokens, patterns, and icons unless the target surface explicitly uses another supported version.

- Prefer composing existing Axiom components over creating new primitives.
- A new shared component needs a demonstrated gap, an explanation of why composition is insufficient, and more than one credible consuming surface.
- When visible UI will be designed, built, or polished, route to `frontend-design` for its complete design and rendered-quality contract.

## Product and user context

Optimizely work spans CMS, CMP, DAM, Commerce Connect, Configured Commerce, OCP, ODP, Web Experimentation, Feature Experimentation, Analytics, Admin Center, Opal, and shared Optimizely One experiences.

Common user groups include:

- marketers and content editors who need safe, understandable authoring;
- merchandisers and commerce operators who need dense, efficient, scalable workflows;
- developers who judge a platform through precise configuration, logs, and recovery;
- administrators and IT teams managing permissions, provisioning, integration health, and auditability;
- leaders and analysts scanning trustworthy results before investigating details.

Enterprise conditions are normal: multi-tenant context, role-based access, long sessions, high data volumes, localization, asynchronous work, migration anxiety, and collaboration across products.

## Voice

Optimizely interface language is clear, confident, direct, and helpful. Use sentence case, consistent nouns, active verbs, and specific recovery. Do not use cute language at the user's expense or blame the user for system failures. Route string-level work to `ux-writing`.

## Safety and truthfulness

- Never use real customer data, credentials, or internal financial information in public examples or prototypes.
- Label assumptions and unavailable verification.
- A prototype is not production evidence; a static screen is not proof of keyboard, screen-reader, responsive, or asynchronous behavior.
