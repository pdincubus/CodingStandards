# HTML Standard

## Introduction

Use these rules to keep markup robust, accessible, and fast. Prefer native semantics. Keep pages progressive without fragile dependencies.

## Document skeleton

```html
<!doctype html>
<html lang="en-gb" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light dark">
    <meta name="description" content="Page description up to ~160 chars">
    <link rel="icon" href="/favicon.ico">
    <link rel="canonical" href="https://www.example.com/page">
    <title>Page title</title>
</head>
<body>
    <a class="u-sr-only u-sr-only-focusable" href="#main">Skip to content</a>
    <header></header>
    <nav aria-label="Primary"></nav>
    <main id="main" tabindex="-1"></main>
    <footer></footer>
</body>
</html>
```

## Syntax and basics

- Soft tabs with 4 spaces
- Double quotes for attributes
- No trailing slash in void elements
- Elements and attributes lowercase
- Do not omit closing tags
- HTML5 doctype at top
- `lang` on `html`, for example `en-gb`
- No `X-UA-Compatible`
- `<meta charset="utf-8">` near top of `head`
- Omit `type` on `script` and `link` where defaults apply
- Use the smallest number of elements for the job
- Boolean attributes without values
- No protocol‑less URLs, always include scheme
- Serve over HTTPS
- Every `img` has `alt`. Empty alt for decorative images
- One `h1` per page where practical
- One `main` per page
- Landmarks in sensible order
- No `tabindex` greater than 0

## Accessibility and semantics

- Use native elements before ARIA
- Use `header`, `nav`, `main`, `aside`, `footer` for landmarks
- Provide a skip link near the top
- Headings form a logical outline, no skipped levels
- Links for navigation, buttons for actions
- Use `aria-current="page"` for the active link
- Use `aria-expanded` with `aria-controls` for toggle controls
- Do not use `role="presentation"` on interactive content
- Manage focus on route changes and dialogs
- Visible focus styles on all focusable controls
- Use lists for groups of related links
- Use `lang` on elements for inline language changes
- Avoid `title` tooltip for essential content

## Images and media

- Always include `width` and `height` to reserve space
- Provide descriptive `alt`. Use empty alt for pure decoration
- Use `picture`, `srcset`, and `sizes` for responsive images
- Avoid `loading="lazy"` on the LCP image
- Use `fetchpriority="high"` on the LCP image where supported
- Add `decoding="async"` for large images
- Provide captions for video with `<track>`
- Provide transcripts for audio
- Prefer modern formats, for example AVIF and WebP with fallbacks

Example

```html
<picture>
    <source type="image/avif" srcset="/img/hero-800.avif 800w, /img/hero-1600.avif 1600w" sizes="(max-width: 48rem) 100vw, 1600px">
    <source type="image/webp" srcset="/img/hero-800.webp 800w, /img/hero-1600.webp 1600w" sizes="(max-width: 48rem) 100vw, 1600px">
    <img src="/img/hero-1600.jpg" width="1600" height="900" alt="A short, specific description" decoding="async" fetchpriority="high">
</picture>
```

## Links and navigation

- Use meaningful link text, not “click here”
- External links with `target="_blank"` include `rel="noopener"`
- Group navigation links in lists
- Use breadcrumbs with `nav` and `aria-label="Breadcrumb"`
- Mark the current page with `aria-current="page"`
- Use `rel="prev"` and `rel="next"` for paginated content where helpful

## Forms

- Every control has a `<label>`
- `for` matches the control `id`, or wrap the input inside the label
- Use `fieldset` and `legend` for grouped controls
- Use `aria-describedby` for hints and errors
- Use native validation where suitable. Use `required`, `min`, `max`, `pattern`
- Add `autocomplete` tokens
- Use input types for intent, for example `email`, `tel`, `url`, `number`, `date`
- Use `inputmode` to hint keyboards on mobile
- Show errors inline and in a summary linked to fields
- Prefer one submit button per form. Use `type="button"` for non submit buttons
- Avoid placeholders as labels
- Use `method="post"` for state‑changing requests

Example

```html
<form novalidate>
    <div>
        <label for="email">Email</label>
        <span id="email-hint">Use your work address</span>
        <input id="email" name="email" type="email" autocomplete="email" inputmode="email" aria-describedby="email-hint email-error" required>
        <p id="email-error" role="alert" hidden>Enter a valid email address</p>
    </div>
    <button type="submit">Submit</button>
</form>
```

## Tables

- Use tables for data, not layout
- Include a `<caption>`
- Mark headings with `<th>` and `scope`
- Use `<thead>`, `<tbody>`, `<tfoot>` where useful
- Provide summaries near the table when complex

## Metadata and SEO

- Unique `<title>` per page, 50 to 60 characters
- One `<meta name="description">` per page, up to 160 characters
- Use canonical URLs
- Use `hreflang` and regional alternates where required
- Include Open Graph and Twitter meta where sharing matters
- Use structured data with JSON‑LD where useful
- Keep only one `h1` where practical

## Performance

- Preconnect to critical origins
- Preload fonts as `style` or `font` with `as` and `type`
- Use `font-display: swap` in CSS
- Use `rel="modulepreload"` for entry module graphs
- Defer non critical scripts
- Keep inline scripts small
- Minimise third‑party scripts
- Use `loading="lazy"` for offscreen images and iframes
- Avoid full shorthands for performance‑sensitive inline styles

Examples

```html
<link rel="preconnect" href="https://cdn.example.com" crossorigin>
<link rel="preload" as="font" href="/fonts/brand-regular.woff2" type="font/woff2" crossorigin>
<link rel="modulepreload" href="/assets/app.js">
```

## Scripts

- Use `<script type="module" src="/app.js"></script>` for modern builds
- Use `defer` for classic scripts
- Inline small critical scripts in `head` when it helps first render
- Load non critical scripts late
- Feature detect where needed. Avoid UA sniffing
- Use `nomodule` only when legacy support is required

```html
<script type="module" src="/assets/app.js"></script>
<script nomodule src="/assets/legacy.js"></script>
```

## Security and privacy

- Use `rel="noopener"` with `target="_blank"`
- Use HTTPS everywhere
- Prefer same‑origin requests
- Avoid inline event handlers and `javascript:` URLs
- Avoid untrusted HTML in `innerHTML`. Use `textContent`
- Consider CSP and Trusted Types for complex apps
- Set `referrerpolicy` on external links when needed
- Do not leak user data in query strings

## Internationalisation

- `lang` on `html` and on elements with different language
- Use `dir="rtl"` where needed. Prefer logical CSS properties
- Avoid baking text into images
- Use Unicode in source. Keep `charset="utf-8"`

## Attribute order

Order attributes for consistent reading

1. `class`
2. `id`, `name`
3. `data-*`
4. `src`, `for`, `type`, `href`, `value`
5. `title`, `alt`
6. `role`, `aria-*`

Classes help reuse, so first. IDs are specific, use sparingly.
