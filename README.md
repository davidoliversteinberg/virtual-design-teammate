# Virtual Design Teammate

Virtual Design Teammate is an Optimizely-focused product-design skill pack that supports the full path from problem framing to validated, implementation-ready interface work.

It combines product strategy, journeys, information architecture, enterprise interaction patterns, UX writing, accessibility, frontend design, design critique, usability validation, experimentation, and developer handoff. The pack is designed to act like a senior design teammate: it routes to the smallest useful method, gives a point of view, verifies live design-system facts when tools are available, and states what remains unverified.

This repository is currently a testing fork. The inherited implementation is preserved under [`OLD/`](OLD/) while the active system is developed at the repository root.

## Start here

| If you want to... | Start with | Example |
|---|---|---|
| Shape a broad or ambiguous product-design problem | `design-partner-core` | “Help us rethink this workflow from requirements through validation and handoff.” |
| Design, build, or polish a visible interface | `frontend-design` | “Use frontend-design to implement this Figma screen with Axiom V3 and verify it responsively.” |
| Diagnose an interface without changing it | `design-review` | “Audit this screen and prioritize the usability, accessibility, Axiom, and visual-craft issues.” |
| Change only interface language | `ux-writing` | “Rewrite this confirmation and recovery flow in the Optimizely voice.” |

The frontend skill automatically adds the relevant review, flow, pattern, UX-writing, accessibility, and handoff specialists. Users should describe the outcome and evidence they have; they do not need to orchestrate the skill stack themselves.

The two main entry skills also perform a lightweight weekly freshness check. At most once every seven days, they compare the installed version with this repository's `main` version and tell the user when an update is available. They never install updates or overwrite project-specific adaptations without explicit approval, and an unavailable network never blocks design work.

Read the **[complete frontend-design user guide](docs/frontend-design-guide.md)** for:

- everything the skill can design, implement, inspect, and verify;
- the automatic supporting-skill routing rules;
- the Axiom component-evidence and Figma reconciliation workflow;
- the acceptance contract, systemic regression scope and visible-geometry verification workflow;
- ready-to-copy prompts for build, review, audit, Figma, UX-writing, and branch work;
- expected outputs, limitations, installation, and update instructions.

## How to use it

Describe the design outcome you need in natural language. You do not need to select every skill manually: the pack can route a broad request through `design-partner-core`, or you can invoke a specialist directly when the job is already clear.

### Start with `design-partner-core` for broad work

`design-partner-core` is the orchestrator. Use it when the request is ambiguous, spans several phases, or needs the right combination of strategy, flows, UX writing, frontend design, validation, experimentation, and handoff.

Example: “Help us rethink onboarding, decide what to prototype, validate it with users, and prepare the engineering handoff.”

### Use `frontend-design` directly for visible UI

`frontend-design` is the interface-making specialist. Use it when the task is specifically to design, build, or polish a visible product interface. It owns the interaction model, composition, typography, content and action hierarchy, Axiom-aware implementation, responsive rendering, and the scored visual-quality gate.

When invoked directly, `frontend-design` now selects its own smallest useful support stack. It brings in `design-review` before changing an existing artifact when diagnosis is needed; `flows-and-states` for branching and missing states; `enterprise-patterns` or `interaction-patterns` for specialist behavior; `ux-writing` whenever interface strings change; and `accessibility` for materially changed interaction or deeper WCAG work. You do not need to invoke those skills individually.

Example: “Design and implement this onboarding screen using Axiom V3, then verify it at desktop and narrow widths.”

You can include a route, branch, screenshot, Figma link, written requirement, or existing implementation. The skill adjusts its workflow to the available evidence. It should state which supporting skills it used, what it verified, what remains an assumption, and whether the rendered interface passed its quality gate.

Explicit corrections remain blocking until the exact named route, object, state and viewport pass. The skill expands a local defect to every shared instance and relevant state, measures spacing against visible painted boundaries after clipping, and requires screenshot evidence to agree with computed geometry.

| | `design-partner-core` | `frontend-design` |
|---|---|---|
| Role | Routes and coordinates the work | Designs and verifies the visible interface |
| Best for | Broad, vague, or multi-part design requests | A clearly defined UI design, build, or polish task |
| Typical supporting skills | Selects the smallest useful skill stack | Adds review, flows, enterprise/interaction patterns, UX writing, accessibility, and handoff when needed |
| Output | A coherent workflow across design phases | A composed, implemented, rendered, and quality-gated interface |

They are designed to work together. The core routes visible interface work to `frontend-design` and brings in `ux-writing`, `accessibility`, or `flows-and-states` only when those skills materially contribute. For a clearly defined UI task, skip the router and invoke `frontend-design` directly.

### Axiom component accuracy

For Axiom interfaces, the skill does not rely on remembered component APIs. It inventories the intended UI, retrieves every selected interactive or compound component through the stable Axiom MCP, reconciles Figma instances with Code Connect and the installed package, records the required component parts and props, and verifies the implementation again after coding.

This is especially important for compound components. A Card must use its documented regions and slots rather than an improvised collection of boxes; a Button must use its icon API rather than hand-built spacing; and a Figma component without a code mapping must be classified as a supported composition or an explicit design-system gap before new infrastructure is created.

The public [components](https://optimizely-axiom.github.io/optiaxiom/components/), [styling](https://optimizely-axiom.github.io/optiaxiom/styling/), and [guides](https://optimizely-axiom.github.io/optiaxiom/guides/) remain authoritative supporting sources. The [Axiom MCP](https://optimizely-axiom.github.io/optiaxiom/guides/mcp/) supplies relevant current documentation on demand, while the target repository's installed package types remain the final API check.

For explicit invocation:

- In Codex, use `$design-partner-core` or `$frontend-design`.
- In Claude Code, use `/design-partner-core` or `/frontend-design` when the skills are installed personally. Plugin installations may namespace skills under the plugin name.

For detailed prompt recipes and the full operating model, see the [frontend-design user guide](docs/frontend-design-guide.md).

## Credit and lineage

This work builds on [Tien Le's original Virtual Design Teammate](https://github.com/notienle/virtual-design-teammate), created for Optimizely's Platform & Commerce Design team.

Tien established the core idea that repeatable parts of product-design practice can become reusable AI skills. His original work supplied the phase-based design workflow, command-to-skill routing model, Optimizely product context, strategy and journey methods, enterprise patterns, critique foundations, UX-writing guidance, experimentation guidance, and developer-handoff structure.

This fork preserves that contribution in three ways:

- GitHub fork history remains connected to the upstream repository.
- The inherited repository state is preserved under `OLD/` for reference during testing.
- Adapted skills retain their conceptual lineage while the active architecture is rewritten around clearer ownership and stronger implementation and validation gates.

The frontend-design system added in this fork was designed by David Steinberg through work in Axiom Play. It is not a cosmetic style layer. It expands the teammate from design-process guidance into a system that can make, implement, render, inspect, and quality-gate real Optimizely product interfaces.

## Why frontend design was added

The original pack was strongest before and around the design artifact: framing the problem, selecting patterns, critiquing a screen, planning an experiment, and preparing a handoff. It had useful visual-design principles, but it did not fully govern the difficult transition from design intent to a high-quality rendered interface.

The added `frontend-design` skill closes that gap. It introduces the following capabilities and constraints.

### 1. Interaction model selection before styling

The skill requires the designer or agent to identify the primary interaction model before choosing components: queue, grid, table, master-detail, editor, comparison, dashboard, or focused modal/sheet.

This prevents component-first assembly and exposes structural mistakes early. A visual asset review should not accidentally behave like a dashboard; a deep comparison should not be compressed into a generic drawer; a data-comparison task should not become a decorative card grid.

### 2. Explicit composition and attention ownership

Every visible interface defines:

- the dominant region that owns the current decision;
- the supporting region that provides evidence or context;
- the utility region containing navigation and lower-frequency controls;
- the first three stops in the reading order;
- the purpose of quiet space.

This produces intentional asymmetry, localized density, and a clear focal point rather than mechanically equal modules.

### 3. Readable product typography

The system distinguishes headings, body copy, metadata, captions, and machine-readable values. It prevents small type from becoming a workaround for excessive content and restricts uppercase monospaced captions to genuinely specialized roles.

The result is an interface whose hierarchy survives at the rendered viewport, not merely in a component tree or Figma layer list.

### 4. Content restraint and progressive disclosure

The frontend-design system asks whether every badge, label, metric, timestamp, status, description, and control changes a user decision. Repeated state and low-value metadata are removed or progressively disclosed.

This is especially important in AI and workflow surfaces, where recommendation, confidence, status, rationale, and metadata can easily repeat the same conclusion five different ways.

### 5. Precise action hierarchy

Primary, secondary, tertiary, destructive, repeated, and selected-state actions receive distinct roles. The system limits bright Optimizely green to a single meaningful primary action per visible decision scope and prevents selected filters, tabs, rows, and repeated card actions from competing as primary calls to action.

### 6. Surface discipline

Cards, panels, drawers, sheets, modals, separators, and open composition are chosen because they communicate workflow boundaries, not because they are convenient containers.

The system explicitly detects common generic-interface failure modes:

- card-per-section layouts;
- nested bordered boxes;
- dashboard statistics that do not change a decision;
- generic right drawers containing deep work;
- badges for every attribute;
- AI scores used as the visual centerpiece;
- loud gradients, glass effects, and decorative motion in operational software.

### 7. Axiom V3 implementation authority

The frontend-design skill maps design intent into Axiom V3 components, semantic color tokens, spacing tokens, typography roles, form patterns, menu patterns, page-shell behavior, icons, dark mode, accessibility, and repository conventions.

Component APIs, compound anatomy, patterns, tokens and icons are retrieved before implementation and verified again afterward. Figma nodes and Code Connect mappings are reconciled with the installed package rather than treated as screenshots or trusted from memory. If live tools are unavailable, the skill inspects installed declarations and states the missing verification.

### 8. Visual-reference interpretation

Screenshots and prototypes are treated as evidence about relationships, hierarchy, proportions, behavior, and quality. They are not copied blindly.

The system separates durable design decisions from screenshot accidents such as arbitrary panel widths, prototype defects, tiny text, invalid controls, or incidental numbers of cards.

### 9. Editorial and visual-subject surfaces

DAM, Brand Packs, typography, imagery, logos, color systems, and templates require enough scale and calm composition to be judged visually before they are edited.

The added guidance raises or lowers editoriality according to the subject while keeping all interface chrome Axiom-based and operationally credible.

### 10. Motion tied to frequency and comprehension

Motion is classified by interaction frequency. Frequent and keyboard-driven work remains immediate; occasional or rare moments may use restrained transitions when motion explains continuity, hierarchy, status, or completion.

Decorative AI shimmer, perpetual glow, elastic easing, and motion used to compensate for weak hierarchy are rejected.

### 11. Rendered responsive verification

Visible work is not complete when TypeScript compiles or the Axiom components are technically valid. The changed route must be rendered at its primary desktop width and at least one narrower width, with relevant interaction states exercised and screenshots inspected.

### 12. A scored visual-quality gate

The completed interface is scored across ten categories:

1. Interaction-model fit
2. Focal point and reading order
3. Typography and readability
4. Composition and spatial balance
5. Content restraint
6. Action hierarchy
7. Surface discipline
8. Axiom and Optimizely brand fit
9. Accessibility and operability
10. Browser and responsive quality

Passing requires at least 17/20, no category scored zero, and no automatic failure such as clipped actions, unreadable type, dead controls, repeated bright-green actions, broken keyboard behavior, or unverified screenshots.

## Architecture

`design-partner-core` is the router. It loads Optimizely context, identifies the job, and activates only the relevant specialist skills.

```text
Product-design request
        |
        v
design-partner-core
        |
        +-- Define: strategy, requirements, journeys, metrics
        +-- Design: IA, enterprise patterns, flows, UX writing
        +-- Make: frontend design and Axiom implementation
        +-- Review: design review and accessibility
        +-- Validate: usability testing and prototype strategy
        +-- Experiment: hypotheses, metrics, and live-traffic tests
        +-- Handoff: behavior, states, content, accessibility, acceptance criteria
        `-- Evaluate: structural, trigger, and behavioral skill quality
```

## Active skills

| Skill | Responsibility |
|---|---|
| `design-partner-core` | Routes ambiguous and multi-part design requests without duplicating specialist guidance |
| `design-context` | Grounds work in Optimizely products, users, voice, Axiom, and connected design evidence |
| `prd-to-design-plan` | Turns requirements or an incomplete brief into an actionable design plan |
| `design-strategy` | Frames direction, choices, bets, and alignment narratives |
| `journey-mapping` | Maps end-to-end journeys, experience maps, or service blueprints |
| `success-metrics` | Defines one primary outcome metric, guardrails, baselines, targets, and instrumentation needs |
| `information-architecture` | Structures content, navigation, grouping, labeling, and findability |
| `enterprise-patterns` | Specifies tables, filters, bulk actions, permissions, settings, wizards, connectors, and audit logs |
| `interaction-patterns` | Specifies forms, search, onboarding, errors, feedback, loading, and micro-interactions |
| `flows-and-states` | Makes sequence, branching, empty/loading/error/permission states, and edge cases explicit |
| `ux-writing` | Produces interface copy in the Optimizely voice, including agentic status, confirmation, and recovery language |
| `frontend-design` | Owns visible interface composition, Axiom implementation, rendered verification, and visual quality |
| `design-review` | Audits existing designs through UX, accessibility, Axiom, and visual-craft lenses |
| `accessibility` | Supplies WCAG 2.2 AA design requirements and deeper audits |
| `prototype-strategy` | Selects the cheapest prototype fidelity that can answer the design question |
| `design-validation` | Plans and interprets moderated or unmoderated usability validation without confusing it with A/B testing |
| `experiment-design` | Designs live-traffic experiments with power, guardrails, and pre-committed decision rules |
| `developer-handoff` | Packages intent, flow, states, behavior, content, accessibility, and acceptance criteria for engineering |
| `design-communication` | Shapes rationale and outcomes for the audience without replacing the source design work |
| `ux-laws` | Provides psychological explanations when they materially strengthen a design decision |
| `skill-quality-audit` | Validates structure, trigger boundaries, content quality, and behavioral test coverage |

## Commands

Commands are shortcuts. Natural-language requests route to the same skills.

| Command | Job |
|---|---|
| `/strategize` | Develop a UX strategy and prioritized design direction |
| `/map-journey` | Map an end-to-end experience |
| `/define-metrics` | Define measurable success and guardrails |
| `/design-pattern` | Select and specify an enterprise or interaction pattern |
| `/ia` | Design structure, navigation, grouping, and labels |
| `/ux-writing` | Draft or revise words in an interface |
| `/frontend-design` | Design, build, or polish a visible Optimizely interface |
| `/design-critique` | Audit an existing screen, flow, prototype, or URL |
| `/validate-design` | Plan a usability test or evidence-based design validation |
| `/hypothesis` | Write a falsifiable product or experiment hypothesis |
| `/experiment` | Design a trustworthy live-traffic experiment |
| `/test-plan` | Route an ambiguous testing request to validation, experimentation, or skill evaluation |
| `/handoff` | Prepare an implementation-ready developer handoff |
| `/skill-eval` | Evaluate a skill or the complete pack |

## Three different meanings of testing

The pack deliberately separates testing jobs that are often conflated:

- **Design validation** asks whether people understand and can complete the intended task. It uses moderated or unmoderated usability methods, realistic tasks, observable success criteria, and qualitative evidence.
- **Experimentation** asks whether a production change causally moves a measurable outcome. It uses randomized variants, sufficient power, guardrail metrics, and pre-committed decision rules.
- **Skill evaluation** asks whether this skill pack routes correctly and produces reliable, useful work. It uses structural checks, trigger-collision prompts, and independent behavioral forward tests.

## Tool behavior

- Use Axiom tools to verify current components, props, tokens, patterns, and icons when available.
- Use Figma tools when a Figma node or file is supplied; exact design context is stronger evidence than memory or a screenshot approximation.
- Use browser and screenshot tools to validate rendered interfaces and reachable states.
- If a connector is unavailable, continue with static guidance, label assumptions, and never claim the missing verification happened.

## Compatibility

The repository includes both Claude and Codex plugin metadata. Skills remain plain Markdown and avoid making one interactive widget or connector a prerequisite for ordinary work.

## Quality and contribution

Before accepting a skill change:

1. Run structural validation.
2. Check its description against neighboring skills for trigger collisions.
3. Confirm that detailed material is progressively disclosed through references.
4. Test realistic prompts, including ambiguous boundary cases.
5. For visible UI behavior, render and inspect the result rather than testing only wording or source structure.

The repository is intentionally in active testing. Findings from real design work should produce narrow improvements, not an accumulating rule for every isolated example.
