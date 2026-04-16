# ACS-2909 Content Extraction - Module 5 & 6

## Module 5: JavaScript Basics

### Variables (let, const, var)
Variables store data values. Modern JavaScript uses `let` and `const`.

| Keyword | Can Reassign? | Scope | Use When |
|---------|--------------|-------|----------|
| `const` | No | Block | Value won't change (default choice) |
| `let` | Yes | Block | Value will change |
| `var` (avoid) | Yes | Function | Legacy code only |

```javascript
// const - cannot be reassigned
const PI = 3.14159;
const name = "Alice";

// let - can be reassigned
let count = 0;
count = 1;  // ✓ OK
count = 2;  // ✓ OK

// PI = 3.14;  // ✗ Error! Cannot reassign const
```

**Best Practice:** Use `const` by default. Only use `let` when you need to reassign. Avoid `var`.

---

### Variable Naming Rules

**Valid Variable Names:**
- Can contain: letters, digits, `$`, and `_`
- Case-sensitive (`myVar` ≠ `myvar`)
- Cannot start with a digit
- No hyphens or spaces

**Valid Examples:** `userName`, `_count`, `$price`, `item1`, `MAX_SIZE`

**Invalid Examples:**
- `1stPlace` (starts with digit)
- `tar-get` (hyphen - JavaScript interprets as subtraction: tar - get)
- `my var` (space)

---

### Data Types

| Type | Example | Description |
|------|---------|-------------|
| `string` | `"Hello"`, `'World'` | Text data |
| `number` | `42`, `3.14` | Integers and decimals |
| `boolean` | `true`, `false` | Logical values |
| `null` | `null` | Intentional absence of value |
| `undefined` | `undefined` | Variable declared but not assigned |
| `object` | `{ name: "John" }` | Complex data structures |

```javascript
let name = "Alice";           // string
let age = 25;                // number
let isStudent = true;        // boolean
let score = null;            // null (intentionally empty)
let data;                   // undefined (declared but no value)
let person = { name: "Bob" }; // object

// Check type with typeof
console.log(typeof name);  // "string"
console.log(typeof age);   // "number"
```

**null vs undefined:**
- `null` = intentional absence of value (programmer sets it)
- `undefined` = variable declared but never assigned a value

---

### Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 3` | 8 |
| `-` | Subtraction | `5 - 3` | 2 |
| `*` | Multiplication | `5 * 3` | 15 |
| `/` | Division | `6 / 2` | 3 |
| `%` | Modulo (remainder) | `7 % 3` | 1 |
| `**` | Exponentiation | `2 ** 3` | 8 |

**Modulo (%)** gives the remainder after division. Useful for checking even/odd:
```javascript
num % 2 === 0  // true means even number
num % 2 !== 0  // true means odd number
```

---

### Operator Precedence

**Order of Operations (highest to lowest):**
1. Parentheses `()`
2. Exponentiation `**`
3. Multiplication/Division/Modulo `* / %`
4. Addition/Subtraction `+ -`

```javascript
// Example: 2 + 3 * 4 = 14 (not 20)
// Because * has higher precedence than +
```

---

### Type Coercion

JavaScript automatically converts types in certain operations.

**String Concatenation with `+`:**
```javascript
"4" + 8 / 2
// Steps: "4" + 4  →  "44"
// Division happens first (8/2=4), then string concatenation
```

**Division Converts to Numbers:**
```javascript
"8" / "2"  →  4  // Both strings converted to numbers
```

**Key Gotchas:**
| Expression | Result | Why |
|------------|--------|-----|
| `"4" + 8 / 2` | `"44"` | Division before concat |
| `"5" == 5` | `true` | Type coercion |
| `0 == false` | `true` | Both become 0 |
| `"" == 0` | `true` | Empty string becomes 0 |

---

## Module 6: JavaScript Control Flow

### Comparisons

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Loose equality | `5 == "5"` | `true` (type coercion) |
| `===` | Strict equality ⭐ | `5 === "5"` | `false` (different types) |
| `!=` | Loose inequality | `5 != "5"` | `false` |
| `!==` | Strict inequality ⭐ | `5 !== "5"` | `true` |
| `>` | Greater than | `5 > 3` | `true` |
| `<` | Less than | `5 < 3` | `false` |

**Always use `===` and `!==` (strict equality) to avoid unexpected type coercion bugs!**

```javascript
// Loose equality (==) - allows type coercion
5 == "5"     // true (string converted to number)
0 == false   // true (boolean converted to number)
"" == 0      // true (empty string converted to 0)

// Strict equality (===) - NO type coercion
5 === "5"    // false (different types)
0 === false  // false
5 === 5      // true (same value AND type)
```

---

### Object Comparison

**Critical Concept:** Two empty objects are NOT equal, even with `==` or `===`!

```javascript
let obj1 = {};
let obj2 = {};

// These are NOT equal!
obj1 == obj2   // false
obj1 === obj2  // false

// Even comparing to itself
let obj3 = {};
obj3 === obj3  // true (same reference)

// Same applies to arrays
[] == []      // false
[] === []     // false
```

**Why?** Objects are compared by **reference**, not value. Each `{}` creates a new object in memory.

---

### Logical Operators

| Operator | Name | Description |
|----------|------|-------------|
| `&&` | AND | True if BOTH operands are true |
| `||` | OR | True if AT LEAST ONE operand is true |
| `!` | NOT | Inverts the boolean value |

```javascript
let age = 25;
let hasID = true;

// AND - both must be true
age >= 18 && hasID   // true (both conditions met)

// OR - at least one must be true
age < 18 || hasID    // true (hasID is true)

// NOT - inverts the value
!hasID                // false
!(age < 18)          // true (age is NOT less than 18)
```

**Truth Tables:**

| A | B | A && B | A \|\| B | !A |
|---|---|--------|----------|-----|
| true | true | true | true | false |
| true | false | false | true | false |
| false | false | false | false | true |

---

### Ternary Operator

A shorthand for `if...else` statements.

**Syntax:** `condition ? valueIfTrue : valueIfFalse`

```javascript
let age = 20;
let status = age >= 18 ? "adult" : "minor";
// status is "adult"

let score = 85;
let grade = score >= 90 ? "A" : 
            score >= 80 ? "B" : 
            score >= 70 ? "C" : "F";
// grade is "B"
```

**Comparison with if/else:**

```javascript
// Traditional if/else
let result;
if (age >= 18) {
  result = "adult";
} else {
  result = "minor";
}

// Ternary Operator
let result = age >= 18 ? "adult" : "minor";
```

---

## JavaScript Basics Flash Cards

1. **const vs let?**
   - `const` cannot be reassigned. `let` can be reassigned. Both are block-scoped.

2. **Why is `tar-get` an invalid variable name?**
   - Hyphens are not allowed in variable names. JavaScript interprets it as subtraction: `tar - get`.

3. **What's the result of `"4" + 8 / 2`?**
   - `"44"` - Division happens first (8/2=4), then string concatenation ("4"+4="44").

4. **null vs undefined?**
   - `null` = intentional absence of value. `undefined` = variable declared but never assigned a value.

---

## JavaScript Control Flow Flash Cards

1. **== vs ===?**
   - `==` allows type coercion (`5 == "5"` is true). `===` is strict equality - value AND type must match.

2. **{} == {} ?**
   - `false`! Objects are compared by reference, not value. Two empty objects are different references.

3. **&& vs ||?**
   - `&&` (AND): both must be true. `||` (OR): at least one must be true.

4. **Ternary syntax?**
   - `condition ? valueIfTrue : valueIfFalse`

---

## Extraction Summary

### JavaScript Basics Key Concepts:
- **const vs let**: const = immutable, let = mutable. Both block-scoped. Avoid var.
- **Variable naming**: letters, digits, $, _. No leading digit, no hyphens
- **Data types**: string, number, boolean, null, undefined, object
- **typeof**: Operator to check data type
- **Operators**: +, -, *, /, % (modulo), ** (exponent)
- **Precedence**: () > ** > */% > +-
- **Type coercion**: `+` with string = concatenation; `/` with string = number conversion

### JavaScript Control Flow Key Concepts:
- **=== vs ==**: Always use strict equality (===, !==)
- **Type coercion gotchas**: `0 == false` is true, `"" == 0` is true
- **Object comparison**: Objects compared by reference, not value
- **&& (AND)**: Both must be true
- **|| (OR)**: At least one must be true
- **! (NOT)**: Inverts boolean
- **Ternary**: `condition ? valueIfTrue : valueIfFalse`
