---
name: ux-writing
description: Write, revise, or audit words inside an Optimizely interface. Use for button labels, field labels, helper text, errors, empty states, dialogs, notifications, onboarding, AI or agent status, terminology, and content hierarchy. Do not use for page composition or visual styling; route those to frontend-design.
metadata:
  version: "0.3.0"
  phase: design
---

# UX Writing

Write copy that performs a product job: orient, explain, move, confirm, prevent, or recover. Every visible string must earn its space and use the same nouns as the surrounding product.

## Evidence before wording

Inspect the supplied screen, flow, requirement, or neighboring product copy before inventing terms. Determine:

- the user and their product vocabulary;
- what happened or what decision is required;
- the consequence of the action;
- the space or localization constraint, if real;
- the state in which the string appears;
- whether assistive technology must announce the change.

Do not ask for information already visible or inferable. If missing context materially changes the meaning, ask one concise question or state the assumption.

## Voice

- Clear, confident, direct, and helpful.
- Plain verbs, active voice, present tense for current state, past tense for completed outcomes.
- Sentence case.
- Address the user as "you" when useful. Use "we" only when Optimizely or the organization is the actor.
- Never blame the user for a system failure.
- Never use cuteness, exclamation, or personality to disguise uncertainty, delay, or loss.
- Use one noun per concept. Synonym drift is a product defect.

## Pattern rules

### Buttons and actions

Use verb + object when the outcome is not already unmistakable: `Save changes`, `Publish 12 products`, `Connect Shopify`. Avoid `OK`, `Yes`, and `Submit` for consequential actions.

Make action pairs parallel and unambiguous: `Discard changes` / `Keep editing`, not two meanings of `Cancel`. Include quantity or destination when it changes risk.

### Errors and recovery

State what happened, then what the user can do. Include the cause only when it helps recovery.

Prefer: `This SKU already exists in Spring Catalog. Use a different SKU or edit the existing product.`

Avoid vague apology, blame, raw error codes as the headline, or a dead end. Preserve a reference ID as supporting information for system failures when support may need it.

### Empty states

Distinguish first use, no results, cleared content, permission-limited content, loading failure, and true absence. In at most a few short lines, explain what belongs here, why it matters when useful, and the next available action.

### Destructive confirmation

- Title: name the action and object.
- Body: state scope, consequence, and reversibility.
- Primary/destructive button: repeat the specific action.
- Escape action: say what remains safe.

Do not add confirmation to a cheap, reversible action merely to sound cautious.

### Helper text and tooltips

Helper text prevents an input error or explains a consequential choice before action. A tooltip defines or expands a secondary concept. Required information must not be hidden in a tooltip.

### Notifications and progress

Lead with the outcome and name the object. Use progressive language for ongoing work and past tense for completion. Prefer an action such as `Undo` or `View details` over a generic dismissal when recovery matters.

### Labels, headings, and tables

Front-load scannable nouns, keep grammar parallel within a set, and use headings to name content rather than pose decorative questions. Table headings should remain meaningful when scanned out of row context.

## AI and agent interfaces

Agentic copy must make status, agency, evidence, and consequence legible.

- Distinguish `thinking`, `waiting for input`, `running a tool`, `draft complete`, `action complete`, `partially complete`, and `failed`.
- Say what the agent is doing when the wait is consequential; do not narrate every trivial internal step.
- Before an external, destructive, costly, or broadly visible action, name exactly what will happen and ask for proportionate confirmation.
- Separate a recommendation from an executed action.
- State uncertainty in the claim it affects; do not hide it in a generic disclaimer.
- When an action partly succeeds, name what completed, what failed, and how to recover.
- Do not anthropomorphize an agent to evade accountability or make an unsafe action feel friendly.
- Avoid repeating the same conclusion as status, score, confidence, rationale, and banner copy.

## Accessibility and localization

- Visible labels must identify controls without relying on placeholders.
- Error copy must identify the field or object and support programmatic association.
- Dynamic status copy must be suitable for the appropriate live-region behavior without producing announcement spam.
- Links make sense out of context; avoid `click here`.
- Preserve meaning at 200% text zoom and with localized strings approximately 35% longer.
- Use localized number, date, time, and plural formats. Relative time should expose an absolute value where precision matters.

Load `accessibility` when the task needs full WCAG criteria or announcement behavior.

## Review in context

Do not judge strings in isolation when a screen or build is available. Check:

- whether adjacent UI already supplies the noun or context;
- whether wrapping, truncation, hierarchy, or repetition changes the meaning;
- whether copy appears in every relevant state;
- whether the label matches the behavior that is actually implemented.

If changing copy affects the surrounding hierarchy or visible layout, route that portion to `frontend-design` and verify the rendered result.

## Output

For new copy, provide the element, recommended string, relevant state, and a short rationale. Include a character count only when a real constraint exists. Offer one alternative only when it represents a meaningful tone or risk tradeoff.

For revisions, show before and after with the reason. For a full flow, use a state-by-state copy table and flag terminology or behavior decisions that remain unresolved.
