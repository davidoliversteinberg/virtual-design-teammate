# Optimizely product context

Read this when the audited product is known (intake). Judge the design against the product's job to be done and its primary users - a pattern that's right for a marketer-facing tool can be wrong for an admin console. Reference the relevant JTBD when explaining why an issue matters. Each product's "Benchmark competitors" list is the starting set for pattern benchmarking - search how these products design the classified pattern before falling back to generic references.

## Opal
- **JTBD**: Get work done across Optimizely One through AI - ask questions, run agents and tools (e.g. build a promotion, generate product content, configure settings), and automate multi-step tasks conversationally instead of navigating each product's UI.
- **Primary users**: Any Optimizely One user, from marketers to admins, at varying technical levels.
- **Audit implications**: Conversational/agentic UI patterns - visibility of what the agent is doing and did (system status) is critical; trust cues, confirmation before consequential actions, and graceful error recovery weigh heavier than in form-based UI; entry points from host products must feel native to their context.
- **Benchmark competitors**: Salesforce Agentforce, Adobe AI Assistant, HubSpot Breeze, Microsoft Copilot (in M365), ChatGPT and Claude as general agent-UI references.

## CMS (Content Management System)
- **JTBD**: Create, manage, and publish digital content and experiences - author pages with Visual Builder, manage content types and assets, and deliver headlessly via Optimizely Graph.
- **Primary users**: Content editors and marketers daily; developers for content modeling.
- **Audit implications**: Editor efficiency and WYSIWYG clarity dominate; publishing states (draft, review, published, scheduled) must be unmistakable; this is the convention-setter other products inherit, so deviations here ripple.
- **Benchmark competitors**: Contentful, Sanity, Adobe Experience Manager, Sitecore, Storyblok, Contentstack, Webflow (for visual editing patterns).

## Commerce Connect (CoCo)
- **JTBD**: Manage and publish commerce content and operations on top of Optimizely CMS - create, edit, and publish catalogs, products, and variants across languages and markets; set pricing across markets and customer groups; build promotions; process and fulfill orders.
- **Primary users**: Ecommerce managers, merchandisers, content editors; administrators for markets, warehouses, payment, and shipping settings.
- **Audit implications**: Users live in catalog/pricing/promotion workflows daily - efficiency and bulk operations matter; content-editing patterns should feel consistent with CMS conventions (Visual Builder, Content Manager); multi-market and multi-language states must be visible, never ambiguous.
- **Benchmark competitors**: Shopify (admin), commercetools (Merchant Center), Adobe Commerce, Salesforce Commerce Cloud, BigCommerce.

## Configured Commerce (CFG)
- **JTBD**: Run a B2B ecommerce business for manufacturers and distributors out of the box - manage products, customer-specific pricing, quotes, customer segments, promotions, orders, and the business rules around them via the Admin Console and Spire CMS storefront.
- **Primary users**: B2B ecommerce managers, sales/CSR teams handling quotes and orders, site admins; buyers on the storefront side.
- **Audit implications**: Dense enterprise data UI is the norm - tables, filters, and rule builders must scale to large catalogs and customer lists; B2B logic (customer-specific pricing, quote flows, order approval) creates complex states that need clear visibility; admin patterns predate Axiom in places, so flag legacy-vs-Axiom inconsistencies.
- **Benchmark competitors**: Salesforce B2B Commerce, Adobe Commerce B2B, BigCommerce B2B Edition, Sana Commerce, OroCommerce.

## CMP (Content Marketing Platform)
- **JTBD**: Plan, produce, and collaborate on marketing content end to end - campaign and calendar planning, briefs, tasks and approval workflows, and asset management in the DAM.
- **Primary users**: Marketers, content producers, and campaign managers collaborating in teams.
- **Audit implications**: Collaboration surfaces (assignments, statuses, comments, approvals) must make ownership and next steps obvious; calendar and workflow views live or die on scannability; notification and handoff moments deserve extra scrutiny.
- **Benchmark competitors**: Asana, Monday.com, Airtable, Wrike, Notion, Bynder (DAM), Planable.

## Web Experimentation
- **JTBD**: Run A/B tests and personalization on websites without code deploys - build variations in the visual editor, target audiences, and read statistically grounded results.
- **Primary users**: Marketers and optimization/growth teams; some technically fluent, many not.
- **Audit implications**: Stats and results UI must prevent misreading (significance, baselines, sample size) - honesty of data presentation is a UX concern here; the visual editor needs clear feedback about what's been changed and where a variation will run.
- **Benchmark competitors**: VWO, AB Tasty, Adobe Target, Kameleoon, Convert.

## Feature Experimentation
- **JTBD**: Ship features safely with flags and server-side experiments - manage flags, rollout rules, environments, and audiences, and measure feature impact through SDKs.
- **Primary users**: Developers and product managers working across environments.
- **Audit implications**: Developer-tool conventions apply - environment context must always be visible (a change in the wrong environment is a production incident); rule ordering and targeting logic need legible mental models; copy-friendly keys and technical details.
- **Benchmark competitors**: LaunchDarkly, Statsig, Split, Eppo, GrowthBook, Amplitude Experiment.

## ODP (Optimizely Data Platform)
- **JTBD**: Unify customer data across channels into profiles and real-time segments that power personalization, campaigns, and reporting across Optimizely One.
- **Primary users**: Marketers building segments and campaigns; data-minded admins managing integrations.
- **Audit implications**: Segment builders must make audience logic (and resulting size) predictable before use; data freshness and sync states need visibility; destructive actions on data or integrations warrant strong error prevention.
- **Benchmark competitors**: Twilio Segment, Adobe Real-Time CDP, Salesforce Data Cloud, mParticle, Klaviyo, Bloomreach.

## Optimizely Connect Platform (OCP)
- **JTBD**: Connect external systems (PIM, ERP, DAM, CRM, and other third-party tools) to Optimizely products - build, install, and manage integration apps and data syncs, host Opal tools, and make external data and actions available across the suite.
- **Primary users**: Developers building integrations; technical admins installing and configuring apps from the directory.
- **Audit implications**: Developer-facing surfaces (Dev Portal, app management) should follow developer-tool conventions - clear states for syncs and jobs, honest error/log surfaces, copy-paste-friendly technical details; App Directory browsing follows marketplace patterns; assume high technical literacy but low tolerance for ambiguity.
- **Benchmark competitors**: Zapier, Workato, MuleSoft, Tray.ai, Adobe Exchange and Salesforce AppExchange (for app-directory patterns), Vercel and Stripe dashboards (for developer-console patterns).

## Analytics
- **JTBD**: Measure and explore how experiences and experiments perform - dashboards, metrics, and reports that answer performance questions across Optimizely One products.
- **Primary users**: Marketers, analysts, and leaders scanning dashboards; PMs digging into metrics.
- **Audit implications**: Scannability and data-viz integrity dominate - clear hierarchies, honest axes and comparisons, obvious date/filter context on every view; empty and loading states for data-heavy views; export and share flows matter.
- **Benchmark competitors**: Amplitude, Mixpanel, Heap, Google Analytics 4, Adobe Analytics, PostHog.

## Admin Center and Reporting
- **JTBD**: Centrally manage who can access what across Optimizely One - users, roles, permissions, product access via Opti ID - and see what users or agents have done through auditing and reporting.
- **Primary users**: Org admins and IT; security/compliance reviewers reading audit trails.
- **Audit implications**: Access control errors are high-consequence - error prevention and explicit confirmation matter more than speed; permission states must be legible at a glance; audit/reporting views prioritize scannability, filtering, and export over visual flair.
- **Benchmark competitors**: Okta admin console, Microsoft Entra admin center, Google Workspace admin, Atlassian admin, GitHub organization settings.

## Other / cross-product
If the design spans products, isn't listed, or the product question was skipped, infer who uses it and what job it serves from the design and any context given - never ask again after a skip. State the inference in one line at the top of the audit, then judge against general enterprise SaaS expectations plus Axiom.
