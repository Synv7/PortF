# AI Coding Agent Instructions for Synthiv Consulting Portfolio

## Project Overview
Single-page marketing website for a consulting firm inspired by bcxrspace.com. Three-file architecture: semantic HTML structure, vanilla JavaScript (WebGL + DOM interactivity), and CSS with design tokens. **Light color palette with dark accents, bold GT America-inspired typography, 3D card grids with parallax scroll effects.**

## Core Architecture

### WebGL Background System (Shader-Driven)
- **Location:** [script.js](../script.js) lines 1–180
- **Purpose:** Native WebGL shader canvas (no iframe dependencies) providing animated, noise-based background responsive to scroll and mouse input
- **Key Pattern:** Uniforms (`uTime`, `uScroll`, `uMouse`) update each frame; fragment shader computes animated fields with fbm noise and palette cycling
- **Accessibility:** Respects `prefers-reduced-motion` by rendering static frame; animates only for users with motion enabled
- **Performance:** Uses `requestAnimationFrame`, DPR-aware canvas sizing, and minimal draw calls

### Navigation & Interactivity
- **Mobile Responsiveness:** Hamburger menu toggle at ≤900px; closes on link click, outside click, or Escape
- **Scroll Spy:** IntersectionObserver highlights active nav link based on visible section (threshold: 0.22–0.65)
- **Scroll Progress Bar:** Thin indicator at viewport top; updates via scroll listener

### Reveal Animations
- **Intersection-based transitions:** `.reveal` class fades in + slides up when entering viewport
- **Fallback:** Disabled entirely under `prefers-reduced-motion`

## Development Workflows

### Making CSS Changes
1. Use CSS custom properties (vars in `:root`) for colors, spacing, and shadows
2. Responsive breakpoint: `@media (max-width: 900px)` for mobile layout shifts
3. Grid templates use `grid3` (3 cols) and `grid2` (2 cols) for consistent section layouts
4. All cards inherit `.card` base styles; customize with `.pad` or inline overrides

### Updating Content / Sections
- Edit [index.html](../index.html): each major section has an `id` (top, about, services, approach, work, pricing, faq, contact)
- Scroll-spy depends on section `id` attributes matching nav `href` values
- Keep section structure: `.section` > `.sectionHead` + content grid

### Shader/Animation Tuning
- Adjust shader uniforms in [script.js](../script.js) fragment source (`fsrc`):
  - `fbm()` function controls noise complexity (6 iterations, scales 1.75–5.20)
  - Palette colors: three color stops with sin-based cycling
  - Glow sphere positions and magnitudes add energy
- DPR scaling (up to 2x) is automatic; check on high-DPI displays

## Key Patterns & Conventions

### Accessibility Defaults
- All interactive elements have `aria-*` labels (nav button, scroll regions marked `aria-hidden`)
- Semantic HTML structure with proper heading hierarchy
- Reduced motion support is non-optional

### Performance & 3D Effects
- External CSS link (not inline) keeps HTML lean
- Shader canvas spans viewport; content overlays at z-index:1
- Event listeners use `{ passive: true }` to avoid layout thrashing
- **3D Card Perspective:** `.grid2` and `.grid3` use `perspective: 1000px`; cards use `transform-style: preserve-3d` with rotateX(2deg) on hover for subtle 3D depth
- **Scroll-spy:** IntersectionObserver thresholds tuned per use case (0.12 for reveal, 0.22–0.65 for nav)
- **Section Guide Dots:** Fixed right sidebar with dots that glow on hover and highlight active section

### Design System
- **Color tokens:** `--bg: #f8f9fa` (light), `--fg: #1a1a1a` (dark), `--muted` (68% opacity fg), `--accent: #1a1a1a` (dark accents), `--accent2: #4a90e2` (blue), `--card` (95% white), `--stroke` (12% dark borders)
- **Typography:** `--font-heading` and `--font-body` use Inter fallback (mimics GT America bold geometric sans-serif)
- **Radius:** `--radius: 12px` for cards; smaller radii (10px, 14px) for buttons/nav
- **Shadows:** `--shadow: 0 8px 32px rgba(26, 26, 26, 0.08)` (subtle), `--shadow-lg: 0 20px 60px rgba(26, 26, 26, 0.12)` (depth)

### URL / Link Pattern
- Hero and contact sections use `mailto:` with pre-filled subject and body (placeholder: `hello@example.com`)
- Comment in contact section suggests Formspree/Netlify Forms integration later without layout changes

## Critical Files & Their Roles
- **[index.html](../index.html):** Semantic structure, section hierarchy, navigation anchors
- **[script.js](../script.js):** WebGL setup, shader compilation, animation loop, DOM interactivity (nav toggle, scroll-spy, reveal)
- **[style.css](../style.css):** Design tokens, layout grids, responsive breakpoints, accessibility (reduced-motion)

## Common Editing Tasks

### Add a New Section
1. Create `<section class="section reveal" id="newid">` in HTML
2. Add `<a href="#newid">Label</a>` to nav
3. Optionally apply `.grid2` or `.grid3` layout; use `.card.pad` for card content
4. Scroll-spy + reveal animations apply automatically

### Adjust Shader Colors / Motion
- Modify `palette()` function color values or `fbm()` scale multipliers
- Mouse warp factor: change `0.10 * (p - m) / (0.35 + length(p - m))` divisor
- Scroll influence: adjust `vec2(0.0, -0.55) * s` coefficient

### Test Accessibility
- Use Firefox DevTools: Accessibility panel to check focus order, semantics
- Browser DevTool emulation: throttle to slow 3G, enable "Prefers Reduced Motion"

## External Dependencies
- None. Pure HTML, vanilla JS, CSS. WebGL is browser-native (no Three.js, no Babel transpilation).

## Deployment Notes
- All assets are self-contained; can be deployed as-is to any static host
- Verify shader canvas renders correctly on target browsers (WebGL 1.0 minimum)
