# Frontend Designer

Frontend Designer is a standalone skill for designing, implementing, diagnosing, and quality-gating visible Optimizely product interfaces.

It combines product-design judgment with verified design-system usage, implementation, browser inspection, and a rendered completion gate. It does not accept a plausible prototype, an Axiom import, or compiling code as proof that the correct component, state, or responsive behavior was used.

## What it does

Use `frontend-designer` when you want an agent to build, change, polish, or finish a visible product interface.

The skill:

- selects the interaction model before assembling components;
- establishes composition, hierarchy, content, actions, typography, and surfaces;
- maps semantic user intent to the correct current design-system primitive or documented pattern;
- verifies compound anatomy, props, tokens, icons, states, transitions, and rendered modes;
- reconciles Figma and prototypes with the installed design-system contract instead of copying them uncritically;
- discovers interactive controls created internally by compound components;
- diagnoses whether a defect belongs to intent, mapping, composition, application code, the design system, or a version mismatch;
- fixes the earliest incorrect layer and repeats verification;
- renders the affected UI at primary, narrow, and actual component-mode boundaries;
- blocks completion on unresolved component, state, accessibility, responsive, or visual-quality failures.

Read the [complete user guide](docs/frontend-designer-guide.md) for the workflow, evidence model, prompt recipes, installation details, and completion contract.

## Use it

In Codex:

> Use $frontend-designer to review and finish this interface. Verify the component and state contracts against the installed design system, fix the owning layer of every important defect, and run the rendered conformance postflight.

In Claude Code:

> Use /frontend-designer to implement this Figma design. Treat Figma as product-intent evidence, reconcile it with the installed Axiom version, and verify every applicable transition and rendered mode.

You can provide a route, branch, screenshot, Figma link, written requirement, or existing implementation. The skill should report the evidence it inspected, what it fixed, what passed, and anything that remains genuinely unverifiable.

## Standalone skill with optional companions

The active plugin contains only `frontend-designer`. It does not install or update a broader product-design skill pack; the historical `OLD/` archive remains inert and outside discovery paths.

The skill is complete on its own. When compatible companion skills are installed, it can select the smallest useful specialist by declared capability for design critique, flows and states, interaction patterns, UX writing, accessibility depth, or developer handoff. It does not require fixed companion names and continues safely when none are available.

## Use it with Tien Le's Virtual Design Teammate

This work grew from a frontend-design extension originally explored alongside [Tien Le's Virtual Design Teammate](https://github.com/notienle/virtual-design-teammate). Tien's repository remains the source for his broader product-design framework and specialist skills.

Install the two repositories separately if you want both:

1. Install `frontend-designer` from `https://github.com/davidoliversteinberg/frontend-designer` for implementation, design-system conformance, rendered QA, and repair.
2. Install [Tien's Virtual Design Teammate](https://github.com/notienle/virtual-design-teammate) for its broader strategy, critique, flows, UX writing, accessibility, validation, and handoff capabilities.

They can coexist in the same Claude or Codex setup. Each repository remains independently maintained and updated. `frontend-designer` may use a relevant installed companion skill when its capability materially applies, but it never copies, updates, or assumes ownership of Tien's skills.

## Axiom and Figma evidence

For Axiom work, current evidence is retrieved rather than remembered:

- the target repository and installed package establish the executable version;
- the stable [OptiAxiom MCP](https://optimizely-axiom.github.io/optiaxiom/guides/mcp/) supplies current component, pattern, token, icon, guide, and test documentation;
- Figma node data, variables, screenshots, and Code Connect provide product-intent and visual-acceptance evidence;
- browser and accessibility-tree inspection prove rendered behavior.

The public [components](https://optimizely-axiom.github.io/optiaxiom/components/), [styling](https://optimizely-axiom.github.io/optiaxiom/styling/), and [guides](https://optimizely-axiom.github.io/optiaxiom/guides/) are supporting sources. The installed package remains the final API and runtime check.

## Install

Ask Claude or Codex:

> Install `frontend-designer` from `https://github.com/davidoliversteinberg/frontend-designer` for my local Claude Code and Codex setup. Preserve unrelated skills, validate the installation, and tell me whether I need a new session.

Manual personal locations commonly used in the current setup are:

- Claude Code: `~/.claude/skills/frontend-designer/SKILL.md`
- Codex: `~/.agents/skills/frontend-designer/SKILL.md`

Some Codex installations use `$CODEX_HOME/skills` instead. Confirm the discovery directory shown by the client.

The bundled checker compares the installed version with GitHub at most once every seven days and reports available updates. It never downloads or overwrites skills without explicit approval. To force a freshness check from a clone:

```sh
node skills/frontend-designer/scripts/check-for-updates.mjs --force
```

Start a new Claude or Codex session after installation or a skill rename so discovery metadata refreshes.

## Repository contents

```text
commands/frontend-designer.md
docs/frontend-designer-guide.md
skills/frontend-designer/
  SKILL.md
  references/
  scripts/check-for-updates.mjs
```

The inactive `OLD/` directory is retained only as historical, recoverable source from the earlier fork. It is outside the active `skills/` and `commands/` paths and is not installed or invoked by Frontend Designer.

## Credit

Credit to [Tien Le](https://github.com/notienle) for the original Virtual Design Teammate concept and framework. This standalone repository is maintained separately so Tien can continue evolving his work while Frontend Designer focuses on production interface design, implementation, component-and-state conformance, and rendered quality control.
