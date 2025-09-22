# Technology Policy

Purpose
- Set clear defaults for tools and libraries.
- Reduce risk, improve maintainability, and keep bundles small.
- Changes follow the RFC process. Time-limited exceptions only.

## Allow list

### Language and runtime
- Vanilla JavaScript, modern DOM APIs.
- TypeScript for application code.
- Web Components for reusable UI where suitable.

### Build and packaging
- Vite for dev server and build.
- Rollup or esbuild for libraries.
- Node and npm or pnpm. One package manager per repo.

### CSS and tokens
- PostCSS.
- Stylelint.
- Design tokens in CSS variables. Style Dictionary optional for exports.

### Templates
- Java templates.
- HTML includes or SSI for simple stitch-ups.
- Client templates only when needed: Handlebars or Mustache.

### JavaScript libraries
- None by default. Prefer platform features.
- date-fns or Day.js when native Intl APIs are not enough.
- Axe Core for accessibility checks in tests.
- Small focused utilities with no globals.

### Testing and QA
- Unit: Vitest or Jest.
- DOM testing: Testing Library.
- E2E: Playwright.
- Visual checks: Playwright screenshots or Chromatic if you run Storybook.
- Linting: ESLint, Stylelint
- Performance and quality: Lighthouse CI, Web Vitals in RUM.

### Tooling
- EditorConfig.
- Commit hooks with your preferred runner.
- CI runs lint, type check, tests, and budgets.

## Caution list

Use only with an RFC, a clear owner, and a removal plan.

- React and related stacks. Not planned for product frontends.
- Small DOM helpers: htmx, Alpine, Stimulus. Use only to solve a defined problem.
- Tailwind. Allowed for prototypes. Nothing else.
- Babel. Only when the bundler cannot handle a needed transform.
- Lodash. Per method imports only, and only when the platform lacks a good option.
- Moment.js in legacy code. Prefer native Intl, date-fns, or Day.js.
- JSP in legacy apps. Prefer a modern engine.
- Client-side templating when serverside is available.
- Third party tags. Must fit within budgets and the tag policy.

## Deny list

No new usage. Replace during touch work.

- jQuery in new code.
- Modernizr.
- Grunt.
- Bower.
- Sass, Less, Stylus for new code. Use native CSS with PostCSS.
- Bootstrap and similar heavy CSS frameworks.
- Enzyme.
- Underscore.
- AngularJS 1.x.
- Velocity.js.
- Umbrella.
- Smarty.

## Decision and exceptions

- Propose changes with an RFC.
- Record decisions as ADRs.
- Exceptions must be time limited, owned, and reviewed each quarter.

## Review cadence

- Review this list each quarter.
- Remove items the team no longer defends.
- Move items between lists based on usage and data.
