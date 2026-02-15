# Component Reference — Synthiv Blueprint

**Complete guide to all components, their props, and usage patterns.**

## 🏗️ Layout Components

### `layout.tsx`
**Root layout wrapping entire app**

```tsx
// Sets metadata, imports fonts, wraps children in providers
export const metadata: Metadata = {
  title: 'Synthiv Consulting',
  description: '...',
}
```

**Responsibilities:**
- Global metadata (title, description for SEO)
- Google Fonts import
- Root `<html>` and `<body>` tags
- Providers wrapper

---

### `page.tsx`
**Home page (index route)**

```tsx
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      {/* Add more sections */}
    </main>
  )
}
```

**Responsibilities:**
- Orchestrates all sections
- Tracks scroll progress for indicator
- Renders navbar + scroll indicator globally

**Props:** None

---

## 📱 Navigation Components

### `Navbar.tsx`
**Sticky header with logo, nav links, hamburger menu**

```tsx
// Auto-closes menu on:
// - Link click
// - Outside click
// - Escape key press
```

**Props:** None (self-contained state)

**Features:**
- ✅ Sticky positioning (`fixed top-0`)
- ✅ Backdrop blur (`backdrop-blur-md`)
- ✅ Mobile hamburger (appears at `md:` breakpoint)
- ✅ Smooth mobile menu animation

**Usage:**
```tsx
// Already included in page.tsx
<Navbar />
```

**Customization:**
```tsx
// Edit navLinks array
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  // Add more...
]
```

---

## 🎬 Section Components

### `HeroSection.tsx`
**Full-height hero with babylon.js background**

```tsx
<section id="top" className="relative w-full h-screen">
  <BabylonBackground />
  {/* Overlay content with animations */}
</section>
```

**Props:** None

**Features:**
- babylon.js 3D animated background
- Staggered text animations (heading, subheading, buttons)
- Floating pill badges with scale-in
- Scroll indicator

**Customization:**
- Change headline: Line ~30
- Edit CTA text: Lines ~37-42
- Modify pills: Lines ~60-65

---

### `ServicesSection.tsx`
**Grid of service cards with 3D effects**

```tsx
<section id="services" className="py-24 bg-gradient-light">
  {/* 2-column grid on desktop, 1 on mobile */}
  {services.map((service, i) => (
    <ScaleIn key={service.title} delay={i * 0.1}>
      <Card title={service.title} description={service.description} />
    </ScaleIn>
  ))}
</section>
```

**Props:** None

**Features:**
- Responsive grid (auto-layout)
- Staggered card animations
- Hover lift effect
- Light background

**Customization:**
- Edit services array (Line ~8)
- Change grid columns: `grid-cols-2` → `grid-cols-3` (Line ~23)

---

### `AboutSection.tsx`
**Feature cards with 3-column layout**

```tsx
<section id="about" className="py-24 bg-white">
  {/* SlideInLeft animations on cards */}
  {/* Clarity, Velocity, Quality feature cards */}
</section>
```

**Props:** None

**Features:**
- 3-column grid (responsive to 1-col mobile)
- SlideInLeft animation per card
- Feature cards with icon space
- Light background

**Customization:**
- Edit feature items: Lines ~20-30
- Change grid layout: `md:grid-cols-3` → `lg:grid-cols-4`

---

### `ContactSection.tsx`
**Dark form section with email input**

```tsx
<section id="contact" className="py-24 bg-synthiv-dark text-white">
  {/* Form with Project Summary, Timeline, Budget, Email */}
  {/* Submit button with green accent */}
</section>
```

**Props:** None

**Features:**
- Dark background with white text
- Form with multiple input types
- Green accent glow on focus
- White text on dark (high contrast)

**Customization:**
- Add form submission handler: Line ~45
- Change email endpoint: Line ~63
- Edit placeholder text throughout

---

## 🎨 Utility & Animation Components

### `BabylonBackground.tsx`
**Canvas rendering babylon.js scene**

```tsx
export default function BabylonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const engine = createBabylonScene(canvasRef.current)
    return () => engine.dispose()
  }, [])
}
```

**Props:** None

**Features:**
- Mounts canvas via useRef
- Initializes babylon engine on mount
- Cleans up on unmount
- Gradient overlay for text readability

**Customization:**
- Edit overlay gradient: Line ~30
- Modify babylon scene: `src/lib/babylon-setup.ts`

---

### `ScrollIndicator.tsx`
**Animated arrow at bottom center**

```tsx
interface ScrollIndicatorProps {
  scrollProgress: number  // 0-1, from parent
}
```

**Props:**
- `scrollProgress` (number) — Scroll percentage (0-1)

**Features:**
- Shows when scrollProgress < 0.85
- Bounces infinitely
- Hides when user scrolls near bottom
- Fixed positioning

**Usage:**
```tsx
// In page.tsx:
const [scrollProgress, setScrollProgress] = useState(0)
// ... update on scroll ...
<ScrollIndicator scrollProgress={scrollProgress} />
```

---

### `ScrollAnimations.tsx`
**Framer Motion animation primitives**

```tsx
// Export multiple animation components:
export const FadeInUp = ({ children, delay = 0 }) => (...)
export const ScaleIn = ({ children, delay = 0 }) => (...)
export const SlideInLeft = ({ children, delay = 0 }) => (...)
export const ParallaxContainer = ({ children }) => (...)
```

**Props** (all animations):
- `children` (ReactNode) — Content to animate
- `delay` (number, optional) — Stagger delay in seconds
- `duration` (number, optional) — Animation duration

**Usage:**
```tsx
<FadeInUp delay={0.2}>
  <h2>Heading</h2>
</FadeInUp>

<ScaleIn delay={0.1}>
  <Card />
</ScaleIn>

<SlideInLeft delay={0.15}>
  <div>Content</div>
</SlideInLeft>

<ParallaxContainer>
  <div>Moves on scroll</div>
</ParallexContainer>
```

**Features:**
- ✅ All respect `prefers-reduced-motion`
- ✅ `whileInView` triggers on viewport enter
- ✅ `once: true` prevents re-triggering
- ✅ Customizable `delay` & `duration`

---

### `Card.tsx`
**Reusable 3D card component**

```tsx
interface CardProps {
  title: string
  description: string
  icon?: ReactNode
  delay?: number
}
```

**Props:**
- `title` (string) — Card heading
- `description` (string) — Card body text
- `icon` (ReactNode, optional) — Icon/emoji
- `delay` (number, optional) — Animation delay

**Usage:**
```tsx
<Card
  title="Discovery & SOW"
  description="Stakeholder alignment..."
  icon="🎯"
  delay={0.1}
/>
```

**Features:**
- Fade-in + slide-up animation
- Hover lift + scale effect
- Glassmorphism styling
- Responsive padding

---

## 🔧 Utility Functions

### `babylon-setup.ts`
**babylon.js scene initialization**

```ts
export const createBabylonScene = (canvas: HTMLCanvasElement): BABYLON.Engine => {
  // Creates scene, camera, lights, animated sphere
  // Returns engine for disposal on unmount
}
```

**Creates:**
- Babylon engine
- Scene with light background
- ArcRotateCamera (rotatable)
- Hemispheric light
- Animated sphere with rotation/translation

**Customization:**
- Change background: `scene.clearColor = ...`
- Modify sphere: Material, size, position
- Adjust animation: Rotation coefficients

---

## 📊 Component Usage Diagram

```
page.tsx (Home)
├── Navbar
├── HeroSection
│   └── BabylonBackground
├── ServicesSection
│   ├── Card (×4)
│   └── ScaleIn (wrapper)
├── AboutSection
│   └── SlideInLeft (×3)
├── ContactSection
│   └── FadeInUp (wrapper)
└── ScrollIndicator
```

---

## 🎯 Common Patterns

### Pattern 1: Add New Section
```tsx
// 1. Create component
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

// 2. Import in page.tsx
import NewSection from '@/components/NewSection'

// 3. Add to JSX
<main>
  ...
  <NewSection />
</main>

// 4. Add nav link
const navLinks = [
  { label: 'New', href: '#new' },
]
```

### Pattern 2: Stagger Multiple Items
```tsx
{items.map((item, i) => (
  <FadeInUp key={item.id} delay={i * 0.1}>
    <Card {...item} />
  </FadeInUp>
))}
```

### Pattern 3: Dark Section
```tsx
<section className="py-24 bg-synthiv-dark text-white">
  <FadeInUp>
    <h2 className="text-white">Light text on dark</h2>
  </FadeInUp>
</section>
```

---

## 🚀 Next: Building Your Own

Use these components as building blocks:

1. **Copy templates** (AboutSection, ContactSection)
2. **Wrap content** with animation primitives
3. **Add to page.tsx**
4. **Update Navbar.tsx** with links

For detailed examples, see each component's source code in `src/components/`.

---

**Happy building!** 🎉
