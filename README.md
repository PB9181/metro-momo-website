# METRO MOMO — Franchise Website

A multi-page, image-rich franchise website for **METRO MOMO**.

- React + Vite + TypeScript + React Router
- Multi-page structure: Home, About, Models, How It Works, FAQ, Contact
- AI-generated placeholder images
- Fun, bold, illustrative design with CSS animations
- Mobile-first responsive layout
- Ready to deploy to Cloudflare Pages, Vercel, Netlify, or any static host

---

## Quick start

```bash
# Install dependencies
npm install

# Copy the AI-generated placeholder images into the public folder
.\copy-ai-images.ps1

# Run local dev server
npm run dev
```

Open `http://localhost:5173`.

---

## Project structure

```
metro-momo-website/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── copy-ai-images.ps1       # copies AI-generated images into public/
├── public/
│   ├── metro-momo-icon.svg
│   ├── hero-momos.png
│   ├── about-community.png
│   ├── model-stall.png
│   ├── model-kiosk.png
│   ├── model-restaurant.png
│   ├── jhol-momo.png
│   └── menu-fried-momo.png
├── src/
│   ├── index.css              # global styles + brand variables
│   ├── main.tsx
│   ├── App.tsx                # router setup
│   ├── vite-env.d.ts
│   ├── components/
│   │   ├── Logo.tsx           # METRO MOMO SVG logo
│   │   ├── Nav.tsx            # top navigation
│   │   └── Footer.tsx         # site footer
│   └── pages/
│       ├── Home.tsx
│       ├── About.tsx
│       ├── Models.tsx
│       ├── HowItWorks.tsx
│       ├── FAQ.tsx
│       ├── Contact.tsx
│       └── NotFound.tsx
```

---

## Pages

| Page | Route | What it shows |
|------|-------|---------------|
| Home | `/` | Hero, brand intro, franchise model preview, stats, CTA |
| About | `/about` | Story, values, culture |
| Models | `/models` | Franchise formats with pricing and comparison table |
| How It Works | `/how-it-works` | 6-step application-to-launch timeline |
| FAQ | `/faq` | Accordion questions and answers |
| Contact | `/contact` | Application form and contact details |
| 404 | `*` | Playful not-found page |

---

## Customize the brand

All brand colors are controlled from `src/index.css` in the `:root` block:

```css
:root {
  --mm-red: #D90429;        /* primary red */
  --mm-orange: #FF6D00;     /* secondary orange */
  --mm-gold: #FFAA00;       /* accent gold */
  --mm-cream: #FFF3E6;      /* warm surface background */
  --mm-warm-white: #FFFAF5; /* main page background */
  --mm-dark: #1A1A1A;       /* text color */
  --mm-gray: #5C5C5C;       /* muted text */
}
```

Changing these variables updates the entire site.

### Logo

The logo is an SVG React component in `src/components/Logo.tsx`. It shows:

- **METRO** on the first line
- **MOMO** on the second line
- Three small dumpling illustrations underneath

Edit the SVG paths to refine the logo, or replace the `<Logo />` usage in `Nav.tsx` and `Footer.tsx` with an `<img>` tag if you have a final logo file.

### Images

AI-generated placeholder images are saved by the generation tool in:

```
C:\Users\bhatt\.cursor\projects\c-Users-bhatt-OneDrive-Desktop-Fewa-Resto-App\assets\
```

Run `copy-ai-images.ps1` to copy them into the project's `public/` folder. To use your own images, replace the files in `public/` and update the filenames in the page components (search for `/image-name.png` in `src/pages/`).

### Content

Page content is split across `src/pages/*.tsx`. Each page is a self-contained React component with its own scoped styles, so edits are easy and localized.

---

## Deploy to Cloudflare Pages

1. Build the project:

```bash
npm run build
```

2. Connect your GitHub repository to Cloudflare Pages.

3. Use these settings:
   - Build command: `npm run build`
   - Build output directory: `dist`

4. Deploy.

For GitHub Pages, set the `base` option in `vite.config.ts` to match your repository path.

---

## Future integration

This site is intentionally separate from the Fewa Resto App so it can be hosted independently. As the franchise grows, you can link public ordering, booking, or owner-portal flows from the app into the website without changing the marketing structure.

---

## License

Private — for METRO MOMO franchise use.
