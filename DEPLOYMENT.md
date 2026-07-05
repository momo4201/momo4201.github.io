# Deploying This Portfolio to GitHub Pages

This is a fully static site (`index.html`, `styles.css`, `script.js`) — no build step is required. There are two ways to host it; **Option A** is recommended because it gives you the cleanest URL.

---

## Option A — User Site: `https://momo4201.github.io` (recommended)

GitHub gives every account exactly one "user site" repository. Its name **must** be `<username>.github.io`.

### Step 1 — Create the repository (GitHub UI)

1. Log in to GitHub as **momo4201**.
2. Click the **+** icon (top-right) → **New repository**.
3. Repository name: `momo4201.github.io` (exactly this — the name is what activates a user site).
4. Visibility: **Public** (required for GitHub Pages on the free plan).
5. Leave "Add a README" **unchecked** (we're pushing existing files).
6. Click **Create repository**.

### Step 2 — Push the code (terminal)

Open a terminal (PowerShell or Git Bash) and run:

```bash
cd E:\manaswita-portfolio

# Initialize a git repository and make the first commit
git init
git add index.html styles.css script.js README.md DEPLOYMENT.md
git commit -m "Initial commit: academic portfolio site"

# Point it at GitHub and push
git branch -M main
git remote add origin https://github.com/momo4201/momo4201.github.io.git
git push -u origin main
```

> If git asks who you are first, set your identity once:
> ```bash
> git config --global user.name "Manaswita Ghose"
> git config --global user.email "ghosemomo@gmail.com"
> ```
> When pushing, GitHub will prompt you to sign in (browser window or a Personal Access Token — create one at **Settings → Developer settings → Personal access tokens** if needed).

### Step 3 — Verify Pages is enabled (GitHub UI)

For a `<username>.github.io` repository, Pages is enabled automatically, but to confirm:

1. Open the repository on GitHub → **Settings** tab.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/ (root)** → click **Save** if you changed anything.
4. Wait 1–2 minutes, then refresh — a banner appears: *"Your site is live at `https://momo4201.github.io`"*.

### Step 4 — Visit your site

Open **https://momo4201.github.io** 🎉

---

## Option B — Project Site: `https://momo4201.github.io/portfolio`

Use this if you want to keep `momo4201.github.io` for something else.

1. Create a new **public** repository named anything, e.g. `portfolio`.
2. Push the same way, just with a different remote URL:

```bash
cd E:\manaswita-portfolio
git init
git add .
git commit -m "Initial commit: academic portfolio site"
git branch -M main
git remote add origin https://github.com/momo4201/portfolio.git
git push -u origin main
```

3. On GitHub: repository → **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main** / **(root)** → **Save**.
4. After ~1 minute the site is live at `https://momo4201.github.io/portfolio/`.

---

## No-terminal alternative (pure UI upload)

1. Create the repository as in Step 1 above.
2. On the empty-repository page, click **"uploading an existing file"**.
3. Drag `index.html`, `styles.css`, and `script.js` into the upload area.
4. Click **Commit changes**.
5. Enable Pages as in Step 3 above.

---

## Updating the site later

Every push to `main` redeploys automatically (takes ~1 minute):

```bash
cd E:\manaswita-portfolio
git add .
git commit -m "Update publications"
git push
```

## Testing locally before you push

Just double-click `index.html`, or serve it properly:

```bash
cd E:\manaswita-portfolio
python -m http.server 8000
# then open http://localhost:8000
```

## Troubleshooting

| Symptom | Fix |
|---|---|
| 404 after enabling Pages | Wait 2–3 minutes; confirm the file is named exactly `index.html` and sits at the repository root. |
| Site shows README instead of the portfolio | Pages source folder must be **/ (root)** on branch **main**. |
| Icons missing | Font Awesome loads from a CDN — check your internet connection / adblocker. |
| Changes not appearing | Hard-refresh with `Ctrl+F5` (GitHub Pages caches aggressively). |
