# Synthiv Consulting — Project Blueprint Summary

## 🎯 What You're Getting

A **production-ready Next.js 14+ marketing website** with:

```
┌─────────────────────────────────────────────────────────┐
│  SYNTHIV CONSULTING — MODERN MARKETING SITE             │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  🎬 HERO SECTION                                        │
│  ├─ babylon.js 3D background (animated sphere)          │
│  ├─ Overlay content with fade-in animations             │
│  ├─ CTA buttons + floating badges                       │
│  └─ Scroll indicator (animated arrow)                   │
│                                                         │
│  📱 RESPONSIVE NAVBAR                                   │
│  ├─ Sticky header with backdrop blur                    │
│  ├─ Desktop nav + mobile hamburger menu                 │
│  ├─ Transparent over hero                              │
│  └─ Scroll-spy ready                                    │
│                                                         │
│  🎨 SERVICES SECTION (3D Card Grid)                    │
│  ├─ 2-column layout on desktop                          │
│  ├─ Hover lift + shadow effects                         │
│  ├─ Parallax on scroll                                  │
│  ├─ Staggered entrance animations                       │
│  └─ Responsive: 1-col mobile → 2-col tablet → grid     │
│                                                         │
│  ✨ ADDITIONAL SECTIONS (Ready to Add)                  │
│  ├─ AboutSection.tsx (with SlideInLeft animations)      │
│  ├─ WorkSection (portfolio grid)                        │
│  ├─ FAQSection (accordion)                              │
│  ├─ ContactSection.tsx (form + dark background)         │
│  └─ [Create your own!]                                 │
│                                                         │
│  🎭 INTERACTIONS                                        │
│  ├─ Scroll fade-ins (FadeInUp, ScaleIn, SlideInLeft)   │
│  ├─ Parallax effects (subtle upward motion)             │
│  ├─ Button hover animations                             │
│  ├─ Reduced motion support                              │
│  └─ Smooth scroll behavior                              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## 📐 Design System at a Glance

| Aspect | Value |
|--------|-------|
| **Base Color** | #F9FAFB (off-white) |
| **Dark Accent** | #111827 (charcoal) |
| **Primary Glow** | #4ADE80 (green) |
| **Text (Neutral)** | #6B7280 (gray) |
| **Font (Heading)** | GT America Bold / 900 |
| **Font (Body)** | Inter Regular / 400 |
| **Hero Size** | 4rem bold |
| **Section Title** | 2.5rem bold |
| **Border Radius** | 12px (cards) to 24px (larger) |
| **Breakpoint (Mobile)** | 768px (hamburger activates) |

## 🛠 Tech Stack

```
┌──────────────────────────────────────────────────┐
│  NEXT.JS 14+ (Framework)                         │
│  ├─ App Router (file-based routing)              │
│  ├─ SSR / SSG (static rendering)                 │
│  ├─ TypeScript (type safety)                     │
│  └─ Built-in API routes (if needed later)        │
│                                                  │
│  TAILWIND CSS (Styling)                          │
│  ├─ Utility-first design                         │
│  ├─ Custom design tokens in config               │
│  ├─ Responsive breakpoints                       │
│  └─ Dark mode ready                              │
│                                                  │
│  BABYLON.JS (3D Graphics)                        │
│  ├─ Native WebGL (no iframe)                     │
│  ├─ Animated sphere in hero                      │
│  ├─ Auto-resize on window size                   │
│  └─ Customizable scene & lighting                │
│                                                  │
│  FRAMER MOTION (Animations)                      │
│  ├─ Scroll-triggered animations                  │
│  ├─ Parallax effects                             │
│  ├─ Stagger delays                               │
│  ├─ Hardware-accelerated (60fps)                 │
│  └─ Respects prefers-reduced-motion              │
│                                                  │
│  @HEADLESSUI/REACT (Accessible UI)               │
│  ├─ Menu components                              │
│  ├─ Aria labels & roles                          │
│  └─ Keyboard navigation                          │
│                                                  │
└──────────────────────────────────────────────────┘
```

## 📁 File Organization

```
next-blueprint/
│
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx          ← Root layout + metadata
│  │  ├─ page.tsx            ← Home page (imports sections)
│  │  └─ providers.tsx       ← Context wrapper
│  │
│  ├─ components/            ← Reusable React components
│  │  ├─ Navbar.tsx
│  │  ├─ HeroSection.tsx
│  │  ├─ ServicesSection.tsx
│  │  ├─ AboutSection.tsx    ← NEW: Ready to use
│  │  ├─ ContactSection.tsx  ← NEW: Ready to use
│  │  ├─ BabylonBackground.tsx
│  │  ├─ ScrollIndicator.tsx
│  │  ├─ ScrollAnimations.tsx ← Animation helpers
│  │  └─ Card.tsx
│  │
│  ├─ lib/
│  │  └─ babylon-setup.ts     ← babylon.js initialization
│  │
│  └─ styles/
│     └─ globals.css          ← Tailwind + custom CSS
│
├─ tailwind.config.ts         ← Design tokens (colors, fonts)
├─ next.config.js             ← Next.js config
├─ tsconfig.json              ← TypeScript config
├─ postcss.config.js          ← PostCSS (Tailwind processor)
│
├─ package.json               ← Dependencies
├─ README.md                  ← Full documentation
├─ SETUP.md                   ← Installation guide
├─ PROJECT_BLUEPRINT.md       ← Overview (this file)
├─ .github/copilot-instructions.md ← AI agent guide
│
└─ .gitignore                 ← Git exclusions
```

## 🚀 Quick Start (3 Steps)

### Step 1: Install
```bash
cd next-blueprint
npm install
```

### Step 2: Run
```bash
npm run dev
```

### Step 3: Open
```
http://localhost:3000
```

**That's it!** You're now running a full Next.js dev server with hot-reload.

## ✏️ Common Edits

| Task | File | Example |
|------|------|---------|
| Change hero text | `src/components/HeroSection.tsx` | Line ~20 |
| Add nav link | `src/components/Navbar.tsx` | `navLinks` array |
| Change brand colors | `tailwind.config.ts` | `colors` object |
| Customize babylon.js | `src/lib/babylon-setup.ts` | `scene.clearColor` |
| Add new section | `src/components/NewSection.tsx` | Copy `AboutSection.tsx` template |
| Update layout | `src/app/layout.tsx` | Metadata, fonts, head |

## 🎬 Animation Primitives

```tsx
// Use these in any component:

<FadeInUp delay={0.2}>
  <h2>Fades in + slides up</h2>
</FadeInUp>

<ScaleIn delay={0.1}>
  <Card />
</ScaleIn>

<SlideInLeft delay={0.15}>
  <div>Slides in from left</div>
</SlideInLeft>

<ParallaxContainer>
  <div>Moves up subtly on scroll</div>
</ParallaxContainer>
```

All animations **respect** `prefers-reduced-motion` automatically.

## 🔧 Production Deployment

```bash
# Build for production
npm run build

# Test production build locally
npm start

# Deploy to Vercel (recommended)
vercel deploy

# Or deploy anywhere Node.js runs
npm run build
npm start
```

## 📊 Included Sections

✅ **HeroSection** — babylon.js + content overlay  
✅ **ServicesSection** — 3D card grid with animations  
✅ **AboutSection** — Feature cards with parallax  
✅ **ContactSection** — Form + dark background  
⬜ **Work/Portfolio** — Template available, add your projects  
⬜ **FAQ** — Accordion component (ready to build)  

## 🎯 Next Steps

1. **Customize Brand**
   - Edit colors in `tailwind.config.ts`
   - Update hero text in `HeroSection.tsx`
   - Replace babylon.js background with your own shader

2. **Add Content**
   - Populate `AboutSection.tsx` with your story
   - Update `ServicesSection.tsx` with your offerings
   - Create `WorkSection.tsx` for portfolio

3. **Deploy**
   - `npm run build` → verify no errors
   - Deploy to Vercel: `vercel deploy`
   - Custom domain: Vercel settings

4. **Iterate**
   - A/B test headlines (change in `HeroSection.tsx`)
   - Adjust animations (faster/slower in `ScrollAnimations.tsx`)
   - Add new sections (copy `AboutSection.tsx` as template)

## 📚 Documentation

- **[README.md](./README.md)** — Full architecture & patterns
- **[SETUP.md](./SETUP.md)** — Installation & troubleshooting
- **[.github/copilot-instructions.md](./.github/copilot-instructions.md)** — AI agent developer guide

## ✨ Key Features Summary

| Feature | Status | Details |
|---------|--------|---------|
| Responsive Design | ✅ | Mobile-first, tablets, desktop |
| Accessibility | ✅ | WCAG 2.1, ARIA labels, keyboard nav |
| Performance | ✅ | Static rendering, code splitting, 60fps animations |
| Dark Mode Ready | ✅ | Toggle support (add in `Navbar.tsx`) |
| SEO Optimized | ✅ | Next.js metadata, semantic HTML |
| TypeScript | ✅ | Full type safety across codebase |
| CI/CD Ready | ✅ | Works with GitHub Actions, Vercel |

---

## 🎉 You're Ready!

**This blueprint is production-ready.** Customize it, deploy it, own it.

For questions, refer to the documentation files or check the `.github/copilot-instructions.md` for AI agent guidance.

**Happy shipping! 🚀**
