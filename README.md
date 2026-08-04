# Virtual Design Teammates

A Claude skill pack for Optimizely product designers, built by Platform & Commerce Design. It packs the team's design conventions into one AI thinking partner, structured around the design process: each phase exposes **commands** (the jobs designers call) and each command orchestrates a **stack of reusable skills** behind it.

Basic concept: what can be standardized in our design process can be turned into a skill.

This pack will be open for contributions from the design team. Every skill is a plain markdown file, so improving one is as easy as editing a doc - and every contribution passes the built-in quality benchmark (`/skill-eval`) before merging.

## Architecture: phase -> commands -> skills

| Phase | Command | Skill stack (lead first) |
|---|---|---|
| Define | `/strategize` | design-strategy + prd-to-design-plan + success-metrics + design-communication |
| Define | `/map-journey` | journey-mapping + success-metrics |
| Define | `/define-metrics` | success-metrics + design-strategy + experiment-design |
| Ideate | `/design-critique` | design-critique + accessibility + ux-laws + ux-writing |
| Ideate | `/design-pattern` | enterprise-patterns / interaction-patterns + flows-and-states + visual-design + ux-writing + accessibility |
| Ideate | `/ia` | information-architecture + ux-writing + enterprise-patterns |
| Ideate | `/ux-writing` | ux-writing + accessibility |
| Handoff | `/handoff` | developer-handoff + flows-and-states + accessibility + ux-writing |
| Testing | `/hypothesis` | experiment-design + success-metrics |
| Testing | `/test-plan` | experiment-design + prototype-strategy + success-metrics |
| Others | `/skill-eval` | skill-quality-audit |

Always on underneath every command: **design-partner-core** (routing - natural language works exactly like commands) and **design-context** (Optimizely grounding: Axiom MCP verification, product surfaces, user archetypes, voice).

18 skills across 11 commands, plus the 2 always-on core skills. Skills are reusable across commands by design.

## How it works

- **Skills** are markdown instruction files. Claude matches your request against skill descriptions, loads the relevant SKILL.md into context, and follows it. Deep material (method guides, pattern references, critique lenses - 20 reference files) loads only when the workflow reaches it.
- **Commands** are the team's named jobs. In Claude Code they are real slash commands (this repo's `commands/` directory). In Claude.ai and Cowork, typing the command phrase or describing the job naturally triggers the same stack - commands are shortcuts, not requirements.
- **Live verification**: skills that touch the design system verify against the Axiom MCP (components, tokens, patterns, icons) and pull designs via the Figma MCP. Without connectors, skills say what they could not verify and continue with static guidance.


## Quality benchmark

`skills/skill-quality-audit/` is the contribution gate: a structural validator script (`scripts/validate.py`), a trigger-collision matrix method with a starter prompt set (`evals/trigger-prompts.md`), and a content quality rubric. Run the validator any time:

```
python3 skills/skill-quality-audit/scripts/validate.py .
```

## Notes

- Do not install alongside pcd-design-teammate in the same workspace; the two packs overlap and will compete for triggers.
- Word and PowerPoint deliverables defer to the organization optimizely-brand skill.
- Never put real customer data, credentials, or internal financials into prototypes, examples, or skill content.
