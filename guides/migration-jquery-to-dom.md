# jQuery to modern JavaScript

## Selectors

jQuery:

```javascript
$('.selector');
$('#selector');
```

Vanilla:

```javascript
document.querySelectorAll('.selector');
document.querySelector('.selector');
document.getElementById('selector');
```

## Attributes
jQuery:

```javascript
// Set one
$('.thing').attr('data-name', 'Arthur');

// Get one
console.log($('.thing').attr('data-name'));
```

Vanilla:

```javascript
const thingElem = document.querySelector('.thing');

// Set one
thingElem.setAttribute('data-name', 'Arthur');

// Or if a data attribute
thingElem.dataset.name = 'Arthur';

// Get one
console.log(thingElem.getAttribute('data-name'));

// Or if a data attribute - like in this e.g.:
console.log(thingElem.dataset.name);
```

Data attributes are _always_ strings. If you need to store numbers, remember to parse for that!

## Classnames

jQuery:

```javascript
$('.elem').addClass('is_active');
$('.elem').removeClass('is_active');
$('.elem').hasClass('is_active');
```

Vanilla:

```javascript
const elem = document.querySelector('.elem');

elem.classList.add('is_active');
elem.classList.remove('is_active');
elem.classList.contains('is_active');

// Or to wipe out anything there and add new class
elem.className = 'is_active';
```

## Each

jQuery:

```javascript
$('.selector').each(function() {
    console.log('Bonjour, ' + $(this).attr('data-name'));
});
```

Vanilla:

```javascript
const nodesToLoop = [...document.querySelectorAll('.selector')];

nodesToLoop.forEach(nodeLoop => {
    console.log(`Bonjour, ${nodeLoop.dataset.name}`);
});
```

## Event listeners

jQuery

```javascript
$('#button').on('click', function(e) {
    e.preventDefault();
    console.log('Clicked!');
});
```

Vanilla:

```javascript
const buttonElem = document.getElementById('button');

buttonElem.addEventListener('click', e => {
    e.preventDefault();
    console.log('Clicked!');
});
```

## Show/hide

jQuery:

```javascript
$('.elem').hide();
$('.elem').show();
```

Vanilla:

```javascript
const elem = document.querySelector('.elem');

// Can do this, but ideally avoid
elem.style.display = 'none';
elem.style.display = 'block';

// Preferable since we should have full control over CSS as well!
elem.classList.remove('is_hidden');

// Or even (at a push)
elem.removeAttribute('hidden');
```

## `html => innerHTML`

jQuery:

```javascript
$('.elem').html('<div>Wut</div>');
```

Vanilla:

```javascript
const elem = document.querySelector('.elem');

elem.innerHtml = '<div>Wut</div>';
```

## `text => textContent`

jQuery:

```javascript
$('.elem').text('Wut');
```

Vanilla:

```javascript
const elem = document.querySelector('.elem');

elem.textContent = 'Wut';
```

## `.val(x) => .value = "x"`

To get:

jQuery:

```javascript
var elemValue = $('.form-elem').val();
```

Vanilla:

```javascript
const elemValue = document.querySelector('.form-elem').value;
```

To set:

jQuery:

```javascript
$('.form-elem').val('hello');
```

Vanilla:

```javascript
document.querySelector('.form-elem').value = 'hello';
```

## `$('.elem').css(prop, val) => elem.style.prop = value`

jQuery:

```javascript
$('.elem').css('color', '#000');
```

Vanilla:

```javascript
const elem = document.querySelector('.elem');

elem.style.color = '#000';

// Note: things are camel-case here, so:
elem.style.backgroundColor = '#fff';
```

## `document.ready()` and `window.load()`

jQuery:

```javascript
$(document).ready(function() {
    console.log('DOM loaded');
});

$(window).load(function () {
    console.log('Everything has finished loading');
});
```

Vanilla:

```javascript
// DOM has been loaded and parsed
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
});

// All assets are loaded
window.addEventListener('load', () => {
    console.log('Everything has finished loading.');
});
```

We should be using `defer` on our scripts, and ensuring we're setting the <script> element to have `type="module"`.

```html
<!-- Best option -->
<script type="module" src="/app.js"></script>
<!-- or -->
<script src="/app.js" defer></script>
```