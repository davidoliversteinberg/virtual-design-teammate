---
name: skill-quality-audit
description: >
  Quality-check and audit skill files - the benchmark for this pack. This skill should be used when the
  user types /skill-eval, asks to "audit this skill", "quality check a skill", "review this SKILL.md",
  "validate the pack", "check trigger collisions", "is this skill good enough to merge", or contributes
  a new/changed skill for review. Runs structural validation, trigger-collision review, content-quality
  review, and behavioral forward tests. Do not use for testing a product design with participants; route
  that to design-validation.
metadata:
  version: "0.3.0"
  phase: others
---

# Skill quality audit

Four graders, run in order - each catches what the previous cannot. Two modes: **single-skill** (a contribution or change; run all graders on it plus a collision check against the pack) and **whole-pack** (release audit; run everything on everything).

## Grader 1 - Structural (deterministic)

Run `scripts/validate.py` from this skill's directory against the plugin root (bash: `python3 skills/skill-quality-audit/scripts/validate.py <plugin-root>`). It checks manifest validity, frontmatter, skill naming, description length, file length, referenced files, routing targets, and duplicates. Any failure is a **Blocker**; fix structural failures before judgment graders.

## Grader 2 - Trigger audit (judgment)

**Description rubric** - grade each description pass/fail with quoted evidence:
- Third person, starts with what it does, includes "use when" trigger situations
- Contains realistic trigger phrases a designer would actually type (not just topic nouns)
- States at least one do-NOT-use boundary with the sibling skill named
- No overclaim: description promises only what the body delivers

**Collision matrix** - the pack-level check nothing else does:
1. Take the prompt set in `evals/trigger-prompts.md` (or generate 3-5 realistic prompts per skill under audit, including deliberately ambiguous ones).
2. For each prompt, reading ONLY the descriptions, predict which skill fires; record confidence.
3. Build the matrix: prompts x skills. Every off-diagonal hit (prompt intended for A, routed to B) is a finding naming which description to tighten and how.
4. Ambiguous-by-design prompts ("this table feels cluttered") must resolve to a documented winner; "either could fire" is a **Major**.

## Grader 3 - Content quality (rubric)

Grade the body against pack conventions, each criterion pass/fail with a quoted line as evidence:
- **Imperative and specific.** Instructions command ("check contrast at 4.5:1"), never hedge ("ensure good accessibility"). Generic advice a non-Optimizely skill could contain is a finding.
- **Progressive disclosure.** Lean SKILL.md, depth in references/; reference files referenced by exact path; nothing duplicated between them.
- **No memory-asserted facts.** Anything verifiable live (token values, component props, current product behavior) instructs verification via MCP, never states values from memory.
- **Workflow completeness.** Numbered or clearly ordered steps; output format defined; edge/failure behavior stated (what to do when a connector or dependency is missing).
- **Routing discipline.** Boundaries to sibling skills explicit; no skill silently re-implements a sibling's job.
- **Pack voice.** Sentence case, no em-dashes, concrete Optimizely grounding where relevant, realistic-but-fake data only.

## Grader 4 - Behavioral forward test

For substantial new or changed workflows, run realistic tasks using only the skill and minimum raw inputs. Evaluate observable behavior and artifacts, not whether the response repeats preferred headings.

Include:

- an obvious trigger;
- a nearby-skill boundary prompt;
- an ambiguous prompt with a documented winner;
- a missing-tool or missing-evidence condition;
- a realistic end-to-end task when the skill creates an artifact.

Use an independent evaluator when available and authorized. For high-variance outputs such as critique, run the same golden task more than once and compare the priority and severity distribution. Fix only failures supported by the observations.

## Finding format and verdict

Findings use the pack standard: severity (Blocker / Major / Minor / Polish), location (file + section), issue, why it matters, fix. Verdict per skill: **merge** (no Blockers/Majors), **merge with fixes** (Minors listed), **revise** (Majors), **reject** (Blockers or structural fails). Whole-pack mode adds: collision matrix summary, worst offenders, and top 3 pack-level risks.

## Boundaries

This skill evaluates skill files and behavior. It does not authorize live production changes, user research, publishing, or external messages as part of an evaluation. Use isolated temporary inputs for generated artifacts and seed routing tests from `evals/trigger-prompts.md`.
