# Setup Instructions — Synthiv Next.js Blueprint

## Prerequisites

- **Node.js:** 18+ ([download](https://nodejs.org/))
- **npm:** 9+ (comes with Node)
- **Git** (optional, for version control)

## Installation & Setup

### 1. Install Dependencies

```bash
cd next-blueprint
npm install
```

This installs:
- `next` (framework)
- `react` + `react-dom` (UI library)
- `tailwindcss` (styling)
- `babylon.js` (3D graphics)
- `framer-motion` (animations)
- `@headlessui/react` (accessible components)

### 2. Run Development Server

```bash
npm run dev
```

Output:
```
> next dev
  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.4s
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Start Developing

Edit files in `src/` — changes hot-reload automatically:

- **Add components:** Create `.tsx` files in `src/components/`
- **Edit styles:** Modify `src/styles/globals.css` or use Tailwind classes
- **Update config:** Edit `tailwind.config.ts` for design tokens

### 4. Build for Production

```bash
npm run build
npm start
```

Creates optimized build in `.next/` directory.

## Folder Quick Reference

| Folder | Purpose |
|--------|---------|
| `src/app/` | Next.js App Router pages + layout |
| `src/components/` | Reusable React components |
| `src/lib/` | Utilities (babylon setup, helpers) |
| `src/styles/` | Global CSS + Tailwind |
| `public/` | Static assets (images, fonts, etc.) |

## Quick Edits

### Change Hero Background Color

**File:** `tailwind.config.ts`

```ts
colors: {
  'synthiv-light': '#F5F5F5', // Edit this
}
```

Then rebuild: `npm run dev`

### Add Navigation Link

**File:** `src/components/Navbar.tsx`

```ts
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'New Link', href: '#new-section' }, // Add here
]
```

### Create New Section

**File:** `src/components/NewSection.tsx`

```tsx
'use client'

import { FadeInUp } from '@/components/ScrollAnimations'

export default function NewSection() {
  return (
    <section id="new-section" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInUp>
          <h2 className="section-title">New Section</h2>
        </FadeInUp>
      </div>
    </section>
  )
}
```

Then add to `src/app/page.tsx`:

```tsx
import NewSection from '@/components/NewSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewSection />
    </main>
  )
}
```

## Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- -p 3001
```

Opens on http://localhost:3001

### babylon.js Canvas Not Rendering

1. Check browser supports WebGL: https://get.webgl.org/
2. Open browser console for errors (F12)
3. Restart dev server: `Ctrl+C`, then `npm run dev`

### Tailwind Classes Not Applying

```bash
# Clear cache and rebuild
rm -rf .next node_modules/.cache
npm run dev
```

### TypeScript Errors

Ensure your component has `'use client'` directive if using React hooks:

```tsx
'use client'

import { useState } from 'react'

export default function MyComponent() {
  const [state, setState] = useState(0)
  // ...
}
```

## Next Steps

1. ✅ Run `npm run dev` and open http://localhost:3000
2. ✅ Edit text in `src/components/HeroSection.tsx`
3. ✅ Add more sections (About, Work, FAQ, Contact)
4. ✅ Customize colors in `tailwind.config.ts`
5. ✅ Deploy to Vercel when ready

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [babylon.js Docs](https://www.babylonjs-playground.com/)

---

**Need help?** Check the `.github/copilot-instructions.md` for AI agent guidance.
