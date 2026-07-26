# Portfolio Setup Instructions

## Step 1: Prepare Your GitHub Repository

1. Go to your existing `Portfolio` repository: https://github.com/DineshSekar28/Portfolio
2. Clone it locally if not already done:
   ```bash
   git clone https://github.com/DineshSekar28/Portfolio.git
   cd Portfolio
   ```

## Step 2: Copy Files

Follow this exact directory structure:

```
Portfolio/
├── public/
│   ├── index.html
│   ├── portfolio.json
│   └── dinesh_headshot.png
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
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .gitignore
├── package.json
├── README.md
└── .env (optional, leave empty)
```

## Step 3: Install & Test Locally

```bash
npm install
npm start
```

Portfolio opens at `http://localhost:3000`

## Step 4: Push to GitHub

```bash
git add .
git commit -m "Initial portfolio setup with React"
git push origin main
```

## Step 5: Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under "Source", select: **Deploy from a branch**
3. Branch: `gh-pages` (created by GitHub Actions)
4. Folder: `/ (root)`
5. **Save**

Auto-deploy workflow runs immediately. Site goes live at:
```
https://dineshsekar28.github.io/Portfolio
```

## Step 6: Make Repos Public (Optional but Recommended)

GitHub recruiter searches only find public repos.

```bash
# For each repo you want to showcase:
# https://github.com/DineshSekar28/parsemoney → Settings → Public
```

---

## Updating Portfolio Data

**Never edit components.** Only edit `public/portfolio.json`.

### Add a Project
```json
{
  "projects": [
    {
      "id": 7,
      "name": "New Project",
      "status": "live",
      "description": "Description here.",
      "tags": ["Tech1", "Tech2"],
      "github": "https://github.com/DineshSekar28/repo-name",
      "featured": true
    }
  ]
}
```

### Publish Medium Article
```json
{
  "publications": [
    {
      "id": 2,
      "title": "Article Title",
      "platform": "Medium",
      "date": "2024-07-25",
      "url": "https://medium.com/@dineshsekar_65514/slug",
      "excerpt": "Summary here."
    }
  ]
}
```

### Update Skills
```json
{
  "skills": [
    {
      "category": "New Category",
      "items": ["Skill1", "Skill2", "Skill3"]
    }
  ]
}
```

**After edits:**
```bash
git add public/portfolio.json
git commit -m "Update portfolio: added new project"
git push origin main
```

GitHub Actions auto-deploys in 2-3 minutes.

---

## Troubleshooting

**Site not deploying?**
- Check GitHub Actions tab in repo → view logs
- Ensure `homepage` in package.json matches your GitHub Pages URL

**Images not loading?**
- Images live in `public/` folder
- Reference in components: `/Portfolio/dinesh_headshot.png`

**Dark mode not persisting?**
- Uses `localStorage` — clear browser cache if needed

---

## Key Files to Remember

- **Data:** `public/portfolio.json` (your single source of truth)
- **Styling:** `src/App.css` (colors, fonts, layout)
- **Deploy:** `.github/workflows/deploy.yml` (auto-deployment)
- **Meta:** `public/index.html` (SEO tags, title, favicon)

---

## Next Steps

1. **Publish Medium articles** — update `publications` in JSON
2. **Make GitHub repos public** — recruiters find them easier
3. **Add custom domain** (optional) — update `package.json` homepage + add CNAME
4. **Customize colors** — edit `:root` in `src/App.css`

---

You're live. Update JSON only. Never touch components. Scalable forever.
