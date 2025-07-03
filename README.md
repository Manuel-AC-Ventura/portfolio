# Manuel Ventura Portfolio

![Preview](./public/vite.svg)

A modern, responsive, and multilingual portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- ⚡️ Fast and modern stack: React + Vite + TypeScript
- 🎨 Responsive design with Tailwind CSS
- 🌙 Dark/Light mode toggle
- 🌍 Internationalization (i18n) with Portuguese and English
- 🧩 Modular and reusable components
- 🏆 Projects showcase with dynamic content
- 💼 Professional experience timeline
- 📱 Mobile-first and desktop-optimized
- ✨ Smooth animations and hover effects
- 📬 Contact form with theme-aware styling

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Deploy

You can deploy this portfolio to Vercel, Netlify, or GitHub Pages. For GitHub Pages:

1. Build the project: `pnpm build`
2. Deploy the contents of the `dist` folder to your `gh-pages` branch or root branch.

## Folder Structure

```
├── public/           # Static assets (images, icons, etc)
├── src/
│   ├── components/   # React components (Header, Footer, About, Skills, Projects, Experience)
│   ├── context/      # Theme and language context providers
│   ├── hooks/        # Custom React hooks
│   ├── i18n/         # Internationalization setup and translation files
│   └── assets/       # SVGs and other assets
├── index.html        # Main HTML file
├── package.json      # Project metadata and scripts
└── ...
```

## Customization

- Edit `src/i18n/locales/pt.json` and `en.json` for your own translations.
- Add your projects in `public/projects.json` and images in `public/projects/`.
- Update experience data in `src/components/Experience.tsx` and translations.
- Change theme colors in `tailwind.config.js` if needed.

## Author

**Manuel Ventura**  
[GitHub](https://github.com/Manuel-AC-Ventura)  
[LinkedIn](https://linkedin.com/in/manuel-ac-ventura)

---

MIT License
