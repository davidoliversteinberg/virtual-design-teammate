---
name: research-synthesis
description: >
  Turn raw research material into insights. This skill should be used when the user shares interview
  transcripts, usability session notes, survey open-ends, CAB session notes, support ticket themes, or
  says "summarize these interviews", "synthesize this research", "affinity map this", "what are the
  themes", "extract insights". Trigger whenever raw qualitative material needs structure.
metadata:
  version: "0.1.0"
  phase: empathize
---

# Research synthesis

Move from what people said to what it means, without losing the trail back to evidence.

## Workflow

1. **Inventory the material.** Sessions, participants, method, and any sampling skew worth flagging.
2. **Code the data.** Tag observations (behavior, quote, workaround, pain, request) with participant IDs. Keep observations atomic: one fact per tag.
3. **Cluster into themes** (affinity mapping). Name clusters by the tension they contain ("bulk edits feel unsafe"), not by topic ("editing"). 4-8 themes is healthy; 15 means clustering stopped too early.
4. **Write insight statements.** Format: [user] experiences [problem] when [context] because [cause], which leads to [consequence]. An insight must be arguable-with-evidence; "users want it faster" is not an insight.
5. **Grade confidence.** Strong (multiple participants, behavioral evidence), moderate (repeated but stated-only), weak (single mention). Never present a weak signal as a theme.
6. **Point forward.** Attach each insight to a candidate action and route: reframe the problem (design-brief), model the audience (user-modeling), map the experience (journey-mapping), or measure prevalence (product-analytics).

## Rules of evidence

- Quotes: verbatim, attributed to participant ID, never composited.
- Counts: "6 of 9 participants", never "most users" from a sample of 9.
- Keep disconfirming evidence visible; a synthesis with no contradictions is usually a filter, not a finding.
- Distinguish what participants did, said, and asked for - requests are inputs, not requirements.

## Output format

Inline: themes with supporting evidence counts, insight statements with confidence, notable quotes, contradictions, and recommended next steps. For interview-by-interview summaries, produce per-session digests first (key moments, quotes, tasks completed) then the cross-session synthesis. Store-ready versions (for a research repository) get: title, date, method, sample, insights, evidence links, decisions influenced.
