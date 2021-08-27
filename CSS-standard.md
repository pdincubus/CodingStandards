# CSS Standard

<!-- MarkdownTOC autolink="true" -->

- [Introduction](#introduction)
- [Stylelint](#stylelint)
- [Terminology](#terminology)
    - [Rule declaration](#rule-declaration)
    - [Selectors](#selectors)
    - [Properties](#properties)
- [Syntax and basics](#syntax-and-basics)
    - [Formatting](#formatting)
    - [Shorthand notation](#shorthand-notation)
    - [Comments](#comments)
    - [Classes, IDs, Naming, Selectors](#classes-id-naming-selectors)
        - [Class names and naming](#class-names-and-naming)
    - [Colour](#colour)
    - [General Guidance](#general-guidance)
    - [Non-standard CSS practices](#non-standard)
    - [SCSS/PostCSS](#scss-postcss)
        - [Nesting](#nesting)
- [Declaration order](#declaration-order)
- [Organisation](#organisation)
- [Don't use @import](#dont-use-import)

<!-- /MarkdownTOC -->

<a name="introduction"></a>
## Introduction

This CSS Standard is based upon a combination of (and in some cases stolen verbatim from) many other great styleguides, including:

* http://codeguide.co/#css
* https://github.com/sky-uk/css
* https://github.com/necolas/idiomatic-css
* https://github.com/airbnb/css
* https://github.com/dropbox/css-style-guide

<a name="stylelint"></a>
## Stylelint

We use [Stylelint](https://stylelint.io/) to help spot many issues. This is part of our build and compilation process using Gulp.

<a name="terminology"></a>
## Terminology

<a name="rule-declaration"></a>
### Rule declaration

A "rule declaration" is the name given to a selector (or a group of selectors) with an accompanying group of properties:

```css
.listing {
    font-size: 18px;
    line-height: 1.2;
}
```

<a name="selectors"></a>
### Selectors

In a rule declaration, "selectors" are the bits that determine which elements in the DOM tree will be styled by the defined properties. Selectors can match HTML elements, as well as an element's class, ID, or any of its attributes:

```css
.my-element-class {
    /* ... */
}

[aria-hidden] {
    /* ... */
}
```

<a name="properties"></a>
### Properties

Finally, properties are what give the selected elements of a rule declaration their style. Properties are key-value pairs, and a rule declaration can contain one or more property declarations:

```css
/* some selector */ {
    background: #f1f1f1;
    color: #333;
}
```

<a name="syntax-and-basics"></a>
## The Basics

<a name="formatting"></a>
### General formatting

* Use soft tabs with 4 spaces. If you open a file that has hard tabs, convert them
* Individual selectors should have their own line
* Each declaration should be on its own line
* Put a space before opening curly braces
* Closing braces should be on their own line
* Ensure 1 blank line and no more or less separates rule sets
* Put a space after a colon `:` but not before
* All declarations should end with a semicolon `;`
* Comma-separated values should have a space after each comma, except
* Within colour or shape declarations such as `rgb()`, `rgba()`, `hsl()`, `hsla()`, `rect()`, `clip()`, where there should be no space after each comma
* Do not prefix property values or colour parameters with a leading zero
* Where allowed, avoid specifying units for zero values, e.g. use `margin: 0` instead of `margin: 0px`
* Use single quotes where a quote is required
* Do not quote strings in a `url()`, e.g. for a `background-image` or a `font-face` src
* Do not add blank lines between declarations
* Do not set all values for a property when not required, e.g. set `margin-bottom: 10px` instead of `margin: 0 0 10px 0`
* Ensure [declaration order](#declaration-order) standards are followed
* For improved readability, wrap all mathematical operations in parentheses with a single space between values, variables, and operators
* Place media queries as close to their relevant rule sets whenever possible.
* Do not bundle them all in a separate stylesheet or at the end of the document, unless unavoidable

<a name="shorthand-notation"></a>
### Shorthand notation

Strive to limit use of shorthand declarations to instances where you must explicitly set all the available values. Common overused shorthand properties include:

* padding
* margin
* font
* background
* border
* border-radius

Often we don't need to set all the values a shorthand property represents. For example, HTML headings only set top and bottom margin, so when necessary, only override those two values. Excessive use of shorthand properties often leads to sloppier code with unnecessary overrides and unintended side effects.

<a name="comments"></a>
### Comments

Code is written and maintained by people. Ensure your code is descriptive, well commented, and approachable by others. Great code comments convey context or purpose. Do not simply reiterate a component or class name.

* Place comments on a new line above their subject
* Keep line-length to a sensible maximum, e.g., 80 columns
* Feel free to make liberal use of comments to break CSS code into discrete sections, where partial CSS files is not possible
* Be sure to write in complete sentences for larger comments and succinct phrases for general notes

<a name="classes-id-naming-selectors"></a>
### Classes, IDs, Naming, Selectors

* Do not use ID selectors
* Quote values in selectors, e.g. `input[type='text']`
* Do use basic namespacing for utility classes, e.g. `.u-vh` for the visually hidden screen reader helper class
* Never directly overwrite a previously defined class
* Do not use HTML tags in CSS selectors. e.g. `.modal {}` and not `div.modal {}`
* Do *not* _ever_ use `!important`

<a name="class-names-and-naming"></a>
#### Class names and naming

* Keep classes lowercase
* Keep classes as short and succinct as possible
* Use meaningful names; use structural or purposeful names over presentational
* Use `.js-*` classes to denote behavior (as opposed to style), but keep these classes out of your CSS
* `.is_`, `.has_` for stateful classes. Use these classes for temporary, optional, or short-lived states and styles

We use a combination of BEM, ITCSS and a dash of Common Sense™ for class naming. This allows the following benefits:

* It helps create clear, strict relationships between CSS and HTML
* It helps us create reusable components
* It allows for less nesting and lower specificity
* It helps in building scalable stylesheets

It's a similar convention to the BEM alternative ['Two Dashes'](https://en.bem.info/methodology/naming-convention/#two-dashes-style) style.

Namespace - Block - Element - Modifier

`.namespace-` + `block-name` + `__elem-name` + `--modifier-name` === `.mysite-modal__title--alt`.

If you require further specificity, for example if you're working on Account Change or Member Centre, you can add an additional namespace after `pn`, e.g:

`.mysite-block-name__elem-name--modifier-name` or `.mysite-block-name__elem-name--modifier-name`

An example:

```css
    .mysite-modal {
        /* Styles that do not change across breakpoints */

        &--large {
            /* Modifier styles that do not change across breakpoints */
        }

        @media (--desktop) {
            /* Styles just for this breakpoint */

            &--large {
                /* Modifier styles just for this breakpoint */
            }
        }

        @media (--tablet) {
            /* Styles just for this breakpoint */
        }

        @media (--mobile) {
            /* Styles just for this breakpoint */
        }
    }

    .mysite-modal__title {
        /* Styles that do not change across breakpoints */

        @media (--desktop) {
            /* Styles just for this breakpoint */
        }

        @media (--tablet) {
            /* Styles just for this breakpoint */
        }

        @media (--mobile) {
            /* Styles just for this breakpoint */
        }
    }

    .mysite-modal__content {
        /* Styles that do not change across breakpoints */

        @media (--desktop) {
            /* Styles just for this breakpoint */
        }

        @media (--tablet) {
            /* Styles just for this breakpoint */
        }

        @media (--mobile) {
            /* Styles just for this breakpoint */
        }
    }

    .mysite-modal__link {
        /* Styles that do not change across breakpoints */

        &:hover,
        &:focus {
            /* State styles that do not change across breakpoints */
        }

        @media (--desktop) {
            /* Styles just for this breakpoint */

            &:hover,
            &:focus {
                /* State style just for this breakpoint */
            }
        }

        @media (--tablet) {
            /* Styles just for this breakpoint */
        }

        @media (--mobile) {
            /* Styles just for this breakpoint */
        }
    }
```

<a name="colour"></a>
### Colour

* All hex colour values should be lowercase
* Use shorthand hex values where possible
* Do not user colour names
* All colours except black (`#000`) and white (`#fff`) should be stored in variables to avoid colour palette madness

<a name="general-guidance"></a>
## General guidance

* Use `border: 0` instead of `border: none` to specify that a style has no border
* Do not use margin-top. Vertical margins collapse. Always prefer padding-top or margin-bottom on preceding elements
* Ensure you trim excess whitespace from the document. Your editor can probably be configured to do this automatically on save
* Pseudo-elements should use double colon notation, e.g. `::before` not `:before`
* Avoid writing styles that will be immediately overridden at a breakpoint change. Only add styles outside an `@media` query that are global to that selector
* Use numerical instead of named settings where possible, e.g. `background-position: 0 0;` instead of `background-position: top left;`
* Only transition methods that you need, not all methods. e.g. `transition: .25s opacity ease` and not `transition: .25s all ease`
* Do not use transition durations of less than 1/4 second (0.25s/250ms)

<a name="non-standard"></a>
## Non-standard CSS practices

* Do not add vendor-prefixed declarations to source stylesheets, unless it is something [Autoprefixer](https://github.com/postcss/autoprefixer) cannot account for

<a name="scss-postcss"></a>
## SCSS/PostCSS

* Do not [unnecessarily nest selectors](#nesting)
* CSS or SCSS variables should be lowecase and hyphenated

<a name="nesting"></a>
### Nesting

Avoid unnecessary nesting. Just because you can nest, doesn't mean you always should. Consider nesting only if you must scope styles to a parent and if there are multiple elements to be nested. If you must nest selectors, do not go more than three levels deep.

If you're using Sublime Text, you can set your ruler guides to help you spot this easily:

```
"rulers":
[
    0,
    12,
    80
],
```

<a name="declaration-order"></a>
## Declaration order

Related property declarations should be grouped together following the general order:

1. Structure/positioning/box-model - `display`, `position`, `margin`, `padding`, `width`, `height`, `box-sizing`, `overflow` etc.
2. Most other styles:
    * Typography - `font-*`, `line-height`, `text-*`, `letter-spacing` etc.
    * Cosmetic - `color`, `background-*`, `border-*`, `animation`, `transition` etc.
    * Native interaction - `appearance`, `cursor`, `user-select`, `pointer-events` etc.
3. Pseudo-elements - `::before`, `::after` etc.
4. Pseudo-classes - `:hover`, `:focus`, `:active` etc.
5. `@media` - media queries should be defined last for ease of modification and readability.

Positioning comes first because it can remove an element from the normal flow of the document and override box model related styles. The box model comes next as it dictates a component's dimensions and placement.

<a name="organisation"></a>
## Organisation

* Organize sections of code by component, and split components into partials

<a name="dont-use-import"></a>
## Don't use @import

Compared to `<link>`, @import is slower, adds extra page requests, and can cause other unforeseen problems. Avoid them.
