# Dheeraj B — Portfolio

A single-page portfolio site built as a static "service status dashboard" — fitting for a
backend/distributed-systems engineer. No build step, no dependencies to install.

## Files

```
portfolio/
├── index.html      → page structure and content
├── style.css       → all styling (dark, dashboard-inspired theme)
├── script.js       → boot-sequence animation + active nav highlighting
└── assets/
    └── profile.png → your headshot
```

## Preview it locally

Just open `index.html` in a browser — double-click it, or run a tiny local server:

```bash
cd portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy it for free (pick one)

**Netlify (easiest — drag and drop)**
1. Go to https://app.netlify.com/drop
2. Drag the whole `portfolio` folder onto the page
3. You get a live URL instantly; add a custom domain later if you want

**GitHub Pages**
1. Create a new repo, e.g. `dheeraj-b.github.io` (or any repo name)
2. Push these files to the repo's root (or a `/docs` folder)
3. In repo Settings → Pages, set the source branch/folder
4. Your site goes live at `https://<username>.github.io/<repo>/`

**Vercel**
1. Go to https://vercel.com/new
2. Import the folder/repo, leave build settings blank (it's static)
3. Deploy

## Customizing

- **Colors / fonts**: all defined as CSS variables at the top of `style.css` under `:root`
- **Content**: edit the text directly in `index.html` — it's plain HTML, no templating
- **Photo**: replace `assets/profile.png` with a new image of the same name, or update the
  `src` in `index.html`'s `<img class="photo">` tag
- **Contact links**: update the `mailto:`, `tel:`, LinkedIn, and GitHub links in the Contact section
