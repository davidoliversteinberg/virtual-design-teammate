---
description: Quality-check a skill file before merging
argument-hint: [path to skill or 'whole pack']
---

Run the three graders: structural validation script, trigger audit with collision matrix, content quality rubric. Verdict: merge / merge with fixes / revise / reject.

Skill stack for this command (read the lead skill first, load supporting skills as the workflow reaches them - all bundled in this plugin):
1. skills/skill-quality-audit/SKILL.md (lead - includes scripts/validate.py and evals/trigger-prompts.md)

Run the lead skill's workflow on: $ARGUMENTS
