# Onyango Winstone — Portfolio

A modern, colourful, fully responsive portfolio built with HTML, CSS, and vanilla
JavaScript. It ships with a **theme dropdown** (System / Dark / Light), a
typewriter-driven hero, horizontal upper-right navigation, a certificates gallery,
a dedicated contact page, and a floating WhatsApp direct-message button.

## Quick start

This is a static site — no build step required. Just open `index.html` in a
browser, or serve it with any static host.

```bash
# Quick local preview
npx serve .        # or: python -m http.server 8000
```

## 📁 Structure

```
portfolio/
├── index.html          # Home — hero, about, skills, experience, education, certificates, projects, contact
├── contact.html        # Standalone contact page with a direct-message form
├── css/
│   └── style.css       # All styling — theme dropdown colours via CSS variables
├── js/
│   └── script.js       # Theme dropdown, typewriter, scroll-reveal, progress bar, form
└── assets/
    ├── profile.jpg / profile-placeholder.svg  # Your photo (drop-in), gradient fallback
    ├── Onyango_Winstone_Resume.pdf            # Add your real resume here
    ├── certs/                                 # Certificate images (certificate section)
    └── logos/                                 # Institution logos for each certificate
```

## 🖼 Your profile photo

The hero shows a gradient **OW** avatar until you add your photo:

1. Save your photo as `assets/profile.jpg` (a portrait crop, roughly 800×1000 px
   or larger, works best).
2. Reload the page — it appears automatically. The `<img>` falls back to
   `assets/profile-placeholder.svg` if the file isn't there yet.

Replace `assets/profile-placeholder.svg` with your own artwork if you want a
different fallback.

## 📄 Resume

Place your up-to-date resume at `assets/Onyango_Winstone_Resume.pdf`.
The "Download CV" button in the hero will download it automatically.

## ✉️ Contact form

The contact form (on both `index.html` and `contact.html`) uses **Formspree**
to send you an email — no backend needed.

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form and copy the form ID (looks like `xyzwkjlv`).
3. Replace `YOUR_FORM_ID` in `js/script.js`:
   ```js
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```

Until you do this, the form gracefully falls back to a `mailto:` link that opens
the visitor's email app with the message pre-filled — so you never miss a note.

Every contact route wired up across the site:

| Action | Where | Behaviour |
|--------|-------|-----------|
| Email | hero links, contact sections, contact page | opens the visitor's mail client |
| Phone | `tel:+254791002178` | dials from a mobile device |
| WhatsApp | floating button + contact cards | opens a WhatsApp DM with a pre-filled greeting |
| Direct message | `contact.html` form | emails you via Formspree (mailto fallback) |

## 🎨 Themes
Pick a theme from the **dropdown in the header** — it lists System, Dark and
Light, and the icon beside it updates to match your selection. Your choice is
saved in `localStorage` and re-applied on every page load. Switching themes
restyles colours only: no reload, no flash.

## Responsive design

The layout is fluid from 320 px phones up to ultra-wide monitors:

| Breakpoint | Behaviour |
|-----------|-----------|
| `≤ 980px` | Nav collapses into a hamburger that opens a slide-in panel; the hero stacks with the photo on top |
| `≤ 768px` | Single-column grids for about, skills, projects, certificates and contact; the photo is capped so it can never overflow the viewport |
| `≤ 560px` | Buttons go full-width, stat and signal grids stack, floating buttons tuck into the corners |
| `≥ 1600px` | Content measure is capped at 1320 px so text lines stay readable |

Hover-only effects are disabled on touch devices, and all animation is skipped
for visitors with reduced motion enabled.

## 🏅 Certificates section

The Certificates section shows a card per credential with the certificate image,
the awarding institution's **logo**, the school name, the certificate title, the
year, and a short description.

To add or change one, edit the `<article class="cert-card">` blocks in
`index.html`:

```html
<article class="cert-card reveal delay-1" data-accent="cyan">
  <div class="cert-media">
    <div class="cert-media-placeholder">
      <span class="cert-media-icon">🎓</span>
      <span class="cert-media-hint">assets/certs/your-file.jpg</span>
    </div>
    <img src="assets/certs/your-file.jpg" alt="…" loading="lazy" onerror="this.remove()">
    <span class="cert-year">2026</span>
  </div>
  <div class="cert-body">
    <div class="cert-issuer">
      <img class="cert-logo" src="assets/logos/your-logo.svg" alt="… logo" loading="lazy">
      <span class="cert-school">Institution name</span>
    </div>
    <h3>Certificate title</h3>
    <p class="cert-desc">Short description…</p>
  </div>
</article>
```

- `data-accent` picks the colour scheme: `cyan`, `blue`, `violet`, `emerald`, `amber`
- Missing images/logos degrade gracefully — a dashed placeholder with the
  expected path is shown instead, so the grid never collapses
- Asset folders: `assets/certs/` for your certificate scans and `assets/logos/`
  for institution logos
- Institution logos ship as self-contained SVG badges — swap in the real logos
  using the same filenames

Files to drop in (each one replaces its dashed placeholder automatically):

| Card | Certificate image |
|------|-------------------|
| Samsung Innovation Campus — AI & ML | `assets/certs/samsung-ai.jpg` |
| Andela & Linux Foundation — Kubernetes | `assets/certs/kubernetes.svg` |
| Power Learn Project — Software Development | `assets/certs/plp-software-dev.jpg` |
| JKUAT — B.Sc. Telecommunication & Information Engineering | `assets/certs/jkuat-degree.jpg` |

## 📱 Adding projects

The **Projects** section in `index.html` ships with three example cards. Each
card follows this pattern — copy one and fill in your details:

```html
<div class="project-card reveal">
  <div class="project-image">
    <img src="assets/project-screenshot.jpg" alt="Project name screenshot">
  </div>
  <div class="project-body">
    <h3>Project Name</h3>
    <p class="project-desc">Short description…</p>
    <div class="project-tags">
      <span class="tag">Python</span>
    </div>
    <a href="https://github.com/Winstone-Onyango/project-repo" class="project-code" target="_blank" rel="noopener">Code →</a>
  </div>
</div>
```

> Cards without a screenshot yet use `<div class="project-placeholder">` with an
> emoji icon instead of an `<img>`. Swap in a real image whenever a repository is
> ready to show off. Every card's **Code →** link opens the matching GitHub repo.

## 🛠 Tech stack

| Layer        | Choice          |
|-------------|-----------------|
| Markup      | Semantic HTML5  |
| Styling     | CSS Grid / Flexbox, CSS custom properties |
| Interactivity | Vanilla ES6+ JavaScript |
| Hosting     | Any static host (GitHub Pages, Netlify, Vercel) |

## 📄 License

Feel free to fork and adapt for your own portfolio.
