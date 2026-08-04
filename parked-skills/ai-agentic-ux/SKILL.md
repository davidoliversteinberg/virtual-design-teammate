---
name: ai-agentic-ux
description: >
  Design AI-powered and agentic experiences. This skill should be used when the user designs anything
  involving AI: chat or conversational UI, copilots, agents, AI suggestions, generative content, natural
  language search, "AI feature", "Opal", streaming responses, or asks how to build trust in AI output,
  handle AI errors, or design human review of agent actions. Trigger for any feature where the system
  produces probabilistic output.
metadata:
  version: "0.1.0"
  phase: ideate
---

# AI and agentic UX

Probabilistic systems break deterministic UX assumptions. Design for variable quality, latency, and user trust that is earned per interaction.

## Core patterns

1. **Set expectations at the boundary.** Name what the AI can and can't do at the entry point, with 3-5 example prompts that teach the envelope. Never present AI output with the same visual certainty as database facts - mark provenance.
2. **Streaming and generative states.** Show progress semantically (searching -> reading -> drafting), stream text when latency exceeds ~2s, always provide stop. Skeleton screens lie about AI latency; use staged status instead.
3. **Trust calibration.** Show sources and citations for claims; expose confidence honestly (verbal categories beat fake percentages); make verification cheap (link to the record, show the query it ran). Trust patterns matter double in Optimizely surfaces where AI touches revenue-affecting objects (prices, campaigns, experiments).
4. **Human-in-the-loop for consequential actions.** Tier by blast radius: suggest (user applies) -> draft (user approves) -> act with undo -> act autonomously (only for reversible, low-stakes ops). Batch approvals need per-item inspect and partial accept. Every agent action needs an audit trail entry (see enterprise-patterns audit logs).
5. **Failure and repair.** Wrong output is a normal state: offer edit-in-place, regenerate-with-guidance ("shorter", "use catalog terms"), and report. Never dead-end on "I can't help with that" - say what would work.
6. **Feedback loops.** Lightweight signal capture (accept/edit/reject tells you more than thumbs); tell users how feedback is used.

## Conversational UI specifics

Persistent context visibility (what does it know right now), scoped memory controls, graceful topic-boundary handling, and escape hatches to the deterministic UI for every conversational task - conversation augments, never traps. Empty prompt box is the hardest screen: seed with role-relevant suggestions (merchandiser vs developer).

## Anti-patterns

Anthropomorphic overpromise, confidence theater, hiding the AI's actions during agent work, irreversible autonomous writes, burying the off switch, and chat-as-the-only-path for tasks users do daily.

## Output format

Inline pattern recommendation with state coverage (idle, streaming, done, failed, refused) per surface. Route copy and tone to `ux-writing`, trust-metric definition to `design-strategy`, evaluation of quality to `experiment-design`.
