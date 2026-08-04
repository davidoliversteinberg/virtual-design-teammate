---
name: competitive-analysis
description: >
  Competitor and secondary desk research. This skill should be used when the user asks "how do competitors
  handle X", "benchmark this", "what's the standard pattern for X", "research how others do this", "build a
  swipe file", names competitor products to compare, or needs market context, analyst views, or published
  research on a design or capability question. Trigger for any look-outside-the-building request.
metadata:
  version: "0.1.0"
  phase: empathize
---

# Competitive analysis

Produce decision-grade competitive evidence, not screenshot tourism.

## Workflow

1. **Frame the comparison.** What capability or pattern, for which user, informing what decision. Pick 3-6 comparators: 2-3 direct competitors, 1-2 adjacent best-in-class, 1 anti-pattern if instructive. For Optimizely commerce and platform work, typical sets include commercetools, Salesforce Commerce Cloud, Adobe Commerce, Shopify Plus, BigCommerce, Contentful, Sanity, VWO, LaunchDarkly - choose per question, confirm the set with the user.
2. **Gather evidence.** Web search and fetch: product docs, changelogs, pricing pages, demo videos, review sites (G2, TrustRadius themes), analyst coverage. Prefer primary sources; date every claim. Note what could not be verified (gated demos).
3. **Analyze on consistent dimensions.** Build a capability matrix: rows = capabilities or pattern decisions, columns = products, cells = how (one line), not just yes/no. Add a "so what" column: what each approach optimizes for.
4. **Extract implications.** Where is table stakes vs differentiation; which patterns transfer to Optimizely's enterprise context and which do not (consumer patterns often fail for multi-tenant, permissioned, data-dense work); one recommendation with rationale.

## Secondary research

For non-competitor desk research (published studies, standards, analyst reports): summarize source, date, method, finding, and applicability. Weight peer-reviewed and large-n sources over vendor content.

## Output format

Inline: comparison table plus a short implications section with sourced claims. Full benchmark documents for circulation go to Word via the optimizely-brand skill; if the user's design-competitor-research skill is installed, defer to its document structure.
