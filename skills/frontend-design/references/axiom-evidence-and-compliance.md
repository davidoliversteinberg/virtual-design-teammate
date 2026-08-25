# Axiom evidence and compliance

Use this workflow whenever an interface will be implemented with Axiom or described as Axiom-compliant. Do not ask the model to memorize the catalog. Retrieve the relevant contract before implementation and prove the result afterward.

## Authority order

Resolve conflicts in this order:

1. The user's stated task and constraints.
2. A supplied Figma node fetched through design context, variables and screenshot evidence.
3. The installed `@optiaxiom/react` and icon package versions, exported types and lockfile.
4. The stable official Axiom MCP for component documentation, props, patterns, tokens, icons, tests and guides.
5. Nearby production-quality repository patterns and approved local wrappers.
6. The public Axiom documentation, used as supporting evidence rather than an assumed version match.

Never claim that a public example compiles against the target repository until the installed package confirms it.

## Mandatory preflight

Before writing UI code:

1. Detect the installed Axiom React and icon versions from the target repository. Identify the package manager and authoritative lockfile.
2. If Figma is supplied, fetch the target node, variables and screenshot. Record component instance names and Code Connect information when available.
3. Inventory each distinct interactive, compound and data-display element in the intended interface. Include controls implied by states, not only the default screenshot.
4. Query the stable Axiom MCP for every selected interactive or compound component, even when its name seems familiar:
   - use `search_components` when the mapping is unknown;
   - use `get_component` for the exact API, subcomponents and relevant props;
   - use `get_patterns` for compound composition and components used together;
   - use `get_tokens` before adding or translating styling values;
   - use `search_icons` instead of guessing an export;
   - use `get_guides` or `get_tests` when setup or behavior is material.
5. Reconcile MCP results with installed exports and types. The installed package wins when versions differ.
6. Write a compact internal component evidence record:

| Intended element | Figma component | Axiom component or pattern | Required parts/props | Installed verification | Exception |
| --- | --- | --- | --- | --- | --- |

Do not begin component infrastructure while an evidence row is unresolved.

If the MCP is unavailable, inspect the installed declarations/source and the official documentation links below. State that live retrieval was unavailable. Do not guess.

## Compound component contracts

Treat these as Optimizely implementation rules and verify upstream APIs live before use.

### Card

Do not reconstruct an Axiom Card with arbitrary boxes. Verify the current Card pattern, then use its named anatomy. The current stable pattern includes:

- `CardHeader` as the required identifying region;
- optional `CardPreview`, `CardImage` and `CardFooter` regions;
- `CardLink` for the card's primary link;
- `CardAction` and `CardCheckbox` for contextual actions and selection;
- `CardPreview` overlay slots `addonTopLeft`, `addonTopRight`, `addonBottomLeft` and `addonBottomRight`;
- `CardHeader` slots `addonBefore` and `addonAfter`, plus its description.

Put controls in the documented slots rather than absolutely positioning parallel markup. Use a product-specific wrapper such as an asset card only when the same domain composition repeats and the wrapper preserves the Axiom anatomy.

### Button and icons

Use the Axiom `Button` `icon` and `iconPosition` API. Do not manually assemble icon, label and spacing inside a button.

Apply the Optimizely product convention unless the supplied Figma component or a verified product rule says otherwise:

- a leading/start Material icon uses its filled treatment;
- a trailing/end Material icon uses its unfilled treatment;
- an icon-only button has an accessible name and a tooltip when its meaning is not obvious;
- menu, ellipsis, disclosure, select and segmented triggers use their purpose-built Axiom components instead of a generic Button recreation.

Verify that the chosen icon export and filled variant exist. A visually similar invented name is not an acceptable fallback.

## Figma-to-code reconciliation

For every Figma component instance:

1. Use Code Connect when it maps the instance to an Axiom component.
2. Otherwise search Axiom by the component's role and verify a documented pattern.
3. If no single component exists, compose documented Axiom primitives and record the composition.
4. If neither a component nor a supported composition exists, mark a design-system gap. Do not silently invent a shared primitive.

A gap may justify a local implementation only when the user requested it or the target repository already owns that pattern. A new shared wrapper needs a demonstrated gap and repeated credible use. Keep an isolated prototype clearly labeled when those conditions are not met.

## Mandatory postflight

After implementation and before visual scoring:

1. Inventory every changed Axiom component, compound part, icon and token.
2. Re-run `get_component` for each changed compound or interactive component and compare the implementation with its current parts, props and documented pattern.
3. Confirm every imported component and icon exists in the installed packages.
4. Run TypeScript, lint and the repository's deterministic Axiom checker when one exists. Treat unsupported props, legacy component parts, invalid compound anatomy, raw replacement controls and icon-policy failures as blockers.
5. Exercise the rendered interaction states and complete `visual-quality-gates.md`.
6. Report the component evidence record, checks run, exceptions, version differences and anything that could not be verified.

Code compilation does not prove correct composition. Visual similarity does not prove valid API use. Both evidence paths must pass.

## Official sources

- [Components](https://optimizely-axiom.github.io/optiaxiom/components/)
- [Styling](https://optimizely-axiom.github.io/optiaxiom/styling/)
- [Guides](https://optimizely-axiom.github.io/optiaxiom/guides/)
- [MCP guide](https://optimizely-axiom.github.io/optiaxiom/guides/mcp/)
- [Card](https://optimizely-axiom.github.io/optiaxiom/components/card/)
- [Button](https://optimizely-axiom.github.io/optiaxiom/components/button/)
- [Icons](https://optimizely-axiom.github.io/optiaxiom/guides/icons/)
