---
name: experiment-design
description: >
  Design or interpret trustworthy randomized production experiments. Use for A/B tests, variants,
  randomization units, sample size, minimum detectable effect, guardrail metrics, significance,
  confidence intervals, and pre-committed ship decisions. Do not use for moderated or unmoderated
  usability testing; route that to design-validation.
metadata:
  version: "0.3.0"
  phase: experiment
---

# Experiment design

We sell experimentation; our experiments should be exemplary. Design tests that can actually change a decision.

## Experiment spec

1. **Hypothesis.** Because we observed [evidence], we believe [change] for [population] will cause [outcome], measured by [metric] moving [direction, expected magnitude]. With no credible evidence, gather discovery or usability evidence first; production experiments are expensive discovery.
2. **Variants.** Control + minimal-difference treatment(s): one conceptual change per variant or attribution dies. Screenshot/spec each; note implementation parity risks (perf differences contaminate results).
3. **Metrics.** One primary decision metric, guardrails that must not degrade, and diagnostics that explain the mechanism. Define event, population, window, and unit exactly through `success-metrics`.
4. **Population and unit.** Who is eligible, randomization unit (user versus account), exclusions, contamination risks, and expected sample per week from connected analytics or a clearly stated data request.
5. **Power and duration.** State minimum detectable effect worth acting on, then size honestly: small MDE on low-traffic enterprise surfaces can mean months - say so, and offer alternatives (bigger design swing, proxy metric, usability test instead). Run full business cycles (1-2+ weeks minimum); never stop on first significance.
6. **Decision rules, pre-committed.** Ship if primary improves and guardrails hold; kill if...; extend if... Written before launch, or the result will be negotiated after.

## Reading results

Check sample ratio mismatch first (allocation off = invalid test). Report: effect size with confidence interval (not just p), guardrails, segment consistency (interpret segment surprises as hypotheses, not conclusions - multiple comparisons lie). Flag novelty effects on changed UI; distinguish "no effect" from "underpowered". A trustworthy null is a finding: it kills a belief cheaply.

## When NOT to experiment

Sample too small for the minimum detectable effect, the change is a quality or consistency fix, measurement cannot reach the outcome, or the ethical bar fails. Recommend the honest alternative: `design-validation`, a larger change, a better leading indicator, or shipping an obvious standards correction without randomization.

## Output format

Inline spec ready for Optimizely Experimentation setup. State the analytics or instrumentation work needed rather than inventing it. Route result narratives for stakeholders to `design-communication`.
