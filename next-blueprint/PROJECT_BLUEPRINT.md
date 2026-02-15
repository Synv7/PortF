# Synthiv Consulting — Next.js 14+ Project Blueprint

**Complete modern marketing website boilerplate with production-ready architecture.**

## 📦 What's Included

✅ **Next.js 14** — App Router, SSR/SSG, TypeScript  
✅ **Tailwind CSS** — Design tokens, utility-first styling  
✅ **babylon.js** — 3D hero background with WebGL  
✅ **Framer Motion** — Scroll animations, parallax effects  
✅ **Responsive Design** — Mobile-first, hamburger menu  
✅ **Accessibility** — ARIA labels, reduced-motion support  
✅ **TypeScript** — Full type safety  

## 🎨 Design System

**Color Palette:**
- Base Light: `#F9FAFB`
- Dark Accent: `#111827`
- Primary Accent Glow: `#4ADE80` (green)
- Neutral Gray: `#6B7280`

**Typography:**
- Headings: GT America Bold / 900 weight
- Body: Inter Regular / 400 weight
- Hero: 4rem, Section Titles: 2.5rem

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open browser
open http://localhost:3000
```

For detailed setup, see [SETUP.md](./SETUP.md).

## 📂 Project Structure

```
next-blueprint/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── providers.tsx      # Context wrapper
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky header
│   │   ├── HeroSection.tsx    # Hero with babylon.js
│   │   ├── ServicesSection.tsx
│   │   ├── BabylonBackground.tsx
│   │   ├── ScrollIndicator.tsx
│   │   ├── ScrollAnimations.tsx  # Animation helpers
│   │   └── Card.tsx
│   ├── lib/
│   │   └── babylon-setup.ts
│   └── styles/
│       └── globals.css
├── tailwind.config.ts         # Design tokens
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## ⚡ Features

### 1. Hero Section
- babylon.js 3D animated background
- Overlay content with fade-in animations
- CTA buttons with hover effects
- Floating pill badges

### 2. Navigation
- Sticky header with backdrop blur
- Transparent over hero
- Desktop nav + mobile hamburger
- Scroll-spy ready

### 3. 3D Card Grid
- Responsive 2-4 column layout
- Hover lift + shadow effects
- Parallax on scroll
- Staggered animations

### 4. Scroll Interactions
- **Scroll Indicator:** Animated arrow (hides near bottom)
- **Parallax:** Subtle motion on card scroll
- **Fade-Ins:** Sections animate on viewport enter
- **Reduced Motion:** Full accessibility support

### 5. Animations
- Framer Motion scroll-triggered
- Custom Tailwind keyframes
- 60fps hardware-accelerated
- Respects `prefers-reduced-motion`

## 🛠 Development

### Add a Section

1. Create `src/components/[Section]Section.tsx`:
```tsx
'use client'
import { FadeInUp } from '@/components/ScrollAnimations'

export default function NewSection() {
  return (
    <section id="new" className="py-24">
      <FadeInUp>
        <h2 className="section-title">Title</h2>
      </FadeInUp>
    </section>
  )
}
```

2. Import in `src/app/page.tsx`
3. Add nav link in `src/components/Navbar.tsx`

### Customize Design
- **Colors:** Edit `tailwind.config.ts`
- **Fonts:** Update `src/styles/globals.css`
- **Animation:** Modify `src/components/ScrollAnimations.tsx`
- **babylon.js:** Tune `src/lib/babylon-setup.ts`

### Deploy
```bash
npm run build
npm start
```

Or deploy to **Vercel** (recommended):
```bash
vercel deploy
```

## 📖 Documentation

- [README.md](./README.md) — Full architecture guide
- [SETUP.md](./SETUP.md) — Installation & troubleshooting
- [.github/copilot-instructions.md](./.github/copilot-instructions.md) — AI agent guide

## ✨ Highlights

✅ **Production-ready** — No placeholder hacks  
✅ **Type-safe** — Full TypeScript coverage  
✅ **Responsive** — Works on mobile, tablet, desktop  
✅ **Accessible** — WCAG 2.1 compliant  
✅ **Performant** — Static rendering, code splitting  
✅ **SEO-friendly** — Next.js metadata, semantic HTML  

## 🎯 Next Steps

1. Customize brand colors in `tailwind.config.ts`
2. Update content in `HeroSection.tsx`
3. Add additional sections (About, Work, FAQ, Contact)
4. Replace babylon.js background or adjust shader
5. Deploy to Vercel or your hosting

## 📞 Support

See [.github/copilot-instructions.md](./.github/copilot-instructions.md) for AI agent-friendly development guides.

---

**Made with modern web standards. Built for scale.**
