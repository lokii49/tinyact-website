# TinyAct Website Deployment Guide

## Overview
This is an Astro-based static site for tinyact.app. The site is optimized for fast loading and SEO.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment

Push to `main` → GitHub Actions auto-builds and deploys to GitHub Pages → live at tinyact.app.

Workflow: `.github/workflows/deploy.yml`

To trigger manually: GitHub → Actions → "Deploy to GitHub Pages" → Run workflow.

## File Structure After Build

```
dist/
  index.html          # Main page
  privacy-policy.html # Privacy policy
  terms.html          # Terms of service
  favicon.png         # Favicon
  apple-touch-icon.png
  screenshots/        # App screenshots
  assets/             # CSS (minified)
```

## Updating Content

All content is in Astro components:
- `src/components/Hero.astro` - Hero section
- `src/components/Problem.astro` - Problem statement
- `src/components/Accountability.astro` - Partner/Group accountability features
- `src/components/HowItWorks.astro` - 3-step guide
- `src/components/Features.astro` - All features
- `src/components/Widgets.astro` - iOS widgets showcase
- `src/components/SocialProof.astro` - Testimonials
- `src/components/Privacy.astro` - Privacy & trust
- `src/components/FinalCTA.astro` - Final call to action
- `src/components/Footer.astro` - Footer

## Brand Colors (CSS Variables)

```css
--coral: #FF6B5A      /* Primary */
--green: #57C760      /* Success */
--yellow: #FFCC00     /* Warning */
--orange: #FF732E     /* Accent */
--purple: #9466DE     /* Stats */
```

## SEO Checklist

- [x] Meta description
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured data (JSON-LD)
- [x] Semantic HTML
- [x] Alt text on images
- [x] Canonical URL

## Performance

- [x] CSS minified
- [x] HTML compressed
- [x] Images optimized (jpeg for screenshots)
- [x] Fonts preconnected
- [x] No JavaScript framework overhead
