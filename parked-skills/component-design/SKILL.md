---
name: component-design
description: >
  Component specs, pattern library entries, and design system contribution. This skill should be used when
  the user asks to "spec this component", "component API", "props and variants", "document this pattern",
  "add to the design system", "is there an Axiom component for", or proposes a new/modified component.
  Trigger for any reusable-piece definition - always check what Axiom already has first.
metadata:
  version: "0.1.0"
  phase: spine
---

# Component design

Compose before create. The first move on any component question is Axiom MCP `search_components` + `get_component` (and `get_patterns` for multi-component patterns): what exists, what are its real props, can composition cover the need.

## Component spec format

1. **Purpose and usage.** One-line job; use-when / don't-use-when with the alternative named (the don't-use side prevents misuse better than the use side).
2. **Anatomy.** Named parts, which are required/optional/slotted.
3. **Props and variants.** Table: prop, type, default, behavior. Variants = meaningful differences (size, tone, emphasis); every boolean prop challenged (two booleans that can't combine = one enum). Keep the API shaped like sibling Axiom components (same prop names for the same concepts).
4. **States.** Default, hover, focus-visible, active, selected, disabled(+reason affordance), loading, error, read-only/permission-limited - designed, not implied.
5. **Behavior.** Interaction rules, keyboard model, motion (values from visual-design), responsive/overflow behavior, min/max content handling (empty label, 200-char label, RTL note).
6. **Accessibility.** Role/name/value, announcements, contrast obligations - a11y skill's checklist inlined as requirements.
7. **Content guidelines.** Label grammar and length limits (with ux-writing).
8. **Tokens.** Every visual attribute mapped to a semantic token (design-tokens protocol) - no raw values in a spec.

## Pattern library entries

For multi-component patterns (filter bar, bulk action bar, connector card): problem context, the composition (which components, in what arrangement), usage rules, do/don't examples from real Optimizely surfaces, and related patterns with when-to-choose-which.

## Contribution and governance

New/changed component proposal: the gap (with 2+ consuming surfaces), why composition fails, API sketch, migration impact on existing usage, and a deprecation note if it replaces something (old thing marked, migration path, sunset criteria). Documentation is part of done: a component without usage guidance generates its own misuse. Adoption: announce with before/after, migrate one lighthouse surface first, measure drift via design-qa audits.

## Output format

Inline spec table-first; Figma-ready notes where the user is documenting in-file. Route visual foundations to `visual-design`, handoff packaging to `developer-handoff`.
