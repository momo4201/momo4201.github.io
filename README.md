# Manaswita Ghose — Academic Portfolio

Personal academic research portfolio, styled after the [Academic Pages](https://academicpages.github.io/) GitHub Pages template, built as a dependency-free static site.

**Live site:** https://momo4201.github.io

## Stack

- `index.html` — single-page site: About, Publications, Research Experience, Education, Projects, Skills & Activities, Contact
- `styles.css` — Academic Pages-inspired theme with CSS variables, dark mode, and responsive layout (sticky sidebar on desktop, stacked on mobile)
- `script.js` — dark/light theme toggle (persisted), mobile navigation, scroll-spy nav highlighting, back-to-top button
- External: Google Fonts (PT Sans) and Font Awesome 6 via CDN — no build step, no frameworks

## Deploying

See [DEPLOYMENT.md](DEPLOYMENT.md) for the full step-by-step terminal and GitHub UI guide.

## Editing content

All content lives directly in `index.html` — each section is marked with an HTML comment (e.g. `<!-- ===== Publications ===== -->`). To add a publication, copy an existing `<li class="pub">` block and edit the text. Status badges: `badge--review`, `badge--accepted`, `badge--published`.

To add a blog-style activity post (seminars, workshops, conferences), copy an `<article class="post">` block in the **Activities** section and edit the date, location, title, and body. Keep the newest post at the top.

The `components/` folder contains the original section fragments used to assemble `index.html`; it is not loaded by the site and can be deleted.
