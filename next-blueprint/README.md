# Synthiv Consulting Website — Next.js 14 Blueprint

> Modern marketing website built with Next.js 14+, Tailwind CSS, babylon.js 3D background, and Framer Motion animations

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
open http://localhost:3000
```

## Architecture

### Project Structure
```
next-blueprint/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── page.tsx      # Home page / main entry
│   │   └── providers.tsx # Context providers
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky transparent navbar
│   │   ├── HeroSection.tsx         # Hero with babylon.js background
│   │   ├── ServicesSection.tsx     # Services grid (3D cards)
│   │   ├── BabylonBackground.tsx   # Canvas component
│   │   ├── ScrollIndicator.tsx     # Animated scroll guide
│   │   ├── ScrollAnimations.tsx    # Framer Motion helpers
│   │   └── Card.tsx                # Reusable card component
│   ├── lib/
│   │   └── babylon-setup.ts        # Babylon.js initialization
│   └── styles/
│       └── globals.css              # Global Tailwind + custom styles
├── tailwind.config.ts              # Design tokens (colors, fonts)
├── next.config.js                  # Next.js config
├── tsconfig.json                   # TypeScript config
├── postcss.config.js               # PostCSS for Tailwind
└── package.json                    # Dependencies

```

### Key Technologies

- **Framework:** Next.js 14+ (App Router, SSR)
- **Styling:** Tailwind CSS (utility-first, design consistency)
- **3D Graphics:** babylon.js (native WebGL, subtle motion)
- **Animations:** Framer Motion (scroll-triggered, parallax)
- **UI Headless:** @headlessui/react (accessible components)

## Design System

### Color Palette
```css
--synthiv-light: #F9FAFB      /* Off-white base */
--synthiv-dark: #111827       /* Charcoal accent */
--synthiv-accent: #4ADE80     /* Green glow */
--synthiv-neutral: #6B7280    /* Mid-gray text */
```

### Typography
```
Headings: 'GT America' (900/700 weight) with fallbacks
Body: 'Inter' (400 weight) for readability
Hero: 4rem bold
Section Title: 2.5rem bold
Body: 1rem regular
```

### Responsive Design
- Mobile-first Tailwind breakpoints
- Hamburger menu at `md:` (768px)
- Adaptive grid layouts (2-4 columns)
- Touch-friendly button sizes

## Features

### 1. Hero Section
- Babylon.js 3D background with animated sphere
- Overlay content with fade-in animations
- CTA buttons with hover effects
- Floating pill badges with staggered entrance

### 2. Navigation
- Sticky header with backdrop blur
- Transparent background over hero
- Desktop nav + mobile hamburger
- Active link highlighting (scroll-spy ready)

### 3. Services Grid
- 3D card layout with parallax
- Hover animations (scale, lift, shadow)
- Staggered entrance animations
- Responsive 2-column grid

### 4. Scroll Interactions
- **Scroll Indicator:** Animated arrow that appears on scroll, hides when near bottom
- **Parallax Effects:** Cards and content move subtly on scroll
- **Fade-Ins:** Sections animate in as they enter viewport
- **Reduced Motion:** Full support for `prefers-reduced-motion`

### 5. Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast text
- Reduced motion respects user preferences

## Development Workflow

### Adding a New Section

1. Create component in `src/components/[SectionName].tsx`
2. Wrap content with animation primitives (FadeInUp, ScaleIn, etc.)
3. Import and add to `src/app/page.tsx`
4. Update nav links in `Navbar.tsx`

Example:
```tsx
'use client'

import { FadeInUp } from '@/components/ScrollAnimations'

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInUp>
          <h2 className="section-title">Our Work</h2>
        </FadeInUp>
        {/* Content */}
      </div>
    </section>
  )
}
```

### Customizing Babylon.js Background

Edit `src/lib/babylon-setup.ts`:
- `scene.clearColor` — Background color
- `light.intensity` — Lighting strength
- Sphere properties — Size, material, rotation speed
- Animation loop — Position/rotation math

### Tailwind Config

Design tokens are in `tailwind.config.ts`:
- Add custom colors via `colors` key
- Extend fonts with `fontFamily`
- Add animations in `keyframes`
- Responsive breakpoints via `@media`

## Performance

- ✅ Static rendering (SSG) where possible
- ✅ Optimized images with `next/image`
- ✅ Code splitting via dynamic imports
- ✅ Passive event listeners
- ✅ Hardware-accelerated CSS transforms

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari 14+, Chrome Mobile)

*Note: babylon.js requires WebGL 1.0 support*

## Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npm install -g vercel
vercel

# Or deploy to any Node.js host
npm start
```

## Roadmap / Future Enhancements

- [ ] Add more sections (About, Work, FAQ, Contact)
- [ ] Implement full scroll-spy navigation
- [ ] Add contact form with email integration
- [ ] Performance monitoring (Web Vitals)
- [ ] Blog or case studies section
- [ ] Dark mode toggle
- [ ] Analytics integration

## Troubleshooting

**babylon.js canvas not rendering?**
- Check browser WebGL support (https://get.webgl.org/)
- Verify canvas ref is properly mounted
- Check browser console for shader errors

**Animations feel janky?**
- Disable in DevTools: Settings → Rendering → Disable local fonts
- Test on slower device
- Check Framer Motion docs for optimization

**Tailwind classes not applying?**
- Clear `.next` and `node_modules/.cache`
- Restart dev server: `npm run dev`
- Verify `content` paths in `tailwind.config.ts`

## License

Created for Synthiv Consulting. All rights reserved.
