# ACS-2909 Content Extraction - Module 3 & 4

## Module 3: CSS Fundamentals

### CSS Selectors
| Selector | Example | Selects |
|----------|---------|---------|
| Element | `p { }` | All `<p>` elements |
| Class | `.myclass { }` | All elements with class="myclass" |
| ID | `#myid { }` | The element with id="myid" |
| Descendant | `div p { }` | All `<p>` inside `<div>` |
| Pseudo-class | `a:hover { }` | Links on mouse hover |

```css
/* Element selector */
p {
  color: blue;
}

/* Class selector */
.highlight {
  background-color: yellow;
}

/* ID selector */
#header {
  font-size: 24px;
}

/* Descendant selector */
nav a {
  text-decoration: none;
}

/* Pseudo-class */
button:hover {
  background-color: #ddd;
}
```

---

### Colors
CSS supports multiple ways to specify colors:

| Format | Example | Description |
|-------|---------|-------------|
| Hexadecimal | `#00EE00` | 6-digit hex code (RRGGBB) |
| RGB | `rgb(0, 238, 0)` | Red, Green, Blue (0-255) |
| Named | `red`, `blue` | 140+ predefined color names |

---

### Box Model
Every HTML element is a box with four layers: **Content → Padding → Border → Margin**

**Box Model Layers (from inside out):**
1. **Content** - The actual content (text, images)
2. **Padding** - Space around content (inside border)
3. **Border** - Line around padding
4. **Margin** - Space outside border (between elements)

---

### Box Sizing
The `box-sizing` property determines how width and height are calculated.

| Value | Behavior |
|-------|----------|
| `content-box` (default) | Width/height applies **only to content**. Padding and border added outside. |
| `border-box` ⭐ Recommended | Width/height includes **content + padding + border** |

```css
/* content-box: 300px + 40px (padding) + 10px (border) = 350px actual */
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  /* Actual width: 350px */
}

/* border-box: 300px includes everything */
.box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  /* Actual width: 300px */
}
```

**Best Practice:** Always use `box-sizing: border-box` for easier layout calculations:
```css
* {
  box-sizing: border-box;
}
```

---

### Display Property
The `display` property controls how elements are rendered.

| Value | Behavior | Examples |
|-------|----------|----------|
| `block` | Takes full width, starts on new line | `<div>`, `<p>`, `<h1>`-`<h6>` |
| `inline` | Takes only needed width, stays in line | `<span>`, `<a>`, `<strong>` |
| `inline-block` | Inline flow, but accepts width/height | Buttons, nav items |
| `none` | Hidden, removed from layout | To hide elements completely |

```css
/* Make inline element block-level */
a {
  display: block;
}

/* Inline-block for nav buttons */
.nav-item {
  display: inline-block;
  width: 100px;
  padding: 10px;
}

/* Hide element */
.hidden {
  display: none;
}
```

---

### Text Styles
| Property | Common Values | Description |
|----------|--------------|-------------|
| `font-family` | Arial, "Times New Roman", sans-serif | Typeface for text |
| `font-size` | 16px, 1.2em, 1rem, 120% | Size of text |
| `font-weight` | normal, bold, 400, 700 | Thickness of text |
| `text-align` | left, right, center, justify | Horizontal alignment |
| `text-decoration` | none, underline, line-through | Lines on text |

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

---

### Cascade and Specificity
When multiple CSS rules apply to the same element, the browser uses **specificity** to determine which wins.

**Specificity Hierarchy (highest to lowest):**
1. **Inline styles** - `style="color: red"` (1000 points)
2. **ID selectors** - `#myid` (100 points)
3. **Class/Attribute/Pseudo-class** - `.myclass`, `[type="text"]`, `:hover` (10 points each)
4. **Element selectors** - `p`, `div` (1 point each)

```css
/* Specificity: 1 (element) */
p {
  color: blue;
}

/* Specificity: 10 (class) - WINS! */
.highlight {
  color: red;
}

/* Specificity: 100 (ID) - WINS over class! */
#special {
  color: green;
}

/* Specificity: 11 (element + class) */
p.highlight {
  color: orange;
}
```

**Cascade Rule:** If specificity is equal, the **last declared** rule wins.

---

### CSS Fundamentals Flash Cards

1. **What's the difference between .class and #id?**
   - `.class` can be used on multiple elements. `#id` must be unique per page. IDs have higher specificity.

2. **What does box-sizing: border-box do?**
   - Width/height includes content + padding + border. Makes layout calculations easier!

3. **What's the specificity order?**
   - Inline styles > IDs > Classes/Attributes/Pseudo-classes > Elements

4. **Block vs Inline elements?**
   - Block: full width, new line. Inline: only needed width, stays in flow. Inline-block: best of both!

---

## Module 4: CSS Layout

### Flexbox
**Flexbox** is a one-dimensional layout method for arranging items in rows or columns.

| Property | Values | Description |
|----------|--------|-------------|
| `flex-direction` | row, row-reverse, column, column-reverse | Direction of flex items |
| `justify-content` | flex-start, flex-end, center, space-between, space-around, space-evenly | Alignment along main axis |
| `align-items` | stretch, flex-start, flex-end, center | Alignment along cross axis |

**Default:** `flex-direction: row` - items flow horizontally from left to right.

**Justify Content Values:**
- **flex-start** - Items packed to start
- **flex-end** - Items packed to end
- **center** - Items centered
- **space-between** - Even spacing, **edges touching**
- **space-around** - Even spacing including edges
- **space-evenly** - Equal spacing between all items

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
}
```

---

### Positioning
The `position` property defines how an element is positioned.

| Value | Description | Use Case |
|-------|-------------|----------|
| `static` | Default, normal document flow | Standard positioning |
| `relative` | Positioned relative to normal position | Small adjustments, positioning context |
| `absolute` | Positioned relative to nearest positioned ancestor | Overlays, dropdowns, tooltips |
| `fixed` | Positioned relative to browser window | Sticky headers, chat buttons |
| `sticky` | Scrolls until threshold, then sticks | Sticky nav bars, section headers |

```css
/* Relative positioning */
.relative-box {
  position: relative;
  top: 20px;
  left: 30px;
}

/* Absolute positioning */
.tooltip {
  position: absolute;
  top: 100%;
  left: 0;
}

/* Fixed positioning - relative to viewport */
.fixed-header {
  position: fixed;
  top: 0;
  width: 100%;
}

/* Sticky positioning */
.sticky-section {
  position: sticky;
  top: 0;
}
```

**Key Points:**
- **Fixed positioning:** Element is **removed from the document flow** and positioned relative to the **browser window**, not the containing element. Stays in place when scrolling.
- **Absolute vs Relative:** Relative offsets from original position. Absolute removes from flow and positions relative to nearest positioned ancestor.

---

### CSS Layout Flash Cards

1. **justify-content: space-between vs space-around?**
   - `space-between`: first/last items touch edges. `space-around`: equal space on all sides of each item.

2. **What does position: fixed do?**
   - Removes element from document flow, positions relative to browser window. Stays in place when scrolling.

3. **What's the flex-direction default?**
   - `row` - items flow horizontally from left to right.

4. **Absolute vs Relative positioning?**
   - Relative: offset from original position. Absolute: removed from flow, positioned relative to nearest positioned ancestor.

---

## Extraction Summary

### CSS Fundamentals Key Concepts:
- **Selectors**: element `p { }`, class `.myclass { }`, ID `#myid { }`, descendant `div p { }`, pseudo-class `:hover`
- **Colors**: Hex `#00EE00`, RGB `rgb(0, 238, 0)`, Named colors
- **Box Model**: Content → Padding → Border → Margin
- **Box Sizing**: `border-box` recommended (includes padding/border in width)
- **Display**: `block`, `inline`, `inline-block`, `none`
- **Specificity**: inline (1000) > ID (100) > class (10) > element (1)

### CSS Layout Key Concepts:
- **Flexbox**: `display: flex`, `flex-direction`, `justify-content`, `align-items`
- **Justify Values**: flex-start, flex-end, center, space-between, space-around
- **Positioning**: `static` (default), `relative`, `absolute`, `fixed`, `sticky`
- **Fixed**: Removed from flow, relative to viewport
- **Sticky**: Scrolls until threshold, then sticks
