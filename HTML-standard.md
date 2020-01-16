# HTML Standard

## Syntax and basics

* Use soft tabs with 4 spaces. If you open a file that has hard tabs, convert them
* Always use double quotes, never single quotes, on attributes
* Do not include a trailing slash in self-closing elements
* Elements and attributes should always be lowercase
* Do not omit closing tags
* Always use the HTML5 doctype - `<!DOCTYPE html>`
* Always use the `lang` attribute on the `html` element - `<html lang="en-gb">`
* Do not use `X-UA-Compatible`. This is not required any more: `<meta http-equiv="X-UA-Compatible" content="IE=Edge">`
* Always include an `charset` meta tag and set to UTF-8 unless you have good reason to specify another, e.g. `<meta charset="UTF-8">`
* Do not specify `type` attributes for CSS, Javascript, e.g. `<link rel="stylesheet" href="code-guide.css">` and not `<link rel="stylesheet" type="text/css" href="code-guide.css">`
* Strive to use the least number of elements possible. Do not unnecessarily nest elements
* Do not include values for boolean attributes, e.g. `<input type="text" disabled>` and not `<input type="text" disabled="true">` or `<input type="text" disabled="disabled">`
* Do not use protocol-less links. Always specify the protocol, e.g `<a href="https://www.website.com">Our website</a>` and not `<a href="//www.website.com">Our website</a>`
* Ensure sites are served over HTTPS
* Always include an `alt` attribute for `<img>` elements, even if it's left empty
* Form labels should always include a `for` attribute
* Every form input should have a corresponding label
* Placeholders are not to be used in place of a label
* Ensure `<fieldset>` and `<legend>` elements are used correctly
* Use semantic elements where possible, e.g:
    - `<nav>` for Menus, navigation blocks
    - `<header>` for site header, or for article header blocks/introductory content
    - `<footer>` for site footer, article metadata blocks
    - `<aside>` for sidebars
    - `<main>` for the main content block of a page
    - `<article>` for the body copy of an article, blog post, or a forum post
    - `<section>` for sub-sections to page copy. Remember, if you use a `<section>` it should *always* contain a heading
    - `<time>` for dates and times
    - `<figure>` for images, and include a `<figcaption>` to add descriptive text.

## Attribute order

HTML attributes should come in this particular order for easier reading of code.

* `class`
* `id`, `name`
* `data-*`
* `src`, `for`, `type`, `href`, `value`
* `title`, `alt`
* `role`, `aria-*`

Classes make for great reusable components, so they come first. IDs are more specific and should be used sparingly (e.g., for in-page bookmarks), so they come second.
