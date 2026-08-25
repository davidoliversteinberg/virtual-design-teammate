# Trigger Prompt Set

Use these prompts to build a collision matrix and seed behavioral evaluation. Each lead skill has an obvious request, a natural casual request, and an ambiguous boundary case with the intended winner.

## Route or frame

- `design-partner-core`: "Help me figure out the complete design approach for a new CMP approval experience." | "I'm stuck on where to start with this feature." | AMBIG "Help me design this" (winner: `design-partner-core` until the requested artifact becomes clear).
- `prd-to-design-plan`: "Here is the PRD for bulk price editing; turn it into design work." | "I have a fuzzy idea about improving connector setup." | AMBIG "Kick off the campaign module" (winner: `prd-to-design-plan` when requirements and design scope are unresolved).
- `design-strategy`: "Develop a UX strategy for Commerce Connect onboarding." | "Which of these opportunities should we prioritize?" | AMBIG "Is this feature worth doing?" (winner: `design-strategy`; `success-metrics` supports measurement).

## Understand and structure

- `journey-mapping`: "Map the merchandiser journey from catalog import to first publish." | "Where does onboarding break end to end?" | AMBIG "Map how users set up a connector" (winner: `journey-mapping` across stages; `flows-and-states` inside one bounded product flow).
- `success-metrics`: "Define success for the new import flow." | "PM wants a KPI for this." | AMBIG "How will we know the redesign worked?" (winner: `success-metrics`; `experiment-design` only when causal traffic testing is requested).
- `information-architecture`: "Where should audit logs live in navigation?" | "Is this a tab or a separate page?" | AMBIG "Users cannot find settings" (winner: `information-architecture`; `ux-writing` only if the structure is sound and the label is the problem).

## Specify and make

- `enterprise-patterns`: "Specify bulk editing for this product table." | "How should saved views work?" | AMBIG "This table feels cluttered" (winner: `design-review` for an existing artifact; `enterprise-patterns` when designing a new pattern).
- `interaction-patterns`: "Design validation behavior for this form." | "What should the empty state do?" | AMBIG "Search is not working well" (winner: `design-review` when judging evidence, `interaction-patterns` when specifying new behavior).
- `flows-and-states`: "Map connector setup including errors and permissions." | "What states does this screen need?" | AMBIG "What screens do approvals need?" (winner: `flows-and-states`).
- `ux-writing`: "Write an error for a failed sync." | "Empty-state copy for campaigns." | AMBIG "This dialog is confusing" (winner: `design-review` for diagnosis; `ux-writing` if the user asks only for revised strings).
- `frontend-design`: "Build this Optimizely screen from the supplied Figma frame." | "Make this page feel calmer and more premium." | AMBIG "Does this screen look right?" (winner: `design-review` for critique only; `frontend-design` when the user asks to change, build, polish, or redesign it). SUPPORT "Implement this permissions table, including loading and denied states, clearer errors, and keyboard behavior" (lead: `frontend-design`; automatically load `enterprise-patterns`, `flows-and-states`, `ux-writing`, and `accessibility`).
- `accessibility`: "Audit this flow against WCAG 2.2 AA." | "Check contrast and keyboard access." | AMBIG "Can keyboard users use this table?" (winner: `accessibility`; `design-review` may orchestrate when a broader review was requested).
- `ux-laws`: "Why do users keep missing this button?" | "Explain Hick's law for this menu." | AMBIG "Why is this flow tiring?" (winner: `ux-laws` for the psychological explanation; `design-review` for a full audit).

## Review

- `design-review`: "Critique this Figma flow and prioritize the problems." | "Roast this screen." | AMBIG "Make this screen better" (winner: `frontend-design` if actual changes are requested; otherwise `design-review` first).

## Validate and experiment

- `prototype-strategy`: "Should this prototype be Figma or code?" | "What fidelity do I need for AI streaming?" | AMBIG "I want to try this idea quickly" (winner: `prototype-strategy`).
- `design-validation`: "Create a moderated usability-test plan for this approval flow." | "How should I test this prototype with customers?" | AMBIG "Test whether the new flow is better" (winner: `design-validation` when evidence comes from observed people; `experiment-design` when randomized live traffic is explicit).
- `experiment-design`: "Design an A/B test for the new publish flow." | "How long should this experiment run?" | AMBIG "Which version performs better?" (winner: `experiment-design` only with production metrics and a randomization plan; otherwise ask or use `design-validation`).

## Handoff and communication

- `developer-handoff`: "Package this design for engineering." | "Write acceptance criteria for the import flow." | AMBIG "Engineering asked what happens when the list is empty" (winner: `developer-handoff` if packaging decisions; `flows-and-states` if the state is not yet designed).
- `design-communication`: "Turn this design decision into an executive narrative." | "Help me explain why we rejected the dashboard." | AMBIG "Present this design" (winner: `design-communication`, loading the source skill that owns the evidence).

## Evaluate the pack

- `skill-quality-audit`: "Audit this SKILL.md before merging." | "Check trigger collisions in the pack." | AMBIG "Test whether the design skill works" (winner: `skill-quality-audit` when testing the agent skill; `design-validation` when testing a product design with users).
