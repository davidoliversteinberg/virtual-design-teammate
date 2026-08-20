# NN/g 10 Usability Heuristics - Audit Checklist

Based on Jakob Nielsen's 10 usability heuristics (Nielsen Norman Group). Walk through all 10 for every audit. Only report the ones violated or notably well-handled, but check every one. Each heuristic below has audit questions tuned for enterprise SaaS UI (the Optimizely context).

## 1. Visibility of system status
Does the UI keep the user informed about what is happening, within a reasonable time?
- Loading, saving, syncing, and processing states exist and are visible
- Async actions (bulk operations, imports, publishing) show progress and completion
- Current location is clear: active nav item, breadcrumbs, step indicators
- Selection states are unambiguous (how many items selected, what is selected)
- After an action, the result is confirmed (toast, inline change, updated count)

## 2. Match between system and the real world
Does the design speak the user's language rather than the system's?
- Labels use merchandiser/marketer/developer vocabulary, not database or internal jargon
- Information order follows the user's mental model of the task, not the data schema
- Icons and metaphors match real-world conventions for this audience
- Error messages describe the problem in user terms, not error codes alone

## 3. User control and freedom
Can users undo, escape, and back out?
- Destructive or bulk actions have undo, or at minimum a clear confirm with consequences stated
- Dialogs and flows have an obvious exit that doesn't lose work
- Multi-step flows allow going back without data loss
- Drafts/autosave exist where work is long-form

## 4. Consistency and standards
Internal consistency and platform conventions (Jakob's law).
- Same action = same label, icon, and placement everywhere in the product
- Follows Axiom patterns and broader enterprise SaaS conventions users already know
- Terminology is consistent (don't mix "delete"/"remove", "item"/"product" for the same thing)
- Button hierarchy and placement match the rest of the surface

## 5. Error prevention
Is the design preventing errors, not just reporting them?
- Risky actions are guarded proportionally to their cost (confirm for destructive, none for reversible)
- Constraints prevent invalid input (date pickers, allowed characters, disabled invalid options)
- Defaults are safe and sensible
- Slips are prevented: adequate spacing between dangerous and common actions

## 6. Recognition rather than recall
Is everything needed for a decision visible at the point of decision?
- Options, context, and previously entered values are visible, not memorized
- Field help, format hints, and examples appear where the input happens
- Comparisons show items side by side rather than requiring back-and-forth
- Recently used items, suggestions, and autocomplete reduce memory load

## 7. Flexibility and efficiency of use
Does it serve both the novice and the power user?
- Frequent actions have accelerators: keyboard shortcuts, bulk actions, saved filters/views
- Defaults work for the common case; customization exists for the expert
- Repetitive tasks can be batched or templated
- Dense-data users can adjust density, columns, or sort

## 8. Aesthetic and minimalist design
Does every element earn its place?
- No decorative or rarely-needed content competing with the primary task
- Progressive disclosure: advanced options are reachable but not in the way
- One clear primary action per view
- Visual noise (borders, colors, badges) is proportional to information value

## 9. Help users recognize, diagnose, and recover from errors
When things fail, can the user fix it?
- Error messages are in plain language, state what went wrong, and suggest a fix
- Errors appear next to the field or object they concern
- Partial failures in bulk operations report which items failed and why
- Recovery path is one step away (retry, edit, contact), not a dead end

## 10. Help and documentation
Is help available in context when needed?
- Complex fields or concepts have inline explanation (tooltip, helper text, learn-more link)
- Empty states teach: what this is, why it's empty, what to do first
- Help is task-focused, concrete, and short
- Onboarding for a new surface exists where the concept is unfamiliar

## Supporting laws (apply where relevant, cite by name)
- **Fitts's law** - important/frequent targets are large and close; check small icon buttons and edge targets
- **Hick's law** - too many undifferentiated choices at once; check long unsorted menus and option grids
- **Law of proximity** - related controls grouped, unrelated separated; check whether spacing communicates grouping
- **Miller's law / chunking** - long forms and data broken into digestible groups
- **Peak-end rule** - flows end on confirmation/success, not abandonment ambiguity

## Information architecture (evaluate alongside the heuristics)
- Hierarchy: does the visual and structural hierarchy match task importance - does the eye land where the job starts, and do secondary things read as secondary?
- Grouping and labeling: are items grouped by the user's categories (not the org chart or data schema), with labels a first-time user would predict?
- Navigation and wayfinding: is it clear where you are, what's one level up, and where the sibling sections are; do section names promise what their contents deliver?
- Findability: could a user locate a specific item/setting here without prior knowledge - by scanning, search, or predictable placement?
- Depth vs breadth: is content over-nested (important things buried 3+ levels) or over-flattened (walls of undifferentiated options)?

## Mental models
- Does the design's structure match how this product's users think about the task (check the product JTBD), or does it mirror the system's internal model?
- Do objects behave as their appearance promises - things that look clickable are, things that look grouped act together, things that look like states are states?
- Are new or AI-driven concepts anchored to something familiar, with the differences made explicit rather than assumed?
- Would a user's prediction of "what happens if I press this" be correct every time? Flag any control whose outcome would surprise.

## Design at scale
- 10x data: does the layout survive ten times the rows, cards, tags, or child items shown in the mock - what scrolls, what truncates, what paginates?
- Long values: names, emails, product titles, and localized strings 2-3x longer than the mock's - where do they wrap, truncate, or break alignment?
- Extremes and absences: zero items, one item, thousands; missing images; stale or failed data - does each state have a design?
- Permissions and variants: how does the screen look for a role missing half the actions, or a plan missing half the features - hidden, disabled, or broken?
- Concurrency and time: multiple users editing, data changing under you, long-running jobs - is any of that visible where it matters?
