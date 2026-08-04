---
name: product-analytics
description: >
  Quantitative product and customer data. This skill should be used whenever the user asks to "pull",
  "check", or "get the numbers" on anything: funnels, conversion, retention, adoption, feature usage,
  active users, drop-off, ARR, churn, NPS, customer health, "how many customers", "is anyone using X".
  Trigger for any question answerable with data, even casually phrased. Uses the Optimizely Analytics MCP
  and Optimizely PowerBI MCP. Do NOT use for designing an A/B test (route to experiment-design).
metadata:
  version: "0.1.0"
  phase: empathize
---

# Product analytics

Turn design questions into data pulls and data into design-relevant findings.

## Sources, in order of preference

1. **Optimizely Analytics MCP** - product behavioral data: events, funnels, feature usage, sessions.
2. **Optimizely PowerBI MCP** - business and customer data: ARR, retention, churn, customer health, segment sizes. Use `search` to locate reports and semantic models, `GetSemanticModelSchema` before writing DAX, then `GenerateQuery`/`ExecuteQuery`.
3. Mixpanel or other tools without a connector: ask the user for a CSV export and analyze it with the analysis tool.

Before any pull, restate the question as a metric: "are users finding search" becomes "search usage rate among weekly active users, and search-to-result-click rate". Confirm the definition if ambiguous (active = ?, period = ?).

## Query discipline

- Inspect the schema before querying; never guess table, column, or measure names.
- Always state the time window, segment, and filters used, in the answer.
- Sanity-check magnitudes: if a number is surprising, verify with a second cut before reporting it.
- Distinguish "no data" from "zero". Missing instrumentation is a finding worth reporting.

## Reading results for design

- Report the number, the base ("of 1,240 accounts"), the trend, and the design implication in one or two sentences each.
- Never claim causation from a correlation; flag confounds (seasonality, releases, mix shift).
- Small segments: report absolute counts alongside percentages; 80% of 5 accounts is 4 accounts.

## Output format

Inline answer: finding, evidence (source, window, segment), implication, and confidence. For multi-metric investigations, a short table. Route "should we run an experiment on this" to `experiment-design` and "what should we do about it" to `design-strategy`.
