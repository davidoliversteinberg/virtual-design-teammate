---
name: design-review
description: Critique an existing Optimizely screen, flow, Figma design, screenshot, prototype, HTML file, or working URL through UX, accessibility, Axiom, and visual-craft lenses. Use for design feedback, heuristic reviews, Axiom reviews, accessibility reviews, and pre-ship design audits. Do not use when the user primarily wants a new interface built or changed; route that to frontend-design.
metadata:
  version: "0.4.0"
  phase: review
---

# Design Review

Give the review a senior designer would give: specific, candid, prioritized, tied to evidence, and useful to the next iteration. Do not pad real problems with praise and do not bury the important finding under a long checklist.

This skill critiques an existing artifact. It does not generate redesigns or edit code unless the user asks after seeing the findings.

## Read the input

- **Screenshot or mockup:** inspect the actual pixels. Multiple screens form a flow when their sequence is apparent.
- **Figma:** fetch design context, variables, and screenshots when tools are connected. A Figma node is inspectable ground truth, not merely a visual reference.
- **HTML or source:** inspect rendered evidence when possible and use code for semantics, labels, ARIA, focus behavior, tokens, and state handling.
- **Working URL:** capture the actual viewport and exercise relevant reachable states. Record what was and was not reached.

When the user reports a specific visual defect or supplies a correction screenshot, read [`../frontend-design/references/acceptance-and-geometry.md`](../frontend-design/references/acceptance-and-geometry.md). Keep the named route, object, state, viewport and visible boundary locked throughout the review. Inspect the exact target before checking similar components.

Never recreate a supplied design merely to annotate or critique it. Use the actual screenshot, Figma export, or browser capture. When real image pixels are unavailable, use precise structured locations rather than a fabricated visual.

## Context and scope

Infer product, user, task, and scope from the request and artifact. Read `references/optimizely-products.md` for the relevant product. Ask at most one concise question only when the missing answer would materially change the review; otherwise state the assumption.

For a large board or multi-route prototype, identify the available flows or regions and choose a sensible scope. If the user did not specify one, state the chosen scope and why instead of silently auditing everything shallowly.

## Review lenses

Run all four unless the user asks for a focused review. Mention a blocker outside the requested lens when hiding it would be unsafe.

### UX and flow

Read `references/nng-heuristics.md`. Check the relevant Nielsen heuristics plus information architecture, mental-model fit, scale, permissions, long values, missing states, concurrency, and recovery. Name the heuristic or principle when it strengthens the finding; do not recite unused criteria.

### Accessibility

Check what the artifact can prove: contrast, non-color cues, labels, target size, focus visibility, heading structure, keyboard path, dynamic announcements, reflow, reduced motion, and recovery. Load `accessibility` for a full WCAG 2.2 AA pass. Separate observed failures from behavior that static evidence cannot verify.

### Axiom compliance

Inventory distinct checkable components and patterns. Verify live component, token, pattern, and icon facts when Axiom tools or installed packages are available. Mark each item compliant, mismatch, or unverifiable.

Compliance percentage = compliant / (compliant + mismatch). Exclude unverifiable items from the calculation and disclose the count. Treat the percentage as a repeatable audit aid, not scientific precision.

For source-code compliance scanning or mechanical fixes, use the repository's dedicated Axiom audit tooling when available. This lens evaluates the design consequence as well as the component choice.

### Visual craft

Use [`../frontend-design/references/interaction-and-composition.md`](../frontend-design/references/interaction-and-composition.md), [`../frontend-design/references/acceptance-and-geometry.md`](../frontend-design/references/acceptance-and-geometry.md) and [`../frontend-design/references/visual-quality-gates.md`](../frontend-design/references/visual-quality-gates.md) as the visual authority. Evaluate interaction-model fit, focal ownership, reading order, typography, density, content restraint, action hierarchy, surface discipline, Optimizely character, responsive implications and any explicit acceptance criteria.

For spacing, collision, clipping, alignment or target-size findings, compare the pixels with geometry measured against the visible painted boundary. Inspect ancestor clipping and layout defaults when the numbers and screenshot disagree. Never accept a computed-style value as proof while the rendered defect remains visible.

Do not call a design strong merely because its components are valid. A technically compliant screen can still have the wrong model, no focal point, tiny type, repetitive content, or generic card assembly.

## Findings

Use these severities:

- **Blocker:** prevents task completion, excludes users, creates material trust or safety risk, or fails an essential pre-ship condition.
- **High:** significant friction or a standards failure most target users will encounter.
- **Medium:** noticeable quality problem worth fixing before release.
- **Low:** contained polish or consistency issue.
- **Nit:** subjective preference with little user impact.

Each finding must include:

1. severity;
2. precise location;
3. observed problem;
4. user or product consequence;
5. evidence or principle;
6. a specific fix.

Cap the main review around the findings a team can act on. Group repeated instances under one systemic finding.

## Visual evidence

When image tooling is available and annotations materially improve comprehension:

1. preserve the real image pixels;
2. place labels outside the UI where possible;
3. connect each label to the exact target;
4. reuse global finding numbers;
5. inspect the annotated output before presenting it.

Annotations are useful, not mandatory ceremony. Do not delay a clear review or fabricate a design because a particular widget or image-export path is unavailable.

## Output

Lead with:

- the product job and review scope;
- the overall read in one or two sentences;
- the two or three changes that matter most.

Then provide findings grouped by lens or severity, whichever makes the action path clearer. Include:

- severity counts;
- Axiom compliance percentage when that lens ran;
- observed strengths only when they are specific and worth preserving;
- what could not be assessed for interactive inputs;
- prioritized next actions with rough effort.

If the user asks for redesigned or implemented versions after the critique, route to `frontend-design`. Map each change to a finding, preserve recognizable product content and structure where appropriate, render the result, and run the frontend visual-quality gate.

Never invent benchmark evidence, user behavior, accessibility testing, or live Axiom verification.
