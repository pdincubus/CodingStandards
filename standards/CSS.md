# CSS Standard

Examples in this document are just that, and do not necessarily reflect real-world usage. Media queries, variables, font families, etc are set and kept up-to-date in the Frontend UI src repository.

## Introduction

Use this standard to keep CSS predictable, accessible, and fast.

## Terminology

### Rule declaration
A selector with a block of properties.
```css
.listing {
    font-size: 18px;
    line-height: 1.2;
}
```

### Selectors
Match elements by type, class, id, attributes, or state.
```css
.my-element {}
[aria-hidden] {}
```

### Properties
Key value pairs that set presentation.
```css
/* selector */ { background: #f1f1f1; color: #333; }
```

## The Basics

### General formatting

- 4 spaces. No tabs.
- One selector per line.
- One declaration per line.
- Space before `{`.
- `}` on its own line.
- One blank line between rule sets.
- Space after `:` not before.
- End every declaration with `;`.
- Add a space after commas in value lists, except inside colour functions.
- No leading zero for decimals.
- Zero has no unit.
- Single quotes for strings.
- Do not quote `url()`.
- No blank lines inside a rule.
- Avoid full shorthands when not needed.
- Place media queries near the related rule.

### Shorthand notation

Use a shorthand only when setting all parts. Frequent offenders:

- padding
- margin
- font
- background
- border
- border-radius

### Comments

- Put comments above the thing they explain.
- Keep line length sensible.
- Use comments to split files into sections when partials are not possible.
- Full sentences for blocks. Short notes for hints.

### Classes, IDs, naming, selectors

- No ID selectors.
- Attribute values may be quoted for clarity.
- Namespacing for utilities is allowed, for example `.u-vh`.
- Do not overwrite classes in place.
- Avoid tag names in selectors. Prefer `.modal {}` over `div.modal {}`.
- Never use `!important`.

#### Class names and naming

- Lowercase.
- Short and meaningful.
- Structural or purposeful, not presentational.
- Behaviour hooks use `.js-*`. Never include these in CSS.
- Stateful classes use `.is_` or `.has_`.
- As short and consistent as possible. Prefer to pot for a component name and use obvious, semantic classnames for elements in the component
    ```css
        .modal {
            ...

            &.is_active {
                ...
            }
        }

        .modal .title {
            ...
        }

        .modal .close {
            ...

            &:hover,
            &:focus {
                ...
            }
        }

        .modal .content {
            ...
        }
    ```

### Colour

- Store colours in variables.
- Prefer modern colours using `hsl()` or `oklch()` for new tokens. Provide a fallback where needed.

### General guidance

- Use `border: 0` instead of `border: none`.
- Avoid `margin-block-start`. Prefer padding on the container or `margin-block-end` on the item above.
- Trim trailing whitespace on save.
- Pseudo-elements use `::`.
- Do not set global values then overwrite at every breakpoint. Set defaults near the selector. Vary in media or container queries.
- Numeric positions over named positions, for example `background-position: 0 0`.
- Transition specific properties. Not `all`. Minimum 250 ms for motion.
- Respect user preferences. `prefers-reduced-motion`, `prefers-reduced-transparency`, `prefers-reduced-data`.

### Non-standard CSS practices

- Do not hand-write vendor prefixes. Use Autoprefixer.

## Modern CSS baseline

### Cascade layers

Define layer order once. Keep overrides honest.

```css
@layer reset, tokens, utilities, components, pages, overrides;

@layer reset {
    /* normalise */
}

@layer tokens {
    :root { /* variables */ }
}

@layer utilities {
    .u-flow { /* ... */ }
}

@layer components {
    .button { /* ... */ }
}

@layer pages {
    /* page styles */
}

@layer overrides {
    /* last resort */
}
```

### Container queries

Make components responsive to their container.

```css
.product-grid {
    container-type: inline-size;
    container-name: products;

    /* Or shorthand: */
    container: inline-size / products;
}

.card { /* defaults */ }

@container products (width >= 40rem) {
    .card {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
}
```

### :has relational selector

Style a parent based on children.

```css
.fieldset:has(:focus-visible) {
    outline: 2px solid currentColor;
}

@supports selector(:has(*)) {
    .nav:has(.nav__item--active) { /* ... */ }
}
```

### Media query range syntax

Prefer ranges. Cleaner and less error-prone.

```css
@media (width >= 48rem) { /* tablet and up */ }
@media (30em <= width < 50em) { /* band */ }
```

### Viewport units on mobile

Avoid URL bar jumps.

- `dvh`, `dvw` dynamic
- `svh`, `svw` small
- `lvh`, `lvw` large

```css
.hero { min-height: 100dvh; }
```

### Logical properties

Support RTL and vertical writing without extra rules.

```css
.card {
    padding-block: 16px;
    padding-inline: 20px;
    margin-block-end: 24px;
}
```

### Feature queries

Gate features when needed.

```css
@supports (container-type: inline-size) {
    /* container query path */
}
```

## PostCSS

Prefer native CSS features. No exceptions - PostCSS will do any heavy lifting. We do not write LESS, SASS, or SCSS.

### Nesting rules

- Maximum three levels.
- Include states and pseudo-classes inside the block.
- Nest media and container queries inside the block to keep related code together.

## Declaration order

Group related declarations. Keep the flow consistent.

1. Structure and box model  
   `display`, `position`, `inset-*`, `z-index`, `box-sizing`, `overflow`, `margin-*`, `padding-*`, `width`, `min/max-width`, `height`, `min/max-height`
2. Layout and visuals  
   `grid-*`, `flex-*`, `gap`, `order`, `align-*`, `justify-*`, `background-*`, `border-*`, `box-shadow`, `outline`
3. Typography  
   `font-*`, `line-height`, `letter-spacing`, `text-*`, `white-space`, `hyphens`
4. Motion and effects  
   `transition-*`, `animation-*`, `transform`, `filter`
5. State hooks  
   Pseudo-elements, then pseudo-classes, then nested media or container queries

## Organisation

- Organise by component. Split into partials where the build allows.
- Use cascade layers to control precedence.
- Keep utilities small and documented.
- Keep tokens central. Colours, spacing, type scale, radii, shadows.

## Do not use @import

Load CSS with `<link>` or bundle it. `@import` adds requests and complicates layering. If import is unavoidable, use it in the build, not in production HTML.
