# Switching from jQuery to vanilla Javascript

<!-- MarkdownTOC autolink="true" -->

- [Selectors](#selectors)
- [Attributes](#attributes)
- [Classnames](#classnames)
- [Each](#each)
- [Event listeners](#event-listeners)
- [Show/hide](#showhide)
- [`html => innerHtml`](#html--innerhtml)
- [`text => textContent`](#text--textcontent)
- [`.val => .value`](#val--value)
- [`$('.elem').css(prop, val) => elem.style.prop = value`](#%24elemcssprop-val--elemstyleprop--value)
- [`document.ready()` and `window.load()`](#documentready-and-windowload)

<!-- /MarkdownTOC -->


<a name="selectors"></a>
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

<a name="attributes"></a>
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

<a name="classnames"></a>
## Classnames

jQuery:

```javascript
$('.elem').addClass('is_active');
$('.elem').removeClass('is_active');
```

Vanilla:

```javascript
const elem = document.querySelector('.elem');

elem.classList.add('is_active');
elem.classList.remove('is_active');

// Or to wipe out anything there and add new class
elem.classList = 'is_active';
```

<a name="each"></a>
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

<a name="event-listeners"></a>
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

<a name="show-hide"></a>
## Show/hide

jQuery:

```javascript
$('.elem').hide();
$('.elem').show();
```

Vanilla:

```javascript
const elem = document.querySelector('.elem');

elem.style.display = 'none';
elem.style.display = 'block';
```

<a name="html-innerhtml"></a>
## `html => innerHtml`

jQuery:

```javascript
$('.elem').html('<div>Wut</div>');
```

Vanilla:

```javascript
const elem = document.querySelector('.elem');

elem.innerHtml = '<div>Wut<div>';
```

<a name="text-textcontent"></a>
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

<a name="val-value"></a>
## `.val => .value`

jQuery:

```javascript
var elemValue = $('.elem').val();
```

Vanilla:

```javascript
const elemValue = document.querySelector('.elem').value;
```

<a name="prop-val"></a>
## `$('.elem').css(prop, val) => elem.style.prop = value`

jQuery:

```javascript
$('.elem').css('color', '#000');
```

Vanilla:

```javascript
const elem = document.querySelector('.elem');

elem.style.color = '#000';
```

<a name="ready-load"></a>
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
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
});

// Or...

document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
        console.log('DOM loaded');
    }
};

window.addEventListener('load', () => {
    console.log('Everything has finished loading.');
});
```
