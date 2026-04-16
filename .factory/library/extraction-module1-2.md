# ACS-2909 Content Extraction - Module 1 & 2

## Module 1: Internet Basics

### HTTP Protocol
- **HTTP (HyperText Transfer Protocol)** - Foundation of data communication on WWW
- **Request-Response Protocol**: Client (browser) sends request, Server returns response
- **Process**: Browser sends HTTP Request → Server processes → Returns HTTP Response → Browser renders

### Client-Server Model
| Client | Server |
|--------|--------|
| Requests resources (web pages, data) | Stores and serves resources |
| Web browsers (Chrome, Firefox, Safari) | Web servers (Apache, Nginx, IIS) |
| Runs on user's device | Runs on remote computers |
| Initiates communication | Waits for and responds to requests |

### DNS (Domain Name System)
- Translates human-readable domain names (google.com) to IP addresses (142.250.80.46)
- **DNS Lookup Process**:
  1. User types domain in browser
  2. Browser checks local DNS cache
  3. If not found, queries DNS resolver
  4. DNS resolver finds the IP address
  5. Browser connects to that IP address

### File Paths
| Path Type | Example | Description |
|-----------|---------|-------------|
| **Absolute** | `https://example.com/img.jpg` | Complete URL, works from anywhere |
| **Relative** | `images/img.jpg` or `../img.jpg` | Relative to current file location |
| **Root-Relative** | `/images/img.jpg` | Relative to website root (starts with /) |

**Path Quiz Key Points:**
- Absolute: Complete URL with protocol
- Relative: Goes up with `../`
- Root-Relative: Starts with `/`

---

## Module 2: HTML (HyperText Markup Language)

### Document Structure
```html
<!DOCTYPE html>  <!-- Declares HTML5 document type -->
<html lang="en">  <!-- Root element -->
  <head>  <!-- Metadata, links, title -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
  </head>
  <body>  <!-- Visible content -->
    <!-- All visible page content goes here -->
  </body>
</html>
```

| Element | Purpose |
|---------|---------|
| `<!DOCTYPE html>` | Declares the document as HTML5 |
| `<html>` | Root element of the page |
| `<head>` | Contains metadata, title, CSS links |
| `<body>` | Contains all visible content |

### Meta Tags
```html
<!-- Character encoding - CRITICAL for special characters -->
<meta charset="UTF-8">

<!-- Viewport - Essential for responsive design -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Page description for search engines -->
<meta name="description" content="A description of the page">
```
**Important:** Always include `charset="UTF-8"` and viewport meta tag.

### Semantic Elements
```html
<body>
  <header>
    <nav>...navigation links...</nav>
  </header>
  
  <main>
    <article>
      <section>...content section...</section>
      <section>...another section...</section>
    </article>
  </main>
  
  <footer>...copyright, links...</footer>
</body>
```

| Element | Purpose |
|---------|---------|
| `<header>` | Introductory content, nav |
| `<nav>` | Navigation links |
| `<main>` | Main content (unique per page) |
| `<article>` | Self-contained content |
| `<section>` | Thematic grouping |
| `<footer>` | Footer information |

### Text Elements
| Element | Usage |
|---------|-------|
| `<h1>` to `<h6>` | Headings (h1 = most important) |
| `<p>` | Paragraph |
| `<span>` | Inline container (no semantic meaning) |
| `<div>` | Block-level container |

**Best Practice:** Only one `<h1>` per page. Don't skip heading levels.

### Links (Anchor Tag)
```html
<!-- Basic link -->
<a href="https://example.com">Visit Example</a>

<!-- Open in new tab -->
<a href="https://example.com" target="_blank">Open in New Tab</a>

<!-- Different path types -->
<a href="about.html">Relative Path</a>
<a href="/about.html">Root-Relative Path</a>
<a href="https://site.com/about">Absolute Path</a>
```

| Attribute | Value | Description |
|-----------|-------|-------------|
| `href` | URL | Destination of the link |
| `target` | `_blank` | Opens link in new tab/window |

### Images
```html
<img src="photo.jpg" alt="Description of image">
```

| Attribute | Required? | Purpose |
|-----------|-----------|---------|
| `src` | Yes | Path to the image file |
| `alt` | Yes | Alternative text for accessibility |

**Image Formats:**
| Format | Best For | Transparency |
|--------|----------|--------------|
| PNG | Graphics, logos, screenshots | Yes |
| JPG/JPEG | Photographs | No |
| GIF | Simple animations | Yes (limited) |
| SVG | Icons, logos, scalable graphics | Yes |

### Lists

**Unordered List (`<ul>`):**
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

**Ordered List (`<ol>`):**
```html
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

**Important Rule:** Only `<li>` elements can be direct children of `<ul>` or `<ol>`.

### Flash Card Q&A
1. **What does `<!DOCTYPE html>` do?**
   - Declares the document type and version (HTML5). Must be the very first thing in HTML document.

2. **What's the difference between `<div>` and `<span>`?**
   - `<div>` is block-level (takes full width). `<span>` is inline (stays within text flow).

3. **Why is the alt attribute important?**
   - Describes the image for screen readers (accessibility) and displays when image fails to load.

4. **What is `target="_blank"`?**
   - An attribute that makes links open in a new browser tab or window.

---

## Extraction Summary

### Internet Basics Key Concepts:
- HTTP: Client-server request-response protocol
- DNS: Translates domains to IP addresses
- Three path types: Absolute, Relative, Root-Relative

### HTML Key Concepts:
- HTML5 document structure with DOCTYPE, html, head, body
- Meta tags: charset UTF-8 and viewport for responsive design
- Semantic elements: header, nav, main, article, section, footer
- Links: `<a href target="_blank">`
- Images: `<img src alt>`
- Lists: `<ul>`, `<ol>`, `<li>` - only `<li>` as direct children
