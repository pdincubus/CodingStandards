# Javascript Standard

Loosely based on, and largely stolen from:

* https://github.com/airbnb/javascript
* https://standardjs.com/rules.html

## Basics

* Use soft tabs with 4 spaces. If you open a file that has hard tabs, convert them
* Use single quotes (`'`) for strings except to avoid escaping
* No unused variables
* Add a space after keywords
* Use `===` instead of `==`, and `!==` instead of `!=`
* Commas should have a space after them (unless it's the end of a line)
* Keep else statements on the same line as their curly braces
* Multiple blank lines not allowed
* For the ternary operator in a multi-line setting, place `?` and `:` on their own lines
* Add spaces inside single line blocks
* Use camelCase when naming variables and functions
* Use PascalCase only when naming constructors or classes
* Commas must be placed at the end of the current line
* Include a trailing comma
* Dots should be on the same line as the property
* Files must end with a newline
* For variable declarations, write each declaration in its own statement
* Add space between colon and value in key value pairs
* No floating decimals. Ensure leading zero is present
* No irregular whitespace
* No trailing whitespace
* No whitespace before properties
* Initializing to undefined is not allowed
* No multiline strings
* Avoid string concatenation when using `__dirname` and `__filename`
* No redeclaring variables
* Regular strings must not contain template literal placeholders
    ```javascript
    // Bad
    const message = 'Hello ${name}'

    // Good
    const message = `Hello ${name}`
    ```
* No ternary operators when simpler alternatives exist
    ```javascript
    // Bad
    let score = val ? val : 0;

    // Good
    let score = val || 0;
    ```
* No whitespace between spread operators and their expressions, e.g. `fn(...args)` and not `fn(... args)`
* Semicolons must have a space after and no space before
* Must have a space before blocks
* No spaces inside parentheses
* Use spaces inside comments
* No spacing in template strings
    ```javascript
    // Bad
    const message = `Hello, ${ name }`;

    // Good
    const message = `Hello, ${name}`;
    ```
* Use `isNaN()` when checking for `NaN`
* Avoid Yoda conditions
    ```javascript
    // Bad
    if (42 === age) { }

    // Good
    if (age === 42) { }
    ```
* Avoid using `var`. Use `const` and `let` appropriately, unless you are writing script that cannot or will not be transpiled.
* Numbers: Use `Number` for type casting and `parseInt` always with a radix for parsing strings
* Avoid single letter names. Be descriptive with your naming, unless it's a counter.
* In case your control statement (`if`, `while` etc.) gets too long or exceeds the maximum line length, each (grouped) condition could be put into a new line. The logical operator should begin the line
    ```javascript


    // Bad
    if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
        thing1();
    }

    // Bad
    if (foo === 123 &&
        bar === 'abc') {
        thing1();
    }

    // Bad
    if (foo === 123
        && bar === 'abc') {
        thing1();
    }

    // Bad
    if (
        foo === 123 &&
        bar === 'abc'
    ) {
        thing1();
    }

    // Good
    if (
        foo === 123
        && bar === 'abc'
    ) {
        thing1();
    }

    // Good
    if (
        (foo === 123 || bar === 'abc')
        && doesItLookGoodWhenItBecomesThatLong()
        && isThisReallyHappening()
    ) {
        thing1();
    }

    // Good
    if (foo === 123 && bar === 'abc') {
        thing1();
    }
    ```
* When mixing operators, enclose them in parentheses. The only exception is the standard arithmetic operators (`+`, `-`, `*`, and `/`) since their precedence is broadly understood
    ```javascript
    // Bad
    const foo = a && b < 0 || c > 0 || d + 1 === 0;

    // Bad
    const bar = a ** b - 5 % d;

    // Bad
    // one may be confused into thinking (a || b) && c
    if (a || b && c) {
        return d;
    }

    // Good
    const foo = (a && b < 0) || c > 0 || (d + 1 === 0);

    // Good
    const bar = (a ** b) - (5 % d);

    // Good
    if (a || (b && c)) {
        return d;
    }

    // Good
    const bar = a + b / c * d;
    ```
* Group all your `const` and then group all your `let`
* Avoid using unary increments and decrements (`++`, `--`), e.g. `num += 1` instead of `num++` and `num -= 1` instead of `--num`.
* Use shortcuts for booleans, but explicit comparisons for strings and numbers
    ```javascript

    // Bad
    if (isValid === true) {
        // ...
    }

    // Good
    if (isValid) {
        // ...
    }

    // Bad
    if (name) {
        // ...
    }

    // Good
    if (name !== '') {
        // ...
    }

    // Bad
    if (collection.length) {
        // ...
    }

    // Good
    if (collection.length > 0) {
        // ...
    }
    ```
* In case the expression spans over multiple lines, wrap it in parentheses for better readability
    ```javascript
    // Bad
    ['get', 'post', 'put'].map(httpMethod => Object.prototype.hasOwnProperty.call(
            httpMagicObjectWithAVeryLongName,
            httpMethod,
        )
    );

    // Good
    ['get', 'post', 'put'].map(httpMethod => (
        Object.prototype.hasOwnProperty.call(
            httpMagicObjectWithAVeryLongName,
            httpMethod,
        )
    ));
    ```
* When programmatically building up strings, use template strings instead of concatenation, e.g:
    ```javascript
        // bad
        const greeting = 'Hello ' + firstName + '.';

        // good
        const greeting = `Hello ${firstname}.`;
    ```
* Never use eval() on a string, it opens too many vulnerabilities
* Do not unnecessarily escape characters in strings
* The left operand of relational operators must not be negated, e.g. `if (!(key in obj)) {}` and not `if (!key in obj) {}`
* No padding within blocks
    ```javascript
    // Bad
    if (user) {

      const name = getName();

    }

    // Good
    if (user) {
      const name = getName();
    }
    ```

## Comments
* Use `/** ... */` for multi-line comments and `//` for single-line comments
* Ensure you include a `docblock` comment for each Class and function
* Comment should express the 'why' and not the 'what'.  Where you think a comment is
required to explain what is going on extract that code to a suitably name variable.
```
    // Bad
    function submitResponse(event, data){
        event.PreventDefault(); //stop form submitting
        myHandler.post(data);  //send the data to Adestra
    }

    // Good
    /**
    * Handle the data submitted by the form and send it
    * to the Adestra service.
    *
    * @param event
    * @param data   Data submitted by the form
    *
    */
    function submitResponse(event, data){
        event.PreventDefault();
        myHandler.post(data);
    }

    // Bad
    //user wants fibre with BT Sport
    if(user.preference == 23 && product.type.offer == 2){
        // ...stuff
    }

    // Good
    let userSelectedFibreAndSport = (user.preference == 23 && product.type.offer == 2);

    if(userSelectedFibreAndSport){
            // ...stuff
     }
```
## Functions

* No space between function identifiers and their invocations
* Constructor with no arguments must be invoked with parentheses
* Use a single import statement per module
* No unnecessary parentheses around function expressions
* Use `break` to prevent fall-through in `switch` cases
* Avoid reassigning function declarations
* No using the `Function` constructor
* Never reassign parameters
* Renaming import, export, and destructured assignments to the same name is not allowed
    ```javascript
    // Bad
    import { config as config } from './config';

    // Good
    import { config } from './config';
    ```
* No unreachable code after `return`, `throw`, `continue`, and `break` statements
* Immediately Invoked Function Expressions (IIFEs) must be wrapped
    ```javascript
    // Bad
    const getName = function () { }();

    // Good
    const getName = (function () { }());
    const getName = (function () { })();
    ```
* Use braces to create blocks in `case` and `default` clauses that contain lexical declarations (e.g. `let`, `const`, `function`, and `class`)
    ```javascript
    // Bad
    switch (foo) {
        case 1:
            let x = 1;
            break;
        case 2:
            const y = 2;
            break;
        case 3:
            function f() {
                // ...
            }
            break;
        default:
            class C {}
    }

    // Good
    switch (foo) {
        case 1: {
            let x = 1;
            break;
        }
        case 2: {
            const y = 2;
            break;
        }
        case 3: {
            function f() {
                // ...
            }
            break;
        }
        case 4:
            bar();
            break;
        default: {
            class C {}
        }
    }
    ```
* Do not use wildcard imports
* Put all `import`s above non-import statements
* Multiline imports should be indented just like multiline array and object literals
* Avoid confusing arrow function syntax (`=>`) with comparison operators (`<=`, `>=`)
    ```javascript
    // Bad
    const itemHeight = item => item.height > 256 ? item.largeSize : item.smallSize;

    // Bad
    const itemHeight = (item) => item.height > 256 ? item.largeSize : item.smallSize;

    // Good
    const itemHeight = item => (item.height > 256 ? item.largeSize : item.smallSize);

    // Good
    const itemHeight = (item) => {
        const { height, largeSize, smallSize } = item;

        return height > 256 ? largeSize : smallSize;
    };
    ```
* When you must use an anonymous function (as when passing an inline callback), use arrow function notation
    ```javascript
    // Bad
    [1, 2, 3].map(function (x) {
        const y = x + 1;
        return x * y;
    });

    // Good
    [1, 2, 3].map((x) => {
        const y = x + 1;
        return x * y;
    });
    ```
* Use named function expressions instead of function declarations
    ```javascript
    // Bad
    function foo() {
        // ...
    }

    // Bad
    const foo = function () {
        // ...
    };

    // Good
    // Lexical name distinguished from the variable-referenced invocation(s)
    const short = function longUniqueMoreDescriptiveLexicalFoo() {
        // ...
    };
    ```
* Never name a parameter arguments. This will take precedence over the arguments object that is given to every function scope
* Never use `arguments`, opt to use rest syntax `...` instead
    ```javascript
    // Bad
    function concatenateAll() {
        const args = Array.prototype.slice.call(arguments);
        return args.join('');
    }

    // Good
    function concatenateAll(...args) {
        return args.join('');
    }
    ```
* Use default parameter syntax rather than mutating function arguments
    ```javascript
    // Really bad
    function handleThings(opts) {
        // No! We shouldn’t mutate function arguments.
        // Double bad: if opts is falsy it'll be set to an object which may
        // be what you want but it can introduce subtle bugs.
        opts = opts || {};
        // ...
    }

    // Still bad
    function handleThings(opts) {
        if (opts === void 0) {
            opts = {};
        }

        // ...
    }

    // Good
    function handleThings(opts = {}) {
        // ...
    }
    ```
* Always put default parameters last
    ```javascript
    // Bad
    function handleThings(opts = {}, name) {
        // ...
    }

    // Good
    function handleThings(name, opts = {}) {
        // ...
    }
    ```
* Functions with multiline signatures or invocations should be indented with each item on a line by itself, with a trailing comma on the last item
    ```javascript
    // Bad
    function foo(bar,
                 baz,
                 quux) {
        // ...
    }

    // Good
    function foo (
        bar,
        baz,
        quux,
    ) {
        // ...
    }

    // Bad
    console.log(foo,
        bar,
        baz);

    // Good
    console.log(
        foo,
        bar,
        baz,
    );
    ```


## Arrays, objects, symbols

* Use array literals instead of array constructors, e.g. `const items = []` and not `const items = new Array()`
* Ensure no duplicates in object literals, class members, function arguments, case labels in switch statements, etc
* No reassigning read-only global variables
* No function declarations in nested blocks
* No `new` without assigning object to a variable
* Avoid using unnecessary computed property keys on objects
    ```javascript
    // Bad
    const user = { ['name']: 'John Doe' }

    // Good
    const user = { name: 'John Doe' }
    ```
* No using the `Object` constructor
* No using `new require`
* No using the `Symbol` constructor
* Assignments in return statements must be surrounded by parentheses
* Use property value shorthand
    ```javascript
    const lukeSkywalker = 'Luke Skywalker';

    // Bad
    const obj = {
        lukeSkywalker: lukeSkywalker,
    };

    // Good
    const obj = {
        lukeSkywalker,
    };
    ```
* Group your shorthand properties at the beginning of your object declaration
    ```javascript
    const anakinSkywalker = 'Anakin Skywalker';
    const lukeSkywalker = 'Luke Skywalker';

    // Bad
    const obj = {
        episodeOne: 1,
        twoJediWalkIntoACantina: 2,
        lukeSkywalker,
        episodeThree: 3,
        mayTheFourth: 4,
        anakinSkywalker,
    };

    // Good
    const obj = {
        lukeSkywalker,
        anakinSkywalker,
        episodeOne: 1,
        twoJediWalkIntoACantina: 2,
        episodeThree: 3,
        mayTheFourth: 4,
    };
    ```
* Only quote properties that are invalid identifiers
    ```javascript
    // Bad
    const bad = {
        'foo': 3,
        'bar': 4,
        'data-blah': 5,
    };

    // Good
    const good = {
        foo: 3,
        bar: 4,
        'data-blah': 5,
    };
    ```
* Use Array push instead of direct assignment to add items to an array, e.g. `someStack.push('abracadabra');` and not `someStack[someStack.length] = 'abracadabra';`
* Use array spreads `...` to copy arrays, e.g.
    ```javascript
        // bad
        const len = items.length;
        const itemsCopy = [];
        let i;

        for (i = 0; i < len; i += 1) {
          itemsCopy[i] = items[i];
        }

        // good
        const itemsCopy = [...items];
    ```
* To convert an array-like object to an array, use spreads `...` instead of `Array.from`, e.g.:
    ```javascript
        const foo = document.querySelectorAll('.foo');

        // good
        const nodes = Array.from(foo);

        // best
        const nodes = [...foo];
    ```
* Use `Array.from` instead of spread `...` for mapping over iterables, because it avoids creating an intermediate array, e.g:
    ```javascript
        // bad
        const baz = [...foo].map(bar);

        // good
        const baz = Array.from(foo, bar);
    ```
* Use object destructuring when accessing and using multiple properties of an object, e.g:
    ```javascript
        // bad
        function getFullName(user) {
          const firstName = user.firstName;
          const lastName = user.lastName;

          return `${firstName} ${lastName}`;
        }

        // good
        function getFullName(user) {
          const { firstName, lastName } = user;
          return `${firstName} ${lastName}`;
        }

        // best
        function getFullName({ firstName, lastName }) {
          return `${firstName} ${lastName}`;
        }
    ```
* Use array destructuring, e.g:
    ```javascript
        const arr = [1, 2, 3, 4];

        // bad
        const first = arr[0];
        const second = arr[1];

        // good
        const [first, second] = arr;
    ```
* Use object destructuring for multiple return values, not array destructuring:
    ```javascript
        // bad
        function processInput(input) {
          // then a miracle occurs
          return [left, right, top, bottom];
        }

        // the caller needs to think about the order of return data
        const [left, __, top] = processInput(input);

        // good
        function processInput(input) {
          // then a miracle occurs
          return { left, right, top, bottom };
        }

        // the caller selects only the data they need
        const { left, top } = processInput(input);
    ```

## Class skeleton

* Import third party scripts first
* Import your scripts next
* All imports should be at the top
* Ensure you include descriptive docblocks

```javascript
    @import { thing, thing2 } from './folder/file.js';

    /**
     * Class description
     *
     * @author Your Name <your.email@plus.net>
     * @package TheRepoNameProbably
     */
    export default class ClassName {
        constructor(elem) {
            if (!elem) {
                return;
            }

            this.elem = elem;

            this.init();
        }

        init() {
            // Script
        }

        /**
         * Other method description
         * @param stuff
         * @return type
         */
        otherMethod() {
            // Script
        }
    }
```

To initialise:

```javascript
    import ClassName from './ClassName';

    const className = new ClassName(document.getElementById('the-id'));
```
