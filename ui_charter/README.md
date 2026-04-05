# ui_charter

`ui_charter` is a Storybook-based visual identity lab for IA Facile.

It is intentionally separate from any production landing page. Its job is to compare visual theses side by side, not to standardize a reusable product component library too early.

## Scripts

- `npm run storybook`: start the Storybook lab on `http://127.0.0.1:7007`
- `npm run build-storybook`: build the Storybook static site
- `npm run dev`: run the lightweight Vite overview page
- `npm run build`: type-check and build the Vite overview page
- `npm run lint`: run ESLint

## Shared Contract

Every visual direction in this workspace should:

- live in its own isolated folder under `src/directions/`
- implement the same high-level story content flow
- include a short thesis note explaining its visual intent
- avoid generic nested rounded-card SaaS composition unless explicitly justified

Shared content flow:

1. Hero
2. Reassurance / positioning
3. First-step or everyday-use section
4. Trust / differentiation
5. CTA

Shared review questions:

- Does this feel calmer or more intimidating?
- Does this feel specific or generic?
- Does this feel adult or simplistic?
- Does this support IA Facile's promise?
- Could this belong to any AI startup?
- Is hierarchy driven by typography and composition rather than nested containers?

## Current Directions

- `reassuring-editorial`
- `calm-public-service-clarity`
- `warm-modern-guidance`

## Directory Map

- `src/content/`: shared text content and review criteria for comparable stories
- `src/lab/`: shared Storybook overview and lab framing
- `src/directions/`: isolated visual directions with their own notes and styling
