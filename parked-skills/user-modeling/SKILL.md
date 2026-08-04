---
name: user-modeling
description: >
  Model who you are designing for. This skill should be used when the user asks for "personas", "empathy
  map", "jobs to be done", "JTBD", "user archetypes", "who is this for", or needs to turn research into a
  reusable picture of the audience. Trigger after research synthesis, or whenever a team debate reveals
  no shared model of the user.
metadata:
  version: "0.1.0"
  phase: define
---

# User modeling

Three methods, one question - who are we designing for and what drives them. Pick by output need; state which and why.

- **Personas** - for team alignment and recurring reference. Use when many decisions will invoke the same audience.
- **Empathy maps** - for fast workshop synthesis of one user type. Use to digest fresh research in an hour.
- **Jobs-to-be-done** - for reframing around motivation. Use when feature debates are stuck on "what" instead of "why".

Ground every model in evidence: link each attribute to research (sessions, analytics segments, support themes). If no research exists, build a **proto-persona/assumption model**, label it as assumptions, and attach validation steps via `research-orchestrator`. Never invent demographic color (age, hobbies, stock photo vibes) - it adds fiction, not fidelity. Start from the Optimizely archetypes in design-context and specialize, rather than inventing parallel casts.

## Personas

Per persona: name + role title, one-line identity, goals (outcome-phrased), behaviors and tool context, frustrations with evidence, ability level (domain vs product), decision power, and "designing for them means..." (3 concrete implications). 2-4 personas per product area; more means the segmentation is wrong. Include an anti-persona if teams keep designing for the wrong user.

## Empathy maps

Four quadrants - Says (verbatims), Thinks (inferred, marked as inference), Does (observed behavior), Feels (emotional states with triggers). Center: the user type and situation. Rule: quadrant contents must trace to sessions; inference is allowed only in Thinks/Feels and flagged.

## Jobs-to-be-done

Format: When [situation], I want to [motivation], so I can [outcome]. Capture three layers: functional job, emotional job (feel in control, avoid blame), social job (look competent to the team). Add desired outcomes as measurable statements (minimize time to detect a pricing error) and current hiring criteria (what they use today, including spreadsheets and email). Jobs are stable; solutions churn - write jobs solution-free.

## Output format

Inline cards, scannable. Note confidence per model and what would change it. Route "map their end-to-end experience" to `journey-mapping`.
