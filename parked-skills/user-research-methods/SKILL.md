---
name: user-research-methods
description: >
  Design and run specific research methods. This skill should be used when the user asks for an "interview
  script", "discussion guide", "usability test plan", "test scenario", "survey", "questionnaire", "diary
  study", "card sort", "click test", "tree test", or wants to prepare, moderate, or debrief any research
  session. Trigger when a method is named or clearly implied ("I'm talking to 5 customers Thursday").
metadata:
  version: "0.1.0"
  phase: empathize
---

# User research methods

Produce rigorous, runnable study materials. Pick the method for the question; if the user picked a mismatched method, say so and offer the fit.

## Method selection

| Question type | Method | Reference |
|---|---|---|
| Why do users do X, what's the context | Interviews, diary studies | references/interviews.md |
| Can users complete X, where do they fail | Usability tests, click tests | references/usability-testing.md |
| How many, how often, which preference | Surveys | references/surveys-and-card-sorts.md |
| How do users group or label things | Card sorts, tree tests | references/surveys-and-card-sorts.md |

Read the matching reference before drafting materials. Every study output must include: objective tied to a decision, participant criteria and count, method rationale, materials (script/tasks/questions), success or analysis criteria, and logistics.

## Universal rules

- One study, one primary objective. Secondary questions are allowed only if they cost no extra participant time.
- Never lead: no "how much do you like", no feature pitches disguised as questions, no yes/no where behavior can be observed.
- Ask about the recent, specific past ("walk me through the last time you...") rather than hypothetical futures.
- Pilot everything once; budget it in the plan.
- Enterprise recruiting reality at Optimizely: go through CSMs or CAB relationships, expect 1-2 weeks lead time, offer session summaries as reciprocity. Flag legal/consent needs for recordings.
- Debrief within 24 hours; route raw material to `research-synthesis`.

## Output format

Inline, structured for direct use: a facilitator can run the session from the output alone. Include timeboxes per section and a contingency note (what to cut if the session runs short).
