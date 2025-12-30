# HTML Guide — Frequently Used Tags & Attributes

This guide provides a concise, practical reference to frequently used HTML tags, common attributes, and examples. It's intended for beginners through intermediate web developers who want a single-file cheat sheet.

## Quick Document Skeleton

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Page Title</title>
  </head>
  <body>
    <!-- content -->
  </body>
</html>
```

## Document & Metadata

- `<!DOCTYPE html>`: Declares HTML5 document type.
- `<html lang="...">`: Root element; `lang` improves accessibility and SEO.
- `<head>`: Metadata container.
- `<meta charset>`: Character encoding (use `utf-8`).
- `<meta name="viewport" content="width=device-width, initial-scale=1">`: Responsive layout on mobile.
- `<title>`: Page title shown in browser tab.
- `<link rel="stylesheet" href="...">`: Link external CSS.
- `<script src="..."></script>`: Include external JavaScript (use `defer` when possible).

## Global Attributes (usable on most tags)

- `id` — unique element identifier.
- `class` — CSS classes.
- `style` — inline styles (avoid when possible).
- `title` — advisory tooltip text.
- `hidden` — hide element from rendering.
- `data-*` — custom data attributes, e.g. `data-user-id="123"`.
- `tabindex` — keyboard navigation order.
- `aria-*` — ARIA attributes for accessibility (e.g., `aria-label`, `aria-hidden`).

## Structural & Semantic Elements

- `<header>`: Intro/header for a page or section.
- `<nav>`: Navigation links.
- `<main>`: Main content; should be unique per page.
- `<section>`: Thematic grouping of content.
- `<article>`: Self-contained content (blog post, news item).
- `<aside>`: Sidebar or tangential content.
- `<footer>`: Footer for page or section.
- `<div>`: Generic block container (non-semantic).

## Text Content & Inline Elements

- Headings: `<h1>` — `<h6>` (semantic hierarchy).
- `<p>`: Paragraph.
- `<a href="...">`: Link. Common attributes: `href`, `target` (`_blank`), `rel` (`noopener noreferrer`).
- `<span>`: Generic inline container.
- `<strong>` / `<b>`: Important text vs stylistic bold.
- `<em>` / `<i>`: Emphasized vs italic stylistic.
- `<br>`: Line break (self-closing).
- `<hr>`: Thematic break.
- `<small>`: Fine print.
- `<mark>`: Highlighted text.
- `<code>`, `<pre>`: Inline code and preformatted blocks.
- `<sup>`, `<sub>`: Superscript and subscript.

## Images & Media

- `<img src="..." alt="...">`: Images — always include `alt` for accessibility.
  - `srcset` and `sizes` for responsive images.
- `<picture>` with `<source>`: Art direction and responsive images.
- `<figure>` and `<figcaption>`: Image + caption pairing.
- `<audio controls>`: Audio player. Use `<source>` children for formats.
- `<video controls>`: Video player. Attributes: `autoplay`, `muted`, `loop`, `playsinline`.

## Links & Navigation
- `<a href="...">`: Anchor/link element.
- Key attributes:
    - `href`: URL or anchor (`#section-id`).
    - `target`: `_self` (default), `_blank` (new tab).
    - `rel`: `noopener noreferrer` when using `_blank` to prevent security issues.

## Lists & Tables

- Lists: `<ul>` (unordered), `<ol>` (ordered), `<li>` (list item).
- Definition list: `<dl>`, `<dt>`, `<dd>`.
- Tables: `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`.
  - Use `scope` on `<th>` for accessibility (`scope="col"` or `scope="row"`).

## Forms & Input Elements

- `<form action="..." method="get|post">`: Forms container.
  - `enctype`: `application/x-www-form-urlencoded` (default), `multipart/form-data` (file uploads), `text/plain`.
- `<input>`: Key attributes:
  - `type` — `text`, `password`, `email`, `number`, `tel`, `url`, `checkbox`, `radio`, `file`, `submit`, `button`, `hidden`, `search`, `date`, `datetime-local`, `color`, etc.
  - `name` — form field name sent to server.
  - `value` — initial value.
  - `placeholder`, `required`, `readonly`, `disabled`, `maxlength`, `min`, `max`, `step`, `pattern`, `autocomplete`.
- `<label for="id">`: Connects label to input (preferred for accessibility).
- `<textarea rows cols>`: Multi-line text input.
- `<select>` + `<option>`: Dropdown.
- `<button type="submit|button|reset">`: Buttons.

## Common Input Patterns & Attributes

- `required` — client-side required field.
- `pattern` — regex validation; works with `type="text"`.
- `novalidate` on `<form>` to disable browser validation.

## Scripting & Progressive Enhancement

- `<script src="..." defer></script>`: `defer` delays execution until after parsing.
- `<script async>`: Execute as soon as downloaded (no ordering guarantees).
- Inline event attributes: `onclick`, `onsubmit`, etc. Prefer adding listeners in JS (`addEventListener`) instead.

## Media & Graphics

- `<canvas>`: Drawing area for scripts.
- `<svg>`: Scalable vector graphics inline.

## Accessibility (A11Y) Essentials

- Always provide `alt` text for images; empty `alt=""` for decorative images.
- Use semantic elements (`<nav>`, `<main>`, `<header>`, `<footer>`) to improve navigation for assistive tech.
- Use `<label>` for form fields and `aria-*` attributes when semantics are missing.
- Ensure color contrast and keyboard accessibility (use `tabindex` only when needed).


## Small Examples

Image with caption:

```html
<figure>
  <img src="portrait.jpg" alt="Portrait of Jane Doe" />
  <figcaption>Jane Doe — Lead Designer</figcaption>
</figure>
```

Accessible form snippet:

```html
<form action="/subscribe" method="post">
  <label for="email">Email</label>
  <input
    id="email"
    name="email"
    type="email"
    placeholder="you@example.com"
    required
  />
  <button type="submit">Subscribe</button>
</form>
```

Responsive image example:

```html
<picture>
  <source media="(min-width:800px)" srcset="image-large.jpg" />
  <img src="image-small.jpg" alt="Scenic view" />
</picture>
```

## Notes & Best Practices

- Prefer semantic elements over generic `<div>`/`<span>` where possible.
- Keep HTML separate from styling (`.css`) and behavior (`.js`).
- Validate HTML with an HTML validator to catch issues early.
- Progressive enhancement: make content usable without JS.

## Further Reading

- MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/HTML
- WHATWG HTML Living Standard: https://html.spec.whatwg.org/

---

