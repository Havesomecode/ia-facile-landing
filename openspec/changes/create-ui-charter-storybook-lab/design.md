## Context

The repository is currently a planning space with OpenSpec artifacts and vision notes, not an implemented web app. The immediate goal is not to build the final IA Facile landing page, but to create a safe exploration environment where multiple visual directions can be implemented and reviewed comparatively.

The main constraint is avoiding generic AI-generated UI. The exploration must therefore optimize for visual direction specificity, isolated styling ownership, and comparable review structure. The local `ui-direction-steering` skill already defines the implementation mindset we want: explicit archetype, composition, surface language, interaction personality, and negative constraints before any coding.

This change should stay focused on the exploration lab. Research metrics and channel hypotheses matter for later landing-page validation, but they do not need to block setup of the visual identity sandbox.

## Goals / Non-Goals

**Goals:**
- Create a dedicated Storybook lab under `ui_charter/` for UI identity exploration.
- Make each visual direction implementable in an isolated folder with its own styling decisions and demo artifacts.
- Ensure visual directions are compared against the same content structure and review criteria.
- Preserve enough structure that later subagents can implement explorations without drifting into shared generic UI defaults.

**Non-Goals:**
- Build the production IA Facile landing page.
- Finalize product-market-fit metrics, acquisition channels, or production analytics.
- Standardize a reusable component library for the main product.
- Force all visual explorations to share one design-token system or one base component kit.

## Decisions

### Decision: Use Storybook as an exploration lab, not as a reusable component library first

Storybook is the right shell because it supports visual comparison, isolates demo states, and compounds well over time. We will treat it primarily as a gallery of visual theses and demo pages rather than a generic shared component inventory.

Alternatives considered:
- Build visual experiments directly in the app shell: rejected because it couples exploration to production code too early.
- Build isolated static HTML demos only: rejected because comparison and iteration would be harder to structure over time.

### Decision: Isolate each direction in its own folder with its own styling ownership

Each visual exploration SHALL have a dedicated folder and write scope so agents can produce distinct layout grammar, surface language, and primitives. Shared content structure is allowed; shared visual primitives are intentionally minimized.

Alternatives considered:
- Share one component system and theme each direction lightly: rejected because outputs would converge.
- Let every agent write anywhere in the workspace: rejected because comparison and cleanup become chaotic.

### Decision: Standardize comparison content while allowing direction-specific expression

Each direction will build the same basic story structure: hero, reassurance/positioning, first-step or everyday-use section, trust/differentiation section, and CTA. This keeps reviews focused on identity and composition rather than copy drift.

Alternatives considered:
- Allow every direction to invent its own page content: rejected because it weakens comparative review.

### Decision: Enforce anti-generic UI rules as part of the exploration contract

Every direction brief should include anti-patterns such as avoiding nested rounded cards, dashboard layouts, startup gradients, and shadow-led hierarchy. This reduces fallback into generic AI-generated UI.

Alternatives considered:
- Rely on taste review after code generation: rejected because generic patterns are easier to prevent than to unwind repeatedly.

### Decision: Defer research metrics and channel hypotheses to a follow-on change or spec

The current change focuses on the exploration mechanism for visual identity. Metrics and channel hypotheses should be captured before production landing-page implementation, but they are not required to make the Storybook lab valuable.

Alternatives considered:
- Block the visual lab until research metrics are formalized: rejected because that would delay useful design exploration without improving the sandbox itself.

## Risks / Trade-offs

- [Risk] Storybook setup could accidentally become the foundation of the production app rather than an exploration lab. → Mitigation: keep `ui_charter/` clearly separate from production-facing code and document exploration-only intent.
- [Risk] Directions may still converge visually despite isolation. → Mitigation: require explicit per-direction briefs, anti-goals, and isolated styling ownership.
- [Risk] Too much structure could make directions feel artificially constrained. → Mitigation: share review content only, not shared visual primitives.
- [Risk] Without research metrics, teams may over-index on aesthetics. → Mitigation: keep review questions tied to calmness, clarity, adult dignity, and strategic fit; plan metrics/channel work before final landing-page implementation.

## Migration Plan

1. Add the `ui_charter/` Storybook lab and scripts without touching production app code.
2. Add the shared exploration shell, review notes, and content scaffolding.
3. Add the first isolated visual-direction folders and demo stories.
4. Review directions comparatively and decide whether follow-on changes are needed for metrics, channels, or final landing-page implementation.

Rollback is straightforward because the change is additive and lives in an isolated workspace.

## Open Questions

- Should the first three implemented directions be exactly the current trio (`reassuring-editorial`, `calm-public-service-clarity`, `warm-modern-guidance`) or should one be replaced by a more utility-driven direction?
- How much shared infrastructure is acceptable before directions begin converging visually?
- Should research metrics and channel hypotheses become a separate change before any final landing-page implementation starts?
