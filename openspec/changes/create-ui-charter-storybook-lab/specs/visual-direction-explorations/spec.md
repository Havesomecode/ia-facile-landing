## ADDED Requirements

### Requirement: Isolated visual-direction folders
Each visual direction SHALL live in its own isolated folder so it can own its layout grammar, styling decisions, and demo assets without inheriting a generic shared visual language.

#### Scenario: A direction is added
- **WHEN** a new visual direction is created
- **THEN** it is implemented inside a dedicated direction-specific folder
- **AND** its files are scoped so later contributors can iterate on that direction without modifying unrelated explorations

### Requirement: Direction-specific thesis and anti-patterns
Each visual direction SHALL include a concise record of its visual thesis, strategic intent, and anti-patterns to avoid.

#### Scenario: A reviewer inspects a direction
- **WHEN** a reviewer opens a direction folder or story
- **THEN** they can find notes describing the intended archetype, tone, and composition logic
- **AND** they can identify which fallback UI patterns that direction was explicitly designed to avoid

### Requirement: Comparable direction deliverables
Each visual direction SHALL provide the same class of deliverables so explorations can be compared fairly.

#### Scenario: Multiple directions are reviewed together
- **WHEN** Storybook contains more than one visual direction
- **THEN** each direction includes a full landing-page demo story
- **AND** each direction includes a small set of signature modules or primitives
- **AND** each direction includes enough documentation to explain how it differs from generic SaaS UI

### Requirement: Anti-generic layout behavior
Visual direction implementations SHALL not rely on repeated nested rounded-card composition as the default page grammar unless a direction-specific brief explicitly justifies it.

#### Scenario: A direction is implemented
- **WHEN** its landing-page demo is reviewed
- **THEN** its hierarchy is primarily created through composition, typography, spacing, borders, background rhythm, or other direction-specific structure
- **AND** the demo does not default to card-inside-card SaaS layout patterns without explicit rationale
