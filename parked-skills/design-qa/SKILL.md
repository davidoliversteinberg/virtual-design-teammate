---
name: design-qa
description: >
  Verify implementation matches design, and audit accumulated drift. This skill should be used when the
  user asks to "QA this build", "review the implementation", "does this match the design", "check the
  staging link", "design debt audit", or compares a built screen against Figma. Trigger before release
  sign-offs and for periodic drift/debt sweeps.
metadata:
  version: "0.1.0"
  phase: spine
---

# Design QA

Two modes: release QA (this build vs this design) and debt audit (this surface vs the system, over time).

## Release QA

Compare built (screenshot/staging URL) against source design (Figma MCP) systematically:
1. **Structure** - layout, spacing rhythm, alignment against the grid; measure, don't eyeball, when contested.
2. **Components and tokens** - real Axiom components (not visual approximations), correct variants, token-true colors/type/spacing (design-tokens protocol).
3. **States** - walk the handoff states table: empty, loading, error, permission, hover/focus/disabled. Unbuilt states are findings, not future work.
4. **Behavior** - interactions per spec: validation timing, keyboard paths, motion, responsive breakpoints, data-volume behavior (test with realistic rows, not 3).
5. **Content** - final copy verbatim, truncation, formats.
6. **Accessibility spot-check** - focus visibility, contrast of built values, announcements (full audit via accessibility skill when warranted).

Finding format: location, expected (with design reference), actual (with screenshot), severity (Blocker = broken task/violates spec materially; Major = visible quality miss; Minor = polish), and fix note. Be a fair witness: log spec gaps as spec bugs (route back to developer-handoff), not eng failures - and accept engineering-superior solutions gracefully when they meet the intent.

## Ship judgment

Recommend: ship / ship-with-fast-follows (named, ticketed) / hold (Blockers listed). Perfect is not the bar; "does this meet the intent paragraph" is.

## Debt audit mode

Sweep a surface for accumulated drift: off-system components and token violations (per screen, counted), pattern inconsistencies vs sibling surfaces (three different save models = debt), orphaned UI (features with no owner), and a11y regressions. Output: debt inventory grouped by type, sized (screens affected x fix effort), prioritized by user-facing harm first, with a fix-forward rule proposal ("all new work uses X; migrate on touch"). Route prioritization into planning via design-strategy.

## Output format

Inline findings table + ship recommendation. Screenshots referenced by name; comparison walkthroughs offered live when findings are contested.
