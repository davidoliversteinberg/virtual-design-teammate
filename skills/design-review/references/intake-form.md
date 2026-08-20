# Intake form template (single combined form)

Render the intake as ONE elicitation form using the Visualizer (`visualize:show_widget`). First call `visualize:read_me` with modules `["elicitation"]` silently, then render. Keep the header SVG byte-for-byte as provided by the elicitation guide (it is fixed chrome). One short chat line before the form; NOTHING after it - the widget ends the turn.

```html
<form class="elicit">
  <div class="elicit-header">
    [fixed header SVG from the elicitation guide]
    <span>Audit setup</span>
  </div>
  <div class="elicit-body">
    <div class="elicit-group">
      <label class="elicit-question">Which product is this design for?</label>
      <div class="elicit-pills" data-name="product">
        <button type="button" class="elicit-pill" data-value="Commerce Connect (CoCo)">Commerce Connect (CoCo)</button>
        <button type="button" class="elicit-pill" data-value="Configured Commerce (CFG)">Configured Commerce (CFG)</button>
        <button type="button" class="elicit-pill" data-value="CMS">CMS</button>
        <button type="button" class="elicit-pill" data-value="CMP">CMP</button>
        <button type="button" class="elicit-pill" data-value="Web Experimentation">Web Experimentation</button>
        <button type="button" class="elicit-pill" data-value="Feature Experimentation">Feature Experimentation</button>
        <button type="button" class="elicit-pill" data-value="ODP">ODP</button>
        <button type="button" class="elicit-pill" data-value="OCP">OCP</button>
        <button type="button" class="elicit-pill" data-value="Opal">Opal</button>
        <button type="button" class="elicit-pill" data-value="Analytics">Analytics</button>
        <button type="button" class="elicit-pill" data-value="Admin Center / Reporting">Admin Center / Reporting</button>
        <button type="button" class="elicit-pill" data-value="Other">Other</button>
      </div>
    </div>
    <div class="elicit-group">
      <label class="elicit-question">What is the context of this design?</label>
      <textarea class="elicit-textarea" data-name="context"
        placeholder="What it's for, who uses it, and what problem it solves"></textarea>
    </div>
    <div class="elicit-group">
      <label class="elicit-question">What do you want to audit for? All four are pre-selected - tap to deselect any you don't need.</label>
      <div class="elicit-pills" data-name="lenses" data-multi="true">
        <button type="button" class="elicit-pill" data-value="1. UX heuristics" aria-pressed="true">1. UX heuristics</button>
        <button type="button" class="elicit-pill" data-value="2. Accessibility" aria-pressed="true">2. Accessibility</button>
        <button type="button" class="elicit-pill" data-value="3. Axiom compliance" aria-pressed="true">3. Axiom compliance</button>
        <button type="button" class="elicit-pill" data-value="4. Visual craft" aria-pressed="true">4. Visual craft</button>
      </div>
    </div>
  </div>
  <div class="elicit-footer">
    <button type="button" class="elicit-skip">Skip (use defaults)</button>
    <button type="button" class="elicit-submit">Start audit</button>
  </div>
</form>
```

Rules:
- Raw `<input type="checkbox">` elements are forbidden - the shell only harvests `.elicit-pill` buttons with `data-value` inside `.elicit-pills` containers; multi-select values arrive comma-joined.
- The submission arrives as ONE user message with the filled fields (e.g. `Audit setup - Product: Opal - Context: ... - Lenses: 1. UX heuristics, 2. Accessibility`). Use what's present; any missing/empty field gets its default (product: infer from design; context: infer from design; lenses: all four).
- `(Skipped ...)` = all defaults. Never re-ask any intake question after submission or skip, in any form. State inferred assumptions in one line and start the audit in the same turn.
- If the pre-selected `aria-pressed` state doesn't render, the question text and Skip button still communicate the default, and an empty lens submission runs all four.
- Only fall back to plain chat (all three questions in one message, numbered lens options) if the Visualizer tool is unavailable.

## Fourth group - scope (conditional)

Include this group ONLY when BOTH conditions hold: (1) the input is a Figma link, HTML file, or working URL, AND (2) the user has not already specified what to audit in their request. Otherwise the group does not appear at all:
- Screenshot input → never include (the screenshot IS the scope).
- User already named the target ("audit the checkout flow", "review the Admin row") → never include; their words are the scope.

When included, place it between the context and lens groups as a plain optional text field - no pre-form resolution of the link/file is allowed (that is the main source of intake lag).

```html
    <div class="elicit-group">
      <label class="elicit-question">Which screen, flow, or part should I audit? (optional - leave blank and I'll pick the most sensible scope)</label>
      <textarea class="elicit-textarea" data-name="scope"
        placeholder="e.g. the checkout flow, the Admin row, the settings page"></textarea>
    </div>
```

After submission, match a filled scope against the resolved frames/rows/routes. If blank on a multi-part input, list the detected parts in one line with a recommendation and proceed - never render a second form round for scope.
