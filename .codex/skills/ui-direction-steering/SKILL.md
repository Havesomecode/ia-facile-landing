---
name: ui-direction-steering
description: Steer UI and web component generation away from generic nested rounded-card layouts and toward intentional visual direction. Use when Codex is asked to design or implement web UIs, React components, landing pages, dashboards, app shells, or design systems, especially when outputs feel repetitive, overly card-based, too Tailwind-SaaS-like, visually bland, or lacking strong composition, hierarchy, and surface language.
---

# UI Direction Steering

Turn vague UI requests into explicit design direction before writing code.

## Core principle

Assume implementation skill already exists. Add only the art direction, layout constraints, and anti-pattern guardrails that prevent fallback into generic UI.

Optimize for:
- composition
- hierarchy
- surface language
- interaction personality
- negative constraints

Do not optimize for vague adjectives such as "modern", "clean", or "beautiful" unless they are translated into concrete decisions.

## Working method

For any UI request, define these five axes before generating code:

1. **Archetype**
   - Choose a recognizable UI family.
   - Examples: editorial landing page, dense expert console, brutalist admin tool, product-storytelling page, document-centric workspace, command-driven app shell, industrial control panel.

2. **Composition**
   - State the page or app structure explicitly.
   - Specify shell, columns, bands, grids, panels, sticky regions, inspectors, hero structure, or asymmetry.
   - Prevent default vertical stacks of centered cards.

3. **Surface language**
   - Specify radius, borders, shadows, density, spacing, separators, typography feel, and color behavior.
   - Prefer concrete statements such as:
     - small radius
     - flat surfaces
     - 1px borders
     - compact density
     - restrained palette
     - typography-led hierarchy

4. **Interaction personality**
   - Define how the interface should feel in use.
   - Examples: precise, calm, premium, fast, keyboard-first, narrative, tool-like, expert-focused.

5. **Negative constraints**
   - Explicitly forbid common fallback patterns.
   - Common examples:
     - avoid nested cards
     - avoid card-inside-card composition
     - avoid generic Tailwind SaaS look
     - avoid oversized padding
     - avoid centering everything in one narrow container
     - minimize decorative shadows
     - use structure, not decoration

## Output strategy

When the user request is underspecified, do not jump directly into code.

First propose 2 or 3 distinct UI directions. For each direction, provide:
- archetype
- composition summary
- surface language summary
- reason it fits the use case
- what makes it distinct from generic SaaS UI

Then implement the strongest option.

If the user already gave a clear direction, skip the options step and implement directly.

## Prompt construction pattern

Translate the user request into an internal brief with this structure:

- product or screen type
- target user and usage context
- visual archetype
- tone or personality
- layout composition
- surface language
- interaction style
- explicit avoid list

Use that brief to drive implementation.

## Reusable brief template

Use this template internally or adapt it in the response:

Build a [type of interface] for [target user / use case].

Visual direction:
- [design archetype]
- [tone / personality]
- [typography feel]
- [color approach]

Layout:
- [explicit page or app structure]
- [section arrangement]
- [hierarchy strategy]

Surface language:
- [corner radius]
- [border / shadow strategy]
- [spacing density]
- [panel / container usage]

Interaction style:
- [hover / motion / feedback]
- [control feel]

Avoid:
- [repeated bad patterns]

The result should feel like:
- [2 to 4 descriptive references in words]

## Default anti-generic rules

Unless the user clearly wants a soft card-based aesthetic, default to these rules:
- use containers sparingly
- prefer bands, grids, dividers, and spacing over repeated boxes
- keep radii small to medium
- use borders more than shadows
- create hierarchy with typography, alignment, spacing, and contrast
- make sections structurally distinct
- prefer asymmetry when it improves rhythm
- avoid uniform card grids unless the content truly requires them

## Refactoring rule for weak UI requests

If the request says only "modern", "clean", "nice", "premium", or similar, rewrite it into concrete decisions before coding.

Example rewrite:
- "modern dashboard"
becomes
- "dense expert operations console with app shell, narrow side nav, top command bar, table-first main area, right inspector, flat surfaces, small radius, restrained palette, minimal shadows, avoid stacked cards"

## Review checklist

Before finalizing UI code, verify:
- Is the composition explicit and intentional?
- Would this still work if all shadows were removed?
- Is hierarchy created without relying on nested cards?
- Does each major section have a distinct structural role?
- Does the result avoid generic Tailwind SaaS patterns unless requested?
- Does the UI feel aligned with the target user and task?

If any answer is no, revise before delivering.

## Response style

When useful, explain design choices briefly in terms of composition and hierarchy, not just styling.

Prefer statements like:
- "Use a split app shell to separate navigation, work area, and context."
- "Use typography and dividers rather than cards to structure the page."
- "Keep surfaces flat so the density feels intentional rather than decorative."

Do not over-explain obvious frontend implementation details unless the user asks.
