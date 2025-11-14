# Portfolio Site

Minimalist portfolio website inspired by Claude Code's design aesthetic.

## Features

- Clean, monospace typography
- Dark theme with minimal color palette
- Markdown-based project descriptions
- No build process - pure HTML/CSS/JS
- Keyboard navigation support (↑/↓ arrows)

## Structure

```
/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Minimalist styles
├── js/
│   └── app.js         # Portfolio logic
└── portfolio/         # Your projects (markdown files)
    ├── sample.md
    ├── project-1.md
    └── project-2.md
```

## Adding New Projects

1. Create a new markdown file in `/portfolio/` (e.g., `my-project.md`)
2. Edit `js/app.js` and add your project to the `projects` array:

```javascript
const projects = [
    { id: 'my-project', name: 'My Project', file: 'my-project.md' },
    // ... other projects
];
```

3. Write your project details in markdown - it will be rendered automatically

## Running Locally

Since this uses `fetch()` for loading markdown files, you need a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (if you have npx)
npx serve

# PHP
php -S localhost:8000
```

Then open http://localhost:8000

## Deployment

Deploy to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

No build step required - just push and deploy.
