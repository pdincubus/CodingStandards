# Common ES6 Features

<!-- MarkdownTOC autolink="true" -->

- [Arrow functions](#arrow-functions)
- [`const` and `let`](#const-and-let)
- [Classes](#classes)
- [import/export](#importexport)
- [Object rest spread](#object-rest-spread)
- [Template strings](#template-strings)
- [Default parameters](#default-parameters)
- [Promises and fetch](#promises-and-fetch)
- [Array includes](#array-includes)
- [Object restructuring](#object-restructuring)

<!-- /MarkdownTOC -->


<a name="arrow-functions"></a>
## Arrow functions

Before:

```javascript
var johnson = function () {
    console.log('Johnson');
};
```

After:

```javascript
const johnson = () => {
    console.log('Johnson');
};
```

Unlike functions, arrows share the same lexical this as their surrounding code. If an arrow is inside another function, it shares the "arguments" variable of its parent function.

<a name="const-let"></a>
## `const` and `let`

No more using `var`. Use `const` where the value shouldn't change, and `let` where it will/might.

<a name="classes"></a>
## Classes

```javascript
export default class Badgers {
    constructor (badgers) {
        if (!badgers) {
            return;
        }

        this.badgers = badgers;

        this.mushrooms();
    }

    mushrooms () {
        console.log(this.badgers, 'mushroom, mushroom');
    }
}

const badgersMushrooms = new Badgers([...document.querySelectorAll('.badgers')]);
```

<a name="import-export"></a>
## import/export

```javascript
// Utilities script
export function haroldBishop (sea) {
    return sea;
}

// A.N Other script
import { haroldBishop } from './utilities';

const heDidGetInTheSea = haroldBishop(true);
console.log(heDidGetInTheSea);
```

<a name="object-rest-spread"></a>
## Object rest spread

No more need for:

```javascript
var theseThings = document.querySelectorAll('.elem');

theseThings = Array.prototype.slice.call(theseThings);
```

Now you can do:

```javascript
const theseThings = [...document.querySelectorAll('.elem')];
```

<a name="template-strings"></a>
## Template strings

Before:

```javascript
var welcomeString = 'Hello, ' + personFirstName + '. Great to see you again';
```

After:

```javascript
const welcomeString = `Hello, ${personFirstName}. Great to see you again`;
```

<a name="default-parameters"></a>
## Default parameters

Before:

```javascript
var doThing = function (arg1, arg2) {
    if (arg1 === undefined) {
        arg1 = 'haha';
    }

    if (arg2 === undefined) {
        arg2 = 'hoho';
    }

    console.log(arg1 + ' ' + arg2);
}
```

After:

```javascript
const doThing = (arg1 = 'haha', arg2 = 'hoho') => {
    console.log(`${arg1} ${arg2}`);
}
```

<a name="promises-fetch"></a>
## Promises and fetch

Before:

```javascript
// No promises equivalent, other than waiting and periodically checking if something is done
// As for AJAX:

var xmlHttpRequest = new XMLHttpRequest();

xmlHttpRequest.onreadystatechange = function() {
    if (xmlHttpRequest.readyState == XMLHttpRequest.DONE) {
        if (xmlHttpRequest.status == 200) {
            document.getElementById('output').innerHTML = xmlHttpRequest.responseText;
        } else if (xmlHttpRequest.status == 400) {
            alert('There was an error 400');
        } else {
            alert('something else other than 200 was returned');
        }
    }
};

xmlHttpRequest.open('GET', 'random-doc.txt', true);
xmlHttpRequest.send();
```

After:

```javascript
fetch('random-doc.txt')
    .then((response) => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('An error occurred.');
        }
    })
    .then(myContent => {
        console.log(myContent);
    })
    .catch(error => {
        console.error('An error occurred:', error);
    })
;
```

<a name="array-includes"></a>
## Array includes

Before:

```javascript
    var houses = [
        'terrace',
        'semi-detatched',
        'detatched',
        'flat'
    ];

    var bungalowExists = (houses.indexOf('bungalow') > -1);

    console.log(bungalowExists);
```

After:

```javascript
    const houses = [
        'terrace',
        'semi-detatched',
        'detatched',
        'flat'
    ];

    const bungalowExists = houses.includes('bungalow');

    console.log(bungalowExists);
```

<a name="object-restructuring"></a>
## Object restructuring

Before:

```javascript
function getUser(){
    var name = 'Mark';
    var age = 37;

    return {
        name: name,
        age: age,
    };
}

console.log(getUser().name);
console.log(getUser().age);
```

After:

```javascript
function getUser(){
    let name = 'Mark';
    let age = 37;

    return {name, age};
}

console.log(getUser().name);
console.log(getUser().age);
```
