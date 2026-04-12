# Oliver Simmonds — Personal Website

A clean, minimalist personal website inspired by the text-first aesthetic of darioamodei.com, with a colour palette drawn from Oliver Simmonds' CV (deep crimson, warm gold accents). Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools.

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Bio, social links, and writing index |
| Blog | `blog.html` | Essay: *What jobs will we have after complete human automation?* |

## Project structure

```
├── index.html          # Home / about page
├── blog.html           # Blog post
├── css/
│   └── style.css       # All styles — light & dark theme via CSS custom properties
├── js/
│   └── main.js         # Theme toggle, bio expand, scroll-hide header
├── images/
│   ├── markov_chain.png
│   ├── chess_viewership.png
│   └── ai_gov.png
└── README.md
```

## Features

- **Dark / light mode** — respects OS preference, persists across visits via `localStorage`
- **Scroll-aware header** — hides on scroll down, reappears after 2 s of inactivity
- **Expandable bio** — "More / Less" toggle to keep the home page clean
- **Responsive** — readable on all screen sizes
- **No dependencies** — one Google Fonts import, everything else is vanilla

## Deployment

Static site — deploy to any static host:

```bash
# GitHub Pages (push to main, enable Pages in repo settings)
# Netlify / Vercel — point to repo root, no build command needed
```
