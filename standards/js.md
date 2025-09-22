# JavaScript Standard

## Introduction

A short, strict standard for reliable JavaScript. Keep code small, obvious, and easy to review.

## Language level and environment

- Use ECMAScript modules. Files use `.js` or `.mjs` as your build requires.
- Target evergreen browsers and maintained LTS Node.
- Enable strict mode by default. Modules do this automatically.
- Prefer TypeScript for application code. Keep this guide for plain JS use.

## Basics and formatting

- 4 spaces, no tabs.
- Single quotes for strings. Use template literals for interpolation and multi‑line.
- One declaration per line. One statement per line.
- Always end statements with semicolons.
- Space after commas. No space before.
- Space after keywords and before blocks, for example `if (x) {`.
- No spaces inside parentheses, for example `fn(a, b)` not `fn( a, b )`.
- Trailing commas in multi‑line literals and parameter lists.
- Keep `else` on the same line as the closing brace of `if`.
- Keep lines short and readable. Extract expressions rather than wrapping lines awkwardly.
- Files must end with a newline.
- No multiple blank lines. No trailing whitespace.

## Types and coercion

- Avoid implicit coercion. Be explicit.
- Parse numbers with `Number.parseInt(str, 10)` or `Number.parseFloat(str)`.
- Cast with `Number(value)`, `Boolean(value)`, `String(value)` when needed.
- Use `Number.isNaN(value)` to check `NaN`. Do not use global `isNaN`.
- Do not initialise variables to `undefined`. Leave them uninitialised or set a real value.

## Equality and comparisons

- Use `===` and `!==`.
- Use nullish coalescing for defaults: `value ?? 0`. Do not use `||` for numeric defaults.
- Use optional chaining for safe access: `user?.address?.city`.
- Avoid Yoda conditions. Write `if (age === 42)`.
- When mixing operators, use parentheses unless the precedence is obvious for `+ - * /`.

## Variables

- Use `const` by default. Use `let` for rebinding. Do not use `var`.
- One declaration per statement.
- Group `const` declarations above `let`.
- Avoid single letter names except for counters and very small scopes.
- Do not redeclare variables. No shadowing unless local and clear.
- Avoid `++` and `--`. Prefer `+= 1` and `-= 1`.

## Functions and classes

- Use arrow functions for callbacks and small functions.
- Use named function expressions for functions you export or test.
- Default parameters over argument mutation.
- Put default parameters last.
- Never reassign function parameters.
- Prefer pure functions. Keep side effects obvious.
- Use class fields and private fields where a class is warranted.
- Do not use the `Function` constructor or `eval`.
- Prefer named exports in libraries. Default export is acceptable for single primary export modules.

Examples:

```js
// defaults and destructuring
function connect(url, { timeoutMs = 8000, retries = 2 } = {}) {
    // ...
}

// private class fields
export class Queue {
    #items = [];
    enqueue(x) { this.#items.push(x); }
    dequeue() { return this.#items.shift(); }
    get size() { return this.#items.length; }
}
```

## Async code

- Prefer `async` and `await`.
- Always handle errors with `try/catch` or by returning a `Result`‑like object.
- Use `Promise.all` for parallel work. Use `Promise.allSettled` when failures are allowed.
- Do not forget to `return` promises in functions that wrap them.
- Use `AbortController` with `fetch` to cancel work.
- Use top‑level `await` only in module entry points and only when it simplifies code.

```js
const controller = new AbortController();
const t = setTimeout(() => controller.abort(), 8000);

try {
    const res = await fetch('/api/items', { signal: controller.signal });

    if (!res.ok) throw new Error('HTTP ' + res.status);

    const data = await res.json();

    render(data);
} catch (err) {
    if (err.name === 'AbortError') {
        console.warn('aborted');
    } else {
        console.error(err);
    }
} finally {
    clearTimeout(t);
}
```

## Errors

- Throw `Error` instances, not strings.
- Add context to errors, keep messages short.
- Do not swallow errors. Re‑throw or handle explicitly.
- Use `try/finally` for clean‑up.

## Collections, arrays, and objects

- Prefer literals: `[]`, `{}`.
- Use array methods, not loops where clarity allows.
- Use spreads to copy arrays or objects.
- Use `Array.from(iterable, mapFn)` when mapping an iterable to avoid intermediate arrays.
- Destructure where it helps readability.
- Group object shorthand properties at the top of the object literal.
- Only quote keys that are not valid identifiers.
- Use `Object.hasOwn(obj, key)` instead of `obj.hasOwnProperty(key)`.
- Avoid unnecessary computed property names.

```js
const itemsCopy = [...items];
const nodes = Array.from(document.querySelectorAll('.x'), el => el.id);
const user = { id, name, role, createdAt: Date.now() };
const { id: userId, role } = user;
```

## Modules and imports

- All imports at the top.
- One import per module. Group external, then internal.
- Do not use wildcard imports.
- Use file extensions as your bundler requires.
- No `new require`, no dynamic `require`. Prefer dynamic `import()` when needed.

## Control flow

- Use braces for all blocks, even single line.
- Avoid nested ternaries. Extract expressions or use `if`.
- No confusing operator chains. Add parentheses.
- Use `break` in `switch` cases. Wrap lexical declarations in a block.

```js
switch (kind) {
    case 'a': {
        const x = 1;

        doSomething(x);

        break;
    }
    case 'b': {
        doOther();

        break;
    }
    default: {
        throw new Error('unknown kind');
    }
}
```

## DOM and events

- Select with `querySelector` and `querySelectorAll`.
- Do not write untrusted HTML with `innerHTML`. Use `textContent`.
- Add event listeners with options where relevant, for example `{ passive: true }` for scroll.
- Use event delegation with `closest` for lists.
- Clean up listeners. Prefer AbortSignal‑based listeners when available.

```js
document.addEventListener('click', e => {
    const btn = e.target.closest('[data-dialog-open]');

    if (!btn) return;

    openDialog(btn.dataset.dialogOpen);
}, { passive: true });

// Abortable listener
const c = new AbortController();

window.addEventListener('resize', onResize, { signal: c.signal });

// later
c.abort();
```

## Comments and documentation

- Use `//` for single line. Use `/** ... */` for blocks and docblocks.
- Write the why, not the obvious what.
- Keep examples short and runnable.
- Keep JSDoc current if you use it.

## Class skeleton

```js
// imports
import { thing, thing2 } from './lib/thing.js';

/**
 * Class description.
 *
 * @author Your Name
 */
export default class ClassName {
    constructor(elem) {
        if (!elem) return;
        this.elem = elem;
        this.init();
    }

    init() {
        // setup
    }

    /**
     * Do the thing.
     * @param {string} id
     * @returns {void}
     */
    otherMethod(id) {
        // ...
    }
}

// usage
import ClassName from './ClassName.js';

const instance = new ClassName(document.getElementById('the-id'));
```
