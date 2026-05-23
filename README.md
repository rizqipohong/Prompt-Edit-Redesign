# Prompt Edit Sales Page Redesign

A Laravel + Inertia + Vue + TypeScript + Tailwind implementation for redesigning the existing Prompt Edit sales page with a visual direction inspired by Higgsfield.

## Stack

- Laravel 11
- Inertia.js 2
- Vue 3
- TypeScript
- Tailwind CSS
- PostgreSQL-ready environment config
- AWS S3 filesystem support
- Laravel Scout + Typesense search config

## Main Files

- `resources/js/Pages/Welcome.vue` - redesigned sales page
- `resources/js/Pages/AiStudio.vue` - AI model generation workspace mockup
- `vercel-site/src/App.vue` - Vercel-deployable static sales page version
- `extension-prototype/src/App.tsx` - React + Tailwind Premiere/DaVinci extension mockup
- `routes/web.php` - Inertia entry route
- `config/scout.php` - Typesense-ready Scout config
- `.env.example` - PostgreSQL, AWS S3, and Typesense environment template

## Local Setup

Use PHP 8.2+ and Node 18+.

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
npm run build
php artisan serve
```

For local preview without PostgreSQL, you can keep `.env` on SQLite as scaffolded by Laravel. The `.env.example` is configured to show the intended production-style stack.

## Dev Server

```bash
npm run dev
php artisan serve
```

Then open:

```text
http://127.0.0.1:8000
```

AI Studio mockup:

```text
http://127.0.0.1:8000/ai-studio
```

## Vercel Deployment

Deploy `vercel-site` when you need a Vercel URL that looks like the sales page.

```bash
cd vercel-site
npm install
npm run build
```

Vercel settings:

```text
Root Directory: vercel-site
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## Editor Extension Prototype

The extension prototype is a separate React + Tailwind app, matching the stated Premiere Pro and DaVinci Resolve extension stack.

```bash
cd extension-prototype
npm install
npm run dev
```

Then open:

```text
http://127.0.0.1:5174
```

## Design Direction

The page keeps the Prompt Edit offer but changes the experience from a long sales letter into a modern AI marketplace landing page:

- Dark, media-heavy visual style
- Tool category cards for image, video, audio, and editing plugins
- Model chips for Veo, Nano Banana, KlingAI, Seedance, HeyGen, ElevenLabs, and more
- Clear credit-based pricing comparison
- Condensed template-library bonus section
- Mobile-responsive navigation and sections
- AI Studio product UI for model selection, prompt entry, credit estimates, generation queue, and output review
- React extension UI for generating assets from the active editing timeline
