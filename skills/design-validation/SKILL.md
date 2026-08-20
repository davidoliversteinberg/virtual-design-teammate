---
name: design-validation
description: Plan and interpret moderated or unmoderated usability validation for a concept, flow, prototype, or implemented interface. Use when the user asks how to test a design with people, create a usability-test plan, write participant tasks, choose participants, define task success, or synthesize observed sessions. Do not use for randomized production experiments or for evaluating the skill pack.
metadata:
  version: "0.3.0"
  phase: validate
---

# Design Validation

Design validation reduces a specific decision risk. It does not prove that a design is universally good, and participant opinions do not replace observed behavior.

Use `experiment-design` for randomized live-traffic tests. Use `skill-quality-audit` to test this plugin. Load `prototype-strategy` when the artifact or fidelity is not yet appropriate for the question.

## Start with the decision

Define:

1. The decision the team will make from the evidence.
2. The riskiest belief behind the design.
3. The target users and relevant experience.
4. The behavior that would support or challenge the belief.
5. What the chosen artifact can and cannot reveal.

If no plausible result would change the decision, do not run the study. Clarify the decision first.

## Choose the method

| Question | Suitable method |
|---|---|
| Do users understand the concept or value? | Concept interview or comprehension test with neutral probes |
| Can users find where to begin? | First-click or navigation test |
| Can users complete the workflow and recover? | Moderated task-based usability test |
| Does the information structure match expectations? | Tree test or card sort, depending on whether structure exists |
| Can more participants complete a stable flow? | Unmoderated task test with instrumented success criteria |
| Does an interaction feel controllable and trustworthy? | Moderated high-fidelity or coded-prototype test |
| Which production treatment causes a metric change? | `experiment-design`, not usability validation |

Choose the cheapest method that exposes the risk. Do not use a polished prototype when a narrative or first-click test answers the question, and do not use static frames to test latency, streaming, drag behavior, or keyboard interaction.

## Participants

Recruit for behavior and context, not a decorative persona label. State:

- required product/domain experience;
- role and decision authority;
- frequency of the target task;
- technical or accessibility characteristics relevant to the design;
- exclusions that would bias the evidence;
- sample rationale.

Five sessions can expose major usability patterns in a narrow qualitative study; that is not a universal sample-size rule and does not estimate population rates. Use larger samples when comparing rates, segments, or small differences.

Never recruit, contact, schedule, or compensate participants without explicit authorization.

## Tasks and protocol

Write tasks as realistic goals without naming the control or path being tested.

Bad: `Click Filters and select Draft.`

Better: `You need to review campaign work that is not yet published. Show me how you would narrow the list.`

For each task define:

- starting state and data;
- user goal;
- success and partial-success behavior;
- critical error or unsafe outcome;
- allowed prompts and rescue threshold;
- follow-up probes that do not lead;
- evidence to capture.

Begin with context and recent behavior, not a feature sales pitch. Use think-aloud carefully: it reveals interpretation but changes natural pace. End with comparative or confidence questions only after behavior has been observed.

## Measures

Use measures proportional to the decision:

- task completion and completion with assistance;
- critical errors and recovery;
- first action and wrong turns;
- time only when speed is genuinely part of the job;
- confidence before and after consequential action;
- comprehension of state, consequence, or AI behavior;
- accessibility barriers for the assistive technology in scope;
- notable quotes as supporting evidence, never as a frequency claim.

Define measures before sessions. Do not manufacture a single usability score when different failures have different consequences.

## Prototype and data integrity

- Use realistic-but-fake content and believable volume.
- Mark honest dead ends and do not pretend unimplemented behavior was tested.
- Keep facilitator workarounds consistent across sessions.
- Record the prototype version and changed assumptions.
- Protect participant and customer information; store only what the approved study requires.

## Analysis

Separate observation, interpretation, and recommendation.

1. Log behavior by task and participant.
2. Identify repeated breakdowns and high-consequence single events.
3. Trace each breakdown to evidence in the interface or flow.
4. Distinguish product problems from prototype artifacts, facilitation effects, and domain unfamiliarity.
5. Rate findings by task impact and confidence, not quote vividness.
6. Recommend the smallest design change that addresses the cause.
7. State what was not learned and the next decision, if any.

Do not claim statistical prevalence from a small qualitative sample. Do not average away an accessibility blocker or a rare catastrophic error.

## Output

For a plan, deliver:

- decision and research questions;
- method and rationale;
- participant criteria;
- prototype requirements;
- session structure and tasks;
- success/error measures;
- capture and analysis plan;
- risks, ethics, and unresolved decisions.

For completed sessions, deliver an evidence table, prioritized findings, confidence and limitations, design implications, and the decision the evidence supports. Never invent observations, participants, quotes, or results.
