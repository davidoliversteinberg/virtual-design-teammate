# Frontend Designer user guide

`frontend-designer` is a standalone making-and-verification skill. It turns product intent, requirements, an existing screen, a screenshot, or a Figma design into a composed, Axiom-aware, rendered interface and can review existing work before changing it.

It is more than a frontend coding prompt. The skill combines product-design judgment, specialist design methods, current design-system evidence, implementation constraints, browser inspection, accessibility, and a scored completion gate.

## When to use it

Use `frontend-designer` when the requested outcome changes or validates a visible product interface:

- design and build a new screen, workflow, panel, form, table, editor, or modal;
- implement a Figma design or reconcile Figma with an existing codebase;
- improve the hierarchy, composition, typography, density, actions, or surfaces of an existing screen;
- audit and then fix a UI rather than stopping after critique;
- add loading, empty, error, permission, success, async, or recovery states;
- revise interface copy as part of a UI change;
- verify Axiom component usage, compound anatomy, tokens, icons, and repository conventions;
- inspect desktop and narrower layouts in the browser;
- prepare implementation notes and acceptance criteria when handoff is part of the request.

Use a critique-focused skill instead when no implementation or redesign is requested. For broader strategy, journey, validation, or handoff work, install a complementary product-design skill pack such as [Tien Le's Virtual Design Teammate](https://github.com/notienle/virtual-design-teammate).

## What it can do

### Establish the right interaction model

Before selecting components, the skill chooses the primary model—such as queue, grid, table, master-detail, editor, comparison, dashboard, or focused modal/sheet—and checks whether that model fits the user's decision.

### Compose the interface deliberately

It identifies the dominant, supporting, and utility regions; defines the first three stops in the reading order; controls density; and gives quiet space a purpose. This prevents equal-weight modules and generic card-per-section layouts.

### Control content and action hierarchy

It removes repeated status and low-value metadata, uses progressive disclosure, distinguishes primary through destructive actions, and limits bright green to one meaningful primary action per visible decision scope.

### Apply product typography and surface discipline

It preserves readable body text, limits captions and monospaced uppercase styles to specialized roles, and selects cards, panels, drawers, sheets, modals, separators, or open composition because they communicate workflow boundaries.

### Implement against OptiAxiom evidence

It verifies the semantic role, correct component or documented pattern, props, compound anatomy, tokens, icons, state model, and rendered modes before implementation. A design-system import alone is not accepted as proof of correctness.

### Reconcile Figma with code

When a Figma node is supplied, the skill treats it as fetchable product-intent and visual-acceptance evidence. It inspects the node, variables, screenshot, and Code Connect mapping when available, then verifies whether its component choices and states remain valid in the installed system. It preserves intended behavior while correcting stale, unsupported, or prototype-only representations.

### Design the complete state model

It derives applicable states and transitions from each component contract and the product logic instead of relying on a fixed checklist or delivering only a happy-path screenshot. It includes interactive descendants created internally by compound components and every mode where viewport, container, overlay, or input method changes structure or behavior.

### Integrate UX writing and accessibility

Visible strings, terminology, confirmation, status, empty-state, and recovery language are handled directly or with a compatible UX-writing companion when one is installed. New or changed interaction is checked for keyboard access, focus behavior, semantics, announcements, contrast, target size, and reduced motion.

### Render and quality-gate the result

The skill renders changed UI at the primary desktop width, a narrower width, and both sides of every discovered component-mode boundary. It exercises applicable transitions, inspects screenshots, and scores ten quality categories. Passing requires at least 17/20, no category scored zero, and no automatic failure.

### Lock explicit corrections and verify systemic fixes

When a user identifies a visible defect, the skill records the exact route, object, state, viewport, expected result and evidence method. That criterion remains blocking until the same target passes. It then checks every instance, state and width that shares the responsible implementation so a local patch does not leave the system inconsistent.

For spacing, alignment, collision and clipping, the skill measures the painted target against the visible reference boundary after ancestor clipping. Computed styles support the explanation but cannot overrule contradictory pixels. If the user reports that the defect remains, the previous completion claim and score are revoked.

## Optional companion routing

`frontend-designer` is standalone and remains responsible for the integrated interface and completion gate. It inspects the skills available in the current client and may add a compatible specialist only when its declared capability materially covers diagnosis, flows and states, interaction patterns, UX writing, accessibility depth, or developer handoff.

Companions are selected by capability rather than hardcoded names or repository ownership. If Tien's separately maintained pack is installed, its relevant specialists can contribute automatically. If no companion is installed, `frontend-designer` performs the essential work itself and names only depth that could not be verified.

## How the workflow runs

```text
Your prompt and evidence
        |
        v
Context + optional companion routing
        |
        v
Acceptance contract + systemic scope
        |
        v
Compact design brief
  user decision / interaction model / composition
  content budget / type and actions / surface plan
        |
        v
Semantic component + state contract
        |
        v
Axiom + Figma evidence reconciliation
        |
        v
Implementation in the target repository
        |
        v
Axiom postflight + repository checks
        |
        v
Rendered desktop and narrow-width inspection
        |
        v
17/20 visual-quality gate + verification report
```

The target repository remains authoritative for its build system, routes, local wrappers, navigation, file architecture, and git rules. The skill improves the interface without assuming permission for unrelated infrastructure or product changes.

## How component and state accuracy works

The skill does not accumulate rules for individual components or past bugs. It applies one conformance loop to every interface element:

1. Define the intended user action and semantic role.
2. Prove the correct system primitive or documented composition from current evidence.
3. Derive applicable state transitions and distinct rendered modes from that contract.
4. Verify structure, behavior, and rendered appearance independently.
5. Classify disagreement as an intent, mapping, composition, application, system, or version defect.
6. Repair the earliest owning layer and repeat the verification loop.

The prototype, design system, implementation, and rendered interface answer different questions. None is accepted as false proof that the others are correct.

## How Axiom evidence supports conformance

### Evidence before coding

For every selected interactive or compound component, the skill establishes a component evidence record containing:

- the installed `@optiaxiom/react` version;
- the intended Axiom component or documented composition;
- required compound parts and valid parent-child placement;
- relevant props and variants;
- applicable states, transitions, and responsive or overlay modes;
- token and icon requirements;
- Figma and Code Connect evidence when available;
- any repository-specific wrapper or convention.

Evidence is separated by authority: the user owns the outcome, Figma supplies product intent and visual acceptance, current Axiom documentation supplies the documented contract, the installed package supplies the executable version, and the rendered interface proves user-perceivable behavior. Conflicts are reconciled according to the question rather than by trusting one universal hierarchy.

### Compound components are treated as contracts

A Card is not an arbitrary bordered box. Current Card composition may include `Card`, `CardPreview`, `CardImage`, `CardCheckbox`, `CardAction`, `CardHeader`, `CardLink`, and `CardFooter`. `CardPreview` exposes four explicit addon slots: `addonTopLeft`, `addonTopRight`, `addonBottomLeft`, and `addonBottomRight`. The skill verifies which regions are required and where actions or checkboxes belong before coding.

A Button uses the documented `icon` and `iconPosition="start" | "end"` API rather than a manually spaced icon child. In the Optimizely convention captured by this pack, a leading Material icon is filled and a trailing Material icon is unfilled unless current product evidence establishes a justified exception.

### Missing Figma components do not authorize invention

If a Figma instance has no direct code mapping, the skill classifies it as one of the following:

- an existing Axiom component with a missing or stale mapping;
- a documented composition of existing Axiom parts;
- a local product component already present in the repository;
- an explicit design-system gap that needs a decision.

It does not silently introduce a generic primitive, wrapper, or new component system. New shared infrastructure requires evidence that no suitable component or composition exists plus repeated product need or explicit user scope.

### Verification after coding

The postflight rechecks every changed interactive or compound component against live documentation and the installed package, then reconciles source inventory with the rendered accessibility tree or focusable DOM. It exercises applicable transitions and every distinct rendered mode before scoring. In Axiom Play, the repository-level `yarn check:axiom` command catches structural classes of error, while browser verification catches state and responsive failures that static analysis cannot see.

The reusable skill can request and interpret that check; the deterministic checker belongs in the target repository so it can validate the exact installed package and local conventions.

## Prompt recipes

You do not need to name all supporting skills. Invoke the lead skill and describe the outcome, evidence, scope, and verification you need.

### Design and implement a feature

> Use frontend-designer to design and implement the asset-review workspace on this route. Preserve the existing data behavior, use Axiom V3, include loading/empty/error states, and verify desktop and narrow widths.

### Review and then fix existing work

> Use frontend-designer to review this implementation, prioritize the important UX and visual issues, then fix them. Use any installed companion skill whose declared capability materially applies. Verify every Axiom component and render the final result.

### Implement a Figma design

> Use frontend-designer to implement this Figma node in the current route. Fetch the real node, variables, screenshot, and Code Connect data first. Preserve the intended experience and valid visual relationships, but reconcile every component and state with the installed Axiom package instead of copying unsupported prototype choices.

### Audit Axiom without changing code

> Use frontend-designer to audit the changed files on this branch for Axiom compliance. Check component exports, compound anatomy, slots, props, tokens, icon placement and fill, accessibility, and repository conventions. Do not edit anything; return prioritized findings with evidence.

### Finish work on a branch or PR

> Use frontend-designer on the current branch. Evaluate the changed UI, correct the important design, UX writing, state, accessibility, and Axiom issues, run the repository checks, inspect every distinct rendered mode, and report what is verified versus still assumed.

### Focus on complete states

> Use frontend-designer to complete this workflow's state model. Add the missing permission, loading, empty, partial-success, error, and recovery states; keep the existing business logic and validate keyboard and screen-reader behavior.

### Focus on interface language

> Use frontend-designer to improve this confirmation and recovery flow. Automatically use UX writing, preserve the interaction model, and ensure the final buttons, status text, errors, and accessible labels are consistent.

### Start broad, then make the interface

> If a compatible product-design router is installed, use it to clarify the broader problem and flow, then route the visible implementation to frontend-designer. Include companion capabilities only where they materially contribute.

## What a complete result should report

A completed frontend-designer task should make the following visible to the user:

- the user decision and selected interaction model;
- the important composition, content, action, and surface choices;
- which supporting skills materially contributed;
- which Axiom, Figma, repository, or browser evidence was inspected;
- the explicit acceptance criteria, exact targets and visible-boundary measurements when applicable;
- the implementation or prioritized findings requested by the user;
- tests and deterministic checks that ran;
- desktop and narrow-width rendering status;
- the visual-quality score and any automatic failures;
- exceptions, unavailable tools, unmapped components, and remaining assumptions.

Compilation, lint, a route returning `200`, or the presence of Axiom imports is not enough to claim the interface is complete.

## What the skill deliberately avoids

- inventing plausible-sounding Axiom components or props;
- treating every section as a card or every secondary task as a drawer;
- copying screenshot defects or arbitrary dimensions;
- shrinking typography to make excessive content fit;
- repeating bright-green actions, badges, status, or metadata;
- treating a happy-path mockup as a complete flow;
- claiming visual, Figma, Axiom, or accessibility verification when the required tool was unavailable;
- building unrelated component infrastructure without evidence and authorization.

## Tools and graceful fallback

The strongest workflow has access to:

- the stable [OptiAxiom MCP](https://optimizely-axiom.github.io/optiaxiom/guides/mcp/) for current components, patterns, tokens, icons, guides, and tests;
- Figma tools for node data, variables, screenshots, and Code Connect evidence;
- the target repository and installed package declarations;
- browser and screenshot tools for rendered verification.

If a tool is unavailable, the skill continues with the strongest local evidence when safe, labels the missing verification, and does not pretend it completed that check.

## Install or update

### Weekly update awareness

`frontend-designer` invokes the bundled freshness checker on its first use in a session. The checker stores the time and result of its last attempt locally, so the canonical GitHub source is contacted no more than once every seven days. When a newer version exists, the agent should name the installed and available versions and ask before updating.

This is notification, not unattended updating: the checker never downloads or overwrites skills. That protects project-pinned instructions and lets each designer choose when to adopt a change. Offline or failed checks do not block design work. Use `node skills/frontend-designer/scripts/check-for-updates.mjs --force` to bypass the seven-day cache when deliberately checking installation freshness.

The repository contains one plain skill folder, so the same source can be used by Claude Code and Codex. The simplest approach is to ask the agent to install it for the required platforms:

> Install `frontend-designer` from `https://github.com/davidoliversteinberg/frontend-designer` for my local Claude Code and Codex setup. Preserve existing unrelated skills, validate it, and tell me whether I need to restart the session.

For the broader product-design workflow, install [Tien Le's Virtual Design Teammate](https://github.com/notienle/virtual-design-teammate) separately. Both repositories can be installed together. `frontend-designer` discovers relevant companion capabilities when they are available but neither repository copies or updates the other.

For a manual personal installation, clone the repository and copy each active folder under `skills/` into the personal skills directory used by your client. In the current team setup those locations are:

- Claude Code: `~/.claude/skills/<skill-name>/SKILL.md`
- Codex: `~/.agents/skills/<skill-name>/SKILL.md`

Some Codex installations use `$CODEX_HOME/skills` (normally `~/.codex/skills`) instead. Confirm the discovery path shown by your client before copying. A valid installation has one folder per skill; do not rename `frontend-designer/SKILL.md` to `frontend-designer.md` or place it directly at the skills root.

To update, pull the latest `main`, sync the active `skills/` folders into the same personal directory, validate that `frontend-designer/SKILL.md` is present, and start a new Claude/Codex session so skill discovery and cached metadata refresh.

The bundled checker normally runs automatically when `frontend-designer` is used. To check immediately from a cloned repository or installed skill, run:

```sh
node skills/frontend-designer/scripts/check-for-updates.mjs --force
```

The checker only reports freshness. It deliberately does not pull, copy, or replace files; the designer remains in control of updates and project-level adaptations.

Project-level instructions still matter. Installing this skill gives the agent the frontend design workflow; repository-level files such as `CLAUDE.md`, `AGENTS.md`, MCP configuration, package versions, and deterministic checks give it the exact local contract.

## Related documentation

- [Repository overview](../README.md)
- [Frontend Designer entrypoint](../skills/frontend-designer/SKILL.md)
- [Axiom evidence and compliance](../skills/frontend-designer/references/axiom-evidence-and-compliance.md)
- [Axiom V3 implementation rules](../skills/frontend-designer/references/axiom-v3-implementation.md)
- [Interaction and composition](../skills/frontend-designer/references/interaction-and-composition.md)
- [Visual quality gate](../skills/frontend-designer/references/visual-quality-gates.md)
- [Tien Le's original Virtual Design Teammate](https://github.com/notienle/virtual-design-teammate)
