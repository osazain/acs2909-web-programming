# Web Programming Cheatsheet

Quick reference guide covering Internet fundamentals, HTML, CSS, and JavaScript concepts.

---

## Table of Contents

1. [Internet Basics](#internet-basics)
2. [HTML](#html)
3. [CSS Fundamentals](#css-fundamentals)
4. [CSS Layout](#css-layout)
5. [CSS Responsive](#css-responsive)
6. [JavaScript Basics](#javascript-basics)
7. [JavaScript Control Flow](#javascript-control-flow)
8. [JavaScript Functions](#javascript-functions)
9. [JavaScript Objects](#javascript-objects)
10. [JavaScript DOM](#javascript-dom)
11. [JavaScript Events](#javascript-events)
12. [JavaScript Classes](#javascript-classes)
13. [HTML Forms](#html-forms)
14. [Web APIs](#web-apis)

---

## Internet Basics

### HTTP Protocol
- **HTTP (HyperText Transfer Protocol)** - Foundation of data communication on WWW
- **Request-Response Protocol**: Client (browser) sends request → Server returns response

### Client-Server Model
| Client | Server |
|--------|--------|
| Requests resources (web pages, data) | Stores and serves resources |
| Web browsers (Chrome, Firefox, Safari) | Web servers (Apache, Nginx, IIS) |
| Runs on user's device | Runs on remote computers |

### DNS (Domain Name System)
- Translates human-readable domain names (google.com) to IP addresses (142.250.80.46)
- **DNS Lookup Process**: Browser checks cache → Queries DNS resolver → Returns IP

### File Paths
| Path Type | Example | Description |
|-----------|---------|-------------|
| **Absolute** | `https://example.com/img.jpg` | Complete URL |
| **Relative** | `images/img.jpg` or `../img.jpg` | Relative to current file |
| **Root-Relative** | `/images/img.jpg` | From website root (starts with `/`) |

---

## HTML

### Document Structure
```html
<!DOCTYPE html>  <!-- Declares HTML5 -->
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
  </head>
  <body>
    <!-- Visible content -->
  </body>
</html>
```

### Meta Tags
```html
<meta charset="UTF-8">  <!-- Character encoding -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">  <!-- Responsive -->
```

### Semantic Elements
| Element | Purpose |
|---------|---------|
| `<header>` | Introductory content, nav |
| `<nav>` | Navigation links |
| `<main>` | Main content (unique per page) |
| `<article>` | Self-contained content |
| `<section>` | Thematic grouping |
| `<footer>` | Footer information |

### Links & Images
```html
<a href="https://example.com" target="_blank">Link</a>
<img src="photo.jpg" alt="Description">
```

### Lists
```html
<ul><li>Item</li></ul>     <!-- Unordered -->
<ol><li>Item</li></ol>     <!-- Ordered -->
```

---

## CSS Fundamentals

### Selectors
| Selector | Example | Selects |
|----------|---------|---------|
| Element | `p { }` | All `<p>` elements |
| Class | `.myclass { }` | Elements with class="myclass" |
| ID | `#myid { }` | Element with id="myid" |
| Descendant | `div p { }` | `<p>` inside `<div>` |
| Pseudo-class | `a:hover { }` | Links on hover |

### Box Model
```
Content → Padding → Border → Margin
```

### Box Sizing
```css
* { box-sizing: border-box; }  /* Recommended - includes padding/border in width */
```

### Display Property
| Value | Behavior |
|-------|----------|
| `block` | Full width, new line |
| `inline` | Only needed width, stays in line |
| `inline-block` | Inline flow, accepts width/height |
| `none` | Hidden, removed from layout |

### Specificity
```
Inline (1000) > ID (100) > Class (10) > Element (1)
```

### Colors
| Format | Example |
|-------|---------|
| Hex | `#00EE00` |
| RGB | `rgb(0, 238, 0)` |
| Named | `red`, `blue` |

---

## CSS Layout

### Flexbox
```css
.container {
  display: flex;
  flex-direction: row;           /* row, row-reverse, column, column-reverse */
  justify-content: flex-start;  /* flex-start, flex-end, center, space-between, space-around */
  align-items: stretch;         /* stretch, flex-start, flex-end, center */
}
```

### Positioning
| Value | Description |
|-------|-------------|
| `static` | Default, normal flow |
| `relative` | Relative to normal position |
| `absolute` | Relative to nearest positioned ancestor |
| `fixed` | Relative to browser window (stays on scroll) |
| `sticky` | Scrolls until threshold, then sticks |

---

## CSS Responsive

### Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Media Queries
```css
/* Mobile-first approach */
@media (min-width: 576px) { }   /* Tablet */
@media (min-width: 768px) { }   /* Small desktop */
@media (min-width: 992px) { }   /* Large desktop */
```

### Common Breakpoints
```css
@media (max-width: 575px) { }   /* Extra small (phones) */
@media (min-width: 576px) { }   /* Small devices */
@media (min-width: 768px) { }   /* Medium devices */
@media (min-width: 992px) { }   /* Large devices */
@media (min-width: 1200px) { }  /* Extra large */
```

### Responsive Images
```css
img {
  max-width: 100%;
  height: auto;
}
```

---

## JavaScript Basics

### Variables
| Keyword | Reassignable | Scope | Use When |
|---------|--------------|-------|----------|
| `const` | No | Block | Value won't change |
| `let` | Yes | Block | Value will change |
| `var` | Yes | Function | Legacy code only |

### Data Types
| Type | Example |
|------|---------|
| `string` | `"Hello"` |
| `number` | `42`, `3.14` |
| `boolean` | `true`, `false` |
| `null` | `null` (intentional absence) |
| `undefined` | `undefined` (not assigned) |
| `object` | `{ name: "John" }` |

### Operators
| Operator | Name | Example |
|----------|------|---------|
| `+` | Addition | `5 + 3` = 8 |
| `-` | Subtraction | `5 - 3` = 2 |
| `*` | Multiplication | `5 * 3` = 15 |
| `/` | Division | `6 / 2` = 3 |
| `%` | Modulo (remainder) | `7 % 3` = 1 |
| `**` | Exponentiation | `2 ** 3` = 8 |

### Type Coercion Gotchas
| Expression | Result | Why |
|------------|--------|-----|
| `"4" + 8 / 2` | `"44"` | Division first (8/2=4), then concat |
| `"5" == 5` | `true` | Type coercion |
| `0 == false` | `true` | Both become 0 |

---

## JavaScript Control Flow

### Comparisons
```javascript
// ALWAYS use strict equality!
5 === "5"   // false (strict)
5 == "5"    // true (type coercion)

// Object comparison - by reference!
{} === {}   // false (different objects)
```

### Logical Operators
| Operator | Name | Description |
|----------|------|-------------|
| `&&` | AND | Both must be true |
| `\|\|` | OR | At least one true |
| `!` | NOT | Inverts boolean |

### Ternary Operator
```javascript
let status = age >= 18 ? "adult" : "minor";
```

---

## JavaScript Functions

### Function Declaration
```javascript
function greet(name) {
  return "Hello, " + name + "!";
}
```
*Hoisted - can call before definition.*

### Function Expression
```javascript
const greet = function(name) {
  return "Hello, " + name + "!";
};
```
*Not hoisted - must define before use.*

### Arrow Functions
```javascript
const square = (x) => x * x;
const double = x => x * 2;
const greet = () => "Hello!";
```

### First-Class Functions
Functions can be assigned, passed as arguments, returned, stored in arrays.

---

## JavaScript Objects

### Object Literals
```javascript
const person = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "coding"]
};
```

### Property Access
```javascript
// Dot notation (preferred)
person.name;

// Bracket notation (for special keys, dynamic names)
person["name"];
person["favorite toy"];  // key with space
```

### Object Methods
```javascript
// Object.assign() - copy/merge
const copy = Object.assign({}, original);

// Object.keys() - get property names
Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});
```

---

## JavaScript DOM

### Query Methods
| Method | Returns |
|--------|---------|
| `getElementById(id)` | Single element |
| `querySelector(selector)` | First match |
| `querySelectorAll(selector)` | NodeList |

### Modifying Elements
```javascript
element.textContent = 'Hello';           // Plain text (safe)
element.innerHTML = '<strong>Bold</strong>';  // HTML (XSS risk)
element.setAttribute('id', 'new-id');
element.createElement('div');
element.appendChild(newDiv);
```

### Traversing
```javascript
element.parentElement;
element.children;
element.firstElementChild;
element.nextElementSibling;
```

### Styles & Classes
```javascript
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('active');
element.style.color = 'blue';  // camelCase
```

---

## JavaScript Events

### addEventListener (Preferred)
```javascript
button.addEventListener('click', function(event) {
  console.log(event.target);
});
```

### Event Object
```javascript
event.target;        // Element that triggered
event.currentTarget;  // Element handler attached to
event.type;           // "click", "keydown", etc.
event.key;            // Key pressed
event.clientX/clientY; // Mouse position
```

### Event Propagation
```javascript
event.stopPropagation();  // Stop bubbling to parents
event.preventDefault();   // Cancel default behavior
```

### Common Events
| Event | Description |
|-------|-------------|
| `click` | Mouse click |
| `dblclick` | Double click |
| `keydown` | Key pressed |
| `submit` | Form submitted |
| `change` | Input changed (on blur) |
| `focus`/`blur` | Focus gained/lost |

---

## JavaScript Classes

### Class Declaration
```javascript
class User {
  constructor(name) {
    this.name = name;
  }
  
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
```

### Inheritance
```javascript
class Dog extends Animal {
  constructor(name) {
    super(name);  // Call parent constructor
  }
  
  speak() {
    console.log(`${this.name} barks!`);
  }
}
```

### Static Methods
```javascript
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}
MathHelper.add(5, 3);  // 8
```

---

## HTML Forms

### Basic Form
```html
<form action="/submit" method="post">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <button type="submit">Submit</button>
</form>
```

### Input Types
| Type | Description |
|------|-------------|
| `text` | Plain text |
| `email` | Email validation |
| `password` | Hidden characters |
| `number` | Numeric input |
| `tel` | Phone keyboard |
| `url` | URL format |
| `date` | Date picker |
| `color` | Color picker |
| `range` | Slider |
| `checkbox` | On/off toggle |
| `radio` | Single selection |
| `file` | File upload |

### Validation Attributes
```html
<input required>
<input minlength="8">
<input maxlength="50">
<input pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
```

### Form Handling
```javascript
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const email = formData.get('email');
});
```

---

## Web APIs

### localStorage
```javascript
localStorage.setItem('username', 'Alice');
localStorage.getItem('username');
localStorage.removeItem('username');
localStorage.clear();

// Objects - use JSON!
localStorage.setItem('user', JSON.stringify({name: 'Alice', age: 25}));
const user = JSON.parse(localStorage.getItem('user'));
```

### sessionStorage
```javascript
sessionStorage.setItem('tempData', 'value');
// Automatically cleared when tab closes
```

### XMLHttpRequest (XHR)
```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
xhr.onload = () => {
  if (xhr.status === 200) {
    console.log(xhr.response);
  }
};
xhr.send();
```

### Cookies
```javascript
document.cookie = 'username=Alice; path=/';
// Read all cookies
const allCookies = document.cookie;
```

### Storage Comparison
| Feature | Cookies | localStorage | sessionStorage |
|---------|---------|---------------|----------------|
| Size limit | 4KB | 5-10MB | 5-10MB |
| Sent to server | Automatic | No | No |
| Expiration | Can set | Until cleared | Until tab closes |

---

## Quick Reference Tables

### CSS Properties
| Property | Values |
|----------|--------|
| `display` | block, inline, inline-block, flex, none |
| `position` | static, relative, absolute, fixed, sticky |
| `flex-direction` | row, column |
| `justify-content` | flex-start, center, space-between |
| `align-items` | stretch, flex-start, center |

### JavaScript typeof
```javascript
typeof "hello"  // "string"
typeof 42       // "number"
typeof true     // "boolean"
typeof {}      // "object"
typeof null    // "object" (bug!)
typeof undefined // "undefined"
```

---

## Common Gotchas & Pitfalls

1. **Use `===` not `==`** - Strict equality avoids type coercion bugs
2. **Objects compared by reference** - `{} === {}` is false
3. **localStorage stores strings** - Use JSON.stringify/parse for objects
4. **Box-sizing: border-box** - Easier layout calculations
5. **One `<h1>` per page** - Don't skip heading levels
6. **Event bubbling** - Events propagate up to parent elements
7. **Arrow functions and `this`** - Arrow functions don't rebind `this`
8. **Hoisting** - Function declarations hoisted, expressions not
9. **Null vs Undefined** - null is intentional, undefined is unassigned
10. **XSS prevention** - Use textContent for plain text, not innerHTML with user input
