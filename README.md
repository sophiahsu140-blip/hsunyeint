# Hsu Nyeint Thu — Portfolio

Responsive React + Tailwind CSS portfolio built with Vite. The design uses soft lavender, ivory, and a classic editorial serif. Includes an uploaded personal portrait.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

The deployable static website is generated in `dist/`.

## Publish to GitHub Pages

**Recommended: GitHub Actions**

1. Create a GitHub repository (for example `portfolio`) and push this project.
2. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
3. The workflow at `.github/workflows/deploy.yml` deploys whenever you push to `main`.
4. The resulting website is usually `https://YOUR-USERNAME.github.io/portfolio/`. For a user site, name the repository `YOUR-USERNAME.github.io`.

The Vite `base: './'` setting works for either repository or user Pages URLs.

## Personalize before sharing

- In `src/main.jsx`, update your professional bio, exact employment dates, full education history, and publication links.
- Replace `public/portrait.png` with another image if you prefer. The included image was supplied in the conversation.
- Add a public email address only if you wish to publish it.
- Add your PDF CV to `public/cv.pdf` and link to `./cv.pdf` in the hero.
- Confirm award names, certifications, and publication details before publishing.
- Update the social URLs in the `links` object near the top of `src/main.jsx`.

This site deliberately does not invent previous employers, degree dates, DOI links, or confidential work details.
