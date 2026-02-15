# AI Coding Agent Instructions — Synthiv Next.js Blueprint

## Project Overview

Modern marketing website for Synthiv Consulting, built with **Next.js 14+, Tailwind CSS, babylon.js 3D, and Framer Motion**. Single-page scrolling experience with light palette, dark accents, and 3D card grids.

## Architecture

### Core Stack

- **Framework:** Next.js 14 App Router (file-based routing, SSR/SSG)
- **Styling:** Tailwind CSS (utility-first, design tokens in `tailwind.config.ts`)
- **3D Graphics:** babylon.js (native WebGL, no iframe)
- **Animations:** Framer Motion (scroll-triggered, parallax, stagger)
- **UI:** @headlessui/react (accessible components)

### Folder Structure

```
src/
├── app/                # Next.js App Router
│   ├── layout.tsx      # Root layout + metadata
│   ├── page.tsx        # Home entry point
│   └── providers.tsx   # Context/providers wrapper
├── components/         # React components
│   ├── Navbar.tsx      # Sticky header (transparent over hero)
│   ├── HeroSection.tsx # Hero with babylon.js background
│   ├── *Section.tsx    # Content sections (Services, Work, FAQ, etc.)
│   ├── BabylonBackground.tsx # Canvas initialization
│   ├── ScrollIndicator.tsx   # Animated scroll guide
│   ├── ScrollAnimations.tsx  # Framer Motion helpers (FadeInUp, ScaleIn, etc.)
│   └── Card.tsx        # Reusable 3D card component
├── lib/
│   └── babylon-setup.ts      # Babylon.js scene creation
└── styles/
    └── globals.css           # Tailwind @directives + custom CSS
```

## Design System

### Color Tokens (in `tailwind.config.ts`)

```js
'synthiv-light': '#F9FAFB'   // Off-white base
'synthiv-dark': '#111827'    // Charcoal accent
'synthiv-accent': '#4ADE80'  // Green glow
'synthiv-neutral': '#6B7280' // Mid-gray text
```

### Typography

- **Headings:** `font-gt-america` (700/900 weight)
- **Body:** `font-inter` (400 weight)
- **Scales:** `text-hero` (4rem), `text-section-title` (2.5rem)
- **Font fallbacks:** System stack ensures rendering without web fonts

### Responsive Breakpoints

- `md:` → 768px (hamburger menu activates)
- `lg:` → 1024px (wider grids)
- Grid: Mobile 1-col → Tablet 2-col → Desktop 3-4 col

## Key Patterns

### 1. Scroll Animations

Use `ScrollAnimations.tsx` primitives:

```tsx
// Fade in + slide up
<FadeInUp delay={0.2}>
  <h2>Heading</h2>
</FadeInUp>

// Scale in
<ScaleIn delay={0.1}>
  <Card />
</ScaleIn>

// Parallax on scroll
<ParallaxContainer>
  <div>Content moves up subtly as you scroll</div>
</ParallaxContainer>
```

### 2. babylon.js Background

[src/lib/babylon-setup.ts](../src/lib/babylon-setup.ts) creates a scene with:
- Animated sphere (rotates on X/Y, moves on Z axis)
- Light setup with clear color
- Auto-resize on window resize
- Render loop via `engine.runRenderLoop()`

**To customize:**
- Change sphere material: `material.emissiveColor = new BABYLON.Color3(...)`
- Adjust speed: Modify rotation coefficients in `registerBeforeRender`
- Lighting: `light.intensity` or add extra lights

### 3. Navbar Behavior

[src/components/Navbar.tsx](../src/components/Navbar.tsx):
- Sticky header with `backdrop-blur-md` (blurred background)
- Transparent base (`bg-synthiv-light/70`)
- Desktop nav + mobile hamburger (toggles menu state)
- Auto-close on link click or outside click

### 4. 3D Card Grid

Cards have:
- `hover:-translate-y-6` (lift on hover)
- `hover:shadow-lg` (shadow depth)
- `transform-style: preserve-3d` (via Tailwind `card-3d` class)
- Staggered animations via `delay` prop

Example:
```tsx
{items.map((item, i) => (
  <ScaleIn key={item.id} delay={i * 0.1}>
    <Card title={item.title} description={item.desc} />
  </ScaleIn>
))}
```

### 5. Scroll Indicator

[src/components/ScrollIndicator.tsx](../src/components/ScrollIndicator.tsx):
- Animated arrow at bottom center
- Shows when scrollProgress < 0.85
- Bounces up/down with infinite animation
- Hides when user scrolls near bottom

## Common Workflows

### Add a New Section

1. Create `src/components/[SectionName]Section.tsx`:

```tsx
'use client'

import { FadeInUp } from '@/components/ScrollAnimations'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-synthiv-light">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInUp>
          <h2 className="section-title text-synthiv-dark mb-8">
            About Us
          </h2>
        </FadeInUp>
        {/* Content */}
      </div>
    </section>
  )
}
```

2. Import in [src/app/page.tsx](../src/app/page.tsx):

```tsx
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      {/* More sections */}
    </main>
  )
}
```

3. Add nav link in [src/components/Navbar.tsx](../src/components/Navbar.tsx):

```tsx
const navLinks = [
  { label: 'About', href: '#about' },
  // ...
]
```

### Customize Colors

Edit [tailwind.config.ts](../tailwind.config.ts):

```ts
colors: {
  'synthiv-light': '#F9FAFB',
  'synthiv-accent': '#22C55E', // Change green to different shade
}
```

Rebuild: `npm run dev` (Tailwind watches file)

### Modify Babylon Background

Edit [src/lib/babylon-setup.ts](../src/lib/babylon-setup.ts):

```ts
// Change background color
scene.clearColor = new BABYLON.Color4(0.95, 0.95, 0.95, 1)

// Adjust animation speed
sphere.rotation.y += 0.003 // Faster

// Change material
material.diffuse = new BABYLON.Color3(1, 0.5, 0) // Orange
```

## Performance Considerations

- ✅ Use `'use client'` only on interactive components
- ✅ Wrap animations in `<FadeInUp>` to avoid initial layout shift
- ✅ Lazy load images with `next/image`
- ✅ Code split sections via dynamic imports if needed
- ✅ Respect `prefers-reduced-motion` (handled by `globals.css`)

## Accessibility

- ✅ Semantic HTML (sections with IDs for scroll-spy)
- ✅ ARIA labels on buttons, links
- ✅ Keyboard navigation (Tab through nav, buttons)
- ✅ High contrast: Dark text on light background
- ✅ Reduced motion support: Animations disabled if user prefers

## Deployment

```bash
# Vercel (recommended for Next.js)
npm install -g vercel
vercel

# Or build + start
npm run build
npm start
```

## External Dependencies

- None for build infrastructure
- babylon.js loaded via npm
- Framer Motion for animations
- Tailwind CSS via CDN or npm (already in config)

## Development Checklist

- [ ] Sections have unique `id` attributes (for scroll-spy)
- [ ] All interactive elements use Framer Motion wrappers
- [ ] Navigation links match section IDs
- [ ] Dark text is readable on light backgrounds
- [ ] Mobile responsive (test at 768px breakpoint)
- [ ] Animations respect `prefers-reduced-motion`
- [ ] babylon.js canvas resizes with window
- [ ] All components use TypeScript (type safety)
