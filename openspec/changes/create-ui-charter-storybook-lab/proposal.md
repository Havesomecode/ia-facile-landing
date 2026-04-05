## Why

IA Facile has enough product and visual direction work to start comparative UI exploration, but not enough implementation guardrails to prevent generic component-library output. We need a Storybook-based lab that can host isolated visual identity experiments so multiple directions can be tested side by side without collapsing into the same rounded-card SaaS pattern.

## What Changes

- Create a dedicated `ui_charter` exploration workspace centered on Storybook rather than application code.
- Add a shared visual-charter structure for comparable landing-page demo stories, common review questions, and stable exploration content.
- Add isolated visual-direction exploration folders so each subagent can build a distinct UI identity with its own styling logic, components, and demo page.
- Capture the review workflow and output expectations so visual directions can be compared on strategic fit, clarity, and distinctiveness rather than on arbitrary taste.

## Capabilities

### New Capabilities
- `storybook-visual-charter`: Provide a Storybook-based exploration shell for visual identity testing, shared comparison structure, and stable review scaffolding.
- `visual-direction-explorations`: Provide isolated visual-direction workspaces where each exploration can implement its own thesis, primitives, demo page, and notes without inheriting a generic shared UI language.

### Modified Capabilities

## Impact

- Adds a new `ui_charter/` workspace and Storybook setup.
- Adds Storybook-related dependencies and scripts for exploration-only UI development.
- Introduces isolated folder conventions for multi-agent visual experiments.
- Creates a repeatable review workflow for future landing-page identity iterations.
