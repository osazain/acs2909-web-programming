# ACS-2909 Content Extraction - Module 7 & 8

## Module 7: JavaScript Functions

### Function Declarations

The traditional way to define a function. **Hoisted** to the top of their scope.

```javascript
// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Calling the function
let message = greet("Alice");
console.log(message);  // "Hello, Alice!"

// Function with multiple parameters
function add(a, b) {
  return a + b;
}

add(5, 3);  // 8
```

**Key特性:** Function declarations are hoisted - you can call them before they appear in the code.

---

### Function Expressions

Functions assigned to variables. **Not hoisted** - must be defined before use.

```javascript
// Function Expression
const multiply = function(x, y) {
  return x * y;
};

multiply(4, 5);  // 20

// Can also use let (but const is preferred)
let divide = function(a, b) {
  return a / b;
};
```

**Key特性:** Can be anonymous (no name) and are not hoisted.

---

### Arrow Functions

A concise syntax for writing function expressions. Great for short functions.

```javascript
// Traditional function
const square = function(x) {
  return x * x;
};

// Arrow function (equivalent)
const square = (x) => {
  return x * x;
};

// Arrow function with implicit return (no curly braces)
const square = (x) => x * x;

// Single parameter can omit parentheses
const double = x => x * 2;

// Example from course: let b = (y) => (y * y) + 2;
let b = (y) => (y * y) + 2;
b(3);  // (3 * 3) + 2 = 11
```

**Arrow Function Syntax Summary:**

| Syntax | Use When |
|--------|----------|
| `(x) => x * x` | Single expression (implicit return) |
| `(x) => { return x * x; }` | Multiple statements |
| `x => x * 2` | Single parameter (no parens needed) |
| `() => 42` | No parameters |

---

### Functions as First-Class Values

In JavaScript, functions are **first-class citizens** - they can be treated like any other value.

```javascript
// 1. Functions can be assigned to variables
const sayHello = function() {
  return "Hello!";
};

// 2. Functions can be passed to other functions
function execute(fn) {
  return fn();
}

execute(sayHello);  // "Hello!"

// 3. Functions can be stored in arrays
const operations = [
  (x) => x + 1,    // add one
  (x) => x * 2,    // double
  (x) => x * x     // square
];

operations[0](5);  // 6
operations[1](5);  // 10
operations[2](5);  // 25

// 4. Functions can be returned from functions
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const triple = createMultiplier(3);
triple(4);  // 12
```

**First-Class Functions mean:**
- Assigned to variables
- Passed as arguments
- Returned from functions
- Stored in arrays/objects

---

### Function Declaration vs Expression Comparison

| Feature | Declaration | Expression |
|---------|-------------|------------|
| Hoisting | ✓ Hoisted (can call before definition) | ✗ Not hoisted |
| Name | Must have a name | Can be anonymous |
| Syntax | `function greet() {}` | `const x = function() {}` |
| Use with arrow | N/A | `const x = () => {}` |

---

## Module 8: JavaScript Objects

### Object Literals

Objects store collections of key-value pairs (properties).

```javascript
// Object literal syntax
const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
  hobbies: ["reading", "coding"]
};

// Object with nested object
const dog = {
  name: "Buddy",
  breed: "Golden Retriever",
  owner: {
    name: "John",
    phone: "555-1234"
  }
};
```

**Key特性:** Object keys are strings (or automatically converted to strings). Values can be any type: strings, numbers, booleans, arrays, other objects, or even functions!

---

### Property Access

Two ways to access object properties: **dot notation** and **bracket notation**.

```javascript
const dog = {
  name: "Buddy",
  breed: "Golden Retriever",
  "favorite toy": "tennis ball"
};

// Dot notation - preferred when possible
dog.name;        // "Buddy"
dog.breed;       // "Golden Retriever"

// Bracket notation - required for special keys
dog["name"];     // "Buddy"
dog["favorite toy"];  // "tennis ball" (key has space)

// Bracket notation with variables
let prop = "breed";
dog[prop];       // "Golden Retriever"
dog.prop;        // undefined (looks for "prop" key)
```

**Dot vs Bracket Notation:**

| Feature | Dot Notation | Bracket Notation |
|---------|--------------|------------------|
| Syntax | `dog.name` | `dog["name"]` |
| Dynamic keys | ✗ No | ✓ Yes |
| Keys with spaces | ✗ No | ✓ Yes |
| Variables as keys | ✗ No | ✓ Yes |

---

### Object.assign()

`Object.assign()` copies properties from source objects to a target object. Useful for cloning or merging objects.

```javascript
// Syntax: Object.assign(target, ...sources)

// Copying properties to a new object
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original);
// copy is { a: 1, b: 2 }

// Merging multiple objects
const defaults = { theme: "light", fontSize: 14 };
const userPrefs = { theme: "dark" };
const settings = Object.assign({}, defaults, userPrefs);
// settings is { theme: "dark", fontSize: 14 }
// userPrefs overwrites defaults!

// Adding/modifying properties
const user = { name: "Alice" };
Object.assign(user, { age: 25, name: "Bob" });
// user is now { name: "Bob", age: 25 }
```

**Key特性:** `Object.assign()` does a **shallow copy** - nested objects are copied by reference, not duplicated.

---

### Practical Examples

```javascript
// Example from course: dog.cat
const dog = {
  name: "Rex",
  cat: "meow"  // property named "cat"
};

// Dot notation
dog.cat;         // "meow"

// Bracket notation
dog["cat"];      // "meow"

// Creating a copy with modifications
const dogWithAge = Object.assign({}, dog, { age: 3 });
// dogWithAge is { name: "Rex", cat: "meow", age: 3 }
// Original 'dog' object is unchanged!
```

---

## JavaScript Functions Flash Cards

1. **Function declaration vs expression?**
   - Declarations are hoisted. Expressions are not. Expressions can be anonymous and assigned to variables.

2. **Arrow function: (y) => (y * y) + 2**
   - Returns (y²) + 2. Parentheses around y * y mean implicit return of the expression result.

3. **What are first-class functions?**
   - Functions treated as values - can be assigned, passed as args, returned, stored in arrays/objects.

4. **When can you omit arrow function parens?**
   - With exactly one parameter: `x => x * 2`. Need parens for 0 or multiple params.

---

## JavaScript Objects Flash Cards

1. **dog.name vs dog["name"]?**
   - Both access the same property. Dot is cleaner. Brackets needed for keys with spaces or dynamic property names.

2. **What does Object.assign() do?**
   - Copies properties from source objects to target. Use {} as first arg to create a copy without modifying original.

3. **How to add a property to an object?**
   - `obj.newProp = value;` or `obj["newProp"] = value;` or `Object.assign(obj, { newProp: value })`

4. **What is a shallow copy?**
   - Top-level properties are copied, but nested objects still reference the original. Object.assign() does shallow copies.

---

## Extraction Summary

### JavaScript Functions Key Concepts:
- **Function Declaration**: `function name() {}` - hoisted, traditional way
- **Function Expression**: `const x = function() {}` - not hoisted, can be anonymous
- **Arrow Function**: `(x) => x * x` - concise syntax, implicit return
- **Implicit return**: Omit `{}` for single expression arrow functions
- **First-class functions**: Functions are values - assign, pass, return, store
- **Hoisting**: Declarations hoisted to top; expressions not hoisted
- **Parenthesis rules**: `x => x*2` (1 param, no parens), `(x, y) => x + y` (multiple params)

### JavaScript Objects Key Concepts:
- **Object literal**: `{ key: value, key2: value2 }` - key-value pairs
- **Dot notation**: `obj.property` - cleaner syntax, no special characters allowed
- **Bracket notation**: `obj["property"]` - for keys with spaces, dynamic names, variables
- **Object.assign(target, sources)**: Copy/modify properties from sources to target
- **Shallow copy**: `Object.assign({}, original)` - nested objects share references
- **Use brackets for**: keys with spaces, dynamic property names, variables as keys
