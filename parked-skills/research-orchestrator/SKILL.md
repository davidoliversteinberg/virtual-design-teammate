---
name: research-orchestrator
description: >
  Entry point for understanding users, markets, or problems. This skill should be used when the user says
  "I need to understand X", "what do we know about X", "research this", "why are users doing X", "plan
  research for", "validate this assumption", or asks any open question about user behavior, customer pain,
  or market reality that no single data pull answers. Also trigger before big design bets when no evidence
  has been gathered. Do NOT use for a single named method (route to user-research-methods) or a pure data
  pull (route to product-analytics).
metadata:
  version: "0.1.0"
  phase: empathize
---

# Research orchestrator

Plan and run a research approach end to end. This is a workflow skill: it sequences other skills, it does not replace them.

## Workflow

1. **Clarify the decision.** Ask one question if needed: what decision will this research inform, and by when? Research without a decision is a library project - say so.
2. **Inventory what already exists before collecting anything new.**
   - Quantitative: load `product-analytics` and pull relevant funnels, usage, retention, and customer health.
   - Qualitative: check past research (CAB sessions, interview notes, support themes, UserVoice/Zendesk MCPs if connected).
   - Desk: load `competitive-analysis` for market and competitor evidence; run web search for published studies.
3. **Map evidence to questions.** Build a small table: question | what we already know | confidence | gap.
4. **Propose primary research only for the gaps.** Pick the cheapest method that answers each remaining question; load `user-research-methods` to design it. State participant count, timeline, and what a result would change.
5. **Hand off synthesis.** When findings come back, load `research-synthesis` to turn raw material into insights, then offer `design-brief` or `design-strategy` as the landing place.

## Method selection heuristics

- "Why" questions: interviews, diary studies. "How many / which" questions: analytics, surveys. "Can they" questions: usability tests. "What do they expect" questions: card sorts, click tests.
- Behavioral evidence beats stated preference. Triangulate: never let one interview or one dashboard settle a contested question.
- 5 users find most usability problems; 5 users cannot size a market. Match sample to claim.

## Output format

Default output is a research plan in chat: decision, questions, existing evidence, proposed methods with effort, timeline, and risks of NOT researching. Offer a Word version (via optimizely-brand skill) only if it will be circulated.
