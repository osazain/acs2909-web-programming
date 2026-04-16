# ACS-2909 Content Extraction - Module 11 & 12

## Module 11: JavaScript Classes

### Class Declaration

ES6 introduced the `class` keyword for creating object blueprints. Classes provide cleaner syntax for constructor functions and prototypes.

```javascript
// Basic class declaration
class User {
  // Constructor - called when creating new instance
  constructor(name) {
    this.name = name;
  }

  // Instance method
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

// Creating instances
const user1 = new User("Alice");
const user2 = new User("Bob");

user1.sayHi();  // "Hi, I'm Alice"
user2.sayHi();  // "Hi, I'm Bob"
```

**Important:** Classes always use strict mode. No commas between methods!

---

### Class Under the Hood

A class is essentially a special type of function.

```javascript
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

// class is a function
console.log(typeof User);  // "function"

// constructor is in prototype
console.log(User === User.prototype.constructor);  // true

// Methods are in User.prototype
console.log(User.prototype.sayHi);  // [Function: sayHi]
```

---

### Getters and Setters

Classes can have getter and setter methods for computed properties.

```javascript
class User {
  constructor(name) {
    // This invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Name too short!");
      return;
    }
    this._name = value;
  }
}

const user = new User("Alice");
console.log(user.name);  // "Alice"
user.name = "Bo";        // "Name too short!"
```

---

### Class Inheritance with extends

Use the `extends` keyword to create a class that inherits from another class.

```javascript
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// Child class inherits from Animal
class Dog extends Animal {
  constructor(name) {
    super(name);  // Call parent constructor
  }

  speak() {
    console.log(`${this.name} barks!`);
  }
}

const dog = new Dog("Buddy");
dog.speak();  // "Buddy barks!"

// instanceof check
console.log(dog instanceof Dog);       // true
console.log(dog instanceof Animal);     // true
```

**super keyword:** Must call `super()` in constructor before accessing `this` in a subclass.

---

### Static Methods

Static methods belong to the class itself, not to instances. Use the `static` keyword.

```javascript
class MathHelper {
  // Static method - called on class, not instance
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

// Call static method on the class
console.log(MathHelper.add(5, 3));        // 8
console.log(MathHelper.multiply(4, 2));  // 8

const instance = new MathHelper();
// instance.add(1, 2);  // Error! Static methods aren't on instances
```

---

### Class Expressions

Classes can be defined as expressions, assigned to variables, passed as arguments, etc.

```javascript
// Named class expression
let User = class MyClass {
  sayHi() {
    console.log(MyClass);  // Name visible inside class
  }
};

new User().sayHi();  // Works

// Anonymous class expression
let Animal = class {
  constructor(name) {
    this.name = name;
  }
};
```

---

### Summary: JavaScript Classes

| Concept | Syntax | Description |
|---------|--------|-------------|
| Class declaration | `class User { }` | ES6 class syntax |
| Constructor | `constructor(name) { }` | Initialize instance |
| Instance methods | `methodName() { }` | Methods on prototype |
| Inheritance | `class Dog extends Animal { }` | Inherit from parent |
| super | `super(name)` | Call parent constructor/methods |
| Static methods | `static add(a, b) { }` | Methods on class, not instance |
| Getters | `get name() { }` | Computed property getter |
| Setters | `set name(value) { }` | Computed property setter |
| Private fields | `#count = 0` | ES2022 private fields (true privacy) |

---

## Module 12: HTML Forms

### Form Basics

HTML forms collect user input. Every form starts with the `<form>` element.

```html
<!-- Basic form structure -->
<form action="/submit" method="post">
  <!-- Form controls go here -->
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <button type="submit">Submit</button>
</form>
```

| Attribute | Description |
|-----------|-------------|
| `action` | URL to send form data to |
| `method` | "get" or "post" HTTP method |
| `name` | Name of form (for identification) |

**GET vs POST:** Use GET for retrieving data (form data in URL). Use POST for modifying data on server.

---

### Form Elements

Common form input elements:

```html
<!-- Text input -->
<input type="text" id="name" name="name" placeholder="Enter your name">

<!-- Email input (with built-in validation) -->
<input type="email" id="email" name="email" placeholder="joe@example.com">

<!-- Password (dots out characters) -->
<input type="password" id="pwd" name="password">

<!-- Number input -->
<input type="number" id="age" name="age" min="0" max="120">

<!-- Textarea (multi-line) -->
<textarea id="bio" name="bio" rows="4"></textarea>

<!-- Select dropdown -->
<select id="country" name="country">
  <option value="usa">USA</option>
  <option value="canada">Canada</option>
</select>
```

---

### Input Types Reference

| Type | Description |
|------|-------------|
| `type="text"` | Plain text |
| `type="email"` | Email format |
| `type="password"` | Hidden characters |
| `type="number"` | Numeric input |
| `type="tel"` | Phone keyboard |
| `type="url"` | URL format |
| `type="search"` | Search field |
| `type="date"` | Date picker |
| `type="color"` | Color picker |
| `type="range"` | Slider control |
| `type="checkbox"` | On/off toggle |
| `type="radio"` | Single selection |
| `type="file"` | File upload |
| `type="hidden"` | Hidden value |

---

### Radio Buttons and Checkboxes

```html
<!-- Radio buttons (single selection) - must share name -->
<fieldset>
  <legend>Choose your level:</legend>
  <input type="radio" name="level" value="beginner" id="beginner">
  <label for="beginner">Beginner</label>
  
  <input type="radio" name="level" value="advanced" id="advanced">
  <label for="advanced">Advanced</label>
</fieldset>

<!-- Checkboxes (multiple selection) -->
<input type="checkbox" id="subscribe" name="subscribe">
<label for="subscribe">Subscribe to newsletter</label>

<!-- Checked by default -->
<input type="checkbox" checked>
```

**Radio buttons:** Same `name` attribute groups them (only one can be selected). Each needs unique `value`.

---

### Form Validation

HTML5 provides built-in form validation attributes:

```html
<!-- Required field -->
<input type="text" required>

<!-- Minimum length -->
<input type="password" minlength="8">

<!-- Maximum length -->
<input type="text" maxlength="50">

<!-- Pattern (regex) -->
<input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890">
```

```css
/* CSS pseudo-classes for styling */
input:valid { border: 2px solid green; }
input:invalid { border: 2px solid red; }
input:focus:invalid { border: 2px solid red; }
```

---

### Form Submission Handling

Handle form submissions with JavaScript:

```javascript
// Prevent default submission and handle with JS
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();  // Stop page reload
  
  // Get form data
  const formData = new FormData(form);
  const email = formData.get('email');
  
  // Or get individual values
  const name = document.getElementById('name').value;
  
  // Validate before submission
  if (name.length < 2) {
    alert('Name must be at least 2 characters');
    return;
  }
  
  // Submit the form (or send via AJAX)
  console.log(`Submitting: ${name}, ${email}`);
});
```

**form.name vs form.elements:** Form elements can be accessed via `form.nameAttribute` or `form.elements['nameAttribute']`

---

### Labels and Accessibility

Always associate labels with form controls for accessibility:

```html
<!-- Explicit association (recommended) -->
<label for="email">Email:</label>
<input type="email" id="email">

<!-- Implicit association (wrapping) -->
<label>
  Name:
  <input type="text">
</label>

<!-- Clickable label focuses the input -->
<!-- Good for checkboxes and radio buttons -->
<label for="remember">
  <input type="checkbox" id="remember">
  Remember me
</label>
```

**Benefits of proper labels:**
- Clicking label focuses the input
- Screen readers announce the label
- Improves touch target size on mobile

---

### Summary: HTML Forms

| Concept | Syntax | Description |
|---------|--------|-------------|
| Form container | `<form action method>` | Container for form elements |
| Text input | `<input type="text">` | Plain text |
| Email input | `<input type="email">` | Email format validation |
| Password input | `<input type="password">` | Hidden characters |
| Number input | `<input type="number" min max>` | Numeric with constraints |
| Textarea | `<textarea rows cols>` | Multi-line input |
| Select | `<select><option>` | Dropdown menu |
| Radio | `<input type="radio" name>` | Single selection |
| Checkbox | `<input type="checkbox">` | Multiple selection |
| Required | `<input required>` | Required field validation |
| minlength/maxlength | `<input minlength maxlength>` | Text length validation |
| Pattern | `<input pattern="regex">` | Regex validation |
| Label | `<label for="id">` | Accessibility association |
| submit event | `form.addEventListener('submit', fn)` | Form submission handling |
| preventDefault | `e.preventDefault()` | Stop form from submitting |

---

## Key Concepts Extracted

### JavaScript Classes (Module 11)
1. **Class Declaration** - ES6 class keyword with constructor
2. **Class is a Function** - Under the hood, classes are functions with prototype
3. **Getters and Setters** - Computed properties with get/set syntax
4. **extends keyword** - Class inheritance from parent class
5. **super keyword** - Call parent constructor (required before this)
6. **Static methods** - Methods on class, not instances
7. **Class expressions** - Anonymous/named class expressions

### HTML Forms (Module 12)
1. **Form basics** - form element, action, method attributes
2. **Form elements** - input, textarea, select, option
3. **Input types** - text, email, password, number, tel, url, search, date, color, range, checkbox, radio, file, hidden
4. **Radio and checkbox** - Single vs multiple selection
5. **Form validation** - required, minlength, maxlength, pattern
6. **Form submission** - submit event, preventDefault, FormData
7. **Labels and accessibility** - for attribute association, screen reader support
