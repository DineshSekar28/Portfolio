# Dinesh Sekar - Portfolio

A scalable, data-driven portfolio website built with React. Light/dark mode toggle, responsive design, and automatic GitHub Pages deployment.

**Live:** https://dineshsekar28.github.io/Portfolio

---

## Quick Start

### Setup
```bash
git clone https://github.com/DineshSekar28/Portfolio.git
cd Portfolio
npm install
npm start
```

### Build & Deploy
```bash
npm run build
npm run deploy
```

GitHub Actions auto-deploys on `git push` to `main` or `master`.

---

## Scalable Architecture

**Single source of truth:** `public/portfolio.json`

All portfolio data lives in one JSON file. Components consume this data reactively. Update the JSON, push to GitHub, done.

### Portfolio Structure
```json
{
  "personal": { name, title, bio, links, headshot },
  "experience": [ { title, company, dates, description, highlights } ],
  "education": [ { degree, institution, dates } ],
  "skills": [ { category, items } ],
  "projects": [ { name, status, description, tags, github } ],
  "publications": [ { title, platform, date, url } ],
  "contact": [ { platform, url, label } ]
}
```

---

## Maintenance

### Add a New Project
Edit `public/portfolio.json`:
```json
{
  "projects": [
    {
      "id": 7,
      "name": "My New Project",
      "status": "live",
      "description": "What it does.",
      "tags": ["React", "Python"],
      "github": "https://github.com/DineshSekar28/project-name",
      "featured": true
    }
  ]
}
```

Push to GitHub. Auto-deploy happens in 2-3 minutes.

### Publish a Medium Article
Edit `public/portfolio.json`:
```json
{
  "publications": [
    {
      "id": 4,
      "title": "Article Title",
      "platform": "Medium",
      "date": "2024-07-25",
      "url": "https://medium.com/@dineshsekar_65514/article-slug",
      "excerpt": "One-line summary."
    }
  ]
}
```

### Add a Skill
Edit `public/portfolio.json`:
```json
{
  "skills": [
    {
      "category": "Cloud",
      "items": ["AWS", "GCP", "Kubernetes"]
    }
  ]
}
```

### Update Experience
Edit `public/portfolio.json`:
```json
{
  "experience": [
    {
      "id": 1,
      "title": "New Title",
      "company": "New Company",
      "startDate": "2024-01",
      "endDate": "present",
      "highlights": ["Skill 1", "Skill 2"]
    }
  ]
}
```

---

## Customization

### Colors
Edit `src/App.css`. Root variables:
```css
:root {
  --primary: #0E76A8; /* Banking blue */
  --text-primary: #1a1a1a;
  --bg-primary: #ffffff;
  /* ... */
}
```

### Fonts
Default: System fonts (no CDN). Change in `src/App.css`:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### Domain
Default: `dineshsekar28.github.io/Portfolio`

For custom domain:
1. Add `CNAME` file to `public/`:
   ```
   your-domain.com
   ```
2. Update `package.json`:
   ```json
   "homepage": "https://your-domain.com"
   ```

---

## Deployment

### GitHub Pages (Auto)
1. Push to `main` or `master`.
2. GitHub Actions builds & deploys to `gh-pages` branch.
3. Live in 2-3 minutes.

### Manual Deploy
```bash
npm run build
npm run deploy
```

---

## Tech Stack

- **Frontend:** React 18
- **Styling:** CSS3 (light/dark mode)
- **Deployment:** GitHub Actions → GitHub Pages
- **Data:** JSON (portfolio.json)

---

## Features

✅ Light/dark mode toggle (default: light)  
✅ Responsive mobile-first design  
✅ Sticky header with logo + theme toggle  
✅ Hero section with headshot  
✅ Experience timeline  
✅ Skills grid  
✅ Featured projects  
✅ Publications feed  
✅ Contact links  
✅ Auto-deploy on push  
✅ SEO-ready meta tags  

---

## File Structure

```
Portfolio/
├── public/
│   ├── index.html
│   └── portfolio.json         ← Edit this
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Publications.jsx
│   │   ├── Footer.jsx
│   │   └── DarkModeToggle.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── .github/workflows/
│   └── deploy.yml
├── package.json
├── README.md
└── .gitignore
```

---

## License

Open source. Use freely.

---

## Questions?

See `portfolio.json` schema for all fields. Components auto-consume data.
