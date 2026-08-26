---
name: frontend-design
description: >
  Design, build, or polish visible Optimizely product UI with explicit interaction-model
  selection, strong composition, readable typography, disciplined content and actions,
  Axiom-aware implementation, responsive rendering, and scored visual-quality validation.
  Use for making or changing interfaces; use design-review instead when the user only wants critique.
metadata:
  version: "0.5.1"
  phase: make
---

# Optimizely Frontend Design

Use this skill for every visible product-UI design, implementation, or polish task. It is the authority for the made interface: product-design judgment comes first, Axiom implementation second, and rendered verification last.

The target is calm, premium, intelligent, restrained, operational, enterprise credible and recognizably Optimizely. Do not import a generic creative-UI aesthetic, marketing-page novelty or maximalism into product surfaces.

## Weekly skill freshness check

At the start of the first `frontend-design` task in a session, run `node <this-skill-directory>/scripts/check-for-updates.mjs`. The helper persists its last attempt and contacts the canonical GitHub source no more than once every seven days.

- If it reports an update, tell the user the installed and available versions before continuing the design task.
- Never download, merge, or overwrite skills automatically. Update only with explicit user approval, preserving repository-level instructions and project-pinned adaptations.
- A cached result or unavailable network must not block the design task. State an unavailable check briefly only when the user asks about installation freshness.
- Use `--force` only when the user explicitly asks to check now or troubleshoot installation freshness.

## Supporting-skill routing

Remain the lead for the made interface. Load `design-context` silently, then add only the specialists whose contribution is material:

- Load `design-review` first when the user wants an existing artifact diagnosed and changed. Preserve its prioritized findings, then resume here for implementation.
- Load `flows-and-states` when the work adds branching, permissions, loading, empty, error, success, async or recovery states.
- Load `enterprise-patterns` for tables, filters, bulk actions, permissions, settings, wizards, connectors or audit logs.
- Load `interaction-patterns` for forms, search, onboarding, feedback, loading or micro-interactions.
- Load `ux-writing` whenever visible interface strings, terminology, status, confirmation, empty-state or recovery language changes.
- Load `accessibility` for new or materially changed interaction, keyboard, focus, contrast, announcement or reduced-motion behavior, and for every requested WCAG audit.
- Load `developer-handoff` only when the requested output includes implementation notes or acceptance criteria for another team.

Do not load a sibling merely to repeat generic advice. The supporting skill owns its specialist decision; this skill owns the integrated interface and completion gate. If a needed specialist is unavailable, apply the essential requirement, name the missing verification and continue when safe.

## Mandatory reading

For every visible UI task, read in this order:

1. [`references/interaction-and-composition.md`](references/interaction-and-composition.md) — interaction model, focal point, composition, typography, density, content, actions and surfaces.
2. [`references/acceptance-and-geometry.md`](references/acceptance-and-geometry.md) — explicit acceptance criteria, systemic scope, visible-boundary measurement and correction-loop discipline.
3. [`references/visual-quality-gates.md`](references/visual-quality-gates.md) — scored rendered-quality gate, accessibility, responsiveness and automatic failures.

Then read only the references that apply:

- [`references/axiom-evidence-and-compliance.md`](references/axiom-evidence-and-compliance.md) whenever the interface will use Axiom or claim Axiom compliance. It makes live component retrieval, Figma-to-code reconciliation and post-implementation proof mandatory.
- [`references/axiom-v3-implementation.md`](references/axiom-v3-implementation.md) before writing or reviewing Axiom Play product UI code. Outside Axiom Play, apply its Axiom principles but defer repository paths and local wrappers to the target codebase.
- [`references/editorial-surfaces.md`](references/editorial-surfaces.md) for DAM, Brand Packs, imagery, typography, logos, color systems, templates or other visual subjects.
- [`references/visual-reference-analysis.md`](references/visual-reference-analysis.md) whenever a screenshot, mockup or prototype is supplied.
- [`references/motion-rules.md`](references/motion-rules.md) when motion, transitions, loading, panels, menus or animated state changes are involved.

A Figma link or node ID is a different kind of input than a prose description or a screenshot from an unspecified source: it is fetchable ground truth for exact spacing, typography and component composition, not just interaction intent. When one is supplied, fetch it (`get_design_context`, `get_variable_defs`, `get_screenshot`) before the design brief below, and build to it 1:1 — do not substitute a screenshot-derived approximation or prior judgment call once the actual node is available.

The target repository's build, CSS, navigation, file architecture, and git rules remain authoritative. Product-domain rules and Opal-specific layers are additive; they do not override the design-quality contract.

## Required design sequence

Do not start with components. Before coding, write a compact internal design brief:

1. **User decision:** what must the user understand, judge or do?
2. **Primary interaction model:** choose queue, grid, table, master-detail, editor, comparison, dashboard, or focused modal/sheet; explain why it fits in one sentence.
3. **Composition:** name the dominant, supporting and utility regions; define the first three stops in the reading order and the purpose of any quiet space.
4. **Content budget:** remove repeated status, metadata and controls; decide what is progressively disclosed.
5. **Type and action hierarchy:** identify readable body copy, limited metadata, and the one primary action for the current scope (or intentionally none).
6. **Surface plan:** choose open space, separators, cards, panels, drawers or modals because of workflow boundaries—not because they are convenient containers.

If these choices are unclear, inspect nearby production-quality screens and the supplied positive references before implementation.

## Product-design contract

- One task owns the surface and one region owns the user's attention.
- Page-level hierarchy is established before component-level styling.
- Typography, alignment and spacing carry hierarchy before badges, borders or color.
- Large work surfaces use readable body type. Never shrink text to make excessive content fit.
- Caption and monospaced uppercase text are specialized styles, not default section labels.
- Density is localized. A dense operational panel may sit beside a quiet workspace; the entire page must not feel equally dense.
- Green is selective: one filled primary action at most per visible decision scope, never repeated bright-green row/card actions, and never as a selected filter treatment.
- Visual inspection surfaces give the subject enough scale to judge. Configuration surfaces favor narrow, predictable form structure.
- A drawer stays secondary and brief. Promote deep comparison or complex review into a workspace with enough width.
- Screenshots provide relationships and quality evidence. Extract requirements; do not copy prototype defects or incidental dimensions.

The detailed rules and positive alternatives live only in the references above. Do not recreate parallel doctrine in feature files or other skills.

## Implementation contract

After the design brief:

- Inspect nearby live routes and reusable components.
- Implement with the applicable Axiom authority and target-repository rules. For Axiom work, complete the component evidence record before coding.
- Preserve semantic tokens, spacing tokens, icon-package rules, form/menu rules, dark mode, accessibility and file boundaries.
- Do not invent a design-system primitive, generic wrapper or component infrastructure until live lookup and installed-package inspection prove there is no suitable component or documented composition. A shared wrapper also needs repeated product use or explicit user scope.
- Never leave dead controls or claim behavior that is not implemented.
- Do not extend a monolithic file; split concerns before adding behavior.

## Completion contract

Visible UI work is incomplete until it is rendered at the primary desktop width and at least one narrower width, compared against the design intent/reference, and scored with `visual-quality-gates.md`.

Every explicit user correction remains a blocking acceptance criterion until the exact route, object, state and viewport pass against the visible rendered boundary. A prior pass is revoked when the user reports that the defect remains. Do not substitute a similar component, route or state, and do not use computed styles or invisible layout bounds to overrule contradictory pixels.

Minimum passing score: **17/20 with no zero and no automatic failure**. TypeScript, lint, route `200`, or component compliance alone never proves visual quality.

For Axiom work, completion also requires the postflight in `axiom-evidence-and-compliance.md`: verify every changed compound or interactive component against live documentation and the installed package, run the repository's deterministic Axiom check when available, and report any exception or unverifiable mapping.

If browser or screenshot verification is unavailable, state that explicitly and do not claim the UI is visually verified.

In the completion report, name the supporting skills that materially contributed, summarize the Axiom/Figma/repository/browser evidence actually inspected, and separate verified outcomes from remaining assumptions or unavailable checks.
