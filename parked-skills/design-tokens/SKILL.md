---
name: design-tokens
description: >
  Design token architecture, naming, and theming. This skill should be used when the user asks about
  "tokens", "which token for", "semantic vs primitive", "theming", "dark mode tokens", "token naming",
  "should this be a token", or audits token usage in a design. Trigger for any color/spacing/type VALUE
  governance question - always verify current values via the Axiom MCP, never from memory.
metadata:
  version: "0.1.0"
  phase: spine
---

# Design tokens

Tokens are decisions made once. Work within Axiom's token architecture; propose changes through it, not around it.

## Ground truth protocol

Before answering any which-token or what-value question: call Axiom MCP `get_tokens` for the relevant category. Quote token names and values from the response. If the MCP is unavailable, answer architecturally and mark every value "verify against Axiom".

## Architecture

Three tiers, referenced downward only:
1. **Primitives** - raw values (blue-600, space-4). Never used directly in product UI.
2. **Semantic** - meaning-bearing (color-text-danger, space-inset-md, color-bg-surface). What designs and specs reference.
3. **Component** - scoped decisions (button-height-md) when a component needs stable overrides.

Selection rule: choose by meaning, not by matching the hex you want. If the needed meaning has no semantic token, that's a gap to raise - picking a primitive that "looks right" creates untrackable debt and breaks theming/dark mode.

## Naming

Pattern: [category]-[concept]-[property]-[variant/state] in the system's established grammar - mirror Axiom's existing names exactly; consistency with the system outranks any naming theory. Names describe purpose (color-border-input-error), never appearance (light-gray-border) or location (sidebar-blue).

## Theming and modes

Themes remap semantic tokens over shared primitives; product UI referencing only semantic tokens gets dark mode and brand variants for free. Audit target: zero raw values and zero primitives in product designs. Dark mode checks: elevation via surface tokens (not shadows alone), desaturated large fills, recomputed contrast (accessibility skill).

## Token audit and proposals

Audit a design/screen: extract used values (Figma MCP get_variable_defs where available), map each to its token or flag as off-system with the nearest correct token, and report drift by category. Propose a new token with: meaning gap, at least two consuming components/surfaces, tier, name per grammar, light+dark values, and migration note. Route component-level decisions to `component-design`, system change process to its governance section.
