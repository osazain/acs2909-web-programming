# ACS-2909 Content Extraction - Module 9 & 10

## Module 9: JavaScript DOM

### DOM Tree Structure

The **Document Object Model (DOM)** represents HTML as a tree structure. Every HTML tag is an object, and nested tags are "children" of the enclosing element.

```javascript
// document.body is the object representing the <body> tag
document.body.style.background = 'red'; // make background red

setTimeout(() => {
  document.body.style.background = ''; // return to original
}, 3000);
```

**Node Types:**
| Type | Number | Description |
|------|--------|-------------|
| Element nodes | 1 | HTML tags like `<div>`, `<p>` |
| Text nodes | 3 | Text content inside elements |
| Comment nodes | 8 | HTML comments |

---

### Querying Elements

JavaScript provides multiple methods to find elements in the DOM.

```javascript
// getElementById - find element by ID (fastest)
const header = document.getElementById('header');

// getElementsByClassName - find elements by class name
const buttons = document.getElementsByClassName('btn');

// getElementsByTagName - find elements by tag name
const paragraphs = document.getElementsByTagName('p');

// querySelector - find first element using CSS selector
const firstBtn = document.querySelector('.btn');

// querySelectorAll - find all elements using CSS selector
const allBtns = document.querySelectorAll('.btn');
```

| Method | Returns | Best For |
|--------|---------|----------|
| `getElementById(id)` | Single element or null | Unique elements |
| `querySelector(selector)` | First match or null | Single element, CSS selectors |
| `querySelectorAll(selector)` | NodeList (array-like) | Multiple elements |

**Performance Note:** `getElementById` is fastest because IDs should be unique.

---

### Modifying Elements

Once you have an element, you can modify its content, attributes, and styles.

```javascript
// Changing text content
element.textContent = 'Hello, World!';  // Plain text only
element.innerHTML = '<strong>Bold</strong>';  // Parses HTML

// Changing attributes
element.setAttribute('id', 'new-id');
element.getAttribute('id');  // Returns 'new-id'
element.removeAttribute('disabled');

// Direct property access for common attributes
element.id = 'new-id';
element.src = 'image.jpg';
element.href = 'https://example.com';

// Creating new elements
const newDiv = document.createElement('div');
newDiv.textContent = 'I am new!';
document.body.appendChild(newDiv);
```

| Method | Description |
|--------|-------------|
| `textContent` | Plain text only (safer, faster) |
| `innerHTML` | Parses HTML (be careful with user input) |
| `setAttribute()` | Set attribute value |
| `getAttribute()` | Get attribute value |
| `removeAttribute()` | Remove attribute |
| `createElement()` | Create new DOM element |
| `appendChild()` | Add element to DOM |

**Security Note:** Use `textContent` for plain text to prevent XSS attacks.

---

### Traversing the DOM

Navigate between parent, children, and sibling elements.

```javascript
// Parent and children
element.parentElement;        // Parent element
element.children;             // Collection of child elements
element.firstElementChild;     // First child element
element.lastElementChild;      // Last child element
element.childNodes;            // All child nodes (including text)

// Siblings
element.previousElementSibling;  // Previous sibling
element.nextElementSibling;      // Next sibling

// Example: Highlight all list items
const items = document.querySelectorAll('li');
items.forEach(item => {
  item.style.backgroundColor = 'yellow';
});
```

| Property | Description |
|----------|-------------|
| `parentElement` | Go up one level |
| `children` | All child elements |
| `firstElementChild` | First child only |
| `lastElementChild` | Last child only |
| `previousElementSibling` | Previous sibling |
| `nextElementSibling` | Next sibling |
| `childNodes` | All child nodes (includes text nodes) |

---

### Styles and Classes

Manipulate CSS styles and class names on elements.

```javascript
// Direct style manipulation
element.style.color = 'blue';
element.style.fontSize = '16px';  // Note: camelCase
element.style.backgroundColor = '#f0f0f0';

// classList for managing classes (recommended)
element.classList.add('active');      // Add class
element.classList.remove('hidden');    // Remove class
element.classList.toggle('active');    // Toggle class on/off
element.classList.contains('active');  // Check if has class

// Checkbox example: toggle done state
checkbox.addEventListener('change', function() {
  if (this.checked) {
    this.parentElement.classList.add('done');
  } else {
    this.parentElement.classList.remove('done');
  }
});
```

| Method | Description |
|--------|-------------|
| `classList.add()` | Add a class |
| `classList.remove()` | Remove a class |
| `classList.toggle()` | Toggle class on/off |
| `classList.contains()` | Check if has class |

**Style Note:** Hyphenated CSS properties become camelCase in JavaScript.
- `background-color` → `style.backgroundColor`
- `font-size` → `style.fontSize`

---

### Flash Card Q&A

1. **What is the DOM?**
   - The Document Object Model is a tree representation of HTML where every tag is an object that JavaScript can manipulate.

2. **What's the difference between `textContent` and `innerHTML`?**
   - `textContent` sets/gets plain text only (safer, faster). `innerHTML` parses HTML markup (risk of XSS if handling user input).

3. **Which query method is fastest and why?**
   - `getElementById()` is fastest because IDs should be unique in a document, making lookups O(1).

4. **How do you navigate from a child to its parent element?**
   - Use `element.parentElement` to get the parent, or `parentNode` for including text/comment nodes.

5. **Why is `classList` preferred over `style` for CSS changes?**
   - `classList` methods are cleaner, allow multiple classes, and keep CSS in stylesheets where it belongs.

---

## Module 10: JavaScript Events

### Introduction to Events

**Events** are actions that happen in the browser, such as clicks, key presses, or page loading. JavaScript can respond to these events.

```javascript
// Inline event handler (not recommended)
<button onclick="alert('Clicked!')">Click Me</button>

// Using addEventListener (recommended)
const button = document.querySelector('button');
button.addEventListener('click', function(event) {
  alert('Button was clicked!');
});
```

| Approach | Multiple Handlers | Overwrites Previous |
|----------|------------------|---------------------|
| `addEventListener` | Yes | No |
| `onclick` property | No | Yes |

**Best Practice:** Always use `addEventListener()` to attach event handlers.

---

### The Event Object

When an event occurs, the browser passes an **event object** to the handler function.

```javascript
// Event object properties
element.addEventListener('click', function(event) {
  console.log(event.type);          // "click"
  console.log(event.target);        // Element that triggered event
  console.log(event.currentTarget);  // Element handler is attached to
  console.log(event.clientX);       // Mouse X position
  console.log(event.clientY);        // Mouse Y position
});

// Common event object properties for keyboard
document.addEventListener('keydown', function(event) {
  console.log(event.key);    // The key pressed (a, Enter, etc.)
  console.log(event.code);  // Physical key code (KeyA, Enter, etc.)
  console.log(event.ctrlKey); // Was Ctrl held?
});
```

| Property | Description |
|----------|-------------|
| `event.target` | Element that originated the event |
| `event.currentTarget` | Element the handler is attached to |
| `event.type` | Type of event (click, keydown, etc.) |
| `event.key` | The key pressed (for keyboard events) |
| `event.code` | Physical key code (for keyboard events) |
| `event.clientX/clientY` | Mouse position relative to viewport |

---

### Event Bubbling and Capturing

When an event happens on an element, it doesn't just affect that element—it can "bubble up" to parent elements.

```
Click on P → alert order: P → DIV → FORM (bubbling upward)
```

```javascript
// Bubbling: event goes from target up to parents
form.addEventListener('click', function() {
  alert('form clicked');
});
div.addEventListener('click', function() {
  alert('div clicked');
});
p.addEventListener('click', function() {
  alert('p clicked');
});
// Clicking P shows: "p clicked" → "div clicked" → "form clicked"
```

| Phase | Direction | Use |
|-------|-----------|-----|
| Capturing | Root → Target | `addEventListener('click', handler, true)` |
| Bubbling | Target → Root | Default behavior |

**Event Flow:**
1. **Capturing phase:** Event travels DOWN from root to target (if using capture)
2. **Target phase:** Event fires on target element
3. **Bubbling phase:** Event bubbles UP from target to root

---

### Stopping Event Propagation

Use `stopPropagation()` to prevent an event from bubbling up to parent elements.

```javascript
// Prevent event from bubbling up
p.addEventListener('click', function(event) {
  event.stopPropagation();  // Stop bubbling
  alert('Paragraph clicked only');
});

// event.target vs this (currentTarget)
form.addEventListener('click', function(event) {
  // event.target = the element actually clicked
  // this = the element this handler is attached to (form)
  console.log("Clicked:", event.target.tagName);
  console.log("Handler on:", this.tagName);
});
```

| Method | Effect |
|--------|--------|
| `stopPropagation()` | Prevents event from bubbling/capturing to other elements |
| `stopImmediatePropagation()` | Stops event AND prevents other handlers on same element |

**Note:** `preventDefault()` does NOT stop propagation—it's for canceling default browser behavior.

---

### Common Events

| Event | Description |
|-------|-------------|
| `click` | Mouse click |
| `dblclick` | Double click |
| `mouseenter` | Mouse enters element |
| `mouseleave` | Mouse leaves element |
| `mouseover` | Mouse moves over element |
| `mouseout` | Mouse moves out of element |
| `keydown` | Key pressed down |
| `keyup` | Key released |
| `keypress` | Key pressed (deprecated) |
| `submit` | Form submitted |
| `change` | Input value changed (on blur) |
| `input` | Real-time input |
| `focus` | Element focused |
| `blur` | Element lost focus |
| `load` | Page/resource loaded |
| `DOMContentLoaded` | HTML parsed (before images) |

---

### Preventing Default Behavior

Use `event.preventDefault()` to cancel the browser's default action.

```javascript
// Prevent link from navigating
link.addEventListener('click', function(event) {
  event.preventDefault();  // Cancel navigation
  console.log('Link clicked but not navigating');
});

// Prevent form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();
  // Custom form handling logic here
  validateForm();
});

// Prevent checkbox from being checked
checkbox.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Checkbox click prevented!');
});
```

| Method | Purpose |
|--------|---------|
| `preventDefault()` | Cancel default browser action |
| `stopPropagation()` | Stop event from bubbling |
| `stopImmediatePropagation()` | Stop event and other handlers |

**Common Uses for `preventDefault()`:**
- Prevent form submission (use AJAX instead)
- Prevent link navigation (use for client-side routing)
- Prevent context menu on right-click
- Prevent checkbox default behavior

---

### Flash Card Q&A

1. **What's the difference between `addEventListener` and `onclick`?**
   - `addEventListener` allows multiple handlers for same event and doesn't overwrite. `onclick` property overwrites previous handlers.

2. **What's the difference between `event.target` and `event.currentTarget`?**
   - `event.target` is the element that actually triggered the event. `event.currentTarget` is the element the handler is attached to.

3. **What is event bubbling?**
   - When an event fires on an element, it then "bubbles up" to parent elements, triggering their handlers too (unless stopped with `stopPropagation()`).

4. **How do you prevent a link from navigating?**
   - Call `event.preventDefault()` in the click handler. This cancels the browser's default navigation action.

5. **How do you stop an event from propagating to parent elements?**
   - Use `event.stopPropagation()` to stop bubbling, or `event.stopImmediatePropagation()` to also stop other handlers on the same element.

---

## Extraction Summary

### JavaScript DOM Key Concepts:
- DOM represents HTML as a tree of objects
- Query methods: `getElementById()`, `querySelector()`, `querySelectorAll()`
- Modify content: `textContent` (safe), `innerHTML` (unsafe with user input)
- Traverse: `parentElement`, `children`, `firstElementChild`, `nextElementSibling`
- Styles: Use `classList` methods instead of direct `style` manipulation

### JavaScript Events Key Concepts:
- `addEventListener()` is preferred over inline handlers and `onEvent` properties
- Event object: `target`, `currentTarget`, `type`, `key`, `clientX/clientY`
- Bubbling: Events propagate up to parent elements (default)
- Capturing: Events travel down to target (use third parameter `true`)
- `preventDefault()`: Cancel default behavior
- `stopPropagation()`: Stop event bubbling/capturing
