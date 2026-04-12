# How To Steer UI Away From Generic Nested Rounded Boxes

## Why This Matters

A recurring problem in AI-generated UI is that many outputs converge toward the same visual default:

- stacked sections
- centered hero
- card grids
- nested rounded rectangles
- soft shadows
- generic SaaS spacing
- interchangeable components

This happens because, in the absence of strong direction, the model falls back to the safest common pattern.

That is not a coding problem.
It is an art-direction problem.

## The Real Cause

When the brief says:

- modern
- clean
- simple
- beautiful

the model hears:

- rounded cards
- soft shadows
- centered marketing layout
- standard SaaS visual grammar

So if the goal is specificity, the prompt cannot only describe taste.
It must define a system.

## The Key Principle

Do not ask only for:

- a landing page
- a beautiful UI
- modern components

Ask for:

- a specific visual language
- explicit structural constraints
- explicit anti-patterns
- a limited set of recurring design primitives

## What Needs To Be Specified Up Front

To escape generic UI, the brief should define at least:

### 1. Composition logic

Questions to answer:

- Is the page editorial, poster-like, dashboard-like, or brochure-like?
- Is the hero image-led, type-led, or diagram-led?
- Are sections separated by rhythm, background changes, rules, or asymmetry?
- Does the page feel stacked, flowing, pinned, or cinematic?

If this is left unspecified, the result becomes:

- one centered block after another

### 2. Surface logic

Questions to answer:

- Are there cards at all?
- If yes, where and why?
- Are surfaces flat, outlined, paper-like, paneled, or layered?
- Should sections live directly on the page instead of inside containers?

If this is left unspecified, the result becomes:

- nested rounded boxes everywhere

### 3. Corner logic

Questions to answer:

- Are corners sharp, lightly softened, or strongly rounded?
- Is roundness a rare accent or a default?

If this is left unspecified, the result becomes:

- universal medium-large border radius

### 4. Typography hierarchy

Questions to answer:

- Is the interface driven by strong headlines or neutral utility text?
- Are headings compact and editorial, or friendly and open?
- Is the feeling more newspaper, public signage, brochure, or app?

If this is left unspecified, type becomes:

- generic modern sans with no identity

### 5. Color behavior

Questions to answer:

- Are colors atmospheric, instructional, or product-coded?
- Is contrast quiet, crisp, or dramatic?
- Do accents appear sparsely or often?

If this is left unspecified, the result becomes:

- white background + blue/purple accent + gray cards

### 6. Image logic

Questions to answer:

- Is imagery photographic, abstract, diagrammatic, typographic, or mostly absent?
- Does imagery explain, decorate, or create emotional tone?

If this is left unspecified, the result becomes:

- decorative blobs, gradients, and placeholder illustration

### 7. Motion logic

Questions to answer:

- Is motion calm and structural or expressive and playful?
- What should animate: content, transitions, emphasis, or depth?

If this is left unspecified, motion becomes:

- generic fades and hover lifts

## The Most Useful Steering Tool: Anti-Goals

AI responds well when it knows what not to do.

For example, a useful UI brief should often include lines like:

- do not use generic card grids as the primary structure
- avoid stacked rounded containers inside rounded sections
- avoid SaaS dashboard aesthetics
- avoid centered marketing-template composition
- avoid purple/blue AI gradients
- avoid generic shadcn-style panel repetition

These are not aesthetic complaints.
They remove default fallback behaviors.

## What To Specify Instead Of Cards

If cards are restricted, the brief must offer another structural language.

Alternatives include:

- editorial bands with strong typographic anchoring
- split layouts with image or diagram tension
- ruled sections with generous whitespace
- poster-like compositions
- asymmetric blocks
- full-width content zones with minimal internal boxing
- table-like or note-like modules instead of "cards"

The model needs a replacement grammar.

## A Useful Design-Primitive Checklist

Before asking for UI, define the project's primitives:

- preferred corner radius
- preferred border behavior
- preferred container behavior
- preferred section rhythm
- preferred heading scale
- preferred image or illustration role
- preferred CTA shape
- preferred icon style
- preferred surface count per viewport

If these are undefined, the output drifts toward generic component-library defaults.

## For IA Facile Specifically

Based on the current exploration, IA Facile likely should not be built from:

- many nested cards
- pill-heavy UI everywhere
- glossy layered surfaces
- dashboard blocks
- startup panels

Because those patterns signal:

- software product
- productivity app
- tech confidence

And the current brand direction is closer to:

- editorial calm
- public-service clarity
- adult beginner reassurance

That implies a different UI grammar.

## A More Suitable UI Grammar For IA Facile

Possible structural cues:

- type-led sections rather than component-led sections
- fewer containers, with more breathing room
- flat or lightly separated surfaces rather than card stacks
- strong page rhythm created by spacing, rules, and background shifts
- diagrams or callouts used sparingly and purposefully
- one or two signature modules instead of many interchangeable boxes

In shorthand:

```text
less dashboard
more editorial guidance
```

## How To Prompt For Specificity

A better prompt is not:

"Make a beautiful landing page for AI beginners."

A better prompt is closer to:

"Design a calm editorial landing page for adults intimidated by AI.
Use strong typography, warm neutral colors, minimal surface layering, and very few rounded containers.
Do not use generic SaaS card grids or nested panels.
The page should feel like intelligent guidance, not a startup product page."

The point is not the exact wording.
The point is the density of constraints.

## A Strong Brief Usually Includes These Four Layers

```text
1. Emotional outcome
2. Structural rules
3. Visual primitives
4. Explicit anti-patterns
```

Without all four, outputs usually drift.

## Example Of A More Directed Brief For IA Facile

Not implementation-ready code instructions, just a steering example:

```text
Create a landing page that feels like a calm editorial guide, not a SaaS product.
The user should feel reassured, not impressed.
Use a typography-first layout, warm neutrals, deep ink text, and restrained accents.
Prefer sections that breathe over boxed grids.
Avoid nested rounded cards, heavy shadows, dashboard patterns, and generic startup gradients.
The design should feel adult, welcoming, and quietly modern.
```

## Another Important Principle

Specificity also comes from singular ideas, not only from constraints.

If a page has a clear visual thesis, AI has something to organize around.

Examples of visual theses:

- "This page feels like a guided article."
- "This page feels like a calm printed brochure brought to the web."
- "This page feels like a public-interest guide with modern editorial care."
- "This page feels like a thoughtful notebook, not a software interface."

Without a thesis, the system reverts to component assembly.

## How To Recognize Generic UI Early

The output is drifting if:

- every section is in a separate rounded box
- content is organized as interchangeable tiles
- the hero looks like every SaaS hero
- visual hierarchy relies on shadow more than typography
- the page could belong to any AI startup with minor copy changes

That is a useful diagnostic checklist for review.

## What To Do Later In Storybook Or UI Exploration

When visual exploration starts, it may help to evaluate components against:

- does this module need a container at all?
- can hierarchy come from type and spacing instead?
- is the rounding necessary or just default?
- if this panel disappeared, would the design become clearer?
- is this component part of the brand language, or just a library habit?

These questions help prevent design-by-default.

## Working Conclusion

To get UI that feels specific, the brief must define:

- the emotional destination
- the structural grammar
- the recurring primitives
- the anti-patterns to exclude

Otherwise the model will reliably produce:

- nested rounded boxes

not because it misunderstood,
but because that is the safest generic answer.

## Local Skill Alignment

There is a local skill in this repository at:

- `.codex/skills/ui-direction-steering/SKILL.md`

It aligns very strongly with this whole thread.

Its core method is to define, before coding:

- archetype
- composition
- surface language
- interaction personality
- negative constraints

This is effectively the operational version of what this note is arguing.

## Why This Matters For The Future Workflow

When implementation starts, this skill should be used as a guardrail so that UI explorations do not drift back toward:

- generic Tailwind SaaS patterns
- nested card stacks
- oversized radius defaults
- decorative shadow-based hierarchy

In other words:

the skill can help translate the visual identity exploration into enforceable implementation briefs.

## Good Use In A Multi-Agent Exploration Setup

The skill is especially useful if each UI exploration agent receives:

- one visual thesis
- one folder with isolated write scope
- one Storybook-based demo target
- one explicit avoid list

The skill can then help each agent build from:

- a distinct archetype
- a distinct composition grammar
- a distinct surface language

rather than from a generic component library default.

## Recommended Future Pattern

When leaving explore mode and moving into implementation, a strong workflow would be:

1. set up a neutral Storybook exploration shell
2. define 3 to 4 visual directions in writing
3. assign one direction per subagent
4. require each direction to include:
   - archetype
   - composition rules
   - surface rules
   - tone
   - anti-patterns
5. review the outputs comparatively, not individually

That should give much better odds of escaping the same repeated rounded-box UI.
