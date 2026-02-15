# Synthiv Consulting — Next.js 14 Blueprint
## Complete Project File Index

**Created:** January 23, 2026  
**Status:** Production-Ready  
**Framework:** Next.js 14+ with Tailwind, babylon.js, Framer Motion

---

## 📋 Quick Reference

| File | Purpose | Status |
|------|---------|--------|
| **package.json** | Dependencies (Next.js, Tailwind, babylon.js, Framer Motion) | ✅ Ready |
| **tailwind.config.ts** | Design tokens, colors, fonts, animations | ✅ Ready |
| **next.config.js** | Next.js configuration | ✅ Ready |
| **tsconfig.json** | TypeScript configuration | ✅ Ready |
| **postcss.config.js** | PostCSS for Tailwind processing | ✅ Ready |
| **.gitignore** | Git exclusions (node_modules, .next, etc.) | ✅ Ready |

---

## 📂 Project Structure

### 📍 Root Configuration Files
```
next-blueprint/
├── package.json              # npm dependencies
├── tailwind.config.ts        # Design system (colors, fonts, animations)
├── next.config.js            # Next.js settings
├── tsconfig.json             # TypeScript compiler options
├── postcss.config.js         # PostCSS configuration
└── .gitignore                # Git exclusions
```

### 🎨 Global Styles
```
src/styles/
└── globals.css               # Tailwind @directives + custom CSS
                             # (Headings, cards, animations, a11y)
```

### 🏗️ App Router (Next.js)
```
src/app/
├── layout.tsx                # Root layout (metadata, fonts, providers)
├── page.tsx                  # Home page (orchestrates sections)
├── providers.tsx             # Context wrapper (for future providers)
└── [other routes here]       # Add more routes as needed
```

### 🧩 React Components
```
src/components/
│
├─ Navigation & Structure
│  └─ Navbar.tsx             # Sticky header with hamburger menu
│
├─ Sections
│  ├─ HeroSection.tsx        # Full-height hero with babylon.js
│  ├─ ServicesSection.tsx    # 3D card grid (services)
│  ├─ AboutSection.tsx       # Feature cards (about company)
│  └─ ContactSection.tsx     # Dark form section (contact)
│
├─ Background & Visual Effects
│  ├─ BabylonBackground.tsx  # Canvas component (babylon.js setup)
│  └─ ScrollIndicator.tsx    # Animated scroll guide (arrow)
│
├─ Reusable Building Blocks
│  ├─ Card.tsx               # 3D card component (reusable)
│  └─ ScrollAnimations.tsx   # Framer Motion helpers (FadeInUp, etc.)
│
└─ [Add more sections as needed]
```

### 🔧 Utilities & Setup
```
src/lib/
└── babylon-setup.ts         # babylon.js scene initialization
                            # (Creates 3D scene, lights, camera, sphere)
```

---

## 📄 Documentation Files

### Getting Started
| File | Purpose |
|------|---------|
| **SETUP.md** | Installation, troubleshooting, quick edits |
| **README.md** | Full architecture, features, development workflow |
| **PROJECT_BLUEPRINT.md** | High-level overview & what's included |
| **BLUEPRINT_SUMMARY.md** | Visual summary with ASCII diagrams |
| **COMPONENTS_REFERENCE.md** | Complete component documentation |

### AI Agent Guidance
| File | Purpose |
|------|---------|
| **.github/copilot-instructions.md** | Developer guide for AI agents & IDEs |

---

## 🎯 File Relationships

```
page.tsx (entry point)
  ├── imports Navbar
  ├── imports HeroSection
  │   └── imports BabylonBackground
  │       └── calls babylon-setup.ts
  ├── imports ServicesSection
  │   ├── imports Card
  │   └── imports ScrollAnimations.tsx (FadeInUp, ScaleIn)
  ├── imports AboutSection
  │   └── imports ScrollAnimations.tsx (SlideInLeft)
  ├── imports ContactSection
  │   └── imports ScrollAnimations.tsx (FadeInUp)
  └── imports ScrollIndicator
```

---

## 🚀 How to Start

### Step 1: Install Dependencies
```bash
cd next-blueprint
npm install
```

Installs:
- `next` (framework)
- `react` + `react-dom` (UI)
- `tailwindcss` (styling)
- `babylon.js` (3D)
- `framer-motion` (animations)

### Step 2: Run Development Server
```bash
npm run dev
```

Opens [http://localhost:3000](http://localhost:3000)

### Step 3: Edit & Hot-Reload
Files in `src/` hot-reload automatically. Start with:
- `src/components/HeroSection.tsx` (change hero text)
- `tailwind.config.ts` (change brand colors)
- `src/components/Navbar.tsx` (update navigation)

---

## 🎨 Customization Quick Links

| Change | File | Line(s) |
|--------|------|---------|
| Hero headline | `src/components/HeroSection.tsx` | ~25 |
| Brand colors | `tailwind.config.ts` | ~10 |
| Navigation links | `src/components/Navbar.tsx` | ~5 |
| Services content | `src/components/ServicesSection.tsx` | ~8-16 |
| babylon.js background | `src/lib/babylon-setup.ts` | ~15-40 |
| Fonts | `tailwind.config.ts` | ~20 |

---

## 📦 Dependencies Breakdown

### Production
```json
{
  "react": "^18.2.0",           // UI framework
  "react-dom": "^18.2.0",       // DOM rendering
  "next": "^14.0.0",            // Full-stack framework
  "babylon.js": "^6.0.0",       // 3D graphics
  "framer-motion": "^10.16.0",  // Scroll animations
  "@headlessui/react": "^1.7.0" // Accessible UI
}
```

### Development (Build Tools)
```json
{
  "tailwindcss": "^3.3.0",      // CSS framework
  "postcss": "^8.4.0",          // CSS processor
  "autoprefixer": "^10.4.0",    // Browser prefixes
  "typescript": "^5.0.0",       // Type checking
  "eslint": "^8.48.0",          // Code linting
  "eslint-config-next": "^14.0.0"
}
```

---

## ✅ What's Included

- ✅ **Hero Section** with babylon.js 3D background
- ✅ **Responsive Navigation** (desktop + mobile hamburger)
- ✅ **Services Grid** with 3D card effects
- ✅ **About Section** with feature cards
- ✅ **Contact Section** with form
- ✅ **Scroll Animations** (fade-in, scale, parallax)
- ✅ **Scroll Indicator** (animated arrow guide)
- ✅ **Accessibility** (ARIA, keyboard navigation, reduced motion)
- ✅ **Responsive Design** (mobile-first, all breakpoints)
- ✅ **TypeScript** (full type safety)
- ✅ **Dark Mode Ready** (toggle support ready to add)

---

## 📊 Architecture at a Glance

```
┌─────────────────────────────────────────────┐
│  Next.js App Router (file-based routing)    │
├─────────────────────────────────────────────┤
│  src/app/layout.tsx (root layout)           │
│  src/app/page.tsx (home page)               │
├─────────────────────────────────────────────┤
│  React Components (src/components/)         │
│  • Navbar                                   │
│  • HeroSection (babylon.js)                 │
│  • ServicesSection (Card grid)              │
│  • AboutSection                             │
│  • ContactSection                           │
├─────────────────────────────────────────────┤
│  Utilities (src/lib/)                       │
│  • babylon-setup.ts (3D scene init)         │
├─────────────────────────────────────────────┤
│  Styling (src/styles/ + tailwind.config.ts) │
│  • Tailwind CSS utilities                   │
│  • Custom animations                        │
│  • Design tokens                            │
├─────────────────────────────────────────────┤
│  Animations (Framer Motion)                 │
│  • Scroll-triggered                         │
│  • Parallax                                 │
│  • Hover effects                            │
└─────────────────────────────────────────────┘
```

---

## 🔄 Development Workflow

### Adding a New Section

1. **Create component** in `src/components/NewSection.tsx`
2. **Add animations** using `ScrollAnimations.tsx` primitives
3. **Import in** `src/app/page.tsx`
4. **Update nav** in `src/components/Navbar.tsx`

### Updating Design

1. **Colors** → Edit `tailwind.config.ts`
2. **Fonts** → Edit `tailwind.config.ts` + `src/styles/globals.css`
3. **Animations** → Edit `tailwind.config.ts` keyframes
4. **babylon.js** → Edit `src/lib/babylon-setup.ts`

### Building for Production

```bash
npm run build        # Creates .next/ directory
npm start            # Runs production server
```

---

## 📚 Documentation Hierarchy

```
START HERE
    ↓
SETUP.md (installation guide)
    ↓
README.md (full architecture)
    ↓
BLUEPRINT_SUMMARY.md (visual overview)
    ↓
COMPONENTS_REFERENCE.md (detailed component docs)
    ↓
.github/copilot-instructions.md (AI agent guide)
```

---

## ✨ Key Highlights

| Aspect | Implementation |
|--------|-----------------|
| **Framework** | Next.js 14+ App Router |
| **Styling** | Tailwind CSS + custom CSS |
| **3D Graphics** | babylon.js (native WebGL) |
| **Animations** | Framer Motion (scroll-triggered) |
| **Type Safety** | TypeScript (full) |
| **Accessibility** | WCAG 2.1 compliant |
| **Responsive** | Mobile-first design |
| **Performance** | Static rendering, code splitting |
| **Deployment** | Vercel-ready (or any Node.js host) |

---

## 🚀 Next Steps

1. ✅ **Install:** `npm install`
2. ✅ **Run:** `npm run dev`
3. ✅ **Customize:** Edit files in `src/`
4. ✅ **Add Content:** Create new sections
5. ✅ **Deploy:** `npm run build` → Vercel

---

## 📞 Support & Resources

- **Installation Help:** See [SETUP.md](./SETUP.md)
- **Architecture Guide:** See [README.md](./README.md)
- **Component Docs:** See [COMPONENTS_REFERENCE.md](./COMPONENTS_REFERENCE.md)
- **AI Agent Guide:** See [.github/copilot-instructions.md](./.github/copilot-instructions.md)

---

**🎉 You're all set! Happy building with Next.js 14.**

This blueprint is production-ready. Customize it, add your content, deploy it, and own your digital presence.

**Built with modern web standards. Ready to scale.**
