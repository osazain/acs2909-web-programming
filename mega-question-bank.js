/**
 * Web Programming Course - Mega Question Bank
 * =====================================================
 * Total Questions: 231
 * 
 * CATEGORY BREAKDOWN:
 * - Internet Basics: 25 questions
 * - HTML: 33 questions  
 * - CSS Fundamentals: 34 questions
 * - CSS Layout: 29 questions
 * - JavaScript Basics: 35 questions
 * - JavaScript Control Flow: 22 questions
 * - JavaScript Functions: 22 questions
 * - JavaScript Objects: 31 questions
 *
 * DIFFICULTY DISTRIBUTION:
 * - Easy: 90 questions (~39%)
 * - Medium: 89 questions (~38%)
 * - Hard: 52 questions (~23%)
 *
 * Each question object contains:
 * - id: unique number (1-231)
 * - category: topic category
 * - difficulty: 'easy' | 'medium' | 'hard'
 * - question: the question text
 * - code: code snippet (string or null)
 * - options: array of answer choices
 * - correctAnswer: index (0-based) of correct option
 * - explanation: detailed answer explanation
 * - reference: related topic/lecture reference
 */

// Usage:
// const { megaQuestionBank } = require('./mega-question-bank.js');
// OR in browser: <script src="mega-question-bank.js"></script>
// console.log(megaQuestionBank.length); // 231

const megaQuestionBank = [
  // ==========================================
  // INTERNET BASICS (25 questions)
  // ==========================================

  // Internet - Easy (8 questions)
  {
    id: 1,
    category: "internet",
    difficulty: "easy",
    question: "What does HTTP stand for?",
    code: null,
    options: [
      "HyperText Transfer Protocol",
      "HyperText Transmission Protocol",
      "HighText Transfer Protocol",
      "HyperTransfer Text Protocol"
    ],
    correctAnswer: 0,
    explanation: "HTTP stands for HyperText Transfer Protocol. It is the foundation of data communication on the World Wide Web, used for transmitting hypertext (web pages) between clients (browsers) and servers.",
    reference: "Internet Basics - HTTP Protocol"
  },
  {
    id: 2,
    category: "internet",
    difficulty: "easy",
    question: "In the client-server model, what is the role of the client?",
    code: null,
    options: [
      "To store and serve web pages",
      "To request and receive resources from the server",
      "To manage the database",
      "To host the website files"
    ],
    correctAnswer: 1,
    explanation: "In the client-server model, the client (typically a web browser) requests resources (like web pages, images) from the server. The server processes these requests and sends back the appropriate responses.",
    reference: "Internet Basics - Client-Server Model"
  },
  {
    id: 3,
    category: "internet",
    difficulty: "easy",
    question: "What is the purpose of a web browser?",
    code: null,
    options: [
      "To create websites",
      "To request, receive, and render web content",
      "To host websites on the internet",
      "To write HTML code"
    ],
    correctAnswer: 1,
    explanation: "A web browser is software that requests web resources from servers (using HTTP/HTTPS), receives the data, and renders it into a visual, interactive web page that users can view and interact with.",
    reference: "Internet Basics - How Browsers Work"
  },
  {
    id: 4,
    category: "internet",
    difficulty: "easy",
    question: "What does URL stand for?",
    code: null,
    options: [
      "Uniform Resource Locator",
      "Universal Resource Link",
      "Uniform Resource Link",
      "Universal Reference Locator"
    ],
    correctAnswer: 0,
    explanation: "URL stands for Uniform Resource Locator. It is the address used to access resources on the internet, such as 'https://www.example.com/page.html'.",
    reference: "Internet Basics - URLs and Domain Structure"
  },
  {
    id: 5,
    category: "internet",
    difficulty: "easy",
    question: "In the domain 'www.example.com', what is '.com' called?",
    code: null,
    options: [
      "The subdomain",
      "The top-level domain (TLD)",
      "The second-level domain",
      "The protocol"
    ],
    correctAnswer: 1,
    explanation: "'.com' is the top-level domain (TLD). In 'www.example.com', 'www' is a subdomain, 'example' is the second-level domain (SLD), and '.com' is the TLD.",
    reference: "Internet Basics - Domain Structure"
  },
  {
    id: 6,
    category: "internet",
    difficulty: "easy",
    question: "Which HTTP method is typically used to request data from a server?",
    code: null,
    options: [
      "POST",
      "GET",
      "DELETE",
      "PUT"
    ],
    correctAnswer: 1,
    explanation: "The GET method is used to request data from a server. When you type a URL in your browser or click a link, the browser sends a GET request to retrieve the specified resource.",
    reference: "Internet Basics - HTTP Protocol"
  },
  {
    id: 7,
    category: "internet",
    difficulty: "easy",
    question: "What is an absolute file path?",
    code: null,
    options: [
      "A path relative to the current file location",
      "A complete path from the root directory",
      "A path that uses only forward slashes",
      "A path without any file extension"
    ],
    correctAnswer: 1,
    explanation: "An absolute path specifies the complete path from the root directory to the file, such as '/home/user/documents/file.txt' on Linux/Mac or 'C:\\Users\\file.txt' on Windows.",
    reference: "Internet Basics - File Paths"
  },
  {
    id: 8,
    category: "internet",
    difficulty: "easy",
    question: "What protocol is used for secure communication on the web?",
    code: null,
    options: [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    correctAnswer: 2,
    explanation: "HTTPS (HTTP Secure) is the secure version of HTTP. It encrypts data transferred between the client and server using SSL/TLS, protecting sensitive information from interception.",
    reference: "Internet Basics - HTTP Protocol"
  },

  // Internet - Medium (10 questions)
  {
    id: 9,
    category: "internet",
    difficulty: "medium",
    question: "What is the difference between a relative and absolute path?",
    code: null,
    options: [
      "Relative paths are shorter than absolute paths",
      "Relative paths are relative to the current file location; absolute paths start from root",
      "Relative paths only work on local machines",
      "There is no difference"
    ],
    correctAnswer: 1,
    explanation: "Relative paths are relative to the current file's location (e.g., './images/photo.jpg' or '../styles.css'). Absolute paths start from the root directory (e.g., '/images/photo.jpg' or full URLs like 'https://example.com/image.jpg').",
    reference: "Internet Basics - File Paths"
  },
  {
    id: 10,
    category: "internet",
    difficulty: "medium",
    question: "What is a root-relative path?",
    code: null,
    options: [
      "A path that goes back to the root of the file system",
      "A path that starts from the website's root directory",
      "A path that uses root user permissions",
      "A path without any directory information"
    ],
    correctAnswer: 1,
    explanation: "A root-relative path starts with a forward slash (/) and is relative to the website's root directory. For example, '/images/logo.png' will look for the images folder at the website root, regardless of where the current file is located.",
    reference: "Internet Basics - File Paths"
  },
  {
    id: 11,
    category: "internet",
    difficulty: "medium",
    question: "In the URL 'https://www.university.edu:8080/courses/index.html#section1', what is '8080'?",
    code: null,
    options: [
      "The IP address",
      "The port number",
      "The file size",
      "The protocol version"
    ],
    correctAnswer: 1,
    explanation: "8080 is the port number. Ports allow multiple services to run on the same server. HTTP typically uses port 80, HTTPS uses 443, but servers can be configured to use other ports like 8080.",
    reference: "Internet Basics - Domain Structure"
  },
  {
    id: 12,
    category: "internet",
    difficulty: "medium",
    question: "What happens when you type a URL in the browser and press Enter?",
    code: null,
    options: [
      "The browser immediately displays the page from cache",
      "The browser sends an HTTP request to the server, which responds with the requested resource",
      "The browser creates a new website",
      "The browser searches for the file on the local computer only"
    ],
    correctAnswer: 1,
    explanation: "When you enter a URL, the browser: 1) Resolves the domain name to an IP address (DNS lookup), 2) Establishes a connection with the server, 3) Sends an HTTP request, 4) Receives the response, 5) Renders the content.",
    reference: "Internet Basics - How Browsers Work"
  },
  {
    id: 13,
    category: "internet",
    difficulty: "medium",
    question: "What does DNS stand for and what does it do?",
    code: null,
    options: [
      "Domain Name System - translates domain names to IP addresses",
      "Data Network Service - provides internet connectivity",
      "Domain Navigation Service - helps navigate websites",
      "Digital Name Server - stores website files"
    ],
    correctAnswer: 0,
    explanation: "DNS (Domain Name System) is like the phonebook of the internet. It translates human-readable domain names (like www.example.com) into IP addresses (like 192.168.1.1) that computers use to identify each other.",
    reference: "Internet Basics - How Browsers Work"
  },
  {
    id: 14,
    category: "internet",
    difficulty: "medium",
    question: "What is the correct order of domain hierarchy from right to left?",
    code: null,
    options: [
      "Subdomain → Second-level domain → Top-level domain",
      "Top-level domain → Second-level domain → Subdomain",
      "Second-level domain → Top-level domain → Subdomain",
      "Subdomain → Top-level domain → Second-level domain"
    ],
    correctAnswer: 1,
    explanation: "Domain hierarchy from right to left is: Top-level domain (.com, .org) → Second-level domain (example) → Subdomain (www, blog, shop). So 'www.example.com' goes from most general (right) to most specific (left).",
    reference: "Internet Basics - Domain Structure"
  },
  {
    id: 15,
    category: "internet",
    difficulty: "medium",
    question: "Which path would navigate from '/products/items/shirt.html' to '/products/styles.css'?",
    code: null,
    options: [
      "styles.css",
      "../styles.css",
      "../../styles.css",
      "./styles.css"
    ],
    correctAnswer: 1,
    explanation: "'../' goes up one directory level. From '/products/items/shirt.html', '../' goes to '/products/', so '../styles.css' correctly references '/products/styles.css'.",
    reference: "Internet Basics - File Paths"
  },
  {
    id: 16,
    category: "internet",
    difficulty: "medium",
    question: "What is the difference between HTTP and HTTPS?",
    code: null,
    options: [
      "HTTP is faster than HTTPS",
      "HTTPS encrypts data; HTTP does not",
      "HTTP is for websites; HTTPS is for email",
      "There is no difference"
    ],
    correctAnswer: 1,
    explanation: "HTTPS (HTTP Secure) encrypts all data transmitted between the browser and server using SSL/TLS encryption. HTTP sends data in plain text, making it vulnerable to interception. HTTPS is essential for protecting sensitive data like passwords and credit cards.",
    reference: "Internet Basics - HTTP Protocol"
  },
  {
    id: 17,
    category: "internet",
    difficulty: "medium",
    question: "What is a localhost?",
    code: null,
    options: [
      "A public web hosting service",
      "The local computer you're working on (IP: 127.0.0.1)",
      "A type of domain extension",
      "A remote server location"
    ],
    correctAnswer: 1,
    explanation: "Localhost refers to the local computer you're currently using. It has the IP address 127.0.0.1 (IPv4) or ::1 (IPv6). When developing websites, you often use localhost to test before deploying to a live server.",
    reference: "Internet Basics - Client-Server Model"
  },
  {
    id: 18,
    category: "internet",
    difficulty: "medium",
    question: "What is the purpose of the 'anchor' (#) in a URL like 'page.html#section'?",
    code: null,
    options: [
      "To link to a different website",
      "To navigate to a specific section within the page",
      "To specify the file format",
      "To add a password protection"
    ],
    correctAnswer: 1,
    explanation: "The hash/anchor (#) in a URL creates a link to a specific element with a matching id on the page. When clicked, the browser scrolls to that element. This is called a fragment identifier or anchor link.",
    reference: "Internet Basics - URLs and Domain Structure"
  },

  // Internet - Hard (7 questions)
  {
    id: 19,
    category: "internet",
    difficulty: "hard",
    question: "What is the difference between a GET and POST request?",
    code: null,
    options: [
      "GET retrieves data; POST submits data to be processed",
      "GET is faster; POST is more secure",
      "GET can only be used for HTML files; POST for images",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "GET requests are used to retrieve data from a server and should not have side effects. Parameters are sent in the URL. POST requests submit data to be processed (like form submissions), sending data in the request body. POST is more appropriate for sensitive data and large amounts of data.",
    reference: "Internet Basics - HTTP Protocol"
  },
  {
    id: 20,
    category: "internet",
    difficulty: "hard",
    question: "In a typical HTTP request/response cycle, what status code indicates a successful request?",
    code: null,
    options: [
      "404",
      "500",
      "200",
      "301"
    ],
    correctAnswer: 2,
    explanation: "HTTP status code 200 means 'OK' - the request was successful. 404 means 'Not Found', 500 means 'Internal Server Error', and 301 means 'Moved Permanently' (redirect).",
    reference: "Internet Basics - HTTP Protocol"
  },
  {
    id: 21,
    category: "internet",
    difficulty: "hard",
    question: "What is the difference between stateful and stateless protocols?",
    code: null,
    options: [
      "Stateful remembers previous interactions; stateless treats each request independently",
      "Stateful is faster; stateless is slower",
      "Stateful uses encryption; stateless does not",
      "They are the same thing"
    ],
    correctAnswer: 0,
    explanation: "HTTP is a stateless protocol - each request/response pair is independent and the server doesn't remember previous requests. Stateful protocols maintain information about previous interactions. Web applications use cookies/sessions to simulate statefulness over HTTP.",
    reference: "Internet Basics - HTTP Protocol"
  },
  {
    id: 22,
    category: "internet",
    difficulty: "hard",
    question: "What happens in the browser's rendering engine after receiving HTML?",
    code: null,
    options: [
      "It immediately displays the raw HTML",
      "It parses HTML to build DOM, CSS to build CSSOM, then creates Render Tree for layout and painting",
      "It compresses the HTML for faster display",
      "It sends the HTML to a separate rendering server"
    ],
    correctAnswer: 1,
    explanation: "The browser's rendering process: 1) Parse HTML to build the DOM (Document Object Model), 2) Parse CSS to build the CSSOM, 3) Combine DOM and CSSOM into Render Tree, 4) Layout (calculate positions), 5) Paint (draw pixels to screen).",
    reference: "Internet Basics - How Browsers Work"
  },
  {
    id: 23,
    category: "internet",
    difficulty: "hard",
    question: "What is the purpose of the viewport meta tag in responsive design?",
    code: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    options: [
      "To set the page background color",
      "To control how the page is displayed on mobile devices",
      "To improve SEO rankings",
      "To enable JavaScript execution"
    ],
    correctAnswer: 1,
    explanation: "The viewport meta tag tells mobile browsers how to control the page's dimensions and scaling. 'width=device-width' makes the page width match the device width, and 'initial-scale=1.0' sets the initial zoom level, enabling responsive design.",
    reference: "Internet Basics - How Browsers Work"
  },
  {
    id: 24,
    category: "internet",
    difficulty: "hard",
    question: "Which path correctly references an image from '/about/team.html' to '/assets/images/logo.png'?",
    code: null,
    options: [
      "assets/images/logo.png",
      "../assets/images/logo.png",
      "../../assets/images/logo.png",
      "/assets/images/logo.png"
    ],
    correctAnswer: 3,
    explanation: "'/assets/images/logo.png' is a root-relative path that starts from the website root, so it works from any location. From '/about/team.html', '../assets/images/logo.png' would look for '/about/assets/images/logo.png' which is incorrect.",
    reference: "Internet Basics - File Paths"
  },
  {
    id: 25,
    category: "internet",
    difficulty: "hard",
    question: "What is CORS and why is it important?",
    code: null,
    options: [
      "Cross-Origin Resource Sharing - a security mechanism to control cross-origin requests",
      "Central Origin Routing System - manages website traffic",
      "Content Origin Registration Service - tracks content ownership",
      "Cross-Origin Rendering Standard - defines how browsers render content"
    ],
    correctAnswer: 0,
    explanation: "CORS (Cross-Origin Resource Sharing) is a security mechanism implemented by browsers. It restricts web pages from making requests to a different domain than the one that served the web page, unless the server explicitly allows it through CORS headers. This prevents malicious websites from accessing sensitive data from other domains.",
    reference: "Internet Basics - HTTP Protocol"
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { megaQuestionBank };
}


// ==========================================
// HTML (35 questions)
// ==========================================

megaQuestionBank.push(
  // HTML - Easy (12 questions)
  {
    id: 26,
    category: "html",
    difficulty: "easy",
    question: "What is the correct HTML5 doctype declaration?",
    code: null,
    options: [
      "<!DOCTYPE HTML5>",
      "<!DOCTYPE html>",
      "<doctype html>",
      "<!doctype html5>"
    ],
    correctAnswer: 1,
    explanation: "The correct HTML5 doctype declaration is '<!DOCTYPE html>'. It is case-insensitive but conventionally written in uppercase. This declaration tells the browser to render the page in standards mode.",
    reference: "HTML - Document Structure"
  },
  {
    id: 27,
    category: "html",
    difficulty: "easy",
    question: "Which HTML tag defines the main content unique to a page?",
    code: null,
    options: [
      "<content>",
      "<main>",
      "<body>",
      "<article>"
    ],
    correctAnswer: 1,
    explanation: "The <main> tag specifies the main content of a document. The content inside <main> should be unique to the document and not repeated across pages (unlike navigation links or footers).",
    reference: "HTML - Semantic Elements"
  },
  {
    id: 28,
    category: "html",
    difficulty: "easy",
    question: "What does the 'alt' attribute in an <img> tag provide?",
    code: '<img src="photo.jpg" alt="A beautiful sunset">',
    options: [
      "An alternative image source if the main image fails",
      "Alternative text describing the image for accessibility",
      "The alignment of the image",
      "The altitude where the photo was taken"
    ],
    correctAnswer: 1,
    explanation: "The 'alt' attribute provides alternative text that describes the image. This text is displayed if the image cannot be loaded and is read by screen readers for visually impaired users, making it essential for accessibility.",
    reference: "HTML - Images"
  },
  {
    id: 29,
    category: "html",
    difficulty: "easy",
    question: "Which tag creates the largest heading?",
    code: null,
    options: [
      "<heading>",
      "<h6>",
      "<h1>",
      "<head>"
    ],
    correctAnswer: 2,
    explanation: "<h1> creates the largest (most important) heading. HTML has six heading levels, h1 through h6, with h1 being the largest and h6 being the smallest.",
    reference: "HTML - Text Elements"
  },
  {
    id: 30,
    category: "html",
    difficulty: "easy",
    question: "Which attribute links a CSS file to an HTML document?",
    code: '<link ___="styles.css">',
    options: [
      "src",
      "href",
      "link",
      "source"
    ],
    correctAnswer: 1,
    explanation: "The 'href' attribute specifies the URL/path of the linked resource. When using the <link> tag to connect CSS files, href points to the CSS file location.",
    reference: "HTML - Linking CSS"
  },
  {
    id: 31,
    category: "html",
    difficulty: "easy",
    question: "Which tag creates a line break without starting a new paragraph?",
    code: null,
    options: [
      "<lb>",
      "<break>",
      "<br>",
      "<newline>"
    ],
    correctAnswer: 2,
    explanation: "The <br> tag creates a line break. It's a void/empty element (no closing tag) used to break text to a new line without creating a new paragraph.",
    reference: "HTML - Text Elements"
  },
  {
    id: 32,
    category: "html",
    difficulty: "easy",
    question: "What is the purpose of the <head> element?",
    code: null,
    options: [
      "To display the main page header",
      "To contain metadata, title, and linked resources",
      "To create a heading at the top of the page",
      "To define the page footer"
    ],
    correctAnswer: 1,
    explanation: "The <head> element contains metadata about the document (character set, viewport settings), the <title> (shown in browser tab), and links to CSS files, JavaScript files, and other resources. Content in <head> is not displayed on the page.",
    reference: "HTML - Document Structure"
  },
  {
    id: 33,
    category: "html",
    difficulty: "easy",
    question: "Which tag is used for the main navigation links?",
    code: null,
    options: [
      "<nav>",
      "<navigation>",
      "<menu>",
      "<navbar>"
    ],
    correctAnswer: 0,
    explanation: "The <nav> element is specifically designed for major navigation blocks. It provides semantic meaning that helps screen readers and search engines understand the page structure.",
    reference: "HTML - Semantic Elements"
  },
  {
    id: 34,
    category: "html",
    difficulty: "easy",
    question: "Which tag creates an unordered (bulleted) list?",
    code: null,
    options: [
      "<ol>",
      "<ul>",
      "<li>",
      "<list>"
    ],
    correctAnswer: 1,
    explanation: "<ul> (unordered list) creates a bulleted list. <ol> (ordered list) creates a numbered list. <li> (list item) is used for individual items inside either list type.",
    reference: "HTML - Lists"
  },
  {
    id: 35,
    category: "html",
    difficulty: "easy",
    question: "What does the target='_blank' attribute do in an anchor tag?",
    code: '<a href="page.html" target="_blank">Link</a>',
    options: [
      "Opens the link in a new tab or window",
      "Opens the link in the same tab",
      "Opens the link in a popup",
      "Downloads the linked file"
    ],
    correctAnswer: 0,
    explanation: "target='_blank' tells the browser to open the link in a new tab or window. Other values include '_self' (default, same tab), '_parent', and '_top'.",
    reference: "HTML - Links"
  },
  {
    id: 36,
    category: "html",
    difficulty: "easy",
    question: "Which image format supports transparency?",
    code: null,
    options: [
      "JPG/JPEG",
      "PNG",
      "BMP",
      "All image formats"
    ],
    correctAnswer: 1,
    explanation: "PNG supports transparency with an alpha channel. JPG does not support transparency (transparent areas become white). GIF supports simple on/off transparency but not partial transparency.",
    reference: "HTML - Images"
  },
  {
    id: 37,
    category: "html",
    difficulty: "easy",
    question: "What is the difference between <div> and <span>?",
    code: null,
    options: [
      "<div> is for images, <span> is for text",
      "<div> is block-level, <span> is inline",
      "<div> is semantic, <span> is not",
      "There is no difference"
    ],
    correctAnswer: 1,
    explanation: "<div> is a block-level element that takes up the full width available and starts on a new line. <span> is an inline element that only takes up as much width as necessary and doesn't start on a new line.",
    reference: "HTML - Text Elements"
  },

  // HTML - Medium (15 questions)
  {
    id: 38,
    category: "html",
    difficulty: "medium",
    question: "What is the purpose of the viewport meta tag?",
    code: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    options: [
      "To set the page background color",
      "To control the page layout on mobile devices",
      "To define the page character encoding",
      "To link to external resources"
    ],
    correctAnswer: 1,
    explanation: "The viewport meta tag controls how the webpage is displayed on mobile devices. 'width=device-width' makes the page width match the device width, and 'initial-scale=1.0' sets the initial zoom level to 100%.",
    reference: "HTML - Meta Tags"
  },
  {
    id: 39,
    category: "html",
    difficulty: "medium",
    question: "What is wrong with this HTML structure?",
    code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>My Page</title>\n</head>\n<body>\n    <h1>Welcome</h1>\n    <p>This is a paragraph\n</body>\n</html>",
    options: [
      "Missing charset meta tag",
      "Missing closing </p> tag",
      "DOCTYPE should be lowercase",
      "Title should be inside body"
    ],
    correctAnswer: 1,
    explanation: "The paragraph tag <p> is not properly closed with </p>. While modern browsers often auto-correct this, it is invalid HTML and can cause rendering issues or unexpected behavior.",
    reference: "HTML - Document Structure"
  },
  {
    id: 40,
    category: "html",
    difficulty: "medium",
    question: "Which list type creates a numbered list?",
    code: null,
    options: [
      "<ul>",
      "<ol>",
      "<dl>",
      "<list>"
    ],
    correctAnswer: 1,
    explanation: "<ol> (ordered list) creates a numbered list. <ul> (unordered list) creates a bulleted list. <dl> (description list) is used for name-value pairs like glossaries.",
    reference: "HTML - Lists"
  },
  {
    id: 41,
    category: "html",
    difficulty: "medium",
    question: "What is the purpose of the charset meta tag?",
    code: '<meta charset="UTF-8">',
    options: [
      "To compress the HTML file",
      "To specify the character encoding for the document",
      "To enable CSS styling",
      "To define the page language"
    ],
    correctAnswer: 1,
    explanation: "The charset attribute specifies the character encoding for the HTML document. UTF-8 is the recommended encoding as it supports virtually all characters from all languages and should be placed in the first 1024 bytes of the document.",
    reference: "HTML - Meta Tags"
  },
  {
    id: 42,
    category: "html",
    difficulty: "medium",
    question: "What is the difference between <article> and <section>?",
    code: null,
    options: [
      "They are identical and interchangeable",
      "<article> is for standalone content; <section> is for thematic grouping",
      "<section> must be inside <article>",
      "<article> is only for news articles"
    ],
    correctAnswer: 1,
    explanation: "<article> represents a complete, self-contained piece of content that could stand alone (like a blog post). <section> represents a thematic grouping of content, typically with a heading. An article can contain sections, and sections can contain articles.",
    reference: "HTML - Semantic Elements"
  },
  {
    id: 43,
    category: "html",
    difficulty: "medium",
    question: "Which is the correct way to link to an email address?",
    code: null,
    options: [
      '<a link="mailto:test@example.com">',
      '<a href="email:test@example.com">',
      '<a href="mailto:test@example.com">',
      '<a email="test@example.com">'
    ],
    correctAnswer: 2,
    explanation: "The 'mailto:' protocol in the href attribute creates an email link. When clicked, it opens the user's default email client with a new message addressed to the specified email address.",
    reference: "HTML - Links"
  },
  {
    id: 44,
    category: "html",
    difficulty: "medium",
    question: "What is the correct way to comment in HTML?",
    code: null,
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "<!-- This is a comment -->",
      "# This is a comment"
    ],
    correctAnswer: 2,
    explanation: "HTML comments use the syntax <!-- comment text -->. They are not displayed in the browser and are used for documentation or temporarily disabling code. '//' is for JavaScript, '/* */' is for CSS/JavaScript, '#' is not a valid HTML comment.",
    reference: "HTML - Document Structure"
  },
  {
    id: 45,
    category: "html",
    difficulty: "medium",
    question: "What is the difference between src and href attributes?",
    code: null,
    options: [
      "They are interchangeable",
      "src replaces the element content; href creates a reference/link",
      "src is for images only; href is for links only",
      "href loads resources synchronously; src loads asynchronously"
    ],
    correctAnswer: 1,
    explanation: "The key difference is that src (source) embeds/replaces the element's content (like <img>, <script>), while href (hypertext reference) creates a link to an external resource (like <a>, <link>). With src, the browser pauses parsing to fetch the resource; with href, it doesn't.",
    reference: "HTML - Attributes"
  },
  {
    id: 46,
    category: "html",
    difficulty: "medium",
    question: "Which HTML element is best for a page footer?",
    code: null,
    options: [
      "<bottom>",
      "<footer>",
      "<end>",
      "<section class='footer'>"
    ],
    correctAnswer: 1,
    explanation: "The <footer> element represents a footer for its nearest sectioning content or sectioning root. It typically contains authorship information, copyright data, or related documents. While <section> with a class works, <footer> is the semantic choice.",
    reference: "HTML - Semantic Elements"
  },
  {
    id: 47,
    category: "html",
    difficulty: "medium",
    question: "What is SVG and when should it be used?",
    code: null,
    options: [
      "A raster image format for photos",
      "A vector image format for logos and icons",
      "A video format for web streaming",
      "A 3D graphics format"
    ],
    correctAnswer: 1,
    explanation: "SVG (Scalable Vector Graphics) is a vector image format. Unlike raster formats (JPG, PNG), SVG images can scale to any size without losing quality, making them ideal for logos, icons, and illustrations. They can also be styled with CSS and manipulated with JavaScript.",
    reference: "HTML - Images"
  },
  {
    id: 48,
    category: "html",
    difficulty: "medium",
    question: "What is the correct relative path from '/products/items/item.html' to '/images/photo.jpg'?",
    code: null,
    options: [
      "images/photo.jpg",
      "../images/photo.jpg",
      "../../images/photo.jpg",
      "./images/photo.jpg"
    ],
    correctAnswer: 2,
    explanation: "From '/products/items/item.html', you need to go up two levels: '../../' takes you to the root, then 'images/photo.jpg' finds the image. One '../' would only go to '/products/', which doesn't contain the images folder.",
    reference: "HTML - File Paths"
  },
  {
    id: 49,
    category: "html",
    difficulty: "medium",
    question: "What does the <figcaption> element do?",
    code: "<figure>\n    <img src=\"chart.png\" alt=\"Sales chart\">\n    <figcaption>Figure 1: Annual Sales Growth</figcaption>\n</figure>",
    options: [
      "Creates a figure/illustration",
      "Provides a caption for a <figure> element",
      "Aligns an image to the center",
      "Makes an image clickable"
    ],
    correctAnswer: 1,
    explanation: "<figcaption> provides a caption or legend for the content of its parent <figure> element. It can be placed as the first or last child of <figure>.",
    reference: "HTML - Semantic Elements"
  },
  {
    id: 50,
    category: "html",
    difficulty: "medium",
    question: "Which image format is best for photographs with many colors?",
    code: null,
    options: [
      "PNG",
      "SVG",
      "JPEG/JPG",
      "GIF"
    ],
    correctAnswer: 2,
    explanation: "JPEG/JPG is best for photographs because it uses lossy compression that works well with complex images containing many colors and gradients. PNG is better for images with sharp edges and transparency. SVG is for vector graphics. GIF is limited to 256 colors.",
    reference: "HTML - Images"
  },
  {
    id: 51,
    category: "html",
    difficulty: "medium",
    question: "What is the purpose of the lang attribute on the <html> tag?",
    code: '<html lang="en">',
    options: [
      "To specify the programming language used",
      "To indicate the language of the page content for accessibility and SEO",
      "To enable language translation",
      "To set the browser's default language"
    ],
    correctAnswer: 1,
    explanation: "The lang attribute specifies the primary language of the document's content. This helps screen readers pronounce content correctly, assists search engines, and can affect hyphenation and quotation mark rendering.",
    reference: "HTML - Document Structure"
  },

  // HTML - Hard (8 questions)
  {
    id: 52,
    category: "html",
    difficulty: "hard",
    question: "What happens when you nest an <a> tag inside another <a> tag?",
    code: '<a href="page1.html">\n    Outer Link\n    <a href="page2.html">Inner Link</a>\n</a>',
    options: [
      "Both links work normally",
      "It creates a dropdown menu",
      "It is invalid HTML - nested links are not allowed",
      "Only the inner link works"
    ],
    correctAnswer: 2,
    explanation: "Nested anchor tags are invalid HTML. The <a> element is categorized as transparent but cannot contain interactive content, including other <a> elements. Browsers will attempt to auto-correct this, often with unpredictable results.",
    reference: "HTML - Content Models"
  },
  {
    id: 53,
    category: "html",
    difficulty: "hard",
    question: "In HTML5, which elements can be direct children of <dl>?",
    code: null,
    options: [
      "Only <dt> and <dd>",
      "<dt>, <dd>, and <div> (when grouping name-value pairs)",
      "Any block-level element",
      "Only <li>"
    ],
    correctAnswer: 1,
    explanation: "In HTML5, <dl> can contain <dt> (description term), <dd> (description details), and <div> elements. The <div> can be used to group <dt> and <dd> elements together for styling purposes, introduced in the HTML5 spec update.",
    reference: "HTML - Lists"
  },
  {
    id: 54,
    category: "html",
    difficulty: "hard",
    question: "What is the difference between <em> and <i> tags?",
    code: null,
    options: [
      "They are identical",
      "<em> indicates emphasis (semantic); <i> is for stylistic italics only",
      "<i> is obsolete; <em> should always be used",
      "<em> is for bold; <i> is for italics"
    ],
    correctAnswer: 1,
    explanation: "<em> indicates emphasis and carries semantic meaning (screen readers may change tone). <i> is purely presentational for italic text without semantic emphasis. Similarly, <strong> vs <b> (strong importance vs bold styling).",
    reference: "HTML - Text Elements"
  },
  {
    id: 55,
    category: "html",
    difficulty: "hard",
    question: "What is the difference between <header> and <head>?",
    code: null,
    options: [
      "They are the same thing",
      "<head> contains metadata; <header> contains visible introductory content",
      "<header> must be inside <head>",
      "<head> is obsolete in HTML5"
    ],
    correctAnswer: 1,
    explanation: "<head> contains document metadata (title, links to CSS/JS, meta tags) and is not displayed. <header> is a semantic element for visible introductory content (logo, navigation, headings) that appears on the page. A page can have multiple <header> elements but only one <head>.",
    reference: "HTML - Document Structure"
  },
  {
    id: 56,
    category: "html",
    difficulty: "hard",
    question: "What is the purpose of the async and defer attributes on <script> tags?",
    code: '<script src="app.js" async></script>',
    options: [
      "They both do the same thing",
      "async loads and executes immediately when ready; defer waits until HTML is parsed",
      "async delays execution; defer loads immediately",
      "They are only for external scripts"
    ],
    correctAnswer: 1,
    explanation: "Without any attribute, scripts block HTML parsing. 'async' downloads the script in parallel and executes it as soon as it's available (may block parsing). 'defer' also downloads in parallel but executes only after HTML parsing is complete, in order. Both only work with external scripts (src attribute).",
    reference: "HTML - Script Loading"
  },
  {
    id: 57,
    category: "html",
    difficulty: "hard",
    question: "What is the correct order of HTML document structure elements?",
    code: null,
    options: [
      "<html> → <head> → <body> with doctype before <html>",
      "<doctype> → <head> → <body> → <html>",
      "<head> → <html> → <body>",
      "<body> → <head> → <html>"
    ],
    correctAnswer: 0,
    explanation: "The correct structure is: <!DOCTYPE html> declaration first, then <html> as the root element containing <head> (metadata, links) followed by <body> (visible content). The doctype is not an HTML element but a declaration.",
    reference: "HTML - Document Structure"
  },
  {
    id: 58,
    category: "html",
    difficulty: "hard",
    question: "What is the difference between id and class attributes?",
    code: null,
    options: [
      "They are the same thing",
      "id must be unique per page; class can be reused on multiple elements",
      "class must be unique; id can be reused",
      "id is for CSS only; class is for JavaScript only"
    ],
    correctAnswer: 1,
    explanation: "The id attribute must be unique within a page - only one element can have a specific id. The class attribute can be applied to multiple elements and an element can have multiple classes (space-separated). Both can be used for CSS and JavaScript targeting.",
    reference: "HTML - Attributes"
  }
);


// ==========================================
// CSS FUNDAMENTALS (40 questions)
// ==========================================

megaQuestionBank.push(
  // CSS Fundamentals - Easy (15 questions)
  {
    id: 59,
    category: "css-fundamentals",
    difficulty: "easy",
    question: "Which CSS selector targets an element by its class name?",
    code: null,
    options: [
      "#classname",
      ".classname",
      "classname",
      "*classname"
    ],
    correctAnswer: 1,
    explanation: "The dot (.) prefix selects elements by class name. The hash (#) selects by ID, and no prefix selects by element type. Class selectors can target multiple elements.",
    reference: "CSS - Selectors"
  },
  {
    id: 60,
    category: "css-fundamentals",
    difficulty: "easy",
    question: "What CSS property changes the text color?",
    code: null,
    options: [
      "text-color",
      "font-color",
      "color",
      "foreground"
    ],
    correctAnswer: 2,
    explanation: "The 'color' property sets the text color. There is no 'text-color' or 'font-color' property in CSS. The color can be specified using names, hex codes, RGB, RGBA, HSL, or HSLA values.",
    reference: "CSS - Colors"
  },
  {
    id: 61,
    category: "css-fundamentals",
    difficulty: "easy",
    question: "What is the default value of the position property?",
    code: null,
    options: [
      "relative",
      "absolute",
      "static",
      "fixed"
    ],
    correctAnswer: 2,
    explanation: "'static' is the default position value. Elements with static positioning follow the normal document flow and are not affected by top, right, bottom, or left properties.",
    reference: "CSS - Positioning"
  },
  {
    id: 62,
    category: "css-fundamentals",
    difficulty: "easy",
    question: "Which CSS property adds space inside an element's border?",
    code: null,
    options: [
      "margin",
      "padding",
      "spacing",
      "gap"
    ],
    correctAnswer: 1,
    explanation: "'padding' adds space inside the element's border (between content and border). 'margin' adds space outside the border. 'gap' is used in flexbox and grid layouts.",
    reference: "CSS - Box Model"
  },
  {
    id: 63,
    category: "css-fundamentals",
    difficulty: "easy",
    question: "What is the CSS Box Model order from inside to outside?",
    code: null,
    options: [
      "Margin → Border → Padding → Content",
      "Content → Padding → Border → Margin",
      "Padding → Content → Border → Margin",
      "Content → Border → Padding → Margin"
    ],
    correctAnswer: 1,
    explanation: "The box model from inside to outside is: Content (the actual content), Padding (space around content), Border (surrounds padding), Margin (space outside the border).",
    reference: "CSS - Box Model"
  },
  {
    id: 64,
    category: "css-fundamentals",
    difficulty: "easy",
    question: "Which display value makes an element inline but allows block-level properties?",
    code: null,
    options: [
      "inline",
      "block",
      "inline-block",
      "flex"
    ],
    correctAnswer: 2,
    explanation: "'inline-block' makes the element inline (flows with text) but allows block-level properties like width, height, margin-top, and margin-bottom to be applied.",
    reference: "CSS - Display Property"
  },
  {
    id: 65,
    category: "css-fundamentals",
    difficulty: "easy",
    question: "Which CSS property makes an element invisible and removes it from document flow?",
    code: null,
    options: [
      "visibility: hidden",
      "display: none",
      "opacity: 0",
      "visible: false"
    ],
    correctAnswer: 1,
    explanation: "'display: none' completely removes the element from the document flow - no space is reserved. 'visibility: hidden' hides the element but keeps its space. 'opacity: 0' makes it transparent but still interactive.",
    reference: "CSS - Display Property"
  },
  {
    id: 66,
    category: "css-fundamentals",
    difficulty: "easy",
    question: "What does the following CSS selector target?",
    code: "p.intro { color: red; }",
    options: [
      "All paragraphs with class 'intro'",
      "All elements with class 'intro' inside paragraphs",
      "All paragraphs inside elements with class 'intro'",
      "All paragraphs and all elements with class 'intro'"
    ],
    correctAnswer: 0,
    explanation: "'p.intro' is a compound selector that targets <p> elements that also have the class 'intro'. There must be no space between the element and class selector.",
    reference: "CSS - Selectors"
  },
  {
    id: 67,
    category: "css-fundamentals",
    difficulty: "easy",
    question: "Which pseudo-class selects an element when the mouse is over it?",
    code: null,
    options: [
      ":active",
      ":focus",
      ":hover",
      ":mouseover"
    ],
    correctAnswer: 2,
    explanation: ":hover applies styles when the user hovers over an element with a pointing device (mouse). :active applies when the element is being activated (clicked). :focus applies when the element has focus.",
    reference: "CSS - Pseudo-classes"
  },
  {
    id: 68,
    category: "css-fundamentals",
    difficulty: "easy",
    question: "What color does #FF0000 represent in hexadecimal?",
    code: null,
    options: [
      "Black",
      "White",
      "Red",
      "Blue"
    ],
    correctAnswer: 2,
    explanation: "In hexadecimal color notation #RRGGBB, FF represents maximum value (255), 00 represents minimum (0). #FF0000 has full red, no green, no blue = pure red.",
    reference: "CSS - Colors"
  },
  {
    id: 69,
    category: "css-fundamentals",
    difficulty: "easy",
    question: "Which CSS property adds space outside an element's border?",
    code: null,
    options: [
      "padding",
      "margin",
      "border-spacing",
      "outline"
    ],
    correctAnswer: 1,
    explanation: "'margin' adds space outside the element's border, creating separation between elements. 'padding' adds space inside the border. Margins can collapse (combine) between adjacent elements.",
    reference: "CSS - Box Model"
  },
  {
    id: 70,
    category: "css-fundamentals",
    difficulty: "easy",
    question: "What is the difference between a block and inline element?",
    code: null,
    options: [
      "Block elements are larger; inline elements are smaller",
      "Block elements start on a new line and take full width; inline elements flow within text",
      "Block elements can only contain text; inline elements can contain anything",
      "There is no difference"
    ],
    correctAnswer: 1,
    explanation: "Block elements (like <div>, <p>) start on a new line and take up the full width available. Inline elements (like <span>, <a>) flow within text and only take up as much width as needed.",
    reference: "CSS - Display Property"
  },
  {
    id: 71,
    category: "css-fundamentals",
    difficulty: "easy",
    question: "Which selector targets an element with id 'header'?",
    code: null,
    options: [
      ".header",
      "#header",
      "header",
      "*header"
    ],
    correctAnswer: 1,
    explanation: "The hash symbol (#) is used to select elements by their ID. IDs should be unique within a page. The dot (.) selects by class, and the element name selects by tag type.",
    reference: "CSS - Selectors"
  },
  {
    id: 72,
    category: "css-fundamentals",
    difficulty: "easy",
    question: "What does RGB stand for in CSS colors?",
    code: "rgb(255, 128, 0)",
    options: [
      "Red Green Blue",
      "Red Gray Black",
      "Royal Gold Bronze",
      "Rate Grade Brightness"
    ],
    correctAnswer: 0,
    explanation: "RGB stands for Red, Green, Blue - the three primary colors of light. Each value ranges from 0-255, representing the intensity of that color channel. Mixing these creates all other colors.",
    reference: "CSS - Colors"
  },
  {
    id: 73,
    category: "css-fundamentals",
    difficulty: "easy",
    question: "Which property sets the background color of an element?",
    code: null,
    options: [
      "color",
      "background-color",
      "bg-color",
      "fill"
    ],
    correctAnswer: 1,
    explanation: "'background-color' sets the background color of an element. 'color' sets the text color. The background-color fills the content area plus padding (but not margin).",
    reference: "CSS - Colors"
  },

  // CSS Fundamentals - Medium (17 questions)
  {
    id: 74,
    category: "css-fundamentals",
    difficulty: "medium",
    question: "What is the difference between margin and padding?",
    code: null,
    options: [
      "They are the same thing",
      "Margin is inside the border; padding is outside",
      "Padding is inside the border; margin is outside",
      "Margin affects width; padding affects height"
    ],
    correctAnswer: 2,
    explanation: "Padding is the space between the content and the border (inside). Margin is the space outside the border, separating the element from other elements. Padding is included in the element's background; margin is not.",
    reference: "CSS - Box Model"
  },
  {
    id: 75,
    category: "css-fundamentals",
    difficulty: "medium",
    question: "What does 'box-sizing: border-box' do?",
    code: "* { box-sizing: border-box; }",
    options: [
      "Makes the box a circle",
      "Includes padding and border in the element's total width/height",
      "Removes all padding and border",
      "Creates a border around the box model"
    ],
    correctAnswer: 1,
    explanation: "'border-box' changes the box model so that padding and border are included in the element's specified width and height. Without it (content-box), padding and border are added to the width, often causing unexpected sizing.",
    reference: "CSS - Box Model"
  },
  {
    id: 76,
    category: "css-fundamentals",
    difficulty: "medium",
    question: "What is the descendant selector in CSS?",
    code: null,
    options: [
      "div > p (selects direct children only)",
      "div p (selects all descendants)",
      "div + p (selects adjacent sibling)",
      "div ~ p (selects general siblings)"
    ],
    correctAnswer: 1,
    explanation: "'div p' with a space is the descendant selector - it selects all <p> elements that are inside a <div>, at any depth. 'div > p' is the child selector (direct children only).",
    reference: "CSS - Selectors"
  },
  {
    id: 77,
    category: "css-fundamentals",
    difficulty: "medium",
    question: "What is the specificity of the selector '#nav .menu li a'?",
    code: null,
    options: [
      "0,1,2,1 (one ID, two classes, one element)",
      "1,1,2,0 (one ID, one class, two elements)",
      "0,1,1,3 (one ID, one class, three elements)",
      "1,0,2,1 (one ID, zero classes, two elements, one pseudo)"
    ],
    correctAnswer: 1,
    explanation: "Specificity is calculated as (a, b, c) where: a = ID selectors, b = class selectors + pseudo-classes, c = type selectors + pseudo-elements. #nav = 1 ID, .menu = 1 class, li = 1 element, a = 1 element. Total: (1,1,2).",
    reference: "CSS - Specificity"
  },
  {
    id: 78,
    category: "css-fundamentals",
    difficulty: "medium",
    question: "Which selector has higher specificity?",
    code: "A) #header { color: blue; }\nB) .nav .menu a { color: red; }",
    options: [
      "Selector A (#header)",
      "Selector B (.nav .menu a)",
      "They have equal specificity",
      "Depends on the order in CSS"
    ],
    correctAnswer: 0,
    explanation: "Selector A has specificity (1,0,0) - one ID. Selector B has specificity (0,2,1) - two classes, one element. ID selectors have higher specificity than class selectors, regardless of how many classes are used.",
    reference: "CSS - Specificity"
  },
  {
    id: 79,
    category: "css-fundamentals",
    difficulty: "medium",
    question: "What happens when two CSS rules have equal specificity and conflict?",
    code: ".blue { color: blue; }\n.red { color: red; }",
    options: [
      "The first one wins",
      "The last one wins (cascade)",
      "Both apply (creates mixed color)",
      "The browser picks randomly"
    ],
    correctAnswer: 1,
    explanation: "When specificity is equal, the cascade rule applies - the last declaration in the source order wins. This is why CSS is called Cascading Style Sheets.",
    reference: "CSS - Cascade"
  },
  {
    id: 80,
    category: "css-fundamentals",
    difficulty: "medium",
    question: "What is the difference between :visited and :active pseudo-classes?",
    code: null,
    options: [
      ":visited applies to clicked links; :active to all active elements",
      ":visited applies to links in browser history; :active during click/mousedown",
      ":visited applies to currently viewing page; :active applies to focused elements",
      "They are the same thing"
    ],
    correctAnswer: 1,
    explanation: ":visited applies to links that are in the browser's history (have been visited). :active applies to elements during activation (between mousedown and mouseup). :active is not limited to links - it works on buttons and other elements too.",
    reference: "CSS - Pseudo-classes"
  },
  {
    id: 81,
    category: "css-fundamentals",
    difficulty: "medium",
    question: "What is the difference between em and rem units?",
    code: null,
    options: [
      "They are the same",
      "em is relative to parent; rem is relative to root (html) element",
      "em is for width; rem is for height",
      "rem is relative to body; em is relative to viewport"
    ],
    correctAnswer: 1,
    explanation: "'em' is relative to the font-size of the parent element. 'rem' (root em) is relative to the font-size of the root <html> element. rem provides more predictable sizing throughout the document.",
    reference: "CSS - Units"
  },
  {
    id: 82,
    category: "css-fundamentals",
    difficulty: "medium",
    question: "What color does this hex code represent: #00EE00?",
    code: null,
    options: [
      "Blue",
      "Red",
      "Green",
      "Yellow"
    ],
    correctAnswer: 2,
    explanation: "In hex color #RRGGBB: 00 = no red, EE = high green (238/255), 00 = no blue. This creates a bright green color.",
    reference: "CSS - Colors"
  },
  {
    id: 83,
    category: "css-fundamentals",
    difficulty: "medium",
    question: "What is the difference between outline and border?",
    code: null,
    options: [
      "They are the same thing",
      "Outline doesn't take up space and can overlap; border affects layout",
      "Outline is inside the element; border is outside",
      "Outline is only for focus states"
    ],
    correctAnswer: 1,
    explanation: "Outline is drawn outside the border and doesn't affect the element's size or layout (it can overlap other elements). Border is part of the box model and takes up space. Outlines are commonly used for focus indicators.",
    reference: "CSS - Box Model"
  },
  {
    id: 84,
    category: "css-fundamentals",
    difficulty: "medium",
    question: "Which CSS unit is relative to the viewport width?",
    code: null,
    options: [
      "em",
      "rem",
      "vw",
      "%"
    ],
    correctAnswer: 2,
    explanation: "'vw' (viewport width) is 1% of the viewport's width. 'vh' is viewport height. These are useful for responsive design. 'em' and 'rem' are font-relative units. '%' is relative to the parent element.",
    reference: "CSS - Units"
  },
  {
    id: 85,
    category: "css-fundamentals",
    difficulty: "medium",
    question: "What is the difference between :nth-child(2) and :nth-of-type(2)?",
    code: null,
    options: [
      "They are the same",
      ":nth-child counts all siblings; :nth-of-type counts only siblings of the same type",
      ":nth-of-type counts all siblings; :nth-child counts only same type",
      ":nth-child only works with numbers; :nth-of-type works with formulas"
    ],
    correctAnswer: 1,
    explanation: ":nth-child(2) selects an element that is the 2nd child of its parent (regardless of type). :nth-of-type(2) selects the 2nd element of its type among siblings. So 'p:nth-of-type(2)' finds the 2nd <p>, skipping other element types.",
    reference: "CSS - Pseudo-classes"
  },
  {
    id: 86,
    category: "css-fundamentals",
    difficulty: "medium",
    question: "What happens to margin between two adjacent block elements?",
    code: null,
    options: [
      "They add together",
      "They collapse (the larger margin wins)",
      "They multiply",
      "Nothing special happens"
    ],
    correctAnswer: 1,
    explanation: "Vertical margins between adjacent block elements collapse - the larger margin value is used, not the sum. Horizontal margins never collapse. This is called margin collapsing and is a fundamental CSS behavior.",
    reference: "CSS - Box Model"
  },

  // CSS Fundamentals - Hard (8 questions)
  {
    id: 87,
    category: "css-fundamentals",
    difficulty: "hard",
    question: "What is the difference between :is() and :where() pseudo-classes?",
    code: ":is(h1, h2, h3) { color: blue; }",
    options: [
      "They are identical",
      ":is() contributes to specificity; :where() has zero specificity",
      ":where() is faster; :is() is slower",
      ":is() only works with elements; :where() works with classes"
    ],
    correctAnswer: 1,
    explanation: "Both :is() and :where() accept a selector list and match if any selector matches. The key difference: :is() contributes the specificity of its most specific argument, while :where() always has zero specificity. Use :where() for reset styles that should be easy to override.",
    reference: "CSS - Pseudo-classes"
  },
  {
    id: 88,
    category: "css-fundamentals",
    difficulty: "hard",
    question: "How does CSS specificity handle inline styles vs IDs vs classes?",
    code: null,
    options: [
      "Inline (1000) > ID (100) > Class (10) > Element (1)",
      "They all have equal weight",
      "ID > Inline > Class > Element",
      "Class > ID > Inline > Element"
    ],
    correctAnswer: 0,
    explanation: "Specificity hierarchy (simplified): Inline styles have highest specificity, then IDs, then classes/attributes/pseudo-classes, then elements/pseudo-elements. The common teaching mnemonic is: Inline (1000) > ID (100) > Class (10) > Element (1), though these numbers are just for illustration.",
    reference: "CSS - Specificity"
  },
  {
    id: 89,
    category: "css-fundamentals",
    difficulty: "hard",
    question: "What is margin collapsing and when does it occur?",
    code: null,
    options: [
      "Margins never collapse in CSS",
      "Vertical margins of adjacent block elements collapse; the larger value is used",
      "Only horizontal margins collapse",
      "Margins only collapse with flexbox"
    ],
    correctAnswer: 1,
    explanation: "Margin collapsing occurs when vertical margins of block elements meet. Instead of adding, the larger margin value is used. This happens between: adjacent siblings, parent and first/last child (if no padding/border), and empty blocks. It doesn't occur with flex/grid items, positioned elements, or horizontal margins.",
    reference: "CSS - Box Model"
  },
  {
    id: 90,
    category: "css-fundamentals",
    difficulty: "hard",
    question: "What is the difference between currentColor and inherit?",
    code: null,
    options: [
      "They are the same",
      "currentColor uses the color property value; inherit uses the parent's computed value for that property",
      "inherit only works with color; currentColor works with any property",
      "currentColor is deprecated"
    ],
    correctAnswer: 1,
    explanation: "currentColor is a keyword that uses the value of the color property (useful for borders, backgrounds that should match text color). inherit uses the parent's computed value for that specific property. For color property specifically, both would have similar effects.",
    reference: "CSS - Colors"
  },
  {
    id: 91,
    category: "css-fundamentals",
    difficulty: "hard",
    question: "What is the 'C' in CSS and how does the cascade work?",
    code: null,
    options: [
      "Color - CSS manages colors",
      "Cascading - styles are applied in order of importance, specificity, and source order",
      "Class - CSS uses class-based styling",
      "Custom - CSS allows custom properties"
    ],
    correctAnswer: 1,
    explanation: "The 'C' in CSS stands for Cascading. The cascade determines which styles apply when multiple rules target the same element. It considers: 1) Importance (!important), 2) Specificity, 3) Source order. This is why the last declared style often wins when specificity is equal.",
    reference: "CSS - Cascade"
  },
  {
    id: 92,
    category: "css-fundamentals",
    difficulty: "hard",
    question: "What happens when you use !important in CSS?",
    code: "p { color: red !important; }",
    options: [
      "Nothing special happens",
      "The declaration overrides all others regardless of specificity",
      "It makes the animation run faster",
      "It prevents the style from being inherited"
    ],
    correctAnswer: 1,
    explanation: "!important overrides normal cascade rules and gives a declaration the highest priority, even beating inline styles. It should be used sparingly as it makes debugging harder. The only thing that can override !important is another !important with higher specificity.",
    reference: "CSS - Cascade"
  }
);


// ==========================================
// CSS LAYOUT (35 questions)
// ==========================================

megaQuestionBank.push(
  // CSS Layout - Easy (12 questions)
  {
    id: 93,
    category: "css-layout",
    difficulty: "easy",
    question: "What CSS display value enables Flexbox?",
    code: null,
    options: [
      "display: flex",
      "display: flexbox",
      "display: block-flex",
      "flex: enabled"
    ],
    correctAnswer: 0,
    explanation: "'display: flex' enables Flexbox layout on a container. Its direct children become flex items. Flexbox is designed for one-dimensional layout (either rows or columns).",
    reference: "CSS Layout - Flexbox"
  },
  {
    id: 94,
    category: "css-layout",
    difficulty: "easy",
    question: "What is the default flex-direction?",
    code: ".container { display: flex; }",
    options: [
      "column",
      "row",
      "row-reverse",
      "column-reverse"
    ],
    correctAnswer: 1,
    explanation: "The default flex-direction is 'row', which arranges flex items horizontally from left to right. 'column' stacks them vertically.",
    reference: "CSS Layout - Flexbox"
  },
  {
    id: 95,
    category: "css-layout",
    difficulty: "easy",
    question: "In Flexbox with row direction, what does justify-content control?",
    code: null,
    options: [
      "Vertical alignment",
      "Horizontal alignment along the main axis",
      "Item wrapping",
      "Item ordering"
    ],
    correctAnswer: 1,
    explanation: "justify-content aligns flex items along the main axis. For flex-direction: row (default), the main axis is horizontal, so justify-content controls horizontal alignment.",
    reference: "CSS Layout - Flexbox"
  },
  {
    id: 96,
    category: "css-layout",
    difficulty: "easy",
    question: "Which justify-content value evenly distributes items with equal space around them?",
    code: null,
    options: [
      "flex-start",
      "center",
      "space-between",
      "space-around"
    ],
    correctAnswer: 3,
    explanation: "space-around distributes items with equal space around each item (including at the edges, though half-size). space-between puts space between items but not at the edges. space-evenly puts equal space everywhere including edges.",
    reference: "CSS Layout - Flexbox"
  },
  {
    id: 97,
    category: "css-layout",
    difficulty: "easy",
    question: "What does align-items: center do in Flexbox?",
    code: null,
    options: [
      "Centers items horizontally",
      "Centers items vertically (along the cross axis)",
      "Centers the container on the page",
      "Centers text within items"
    ],
    correctAnswer: 1,
    explanation: "align-items centers items along the cross axis (perpendicular to the main axis). For row direction, this is vertical centering. For column direction, this is horizontal centering.",
    reference: "CSS Layout - Flexbox"
  },
  {
    id: 98,
    category: "css-layout",
    difficulty: "easy",
    question: "What does position: fixed do?",
    code: ".header { position: fixed; top: 0; }",
    options: [
      "Positions relative to its parent",
      "Positions relative to the viewport and stays on scroll",
      "Makes the element immovable by JavaScript",
      "Fixes the element size"
    ],
    correctAnswer: 1,
    explanation: "'fixed' positions the element relative to the viewport (browser window). It stays in the same position even when the page is scrolled. Common use cases: fixed headers, navigation bars, or back-to-top buttons.",
    reference: "CSS Layout - Positioning"
  },
  {
    id: 99,
    category: "css-layout",
    difficulty: "easy",
    question: "What is the difference between relative and absolute positioning?",
    code: null,
    options: [
      "Relative removes element from flow; absolute keeps it in flow",
      "Relative keeps element in flow; absolute removes it from flow",
      "Relative positions from viewport; absolute from parent",
      "There is no difference"
    ],
    correctAnswer: 1,
    explanation: "Relative positioning keeps the element in the document flow (space is reserved) and offsets it from its original position. Absolute positioning removes the element from flow (no space reserved) and positions it relative to the nearest positioned ancestor.",
    reference: "CSS Layout - Positioning"
  },
  {
    id: 100,
    category: "css-layout",
    difficulty: "easy",
    question: "Which justify-content value aligns items to the start of the container?",
    code: null,
    options: [
      "flex-start",
      "flex-end",
      "start",
      "beginning"
    ],
    correctAnswer: 0,
    explanation: "flex-start aligns items to the start of the flex container (left for row, top for column). flex-end aligns to the end. 'start' (without flex-) is a newer logical property that respects writing direction.",
    reference: "CSS Layout - Flexbox"
  },
  {
    id: 101,
    category: "css-layout",
    difficulty: "easy",
    question: "What does flex-direction: column do?",
    code: ".container { display: flex; flex-direction: column; }",
    options: [
      "Stacks flex items horizontally",
      "Stacks flex items vertically",
      "Creates columns like a newspaper layout",
      "Divides the container into equal columns"
    ],
    correctAnswer: 1,
    explanation: "'flex-direction: column' stacks flex items vertically (top to bottom). The default is 'row' (horizontal). This changes the main axis direction, affecting how justify-content and align-items work.",
    reference: "CSS Layout - Flexbox"
  },
  {
    id: 102,
    category: "css-layout",
    difficulty: "easy",
    question: "In Flexbox, what is the difference between align-items and justify-content?",
    code: null,
    options: [
      "They are the same",
      "align-items works on main axis; justify-content on cross axis",
      "justify-content works on main axis; align-items on cross axis",
      "align-items only works with column direction"
    ],
    correctAnswer: 2,
    explanation: "'justify-content' aligns items along the main axis (horizontal in row, vertical in column). 'align-items' aligns items along the cross axis (perpendicular to main axis).",
    reference: "CSS Layout - Flexbox"
  },
  {
    id: 103,
    category: "css-layout",
    difficulty: "easy",
    question: "What does position: sticky do?",
    code: ".nav { position: sticky; top: 0; }",
    options: [
      "Sticks the element to its parent permanently",
      "Acts like relative until scrolled past a threshold, then like fixed",
      "Makes the element unscrollable",
      "Sticks to the bottom of the page"
    ],
    correctAnswer: 1,
    explanation: "sticky positioning is a hybrid: the element is positioned relative until it crosses a specified threshold (like top: 0) during scrolling, at which point it 'sticks' in place like fixed positioning. Useful for sticky headers/sidebars.",
    reference: "CSS Layout - Positioning"
  },
  {
    id: 104,
    category: "css-layout",
    difficulty: "easy",
    question: "Which justify-content value puts space between items but not at the edges?",
    code: null,
    options: [
      "space-around",
      "space-between",
      "space-evenly",
      "stretch"
    ],
    correctAnswer: 1,
    explanation: "space-between distributes items evenly with the first item at the start and last at the end, with equal space between. space-around adds equal space around each item (including half-size at edges). space-evenly puts equal space everywhere.",
    reference: "CSS Layout - Flexbox"
  },

  // CSS Layout - Medium (15 questions)
  {
    id: 105,
    category: "css-layout",
    difficulty: "medium",
    question: "What does flex-wrap: wrap do?",
    code: ".container { display: flex; flex-wrap: wrap; }",
    options: [
      "Makes text wrap inside flex items",
      "Allows flex items to wrap to new lines when space is insufficient",
      "Wraps the entire container in a border",
      "Hides overflowing flex items"
    ],
    correctAnswer: 1,
    explanation: "'flex-wrap: wrap' allows flex items to wrap onto multiple lines when there isn't enough space in the container. The default is 'nowrap', which squeezes all items into one line.",
    reference: "CSS Layout - Flexbox"
  },
  {
    id: 106,
    category: "css-layout",
    difficulty: "medium",
    question: "What is a positioned element in CSS?",
    code: null,
    options: [
      "Any element with a position property",
      "An element with position other than static (relative, absolute, fixed, sticky)",
      "Only elements with position: absolute",
      "Elements at the top of the page"
    ],
    correctAnswer: 1,
    explanation: "A 'positioned element' is one with any position value except the default 'static'. This includes relative, absolute, fixed, and sticky. Positioned elements serve as reference points for absolutely positioned children and can use top/right/bottom/left properties.",
    reference: "CSS Layout - Positioning"
  },
  {
    id: 107,
    category: "css-layout",
    difficulty: "medium",
    question: "How do you perfectly center an element both horizontally and vertically with Flexbox?",
    code: null,
    options: [
      "justify-content: center only",
      "align-items: center only",
      "justify-content: center and align-items: center",
      "margin: auto only"
    ],
    correctAnswer: 2,
    explanation: "To center in both directions: 'justify-content: center' centers along the main axis (horizontal for row), and 'align-items: center' centers along the cross axis (vertical for row). For a single item, 'margin: auto' on the item also works.",
    reference: "CSS Layout - Flexbox"
  },
  {
    id: 108,
    category: "css-layout",
    difficulty: "medium",
    question: "What is the containing block for an absolutely positioned element?",
    code: null,
    options: [
      "Always the viewport",
      "The nearest positioned ancestor (not static) or the initial containing block",
      "Always the body element",
      "The parent element regardless of its position"
    ],
    correctAnswer: 1,
    explanation: "An absolutely positioned element is positioned relative to its nearest positioned ancestor (an ancestor with position other than static). If no positioned ancestor exists, it uses the initial containing block (usually the viewport).",
    reference: "CSS Layout - Positioning"
  },
  {
    id: 109,
    category: "css-layout",
    difficulty: "medium",
    question: "What is the z-index property used for?",
    code: ".overlay { z-index: 10; }",
    options: [
      "To zoom in on elements",
      "To control the stacking order of positioned elements",
      "To set the size of an element",
      "To create 3D effects"
    ],
    correctAnswer: 1,
    explanation: "z-index controls the stacking order of positioned elements (those with position other than static). Higher values appear in front of lower values. It only works on positioned elements and creates a new stacking context.",
    reference: "CSS Layout - Positioning"
  },
  {
    id: 110,
    category: "css-layout",
    difficulty: "medium",
    question: "What is the difference between space-between, space-around, and space-evenly?",
    code: null,
    options: [
      "They are all the same",
      "space-between: no edge space; space-around: half-size edge space; space-evenly: equal everywhere",
      "space-between: most space; space-around: medium; space-evenly: least",
      "They only work with different flex-direction values"
    ],
    correctAnswer: 1,
    explanation: "space-between: items evenly distributed, first at start, last at end (no space at edges). space-around: equal space around each item (half-size at edges). space-evenly: equal space everywhere including between items and at edges.",
    reference: "CSS Layout - Flexbox"
  },
  {
    id: 111,
    category: "css-layout",
    difficulty: "medium",
    question: "What does align-self do in Flexbox?",
    code: ".item { align-self: flex-end; }",
    options: [
      "Aligns all items in the container",
      "Overrides align-items for a specific flex item",
      "Changes the flex direction",
      "Centers the item vertically only"
    ],
    correctAnswer: 1,
    explanation: "align-self allows a single flex item to override the container's align-items value. It accepts the same values as align-items (flex-start, flex-end, center, stretch, baseline) and is useful for aligning individual items differently.",
    reference: "CSS Layout - Flexbox"
  },
  {
    id: 112,
    category: "css-layout",
    difficulty: "medium",
    question: "What is a stacking context in CSS?",
    code: null,
    options: [
      "The order in which CSS files are loaded",
      "A three-dimensional conceptualization of HTML elements along the z-axis",
      "The way browsers stack margin values",
      "The order of flex items"
    ],
    correctAnswer: 1,
    explanation: "A stacking context is how browsers manage which elements appear in front of others along the z-axis. A new stacking context is created by: positioned elements with z-index (not auto), opacity < 1, transform, filter, flex/grid children with z-index, and other properties. Elements within the same context are stacked by z-index; children cannot escape their parent's context.",
    reference: "CSS Layout - Positioning"
  },
  {
    id: 113,
    category: "css-layout",
    difficulty: "medium",
    question: "What happens when you use position: fixed?",
    code: null,
    options: [
      "The element is positioned relative to its parent",
      "The element is removed from document flow and positioned relative to the viewport",
      "The element becomes invisible",
      "The element scrolls with the content"
    ],
    correctAnswer: 1,
    explanation: "position: fixed removes the element from the normal document flow (no space is reserved for it) and positions it relative to the viewport. It stays fixed in place even when the page is scrolled. The element's position is determined by top, right, bottom, and left properties.",
    reference: "CSS Layout - Positioning"
  },
  {
    id: 114,
    category: "css-layout",
    difficulty: "medium",
    question: "What is the order property in Flexbox?",
    code: ".item { order: -1; }",
    options: [
      "Controls the z-index of flex items",
      "Controls the visual order of flex items without changing HTML",
      "Determines which items wrap first",
      "Sets the direction of the flex container"
    ],
    correctAnswer: 1,
    explanation: "The order property controls the visual order of flex items. Default is 0. Items with lower values appear first. Negative values are allowed. This only affects visual order, not tab order or screen reader order (accessibility concern).",
    reference: "CSS Layout - Flexbox"
  },
  {
    id: 115,
    category: "css-layout",
    difficulty: "medium",
    question: "What is the difference between flex-start and start in justify-content?",
    code: null,
    options: [
      "They are identical",
      "flex-start respects flex-direction; start respects writing direction (logical property)",
      "start only works in Grid; flex-start only in Flexbox",
      "flex-start is deprecated; start is the new standard"
    ],
    correctAnswer: 1,
    explanation: "flex-start aligns to the start of the flex container based on flex-direction. 'start' (without flex-) is a logical property that respects the writing direction (left-to-right or right-to-left). In LTR contexts they behave the same, but 'start' adapts to RTL languages automatically.",
    reference: "CSS Layout - Flexbox"
  },
  {
    id: 116,
    category: "css-layout",
    difficulty: "medium",
    question: "What is the flex shorthand property?",
    code: ".item { flex: 1; }",
    options: [
      "Only sets flex-grow",
      "Sets flex-grow, flex-shrink, and flex-basis",
      "Only enables flexbox on the element",
      "Sets the flex direction"
    ],
    correctAnswer: 1,
    explanation: "The flex shorthand sets three properties: flex-grow (how much item grows relative to others), flex-shrink (how much it shrinks), and flex-basis (initial size). 'flex: 1' is shorthand for 'flex: 1 1 0%' (can grow, can shrink, basis of 0).",
    reference: "CSS Layout - Flexbox"
  },

  // CSS Layout - Hard (8 questions)
  {
    id: 117,
    category: "css-layout",
    difficulty: "hard",
    question: "What is the difference between align-content and align-items in Flexbox?",
    code: null,
    options: [
      "They are the same",
      "align-content works on multi-line flex containers; align-items works on single lines",
      "align-items only works with wrap; align-content works always",
      "align-content is for Grid only"
    ],
    correctAnswer: 1,
    explanation: "align-items aligns items within a single line along the cross axis. align-content only has effect when flex-wrap is enabled (multiple lines) - it aligns the lines themselves along the cross axis. align-content is like justify-content but for the cross axis when there are multiple lines.",
    reference: "CSS Layout - Flexbox"
  },
  {
    id: 118,
    category: "css-layout",
    difficulty: "hard",
    question: "What happens when a fixed positioned element has a parent with transform, perspective, or filter?",
    code: null,
    options: [
      "Nothing changes",
      "The fixed element becomes positioned relative to that parent instead of the viewport",
      "The fixed positioning is disabled",
      "The element disappears"
    ],
    correctAnswer: 1,
    explanation: "Normally fixed elements are positioned relative to the viewport. However, if any ancestor has a transform, perspective, or filter property (not 'none'), the fixed element becomes positioned relative to that ancestor instead. This is often unexpected behavior.",
    reference: "CSS Layout - Positioning"
  },
  {
    id: 119,
    category: "css-layout",
    difficulty: "hard",
    question: "What is the difference between flex-basis and width in Flexbox?",
    code: ".item { flex-basis: 200px; }",
    options: [
      "They are identical",
      "flex-basis sets the ideal size before growing/shrinking; width sets an absolute size",
      "flex-basis only works horizontally; width works both ways",
      "width is ignored when flex-basis is set"
    ],
    correctAnswer: 1,
    explanation: "flex-basis defines the initial size of a flex item before any growing or shrinking happens. It can be overridden by flex-grow and flex-shrink. width (or height in column direction) sets a fixed size that flex-basis might override depending on the flex factor values.",
    reference: "CSS Layout - Flexbox"
  },
  {
    id: 120,
    category: "css-layout",
    difficulty: "hard",
    question: "How does position: sticky work with overflow containers?",
    code: null,
    options: [
      "Sticky always works regardless of overflow",
      "Sticky doesn't work if any ancestor has overflow hidden, scroll, or auto",
      "Sticky only works with overflow: visible",
      "Sticky requires overflow: scroll on the sticky element"
    ],
    correctAnswer: 1,
    explanation: "position: sticky won't work if any ancestor has overflow set to hidden, scroll, or auto. This is because sticky positioning is relative to the nearest scrolling ancestor. The overflow property creates a new block formatting context that sticky respects.",
    reference: "CSS Layout - Positioning"
  },
  {
    id: 121,
    category: "css-layout",
    difficulty: "hard",
    question: "What is the gap property in Flexbox?",
    code: ".container { display: flex; gap: 20px; }",
    options: [
      "It adds margin to flex items",
      "It creates gutters between flex items without affecting outer edges",
      "It sets the space between lines of text",
      "It is not supported in Flexbox"
    ],
    correctAnswer: 1,
    explanation: "The gap property (formerly grid-gap) creates space between flex items without adding space on the outer edges of the container. Unlike margins, you don't need to remove margin from first/last items. It works in both Grid and Flexbox (modern browsers).",
    reference: "CSS Layout - Flexbox"
  }
);


// ==========================================
// JAVASCRIPT BASICS (45 questions)
// ==========================================

megaQuestionBank.push(
  // JS Basics - Easy (15 questions)
  {
    id: 122,
    category: "js-basics",
    difficulty: "easy",
    question: "Which keyword declares a variable that cannot be reassigned?",
    code: null,
    options: [
      "var",
      "let",
      "const",
      "static"
    ],
    correctAnswer: 2,
    explanation: "const declares a variable that cannot be reassigned. However, if the value is an object or array, its contents can still be modified. let allows reassignment. var is the older, function-scoped declaration.",
    reference: "JavaScript - Variables"
  },
  {
    id: 123,
    category: "js-basics",
    difficulty: "easy",
    question: "What is the result of typeof 'Hello'?",
    code: null,
    options: [
      "'string'",
      "'text'",
      "'String'",
      "'object'"
    ],
    correctAnswer: 0,
    explanation: "typeof 'Hello' returns 'string'. JavaScript typeof operator returns a string indicating the type of the operand. For strings, it returns lowercase 'string'.",
    reference: "JavaScript - Data Types"
  },
  {
    id: 124,
    category: "js-basics",
    difficulty: "easy",
    question: "What does prompt() return when the user clicks Cancel?",
    code: "let name = prompt('Enter your name:');",
    options: [
      "An empty string ''",
      "null",
      "undefined",
      "false"
    ],
    correctAnswer: 1,
    explanation: "prompt() always returns a string when the user clicks OK (or empty string if nothing entered). When the user clicks Cancel, it returns null. This is important to check when using prompt values.",
    reference: "JavaScript - User Input"
  },
  {
    id: 125,
    category: "js-basics",
    difficulty: "easy",
    question: "Which of the following is a valid JavaScript variable name?",
    code: null,
    options: [
      "2ndPlace",
      "first-name",
      "_privateVar",
      "my variable"
    ],
    correctAnswer: 2,
    explanation: "Valid variable names must start with a letter, underscore (_), or dollar sign ($). They cannot start with a number and cannot contain spaces or hyphens (which would be interpreted as subtraction). _privateVar is valid.",
    reference: "JavaScript - Variables"
  },
  {
    id: 126,
    category: "js-basics",
    difficulty: "easy",
    question: "What data type is true?",
    code: null,
    options: [
      "string",
      "number",
      "boolean",
      "object"
    ],
    correctAnswer: 2,
    explanation: "true (and false) are boolean values. Booleans represent logical entities and are typically used for conditional testing. typeof true returns 'boolean'.",
    reference: "JavaScript - Data Types"
  },
  {
    id: 127,
    category: "js-basics",
    difficulty: "easy",
    question: "What is the result of 5 + '5'?",
    code: null,
    options: [
      "10",
      "'55'",
      "25",
      "NaN"
    ],
    correctAnswer: 1,
    explanation: "When adding a number and string, JavaScript converts the number to a string and concatenates: 5 + '5' becomes '55'. This is called type coercion.",
    reference: "JavaScript - Type Coercion"
  },
  {
    id: 128,
    category: "js-basics",
    difficulty: "easy",
    question: "What is the scope of a variable declared with var inside a function?",
    code: null,
    options: [
      "Block scope (only within curly braces)",
      "Function scope (entire function)",
      "Global scope (entire program)",
      "Module scope"
    ],
    correctAnswer: 1,
    explanation: "var is function-scoped - the variable is accessible throughout the entire function where it's declared, even before the declaration (hoisting). This is different from let and const which are block-scoped.",
    reference: "JavaScript - Variable Scope"
  },
  {
    id: 129,
    category: "js-basics",
    difficulty: "easy",
    question: "What does the typeof operator return for null?",
    code: "typeof null",
    options: [
      "'null'",
      "'undefined'",
      "'object'",
      "'number'"
    ],
    correctAnswer: 2,
    explanation: "typeof null returns 'object'. This is a historical bug in JavaScript that cannot be fixed due to backward compatibility. null is actually a primitive value, not an object.",
    reference: "JavaScript - Data Types"
  },
  {
    id: 130,
    category: "js-basics",
    difficulty: "easy",
    question: "What is the result of 10 % 3?",
    code: null,
    options: [
      "3.33",
      "1",
      "3",
      "0"
    ],
    correctAnswer: 1,
    explanation: "The % (modulo) operator returns the remainder of division. 10 divided by 3 is 3 with a remainder of 1, so 10 % 3 equals 1.",
    reference: "JavaScript - Operators"
  },
  {
    id: 131,
    category: "js-basics",
    difficulty: "easy",
    question: "Which operator has higher precedence: * or +?",
    code: null,
    options: [
      "+ has higher precedence",
      "* has higher precedence",
      "They have equal precedence",
      "It depends on the values"
    ],
    correctAnswer: 1,
    explanation: "Multiplication (*) has higher precedence than addition (+). So 2 + 3 * 4 equals 14 (not 20) because multiplication is performed first. Use parentheses to override precedence.",
    reference: "JavaScript - Operator Precedence"
  },
  {
    id: 132,
    category: "js-basics",
    difficulty: "easy",
    question: "What is the value of an uninitialized variable?",
    code: "let x;\nconsole.log(x);",
    options: [
      "null",
      "0",
      "undefined",
      "''"
    ],
    correctAnswer: 2,
    explanation: "Uninitialized variables have the value undefined. This is different from null (which must be explicitly assigned) or empty string/0 which are specific values.",
    reference: "JavaScript - Data Types"
  },
  {
    id: 133,
    category: "js-basics",
    difficulty: "easy",
    question: "What is NaN?",
    code: null,
    options: [
      "Not a Name",
      "Not a Number",
      "New and Null",
      "Number as Null"
    ],
    correctAnswer: 1,
    explanation: "NaN stands for 'Not a Number'. It is a special numeric value returned when a mathematical operation fails to produce a valid number (like parseInt('hello') or 0/0). typeof NaN is 'number' (yes, really).",
    reference: "JavaScript - Data Types"
  },
  {
    id: 134,
    category: "js-basics",
    difficulty: "easy",
    question: "Which is NOT a valid way to declare a JavaScript variable?",
    code: null,
    options: [
      "let x = 5;",
      "const y = 10;",
      "var z = 15;",
      "variable w = 20;"
    ],
    correctAnswer: 3,
    explanation: "variable is not a valid keyword in JavaScript. Valid declaration keywords are var (older, function-scoped), let (block-scoped, reassignable), and const (block-scoped, not reassignable).",
    reference: "JavaScript - Variables"
  },
  {
    id: 135,
    category: "js-basics",
    difficulty: "easy",
    question: "What does Number('42') return?",
    code: null,
    options: [
      "'42' (string)",
      "42 (number)",
      "NaN",
      "undefined"
    ],
    correctAnswer: 1,
    explanation: "Number() is a type conversion function. Number('42') converts the string '42' to the number 42. If the string cannot be converted to a valid number, it returns NaN.",
    reference: "JavaScript - Type Conversion"
  },

  // JS Basics - Medium (18 questions)
  {
    id: 136,
    category: "js-basics",
    difficulty: "medium",
    question: "Which of the following is an INVALID JavaScript identifier?",
    code: null,
    options: [
      "myVariable",
      "_private",
      "$price",
      "tar-get"
    ],
    correctAnswer: 3,
    explanation: "'tar-get' is invalid because hyphens are not allowed in identifiers (they would be interpreted as the subtraction operator). Valid identifiers can contain letters, numbers, underscores, and dollar signs, but cannot start with a number.",
    reference: "JavaScript - Variables"
  },
  {
    id: 137,
    category: "js-basics",
    difficulty: "medium",
    question: "What is the result of '4' + 8 / 2?",
    code: null,
    options: [
      "'44'",
      "'48'",
      "8",
      "24"
    ],
    correctAnswer: 0,
    explanation: "Division has higher precedence than addition. First: 8 / 2 = 4. Then: '4' + 4 = '44' (string concatenation because one operand is a string).",
    reference: "JavaScript - Operator Precedence"
  },
  {
    id: 138,
    category: "js-basics",
    difficulty: "medium",
    question: "What is the difference between undefined and null?",
    code: null,
    options: [
      "They are identical",
      "undefined means declared but not assigned; null is an explicit empty value",
      "null means not declared; undefined means empty",
      "undefined is an object; null is a primitive"
    ],
    correctAnswer: 1,
    explanation: "undefined means a variable has been declared but not assigned a value. null is an explicit assignment representing 'no value' or 'empty'. typeof undefined is 'undefined'; typeof null is 'object' (a bug).",
    reference: "JavaScript - Data Types"
  },
  {
    id: 139,
    category: "js-basics",
    difficulty: "medium",
    question: "What is the result of typeof []?",
    code: null,
    options: [
      "'array'",
      "'object'",
      "'list'",
      "'undefined'"
    ],
    correctAnswer: 1,
    explanation: "typeof [] returns 'object'. In JavaScript, arrays are technically objects. To specifically check for arrays, use Array.isArray([]) which returns true.",
    reference: "JavaScript - Data Types"
  },
  {
    id: 140,
    category: "js-basics",
    difficulty: "medium",
    question: "What is the difference between var, let, and const?",
    code: null,
    options: [
      "They are all the same",
      "var is function-scoped and hoisted; let/const are block-scoped; const cannot be reassigned",
      "var is for numbers; let for strings; const for objects",
      "let and const are deprecated"
    ],
    correctAnswer: 1,
    explanation: "var: function-scoped, hoisted (declaration moved to top), can be redeclared. let: block-scoped, not hoisted, can be reassigned. const: block-scoped, not hoisted, cannot be reassigned (though object contents can change).",
    reference: "JavaScript - Variables"
  },
  {
    id: 141,
    category: "js-basics",
    difficulty: "medium",
    question: "What is variable hoisting?",
    code: "console.log(x);\nvar x = 5;",
    options: [
      "Variables are automatically initialized to 0",
      "Variable declarations are moved to the top of their scope",
      "Variables are deleted after use",
      "Variables are automatically converted to strings"
    ],
    correctAnswer: 1,
    explanation: "Hoisting moves variable declarations (not initializations) to the top of their scope during compilation. With var, you can use a variable before its declaration (value will be undefined). let and const are hoisted but in a 'temporal dead zone' - accessing them before declaration causes an error.",
    reference: "JavaScript - Variables"
  },
  {
    id: 142,
    category: "js-basics",
    difficulty: "medium",
    question: "What is the result of 0.1 + 0.2 === 0.3?",
    code: null,
    options: [
      "true",
      "false",
      "undefined",
      "NaN"
    ],
    correctAnswer: 1,
    explanation: "This returns false due to floating-point precision issues. 0.1 + 0.2 actually equals 0.30000000000000004 in JavaScript. This is common in many programming languages using IEEE 754 floating-point representation.",
    reference: "JavaScript - Numbers"
  },
  {
    id: 143,
    category: "js-basics",
    difficulty: "medium",
    question: "What is the difference between Number() and parseInt()?",
    code: null,
    options: [
      "They are the same",
      "Number converts the entire string; parseInt parses until non-numeric character",
      "parseInt only works with integers; Number only with floats",
      "Number is faster than parseInt"
    ],
    correctAnswer: 1,
    explanation: "Number('123abc') returns NaN (entire string must be valid). parseInt('123abc') returns 123 (parses until non-numeric). parseInt also accepts a radix parameter for different number bases (e.g., parseInt('FF', 16) = 255).",
    reference: "JavaScript - Type Conversion"
  },
  {
    id: 144,
    category: "js-basics",
    difficulty: "medium",
    question: "What is the result of Boolean('false')?",
    code: null,
    options: [
      "false",
      "true",
      "undefined",
      "NaN"
    ],
    correctAnswer: 1,
    explanation: "Boolean('false') returns true! Any non-empty string (including 'false', '0', or ' ') is truthy in JavaScript. Only empty string '' is falsy among strings.",
    reference: "JavaScript - Type Conversion"
  },
  {
    id: 145,
    category: "js-basics",
    difficulty: "medium",
    question: "What are falsy values in JavaScript?",
    code: null,
    options: [
      "false, 0, '', null, undefined, NaN",
      "Only false and null",
      "All values are falsy by default",
      "Values that cause errors"
    ],
    correctAnswer: 0,
    explanation: "JavaScript has 6 falsy values: false, 0, '' (empty string), null, undefined, NaN. All other values are truthy, including '0', 'false', [], {}, and -1.",
    reference: "JavaScript - Type Coercion"
  },
  {
    id: 146,
    category: "js-basics",
    difficulty: "medium",
    question: "What is the difference between prefix and postfix increment?",
    code: "let a = 5;\nlet b = ++a;  // prefix\nlet c = a++;  // postfix",
    options: [
      "They are the same",
      "++a returns the new value; a++ returns the old value",
      "a++ is faster than ++a",
      "++a only works with const"
    ],
    correctAnswer: 1,
    explanation: "++a (prefix) increments first, then returns the new value. a++ (postfix) returns the current value, then increments. In the example: b = 6 (new value), c = 6 (old value, then a becomes 7).",
    reference: "JavaScript - Operators"
  },
  {
    id: 147,
    category: "js-basics",
    difficulty: "medium",
    question: "What is the difference between == and ===?",
    code: null,
    options: [
      "They are identical",
      "== compares values with type coercion; === compares values and types strictly",
      "=== is faster; == is slower",
      "== is deprecated"
    ],
    correctAnswer: 1,
    explanation: "== (loose equality) performs type coercion before comparison (5 == '5' is true). === (strict equality) requires both value AND type to match (5 === '5' is false). Best practice is to use === to avoid unexpected coercion.",
    reference: "JavaScript - Comparison Operators"
  },
  {
    id: 148,
    category: "js-basics",
    difficulty: "medium",
    question: "What is the result of '5' - 3?",
    code: null,
    options: [
      "'53'",
      "2",
      "8",
      "NaN"
    ],
    correctAnswer: 1,
    explanation: "The - operator always performs numeric subtraction. The string '5' is converted to the number 5, then 5 - 3 = 2. This is different from + which would concatenate to '53'.",
    reference: "JavaScript - Type Coercion"
  },
  {
    id: 149,
    category: "js-basics",
    difficulty: "medium",
    question: "What is the temporal dead zone in JavaScript?",
    code: "console.log(x);\nlet x = 5;",
    options: [
      "A time when the browser is unresponsive",
      "The period between entering a block and declaring a let/const variable",
      "A delay in function execution",
      "The time before page load completes"
    ],
    correctAnswer: 1,
    explanation: "The temporal dead zone (TDZ) is the period from when a block starts until a let/const variable is declared. Accessing the variable in the TDZ throws a ReferenceError. This is different from var which returns undefined.",
    reference: "JavaScript - Variables"
  },

  // JS Basics - Hard (12 questions)
  {
    id: 150,
    category: "js-basics",
    difficulty: "hard",
    question: "What is the result of [] + []?",
    code: null,
    options: [
      "[]",
      "'' (empty string)",
      "0",
      "undefined"
    ],
    correctAnswer: 1,
    explanation: "[] + [] returns an empty string ''. When + is used with objects/arrays, both are converted to primitives via toString(). [].toString() is '', so '' + '' = ''.",
    reference: "JavaScript - Type Coercion"
  },
  {
    id: 151,
    category: "js-basics",
    difficulty: "hard",
    question: "What is the result of [] + {}?",
    code: null,
    options: [
      "'[object Object]'",
      "0",
      "undefined",
      "NaN"
    ],
    correctAnswer: 0,
    explanation: "[] converts to '' (empty string). {} converts to '[object Object]' via toString(). So [] + {} = '' + '[object Object]' = '[object Object]'.",
    reference: "JavaScript - Type Coercion"
  },
  {
    id: 152,
    category: "js-basics",
    difficulty: "hard",
    question: "What is the result of {} + []?",
    code: null,
    options: [
      "'[object Object]'",
      "0",
      "Same as [] + {}",
      "undefined"
    ],
    correctAnswer: 1,
    explanation: "Surprisingly, {} + [] equals 0! When {} appears at the start of a statement, it's interpreted as an empty block (not an object). So we have: empty block, then +[] which coerces [] to 0. This is different from [] + {}.",
    reference: "JavaScript - Type Coercion"
  },
  {
    id: 153,
    category: "js-basics",
    difficulty: "hard",
    question: "What is the result of 1 < 2 < 3 and why?",
    code: null,
    options: [
      "true (both comparisons are true)",
      "false",
      "undefined",
      "Error"
    ],
    correctAnswer: 0,
    explanation: "1 < 2 < 3 evaluates left to right: (1 < 2) < 3 → true < 3. true is coerced to 1, so 1 < 3 is true. Be careful with chained comparisons - JavaScript doesn't support mathematical range comparisons like Python does.",
    reference: "JavaScript - Comparison Operators"
  },
  {
    id: 154,
    category: "js-basics",
    difficulty: "hard",
    question: "What is the result of 3 > 2 > 1?",
    code: null,
    options: [
      "true",
      "false",
      "undefined",
      "1"
    ],
    correctAnswer: 1,
    explanation: "3 > 2 > 1 evaluates as (3 > 2) > 1 → true > 1. true is coerced to 1, so we get 1 > 1 which is false. This is a common pitfall for those expecting mathematical-style chained comparisons.",
    reference: "JavaScript - Comparison Operators"
  },
  {
    id: 155,
    category: "js-basics",
    difficulty: "hard",
    question: "Why does typeof NaN return 'number'?",
    code: null,
    options: [
      "It's a bug that will be fixed",
      "NaN is a special numeric value in IEEE 754 floating-point standard",
      "typeof has a limited set of return values",
      "Both B and C"
    ],
    correctAnswer: 3,
    explanation: "NaN is defined by the IEEE 754 floating-point standard as a special numeric value representing an invalid number. typeof must return one of its predefined string values ('number', 'string', etc.), so 'number' is the appropriate choice since NaN is conceptually a numeric value that represents an error state.",
    reference: "JavaScript - Data Types"
  },
  {
    id: 156,
    category: "js-basics",
    difficulty: "hard",
    question: "What is the result of null == undefined?",
    code: null,
    options: [
      "true",
      "false",
      "TypeError",
      "null"
    ],
    correctAnswer: 0,
    explanation: "null == undefined is true due to the abstract equality comparison algorithm. They are considered equal with == but not with ===. However, null === undefined is false because they are different types.",
    reference: "JavaScript - Comparison Operators"
  }
);


// ==========================================
// JAVASCRIPT CONTROL FLOW (30 questions)
// ==========================================

megaQuestionBank.push(
  // JS Control Flow - Easy (10 questions)
  {
    id: 157,
    category: "js-control-flow",
    difficulty: "easy",
    question: "What does the === operator check?",
    code: null,
    options: [
      "Only value equality",
      "Value and type equality (strict equality)",
      "Only type equality",
      "Reference equality only"
    ],
    correctAnswer: 1,
    explanation: "=== is the strict equality operator. It checks that both the value AND the type are the same. 5 === '5' is false because one is a number and one is a string, even though their values seem similar.",
    reference: "JavaScript - Comparisons"
  },
  {
    id: 158,
    category: "js-control-flow",
    difficulty: "easy",
    question: "What is the result of 5 == '5'?",
    code: null,
    options: [
      "true",
      "false",
      "undefined",
      "Error"
    ],
    correctAnswer: 0,
    explanation: "5 == '5' is true because == performs type coercion before comparison. The string '5' is converted to the number 5, then compared. === would return false because types differ.",
    reference: "JavaScript - Comparisons"
  },
  {
    id: 159,
    category: "js-control-flow",
    difficulty: "easy",
    question: "What does the && (logical AND) operator return?",
    code: null,
    options: [
      "Always true or false",
      "The first falsy value or the last value if all are truthy",
      "Always the first operand",
      "Always the second operand"
    ],
    correctAnswer: 1,
    explanation: "&& returns the first falsy value it encounters, or the last value if all are truthy. This is short-circuit evaluation. true && 'hello' returns 'hello'. 'hello' && 0 returns 0.",
    reference: "JavaScript - Logical Operators"
  },
  {
    id: 160,
    category: "js-control-flow",
    difficulty: "easy",
    question: "What does the || (logical OR) operator return?",
    code: null,
    options: [
      "Always true or false",
      "The first truthy value or the last value if all are falsy",
      "Always the first operand",
      "Always the second operand"
    ],
    correctAnswer: 1,
    explanation: "|| returns the first truthy value it encounters, or the last value if all are falsy. This is short-circuit evaluation. 'hello' || 'world' returns 'hello'. 0 || 'default' returns 'default'.",
    reference: "JavaScript - Logical Operators"
  },
  {
    id: 161,
    category: "js-control-flow",
    difficulty: "easy",
    question: "What is the ternary operator syntax?",
    code: null,
    options: [
      "if ? then : else",
      "condition ? valueIfTrue : valueIfFalse",
      "condition : valueIfTrue ? valueIfFalse",
      "? condition : value1 : value2"
    ],
    correctAnswer: 1,
    explanation: "The ternary operator syntax is: condition ? valueIfTrue : valueIfFalse. It's a shorthand for simple if-else statements. Example: const status = age >= 18 ? 'adult' : 'minor';",
    reference: "JavaScript - Ternary Operator"
  },
  {
    id: 162,
    category: "js-control-flow",
    difficulty: "easy",
    question: "What is the result of !true?",
    code: null,
    options: [
      "true",
      "false",
      "undefined",
      "null"
    ],
    correctAnswer: 1,
    explanation: "! is the logical NOT operator. It inverts the boolean value. !true is false, !false is true. !! can be used to convert a value to its boolean equivalent.",
    reference: "JavaScript - Logical Operators"
  },
  {
    id: 163,
    category: "js-control-flow",
    difficulty: "easy",
    question: "What is the difference between break and continue in a loop?",
    code: null,
    options: [
      "They are the same",
      "break exits the loop; continue skips to next iteration",
      "continue exits the loop; break skips to next iteration",
      "break only works with for loops"
    ],
    correctAnswer: 1,
    explanation: "break immediately exits the entire loop. continue skips the rest of the current iteration and moves to the next iteration (or exits if done). Both work with for, while, and do-while loops.",
    reference: "JavaScript - Loops"
  },
  {
    id: 164,
    category: "js-control-flow",
    difficulty: "easy",
    question: "What does if (x) evaluate when x is an empty string ''?",
    code: "let x = '';\nif (x) { /* code */ }",
    options: [
      "true - the condition executes",
      "false - the condition is skipped",
      "undefined",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "An empty string '' is falsy in JavaScript. So if ('') evaluates to false and the code block is skipped. Other falsy values: 0, false, null, undefined, NaN.",
    reference: "JavaScript - Conditionals"
  },
  {
    id: 165,
    category: "js-control-flow",
    difficulty: "easy",
    question: "What is the result of true || false?",
    code: null,
    options: [
      "true",
      "false",
      "undefined",
      "null"
    ],
    correctAnswer: 0,
    explanation: "true || false is true. The || operator returns true if at least one operand is true. It uses short-circuit evaluation, so if the first operand is true, the second is not evaluated.",
    reference: "JavaScript - Logical Operators"
  },
  {
    id: 166,
    category: "js-control-flow",
    difficulty: "easy",
    question: "What is the result of true && false?",
    code: null,
    options: [
      "true",
      "false",
      "undefined",
      "null"
    ],
    correctAnswer: 1,
    explanation: "true && false is false. The && operator returns true only if both operands are true. Since the second operand is false, the result is false.",
    reference: "JavaScript - Logical Operators"
  },

  // JS Control Flow - Medium (12 questions)
  {
    id: 167,
    category: "js-control-flow",
    difficulty: "medium",
    question: "Are two objects with the same content equal with ==?",
    code: "{a: 1} == {a: 1}",
    options: [
      "Yes, they are equal",
      "No, objects are compared by reference, not content",
      "Only if they have the same number of properties",
      "Only with === not =="
    ],
    correctAnswer: 1,
    explanation: "Objects are compared by reference, not by content. Two object literals {a: 1} and {a: 1} are different objects in memory, so == and === both return false. To compare content, you need to manually check each property.",
    reference: "JavaScript - Object Comparison"
  },
  {
    id: 168,
    category: "js-control-flow",
    difficulty: "medium",
    question: "What is the difference between == and === with objects?",
    code: null,
    options: [
      "They behave the same for objects",
      "Both compare by reference; neither compares by content",
      "== compares content, === compares reference",
      "=== only works with primitive types"
    ],
    correctAnswer: 1,
    explanation: "For objects, both == and === compare by reference (memory address), not by content. Two separate object instances are never equal to each other with either operator, even if they contain identical properties and values.",
    reference: "JavaScript - Object Comparison"
  },
  {
    id: 169,
    category: "js-control-flow",
    difficulty: "medium",
    question: "What is the result of '5' === 5?",
    code: null,
    options: [
      "true",
      "false",
      "undefined",
      "NaN"
    ],
    correctAnswer: 1,
    explanation: "'5' === 5 is false because === checks both value and type. '5' is a string, 5 is a number. They have different types, so strict equality returns false. '5' == 5 would be true due to coercion.",
    reference: "JavaScript - Comparisons"
  },
  {
    id: 170,
    category: "js-control-flow",
    difficulty: "medium",
    question: "What is the difference between != and !==?",
    code: null,
    options: [
      "They are the same",
      "!= checks inequality with coercion; !== checks without coercion",
      "!== is faster than !=",
      "!= is deprecated"
    ],
    correctAnswer: 1,
    explanation: "!= is the loose inequality operator - it performs type coercion before comparing. !== is strict inequality - it checks both value and type without coercion. 5 != '5' is false (coerced equal), 5 !== '5' is true (different types).",
    reference: "JavaScript - Comparisons"
  },
  {
    id: 171,
    category: "js-control-flow",
    difficulty: "medium",
    question: "What is short-circuit evaluation?",
    code: "let x = a || b || c;",
    options: [
      "A way to make code run faster",
      "Logical operators stop evaluating as soon as the result is determined",
      "A method to skip error checking",
      "A technique for loop optimization"
    ],
    correctAnswer: 1,
    explanation: "Short-circuit evaluation means logical operators stop as soon as the result is determined. For ||, if the first operand is truthy, the rest are skipped. For &&, if the first is falsy, the rest are skipped. This is useful for setting defaults: const name = userInput || 'Anonymous';",
    reference: "JavaScript - Logical Operators"
  },
  {
    id: 172,
    category: "js-control-flow",
    difficulty: "medium",
    question: "What is the result of 0 || 'default'?",
    code: null,
    options: [
      "0",
      "'default'",
      "true",
      "false"
    ],
    correctAnswer: 1,
    explanation: "0 is falsy, so || continues to the next operand and returns 'default'. This pattern is commonly used for default values: const value = userInput || 'default';",
    reference: "JavaScript - Logical Operators"
  },
  {
    id: 173,
    category: "js-control-flow",
    difficulty: "medium",
    question: "What is the result of 'hello' && 42?",
    code: null,
    options: [
      "'hello'",
      "42",
      "true",
      "false"
    ],
    correctAnswer: 1,
    explanation: "'hello' is truthy, so && continues to evaluate 42 and returns it (the last value). With &&, if all operands are truthy, the last operand is returned. If any is falsy, that falsy value is returned.",
    reference: "JavaScript - Logical Operators"
  },
  {
    id: 174,
    category: "js-control-flow",
    difficulty: "medium",
    question: "What is the difference between switch and if-else?",
    code: null,
    options: [
      "They are identical",
      "switch uses strict equality (===) for comparisons; if-else is more flexible",
      "if-else is faster than switch",
      "switch only works with numbers"
    ],
    correctAnswer: 1,
    explanation: "switch uses strict equality (===) for case matching. It's cleaner when comparing one value against many possibilities. if-else is more flexible for complex conditions and ranges. switch can be faster for many cases due to optimization.",
    reference: "JavaScript - Conditionals"
  },

  // JS Control Flow - Hard (8 questions)
  {
    id: 175,
    category: "js-control-flow",
    difficulty: "hard",
    question: "What is the result of [] == ![]?",
    code: null,
    options: [
      "true",
      "false",
      "undefined",
      "Error"
    ],
    correctAnswer: 0,
    explanation: "This surprisingly returns true! Here's why: ![] is false (array is truthy, negated). So we have [] == false. [] converts to '' (empty string) for comparison, false converts to 0. '' == 0 is true because '' converts to 0. This is a notorious JavaScript quirk.",
    reference: "JavaScript - Type Coercion"
  },
  {
    id: 176,
    category: "js-control-flow",
    difficulty: "hard",
    question: "What is the result of [] == []?",
    code: null,
    options: [
      "true",
      "false",
      "undefined",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "[] == [] is false. When comparing objects (including arrays), JavaScript compares references, not content. Each [] creates a new array object in memory, so they are different references. Same applies to ===.",
    reference: "JavaScript - Object Comparison"
  },
  {
    id: 177,
    category: "js-control-flow",
    difficulty: "hard",
    question: "What is the result of NaN === NaN?",
    code: null,
    options: [
      "true",
      "false",
      "undefined",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "NaN === NaN is false! This is defined by IEEE 754 standard. NaN is not equal to anything, including itself. To check for NaN, use Number.isNaN() or Object.is(). This is a unique behavior in JavaScript.",
    reference: "JavaScript - Comparisons"
  },
  {
    id: 178,
    category: "js-control-flow",
    difficulty: "hard",
    question: "What is the result of (false == 0) && (0 == '') && (false == '')?",
    code: null,
    options: [
      "true",
      "false",
      "undefined",
      "Error"
    ],
    correctAnswer: 0,
    explanation: "This is true! false == 0 is true (both convert to 0). 0 == '' is true (both convert to 0). But false == '' is also true (both convert to 0). However, this shows == is not transitive, which is why === is preferred.",
    reference: "JavaScript - Type Coercion"
  }
);

// ==========================================
// JAVASCRIPT FUNCTIONS (30 questions)
// ==========================================

megaQuestionBank.push(
  // JS Functions - Easy (10 questions)
  {
    id: 179,
    category: "js-functions",
    difficulty: "easy",
    question: "How do you declare a named function in JavaScript?",
    code: null,
    options: [
      "function = myFunc() {}",
      "function myFunc() {}",
      "def myFunc() {}",
      "func myFunc() {}"
    ],
    correctAnswer: 1,
    explanation: "Functions are declared with the 'function' keyword followed by the name, parentheses for parameters, and curly braces for the body. This is called a function declaration.",
    reference: "JavaScript - Function Declarations"
  },
  {
    id: 180,
    category: "js-functions",
    difficulty: "easy",
    question: "What is a function expression?",
    code: "const myFunc = function() { return 42; };",
    options: [
      "A function declared with the function keyword",
      "A function assigned to a variable",
      "A function that returns an expression",
      "A function with no parameters"
    ],
    correctAnswer: 1,
    explanation: "A function expression is when a function is created and assigned to a variable. Unlike function declarations, function expressions are not hoisted - they cannot be called before they appear in the code.",
    reference: "JavaScript - Function Expressions"
  },
  {
    id: 181,
    category: "js-functions",
    difficulty: "easy",
    question: "What is an arrow function?",
    code: "const add = (a, b) => a + b;",
    options: [
      "A function that points to another function",
      "A concise syntax for writing function expressions",
      "A function that only works with arrays",
      "A deprecated function type"
    ],
    correctAnswer: 1,
    explanation: "Arrow functions provide a concise syntax for function expressions. (a, b) => a + b is equivalent to function(a, b) { return a + b; }. They have some differences from regular functions regarding 'this' binding.",
    reference: "JavaScript - Arrow Functions"
  },
  {
    id: 182,
    category: "js-functions",
    difficulty: "easy",
    question: "What does return do in a function?",
    code: "function greet(name) {\n    return 'Hello, ' + name;\n}",
    options: [
      "Prints the value to the console",
      "Sends the value back to where the function was called",
      "Declares a variable",
      "Stops the program"
    ],
    correctAnswer: 1,
    explanation: "return sends a value back to the caller and immediately exits the function. Without a return statement, a function returns undefined.",
    reference: "JavaScript - Functions"
  },
  {
    id: 183,
    category: "js-functions",
    difficulty: "easy",
    question: "What are functions that can be assigned to variables and passed around called?",
    code: null,
    options: [
      "Static functions",
      "First-class functions",
      "Private functions",
      "Async functions"
    ],
    correctAnswer: 1,
    explanation: "JavaScript has first-class functions, meaning functions are treated as values. They can be assigned to variables, stored in data structures, passed as arguments, and returned from other functions.",
    reference: "JavaScript - First-Class Functions"
  },
  {
    id: 184,
    category: "js-functions",
    difficulty: "easy",
    question: "What is the default return value of a function with no return statement?",
    code: "function doNothing() {\n    // no return\n}\nconsole.log(doNothing());",
    options: [
      "null",
      "0",
      "undefined",
      "false"
    ],
    correctAnswer: 2,
    explanation: "Functions without an explicit return statement return undefined. This is different from null, 0, or false - undefined specifically means no value was returned.",
    reference: "JavaScript - Functions"
  },
  {
    id: 185,
    category: "js-functions",
    difficulty: "easy",
    question: "How do you call a function named greet?",
    code: null,
    options: [
      "call greet",
      "greet()",
      "greet[]",
      "invoke greet"
    ],
    correctAnswer: 1,
    explanation: "Functions are called (invoked) using parentheses () after the function name. You can pass arguments inside the parentheses: greet('Alice').",
    reference: "JavaScript - Functions"
  },
  {
    id: 186,
    category: "js-functions",
    difficulty: "easy",
    question: "What is the difference between function parameters and arguments?",
    code: "function greet(name) { }  // parameter\ngreet('Alice');           // argument",
    options: [
      "They are the same thing",
      "Parameters are in the function definition; arguments are the actual values passed",
      "Arguments are in the definition; parameters are the values",
      "Parameters are only for arrow functions"
    ],
    correctAnswer: 1,
    explanation: "Parameters are the named variables in the function definition (placeholders). Arguments are the actual values passed when calling the function. In the example: name is the parameter, 'Alice' is the argument.",
    reference: "JavaScript - Functions"
  },

  // JS Functions - Medium (12 questions)
  {
    id: 187,
    category: "js-functions",
    difficulty: "medium",
    question: "What is hoisting with function declarations vs function expressions?",
    code: null,
    options: [
      "Both are hoisted the same way",
      "Function declarations are hoisted; function expressions are not",
      "Function expressions are hoisted; declarations are not",
      "Neither is hoisted"
    ],
    correctAnswer: 1,
    explanation: "Function declarations are hoisted - you can call them before they appear in code. Function expressions are not hoisted - the variable is hoisted but not the assignment, so calling before definition results in 'is not a function' error.",
    reference: "JavaScript - Hoisting"
  },
  {
    id: 188,
    category: "js-functions",
    difficulty: "medium",
    question: "Can you store functions in an array?",
    code: "const funcs = [\n    function() { return 1; },\n    () => 2,\n    function() { return 3; }\n];",
    options: [
      "No, functions cannot be stored in arrays",
      "Yes, functions are first-class values and can be stored in arrays",
      "Only arrow functions can be stored in arrays",
      "Only with special syntax"
    ],
    correctAnswer: 1,
    explanation: "Yes, functions are first-class values in JavaScript and can be stored in arrays, objects, and passed around just like any other value. You can call them later: funcs[0]().",
    reference: "JavaScript - First-Class Functions"
  },
  {
    id: 189,
    category: "js-functions",
    difficulty: "medium",
    question: "What is a callback function?",
    code: "function doSomething(callback) {\n    // ... do work\n    callback();\n}",
    options: [
      "A function that calls itself",
      "A function passed as an argument to another function",
      "A function that returns another function",
      "A function that runs immediately"
    ],
    correctAnswer: 1,
    explanation: "A callback is a function passed as an argument to another function, which then invokes (calls back) the passed function. Common in asynchronous operations, event handlers, and array methods like map, filter, forEach.",
    reference: "JavaScript - Callbacks"
  },
  {
    id: 190,
    category: "js-functions",
    difficulty: "medium",
    question: "What is the 'this' keyword in a regular function?",
    code: null,
    options: [
      "It always refers to the function itself",
      "It refers to the object that called the function (context-dependent)",
      "It is always undefined",
      "It refers to the global object always"
    ],
    correctAnswer: 1,
    explanation: "In regular functions, 'this' refers to the object that called the function (the execution context). Its value depends on how the function is called, not where it's defined. This is different from arrow functions which inherit 'this' from their enclosing scope.",
    reference: "JavaScript - this Keyword"
  },
  {
    id: 191,
    category: "js-functions",
    difficulty: "medium",
    question: "What is the difference between an arrow function and a regular function?",
    code: null,
    options: [
      "They are identical",
      "Arrow functions don't have their own 'this', 'arguments', and cannot be constructors",
      "Arrow functions are slower",
      "Arrow functions cannot have parameters"
    ],
    correctAnswer: 1,
    explanation: "Arrow functions: 1) Don't have their own 'this' (inherit from parent scope), 2) Don't have arguments object, 3) Cannot be used as constructors (no new), 4) Cannot use yield (not generators). They're ideal for short callbacks and when you want to preserve 'this'.",
    reference: "JavaScript - Arrow Functions"
  },
  {
    id: 192,
    category: "js-functions",
    difficulty: "medium",
    question: "What is the arguments object in a function?",
    code: "function sum() {\n    console.log(arguments);\n}",
    options: [
      "An array of all parameters",
      "An array-like object containing all arguments passed",
      "The function's documentation",
      "An error message"
    ],
    correctAnswer: 1,
    explanation: "arguments is an array-like object available in regular functions containing all arguments passed. It's not a real array (no map, filter, etc.) but has length and index access. Not available in arrow functions.",
    reference: "JavaScript - Functions"
  },
  {
    id: 193,
    category: "js-functions",
    difficulty: "medium",
    question: "What is a higher-order function?",
    code: "function higherOrder(fn) {\n    return function() {\n        return fn() * 2;\n    };\n}",
    options: [
      "A function with many parameters",
      "A function that takes functions as arguments or returns functions",
      "A function that runs faster than others",
      "A built-in JavaScript function"
    ],
    correctAnswer: 1,
    explanation: "A higher-order function is one that: 1) Takes one or more functions as arguments, OR 2) Returns a function as its result. Examples: map, filter, reduce are built-in higher-order functions.",
    reference: "JavaScript - Higher-Order Functions"
  },
  {
    id: 194,
    category: "js-functions",
    difficulty: "medium",
    question: "What is the implicit return in arrow functions?",
    code: "const double = x => x * 2;",
    options: [
      "Arrow functions never return implicitly",
      "When no curly braces, the expression is implicitly returned",
      "It only works with numbers",
      "It's a syntax error"
    ],
    correctAnswer: 1,
    explanation: "Arrow functions with a single expression (no curly braces) implicitly return that expression. x => x * 2 returns x * 2. With curly braces, you need an explicit return statement: x => { return x * 2; }.",
    reference: "JavaScript - Arrow Functions"
  },

  // JS Functions - Hard (8 questions)
  {
    id: 195,
    category: "js-functions",
    difficulty: "hard",
    question: "What is function currying?",
    code: "const add = a => b => a + b;\nconst add5 = add(5);\nconsole.log(add5(3)); // 8",
    options: [
      "A way to cook functions",
      "Transforming a function with multiple arguments into a sequence of single-argument functions",
      "A method to combine multiple functions into one",
      "A technique for memoization"
    ],
    correctAnswer: 1,
    explanation: "Currying transforms a function that takes multiple arguments into a series of functions that each take a single argument. add(a, b) becomes add(a)(b). This allows partial application - creating specialized functions from general ones.",
    reference: "JavaScript - Functional Programming"
  },
  {
    id: 196,
    category: "js-functions",
    difficulty: "hard",
    question: "What is the difference between call, apply, and bind?",
    code: null,
    options: [
      "They are identical",
      "call and apply invoke immediately with different argument syntax; bind returns a new function",
      "bind invokes immediately; call and apply return new functions",
      "Only call is standard JavaScript"
    ],
    correctAnswer: 1,
    explanation: "call(thisArg, arg1, arg2, ...) invokes immediately with individual arguments. apply(thisArg, [args]) invokes immediately with an array of arguments. bind(thisArg, ...args) returns a NEW function with 'this' and partial arguments preset, doesn't invoke immediately.",
    reference: "JavaScript - Function Methods"
  },
  {
    id: 197,
    category: "js-functions",
    difficulty: "hard",
    question: "What is closure in JavaScript?",
    code: "function outer() {\n    let count = 0;\n    return function inner() {\n        return ++count;\n    };\n}",
    options: [
      "A way to close the browser",
      "A function that remembers and accesses its lexical scope even when executed outside it",
      "A method to end a function early",
      "A type of loop"
    ],
    correctAnswer: 1,
    explanation: "A closure is a function that has access to variables from its outer (enclosing) function's scope, even after the outer function has returned. The inner function 'closes over' the outer variables. This enables data privacy and factory functions.",
    reference: "JavaScript - Closures"
  },
  {
    id: 198,
    category: "js-functions",
    difficulty: "hard",
    question: "What is the output of this code?",
    code: "const obj = {\n    value: 42,\n    getValue: () => this.value\n};\nconsole.log(obj.getValue());",
    options: [
      "42",
      "undefined",
      "Error",
      "null"
    ],
    correctAnswer: 1,
    explanation: "The output is undefined! Arrow functions don't have their own 'this' - they inherit from the parent scope (window/global in this case, not obj). Regular function would return 42. This is a common pitfall when using arrow functions as methods.",
    reference: "JavaScript - Arrow Functions"
  },
  {
    id: 199,
    category: "js-functions",
    difficulty: "hard",
    question: "What is an IIFE (Immediately Invoked Function Expression)?",
    code: "(function() {\n    console.log('I run immediately!');\n})();",
    options: [
      "A function that calls itself recursively",
      "A function expression that is executed immediately after it's defined",
      "An internal function for interpreters only",
      "A deprecated feature"
    ],
    correctAnswer: 1,
    explanation: "IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it's defined. It creates a private scope to avoid polluting the global namespace. Common pattern: (function() { /* code */ })() or (() => { /* code */ })().",
    reference: "JavaScript - IIFE"
  },
  {
    id: 200,
    category: "js-functions",
    difficulty: "hard",
    question: "What is recursion and what must it have?",
    code: "function factorial(n) {\n    if (n <= 1) return 1;  // base case\n    return n * factorial(n - 1);  // recursive case\n}",
    options: [
      "A loop inside a function; requires an iterator",
      "A function calling itself; requires a base case to stop",
      "A function returning another function; requires bind",
      "Multiple functions calling each other; requires async"
    ],
    correctAnswer: 1,
    explanation: "Recursion is when a function calls itself. It MUST have: 1) A base case - condition to stop recursion, 2) A recursive case - function calls itself with modified input moving toward base case. Without a base case, you get infinite recursion and stack overflow.",
    reference: "JavaScript - Recursion"
  }
);

// ==========================================
// JAVASCRIPT OBJECTS (35 questions)
// ==========================================

megaQuestionBank.push(
  // JS Objects - Easy (12 questions)
  {
    id: 201,
    category: "js-objects",
    difficulty: "easy",
    question: "How do you create an object literal in JavaScript?",
    code: null,
    options: [
      "let obj = ();",
      "let obj = {};",
      "let obj = [];",
      "let obj = <>;"
    ],
    correctAnswer: 1,
    explanation: "Object literals are created with curly braces {}. Properties are defined as key-value pairs inside: { name: 'John', age: 30 }.",
    reference: "JavaScript - Object Literals"
  },
  {
    id: 202,
    category: "js-objects",
    difficulty: "easy",
    question: "How do you access the 'name' property of an object using dot notation?",
    code: "let person = { name: 'Alice', age: 25 };",
    options: [
      "person->name",
      "person.name",
      "person[name]",
      "person::name"
    ],
    correctAnswer: 1,
    explanation: "Dot notation uses a period: person.name. This is the most common way to access properties when you know the property name at write time.",
    reference: "JavaScript - Property Access"
  },
  {
    id: 203,
    category: "js-objects",
    difficulty: "easy",
    question: "How do you access an object property using bracket notation?",
    code: "let person = { name: 'Alice', age: 25 };",
    options: [
      "person->'name'",
      "person('name')",
      "person['name']",
      "person.name[]"
    ],
    correctAnswer: 2,
    explanation: "Bracket notation uses square brackets with a string: person['name']. This is useful when the property name is dynamic, has special characters, or is stored in a variable.",
    reference: "JavaScript - Property Access"
  },
  {
    id: 204,
    category: "js-objects",
    difficulty: "easy",
    question: "How do you add a new property to an existing object?",
    code: "let car = { brand: 'Toyota' };",
    options: [
      "car.add('color', 'red');",
      "car.color = 'red';",
      "add car.color = 'red';",
      "car->color = 'red';"
    ],
    correctAnswer: 1,
    explanation: "You add properties by assignment: car.color = 'red' or car['color'] = 'red'. JavaScript objects are mutable - properties can be added, modified, or deleted after creation.",
    reference: "JavaScript - Modifying Objects"
  },
  {
    id: 205,
    category: "js-objects",
    difficulty: "easy",
    question: "What does Object.assign() do?",
    code: "let target = { a: 1 };\nlet source = { b: 2 };\nObject.assign(target, source);",
    options: [
      "Compares two objects",
      "Copies properties from source objects to a target object",
      "Deletes properties from an object",
      "Creates a new empty object"
    ],
    correctAnswer: 1,
    explanation: "Object.assign() copies all enumerable own properties from one or more source objects to a target object. It modifies and returns the target object. Properties in later sources overwrite those in earlier ones.",
    reference: "JavaScript - Object.assign()"
  },
  {
    id: 206,
    category: "js-objects",
    difficulty: "easy",
    question: "How do you delete a property from an object?",
    code: "let person = { name: 'John', age: 30 };",
    options: [
      "person.age = null;",
      "delete person.age;",
      "remove person.age;",
      "person.delete('age');"
    ],
    correctAnswer: 1,
    explanation: "The delete operator removes a property from an object: delete person.age. After deletion, the property doesn't exist (not just undefined). delete returns true unless the property is non-configurable.",
    reference: "JavaScript - Modifying Objects"
  },
  {
    id: 207,
    category: "js-objects",
    difficulty: "easy",
    question: "What is the difference between dot notation and bracket notation?",
    code: "let obj = { 'first-name': 'John' };",
    options: [
      "They are identical",
      "Dot: obj.property; Bracket: obj['property'] - bracket needed for special characters/variables",
      "Dot is faster; bracket is slower",
      "Bracket is deprecated"
    ],
    correctAnswer: 1,
    explanation: "Dot notation (obj.property) is cleaner but requires valid identifiers. Bracket notation (obj['property']) is needed for: properties with special characters like 'first-name', property names stored in variables, or numeric property names.",
    reference: "JavaScript - Property Access"
  },
  {
    id: 208,
    category: "js-objects",
    difficulty: "easy",
    question: "What does Object.keys() return?",
    code: "let person = { name: 'Alice', age: 25 };\nObject.keys(person);",
    options: [
      "An array of values",
      "An array of property names (keys)",
      "The number of properties",
      "A string representation"
    ],
    correctAnswer: 1,
    explanation: "Object.keys() returns an array of a given object's own enumerable property names (keys). For { name: 'Alice', age: 25 }, it returns ['name', 'age'].",
    reference: "JavaScript - Object Methods"
  },
  {
    id: 209,
    category: "js-objects",
    difficulty: "easy",
    question: "What is the value of dog.cat if dog doesn't have a cat property?",
    code: "let dog = { name: 'Rex' };\nconsole.log(dog.cat);",
    options: [
      "null",
      "undefined",
      "0",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "Accessing a non-existent property returns undefined, not null or an error. This is different from accessing a variable that doesn't exist, which throws a ReferenceError.",
    reference: "JavaScript - Property Access"
  },
  {
    id: 210,
    category: "js-objects",
    difficulty: "easy",
    question: "What is a method in JavaScript?",
    code: "let person = {\n    name: 'John',\n    greet: function() {\n        return 'Hello, ' + this.name;\n    }\n};",
    options: [
      "A type of variable",
      "A function that is a property of an object",
      "A built-in JavaScript command",
      "A way to declare objects"
    ],
    correctAnswer: 1,
    explanation: "A method is a function that is a property of an object. Inside a method, 'this' refers to the object the method belongs to. Methods are called with dot notation: person.greet().",
    reference: "JavaScript - Methods"
  },
  {
    id: 211,
    category: "js-objects",
    difficulty: "easy",
    question: "How do you check if an object has a specific property?",
    code: "let person = { name: 'Alice' };",
    options: [
      "person.has name",
      "'name' in person",
      "person.contains('name')",
      "person.exists('name')"
    ],
    correctAnswer: 1,
    explanation: "The 'in' operator checks if a property exists in an object or its prototype chain: 'name' in person. You can also use person.hasOwnProperty('name') to check only own properties, or person.name !== undefined (but this fails if value is explicitly undefined).",
    reference: "JavaScript - Property Access"
  },

  // JS Objects - Medium (13 questions)
  {
    id: 212,
    category: "js-objects",
    difficulty: "medium",
    question: "What is the difference between Object.assign and the spread operator for copying objects?",
    code: "let copy1 = Object.assign({}, obj);\nlet copy2 = { ...obj };",
    options: [
      "They are identical for shallow copies",
      "Object.assign modifies the target; spread creates a new object",
      "Spread is deep copy; Object.assign is shallow",
      "Object.assign is deprecated"
    ],
    correctAnswer: 1,
    explanation: "Both create shallow copies. Object.assign modifies its first argument (target) and returns it. Spread {...obj} always creates a new object. Both only copy own enumerable properties, and nested objects are shared (shallow copy).",
    reference: "JavaScript - Object Copying"
  },
  {
    id: 213,
    category: "js-objects",
    difficulty: "medium",
    question: "What is a shallow copy vs deep copy of an object?",
    code: "let original = { a: 1, b: { c: 2 } };",
    options: [
      "They are the same",
      "Shallow: top-level copied, nested objects shared; Deep: everything copied recursively",
      "Shallow is faster to create; Deep is smaller",
      "Shallow uses =; Deep uses Object.assign"
    ],
    correctAnswer: 1,
    explanation: "Shallow copy: new object with top-level properties copied, but nested objects still reference the same memory. Deep copy: completely independent copy including all nested objects. Modifying a nested object in a shallow copy affects the original.",
    reference: "JavaScript - Object Copying"
  },
  {
    id: 214,
    category: "js-objects",
    difficulty: "medium",
    question: "What does the 'this' keyword refer to in an object method?",
    code: "let person = {\n    name: 'Alice',\n    greet() {\n        return 'Hi, I am ' + this.name;\n    }\n};",
    options: [
      "The global window object",
      "The object that the method belongs to",
      "The function itself",
      "undefined"
    ],
    correctAnswer: 1,
    explanation: "In a regular object method, 'this' refers to the object the method was called on. person.greet() - this is person. However, 'this' value depends on how the function is called, not where it's defined.",
    reference: "JavaScript - this Keyword"
  },
  {
    id: 215,
    category: "js-objects",
    difficulty: "medium",
    question: "What is the prototype of an object created with {}?",
    code: "let obj = {};",
    options: [
      "null",
      "Object.prototype",
      "Function.prototype",
      "It has no prototype"
    ],
    correctAnswer: 1,
    explanation: "Object literals inherit from Object.prototype. This gives them methods like toString(), hasOwnProperty(), valueOf(). You can check with Object.getPrototypeOf(obj) or obj.__proto__ (deprecated but still works).",
    reference: "JavaScript - Prototypes"
  },
  {
    id: 216,
    category: "js-objects",
    difficulty: "medium",
    question: "What is Object.entries()?",
    code: "let person = { name: 'Alice', age: 25 };\nObject.entries(person);",
    options: [
      "Returns an array of keys",
      "Returns an array of [key, value] pairs",
      "Returns an array of values",
      "Returns the number of entries"
    ],
    correctAnswer: 1,
    explanation: "Object.entries() returns an array of a given object's own enumerable [key, value] pairs. For { name: 'Alice', age: 25 }, it returns [['name', 'Alice'], ['age', 25]]. Useful for iterating with for...of.",
    reference: "JavaScript - Object Methods"
  },
  {
    id: 217,
    category: "js-objects",
    difficulty: "medium",
    question: "What is the difference between for...in and for...of when iterating over objects?",
    code: null,
    options: [
      "They are identical",
      "for...in iterates over keys; for...of iterates over values (requires Object.values/entries)",
      "for...of only works with arrays",
      "for...in is deprecated"
    ],
    correctAnswer: 1,
    explanation: "for...in iterates over enumerable property names (keys) including inherited ones. for...of iterates over iterable values, but plain objects aren't iterable. Use for...of with Object.values(obj) or Object.entries(obj).",
    reference: "JavaScript - Iteration"
  },
  {
    id: 218,
    category: "js-objects",
    difficulty: "medium",
    question: "What is JSON and how is it related to JavaScript objects?",
    code: 'let jsonString = \'{"name":"Alice","age":25}\';',
    options: [
      "JSON is exactly the same as JavaScript objects",
      "JSON is a string format inspired by JS object notation; requires parsing to become an object",
      "JSON is a programming language",
      "JSON only works with arrays"
    ],
    correctAnswer: 1,
    explanation: "JSON (JavaScript Object Notation) is a text format inspired by JS object syntax but with differences: keys must be quoted, no functions/trailing commas/single quotes. Use JSON.parse() to convert to object, JSON.stringify() to convert to string.",
    reference: "JavaScript - JSON"
  },
  {
    id: 219,
    category: "js-objects",
    difficulty: "medium",
    question: "What happens when you modify a property on a const object?",
    code: "const person = { name: 'Alice' };\nperson.name = 'Bob';",
    options: [
      "Error - cannot modify const",
      "It works - const prevents reassignment, not mutation",
      "The object becomes undefined",
      "A copy is created automatically"
    ],
    correctAnswer: 1,
    explanation: "const prevents reassignment of the variable, not modification of the object it references. person = {} would fail, but person.name = 'Bob' works fine. Use Object.freeze() to prevent modifications.",
    reference: "JavaScript - const and Objects"
  },
  {
    id: 220,
    category: "js-objects",
    difficulty: "medium",
    question: "What is Object.freeze()?",
    code: "const obj = Object.freeze({ a: 1 });\nobj.a = 2;",
    options: [
      "Makes the object immutable (can't add/delete/modify properties)",
      "Pauses code execution",
      "Creates a copy of the object",
      "Deletes all properties"
    ],
    correctAnswer: 0,
    explanation: "Object.freeze() makes an object immutable. You cannot add, delete, or modify properties. It returns the same object. In strict mode, attempts to modify throw errors; in non-strict, they silently fail. Note: shallow freeze - nested objects can still be modified unless also frozen.",
    reference: "JavaScript - Object.freeze()"
  },
  {
    id: 221,
    category: "js-objects",
    difficulty: "medium",
    question: "How do you create an object with a computed property name?",
    code: "let prop = 'dynamicKey';\nlet obj = { [prop]: 'value' };",
    options: [
      "obj.prop = 'value';",
      "Use square brackets around the expression: { [prop]: 'value' }",
      "Use parentheses: { (prop): 'value' }",
      "It's not possible"
    ],
    correctAnswer: 1,
    explanation: "Computed property names use square brackets in the object literal: { [expression]: value }. The expression is evaluated and its result becomes the property name. Useful when property names are determined at runtime.",
    reference: "JavaScript - Object Literals"
  },

  // JS Objects - Hard (10 questions)
  {
    id: 222,
    category: "js-objects",
    difficulty: "hard",
    question: "What is the difference between Object.create() and {}?",
    code: "let obj1 = Object.create(null);\nlet obj2 = {};",
    options: [
      "They are identical",
      "Object.create(null) creates an object with no prototype; {} inherits from Object.prototype",
      "Object.create is slower",
      "{} cannot have methods"
    ],
    correctAnswer: 1,
    explanation: "Object.create(null) creates a truly empty object with no prototype - no toString, hasOwnProperty, etc. {} inherits from Object.prototype with all its methods. Object.create(null) is useful for pure dictionaries/maps without prototype pollution risk.",
    reference: "JavaScript - Object Creation"
  },
  {
    id: 223,
    category: "js-objects",
    difficulty: "hard",
    question: "What is property descriptor and what does Object.defineProperty() do?",
    code: "Object.defineProperty(obj, 'key', {\n    value: 42,\n    writable: false,\n    enumerable: false,\n    configurable: false\n});",
    options: [
      "It defines a new class",
      "It defines a property with specific characteristics/permissions",
      "It creates a new object",
      "It deletes a property"
    ],
    correctAnswer: 1,
    explanation: "Object.defineProperty() defines a new property or modifies an existing one with fine-grained control: writable (can change value), enumerable (shows in loops), configurable (can delete/change descriptor), and getter/setter functions.",
    reference: "JavaScript - Property Descriptors"
  },
  {
    id: 224,
    category: "js-objects",
    difficulty: "hard",
    question: "What is the prototype chain?",
    code: null,
    options: [
      "A way to chain function calls",
      "The chain of objects used for inheritance - JS looks up properties through the chain",
      "A method to connect objects in an array",
      "The order in which objects were created"
    ],
    correctAnswer: 1,
    explanation: "The prototype chain is how JavaScript implements inheritance. When accessing obj.property, JS first checks obj, then obj.__proto__, then obj.__proto__.__proto__, up to null. This chain is how objects inherit methods from Object.prototype, Array.prototype, etc.",
    reference: "JavaScript - Prototypes"
  },
  {
    id: 225,
    category: "js-objects",
    difficulty: "hard",
    question: "What is the difference between Object.hasOwn() and 'in' operator?",
    code: null,
    options: [
      "They are identical",
      "hasOwn checks only own properties; 'in' checks own and inherited properties",
      "'in' is faster than hasOwn",
      "hasOwn is deprecated"
    ],
    correctAnswer: 1,
    explanation: "Object.hasOwn(obj, 'prop') (modern replacement for hasOwnProperty) checks if the property exists directly on the object (own property). 'prop' in obj checks the entire prototype chain. 'toString' in {} is true, but Object.hasOwn({}, 'toString') is false.",
    reference: "JavaScript - Property Checking"
  },
  {
    id: 226,
    category: "js-objects",
    difficulty: "hard",
    question: "What is the difference between Object.values() and Object.entries()?",
    code: null,
    options: [
      "They are the same",
      "values returns array of values; entries returns array of [key, value] pairs",
      "values includes inherited properties; entries doesn't",
      "entries is faster"
    ],
    correctAnswer: 1,
    explanation: "Object.values(obj) returns an array of the object's own enumerable property values. Object.entries(obj) returns an array of [key, value] pairs. Both only work on own properties (not inherited), similar to Object.keys().",
    reference: "JavaScript - Object Methods"
  },
  {
    id: 227,
    category: "js-objects",
    difficulty: "hard",
    question: "How do you properly deep clone an object in JavaScript?",
    code: null,
    options: [
      "Using = assignment",
      "Using Object.assign() or spread {...obj}",
      "Using JSON.parse(JSON.stringify(obj)) for simple objects, or structuredClone()",
      "Using Object.copy()"
    ],
    correctAnswer: 2,
    explanation: "For simple objects: JSON.parse(JSON.stringify(obj)) works but loses functions, undefined, dates, and circular references. structuredClone() (modern) properly clones most types including Dates, Maps, Sets, but not functions. Libraries like Lodash's cloneDeep are often used.",
    reference: "JavaScript - Deep Cloning"
  },
  {
    id: 228,
    category: "js-objects",
    difficulty: "hard",
    question: "What is getter/setter in JavaScript objects?",
    code: "let person = {\n    _name: 'Alice',\n    get name() { return this._name; },\n    set name(value) { this._name = value; }\n};",
    options: [
      "Special methods for getting/setting values with custom logic",
      "Built-in functions for all objects",
      "Ways to delete properties",
      "Methods that only work with private properties"
    ],
    correctAnswer: 0,
    explanation: "Getters and setters are special methods that look like properties but execute code when accessed or assigned. Getters are called when reading (person.name), setters when writing (person.name = 'Bob'). Useful for computed properties, validation, or encapsulation.",
    reference: "JavaScript - Getters and Setters"
  },
  {
    id: 229,
    category: "js-objects",
    difficulty: "hard",
    question: "What is the output of this code and why?",
    code: "let a = { x: 1 };\nlet b = a;\nb.x = 2;\nconsole.log(a.x);",
    options: [
      "1 - a is unchanged",
      "2 - both reference the same object",
      "undefined - b is a new object",
      "Error - cannot modify b"
    ],
    correctAnswer: 1,
    explanation: "The output is 2. Objects are passed by reference. b = a doesn't copy the object, it creates another reference to the same object. Modifying through b affects a. This is why shallow/deep copying is important.",
    reference: "JavaScript - Object References"
  },
  {
    id: 230,
    category: "js-objects",
    difficulty: "hard",
    question: "What is destructuring assignment with objects?",
    code: "let person = { name: 'Alice', age: 25 };\nlet { name, age } = person;",
    options: [
      "A way to delete properties",
      "A syntax to extract properties into variables",
      "A method to merge objects",
      "A way to freeze objects"
    ],
    correctAnswer: 1,
    explanation: "Destructuring is a concise syntax to extract values from objects (and arrays) into variables. let { name, age } = person creates variables name and age with values from the object. Can also rename: { name: n }, set defaults: { age = 18 }, and destructure nested objects.",
    reference: "JavaScript - Destructuring"
  },
  {
    id: 231,
    category: "js-objects",
    difficulty: "hard",
    question: "What is the spread syntax (...) used for with objects?",
    code: "let defaults = { a: 1, b: 2 };\nlet config = { ...defaults, b: 3, c: 4 };",
    options: [
      "To create an array from an object",
      "To copy properties from one object to another (shallow copy/merge)",
      "To convert object to JSON",
      "To delete multiple properties"
    ],
    correctAnswer: 1,
    explanation: "Spread syntax {...obj} copies all enumerable own properties to a new object. It's useful for: 1) Creating shallow copies, 2) Merging objects (later properties overwrite earlier), 3) Adding/overriding properties: { ...obj, newProp: value }.",
    reference: "JavaScript - Spread Syntax"
  }
];

// ==========================================
// EXPORT
// ==========================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { megaQuestionBank };
}
