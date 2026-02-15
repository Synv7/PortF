# Implementation Checklist — Synthiv Blueprint

**Use this checklist to track your customization and launch progress.**

---

## ✅ Phase 1: Setup & Initial Run (15 min)

- [ ] Navigate to `next-blueprint` directory
- [ ] Run `npm install` (installs all dependencies)
- [ ] Run `npm run dev` (starts dev server on port 3000)
- [ ] Open [http://localhost:3000](http://localhost:3000) in browser
- [ ] Verify page loads with hero section, services, about, contact
- [ ] Check console for any errors (F12 → Console tab)

**Status:** _____ (Not Started / In Progress / Complete)

---

## ✅ Phase 2: Brand & Design Customization (30 min)

### 2.1 Brand Colors
- [ ] Open `tailwind.config.ts`
- [ ] Edit color palette:
  - [ ] `'synthiv-light': '#F9FAFB'` (base color)
  - [ ] `'synthiv-dark': '#111827'` (accent)
  - [ ] `'synthiv-accent': '#4ADE80'` (green/highlight)
  - [ ] `'synthiv-neutral': '#6B7280'` (text gray)
- [ ] Save file (Tailwind hot-reloads)
- [ ] Verify colors in browser

### 2.2 Fonts & Typography
- [ ] Open `src/styles/globals.css`
- [ ] Verify Google Fonts import in `layout.tsx` (Inter)
- [ ] Check heading weights are applied (`font-gt-america font-bold`)
- [ ] Test sizing on different breakpoints (resize browser)

### 2.3 Logo & Brand Mark
- [ ] Open `src/components/Navbar.tsx` (Line ~11)
- [ ] Replace logo `<div>` with your brand mark
- [ ] Update brand name text if needed

**Status:** _____ (Not Started / In Progress / Complete)

---

## ✅ Phase 3: Content Updates (45 min)

### 3.1 Hero Section
- [ ] Open `src/components/HeroSection.tsx`
- [ ] Edit headline (Line ~26): Change "Strategy that ships..."
- [ ] Edit subheading (Line ~31): Update company description
- [ ] Edit CTA buttons (Lines ~37-42):
  - [ ] "Start a Project" → Your CTA text
  - [ ] "View Services" → Alternative CTA
- [ ] Edit pill badges (Lines ~58-62): Add your key offerings
- [ ] Verify hero looks good in browser

### 3.2 Services Section
- [ ] Open `src/components/ServicesSection.tsx`
- [ ] Edit services array (Lines ~6-16):
  - [ ] Replace all 4 service titles & descriptions
  - [ ] Add your actual service offerings
- [ ] Verify 2-column grid on desktop, 1-col on mobile
- [ ] Check animations (scroll down to see fade-in)

### 3.3 About Section
- [ ] Open `src/components/AboutSection.tsx`
- [ ] Update section title & description (Lines ~10-14)
- [ ] Replace 3 feature cards (Clarity/Velocity/Quality):
  - [ ] Edit titles (Lines ~19-21)
  - [ ] Edit descriptions (Lines ~24-26)
  - [ ] Add icons/emoji if desired
- [ ] Verify responsive layout

### 3.4 Contact Section
- [ ] Open `src/components/ContactSection.tsx`
- [ ] Update section title (Line ~11)
- [ ] Update email address (Line ~63): Change from placeholder
- [ ] Verify form fields (Project Summary, Timeline, Budget, Email)
- [ ] Note: Form submission requires backend (see README for options)

**Status:** _____ (Not Started / In Progress / Complete)

---

## ✅ Phase 4: Navigation & Links (15 min)

### 4.1 Navbar Links
- [ ] Open `src/components/Navbar.tsx`
- [ ] Edit `navLinks` array (Lines ~3-8):
  - [ ] Verify links match section IDs (About, Services, Approach, etc.)
  - [ ] Add new links if you add new sections
  - [ ] Remove links you're not using
- [ ] Test each link (desktop nav + mobile hamburger)
- [ ] Verify smooth scroll to sections

### 4.2 Section IDs
- [ ] Verify each section component has unique `id`:
  - [ ] HeroSection: `id="top"`
  - [ ] ServicesSection: `id="services"`
  - [ ] AboutSection: `id="about"`
  - [ ] ContactSection: `id="contact"`

**Status:** _____ (Not Started / In Progress / Complete)

---

## ✅ Phase 5: Babylon.js Background (Optional, 20 min)

### 5.1 Customize 3D Scene
- [ ] Open `src/lib/babylon-setup.ts`
- [ ] Modify scene background color (Line ~11):
  ```ts
  scene.clearColor = new BABYLON.Color4(0.98, 0.98, 0.98, 1)
  ```
- [ ] Adjust sphere material color (Line ~27):
  ```ts
  material.diffuse = new BABYLON.Color3(0.29, 0.86, 0.5) // Change RGB values
  ```
- [ ] Adjust animation speed (Lines ~39-42):
  ```ts
  sphere.rotation.x += 0.002  // Faster = higher number
  ```
- [ ] Adjust light intensity (Line ~17):
  ```ts
  light.intensity = 0.8 // 0-1 scale
  ```
- [ ] Reload browser (hot-reload may not work for babylon.js)

**Status:** _____ (Not Started / In Progress / Complete)

---

## ✅ Phase 6: Additional Sections (Optional, 60 min)

### 6.1 Add Approach Section
- [ ] Create `src/components/ApproachSection.tsx`
- [ ] Copy structure from `AboutSection.tsx`
- [ ] Update content (5-step approach)
- [ ] Import in `src/app/page.tsx`
- [ ] Add nav link in `Navbar.tsx`

### 6.2 Add Work/Portfolio Section
- [ ] Create `src/components/WorkSection.tsx`
- [ ] Create Card grid with project examples
- [ ] Add project data (title, description, tags)
- [ ] Import in `src/app/page.tsx`

### 6.3 Add FAQ Section
- [ ] Create `src/components/FAQSection.tsx`
- [ ] Build accordion component with Framer Motion
- [ ] Add your FAQ items
- [ ] Import in `src/app/page.tsx`

**Status:** _____ (Not Started / In Progress / Complete)

---

## ✅ Phase 7: Testing & QA (30 min)

### 7.1 Responsive Design
- [ ] Test on mobile (768px viewport):
  - [ ] Hamburger menu appears & works
  - [ ] Hero text is readable
  - [ ] Cards stack in single column
  - [ ] Images scale properly
- [ ] Test on tablet (1024px viewport)
- [ ] Test on desktop (1440px+)
- [ ] Test full-width on ultra-wide monitor

### 7.2 Functionality
- [ ] Test all nav links (smooth scroll to sections)
- [ ] Test hamburger menu (opens/closes, closes on link click)
- [ ] Test buttons (CTAs navigate or open email)
- [ ] Test animations (visible on scroll)
- [ ] Test scroll indicator (appears/disappears appropriately)

### 7.3 Performance
- [ ] Run Lighthouse audit (F12 → Lighthouse tab):
  - [ ] Performance > 90
  - [ ] Accessibility > 95
  - [ ] Best Practices > 90
  - [ ] SEO > 95
- [ ] Check load time (F12 → Network tab)
- [ ] Disable JavaScript & verify no console errors (mostly graceful degradation)

### 7.4 Accessibility
- [ ] Test keyboard navigation (Tab through all elements)
- [ ] Test with screen reader (NVDA/JAWS on Windows, VoiceOver on Mac)
- [ ] Check color contrast (WCAG AA standard)
- [ ] Test with "Prefers Reduced Motion" enabled:
  - [ ] DevTools → Rendering → Prefers Reduced Motion
  - [ ] Verify animations don't run
- [ ] Verify ARIA labels on buttons/links

### 7.5 Browser Compatibility
- [ ] Test on Chrome 90+
- [ ] Test on Firefox 88+
- [ ] Test on Safari 14+
- [ ] Test on mobile Safari (iOS 14+)
- [ ] Test on Chrome Mobile

**Status:** _____ (Not Started / In Progress / Complete)

---

## ✅ Phase 8: SEO & Metadata (15 min)

- [ ] Open `src/app/layout.tsx`
- [ ] Update metadata:
  - [ ] `title`: "Synthiv Consulting | Your Tagline"
  - [ ] `description`: "Brief company description for Google"
- [ ] Add favicon (in `public/` folder if you have one)
- [ ] Verify social meta tags are set
- [ ] Check `robots.txt` for indexing rules
- [ ] Submit sitemap to Google Search Console (after deploy)

**Status:** _____ (Not Started / In Progress / Complete)

---

## ✅ Phase 9: Analytics & Tracking (Optional, 10 min)

- [ ] Install analytics (Google Analytics, Plausible, etc.)
- [ ] Add tracking code to `src/app/layout.tsx` or create analytics component
- [ ] Set up events for:
  - [ ] CTA button clicks
  - [ ] Form submissions
  - [ ] Navigation clicks
- [ ] Test that events are firing (F12 → Network tab → gtag requests)

**Status:** _____ (Not Started / In Progress / Complete)

---

## ✅ Phase 10: Deployment (20 min)

### 10.1 Build for Production
- [ ] Run `npm run build` in terminal
- [ ] Verify no build errors
- [ ] Check `.next` directory was created
- [ ] Run `npm start` to test production build locally

### 10.2 Deploy to Vercel (Recommended)
- [ ] Create Vercel account (vercel.com)
- [ ] Connect GitHub repository
- [ ] Deploy: Vercel auto-deploys on push
- [ ] Verify deployment at your-domain.vercel.app
- [ ] Connect custom domain in Vercel settings

### 10.3 Deploy to Other Hosts
- [ ] Build: `npm run build`
- [ ] Start: `npm start`
- [ ] Deploy to Netlify/Railway/Render/etc.
- [ ] Set up environment variables if needed

### 10.4 Post-Deploy Verification
- [ ] Test live site on all devices
- [ ] Run Lighthouse audit on live URL
- [ ] Verify analytics are tracking
- [ ] Check SEO (Google Search Console)
- [ ] Monitor for errors (Sentry/LogRocket if set up)

**Status:** _____ (Not Started / In Progress / Complete)

---

## ✅ Phase 11: Maintenance & Iteration (Ongoing)

- [ ] Monitor analytics for user behavior
- [ ] Gather feedback from early visitors
- [ ] A/B test headlines & CTAs
- [ ] Update content regularly (blog, case studies)
- [ ] Monitor for broken links
- [ ] Update dependencies monthly (`npm update`)
- [ ] Fix reported bugs
- [ ] Add new sections/features based on data

**Status:** _____ (Not Started / In Progress / Complete)

---

## 📊 Overall Progress

| Phase | Title | Status |
|-------|-------|--------|
| 1 | Setup & Initial Run | |
| 2 | Brand & Design | |
| 3 | Content Updates | |
| 4 | Navigation & Links | |
| 5 | Babylon.js (Optional) | |
| 6 | Additional Sections | |
| 7 | Testing & QA | |
| 8 | SEO & Metadata | |
| 9 | Analytics (Optional) | |
| 10 | Deployment | |
| 11 | Maintenance | |

---

## 🎯 Launch Readiness

- [ ] All content is updated
- [ ] All links are working
- [ ] Mobile responsive tested
- [ ] Accessibility checklist complete
- [ ] Performance > 90 (Lighthouse)
- [ ] SEO metadata set
- [ ] Analytics tracking
- [ ] Custom domain configured
- [ ] HTTPS enabled
- [ ] Deployed to production
- [ ] Monitoring/error tracking set up

**Launch Status:** _____ (Ready / Almost Ready / Not Ready)

---

## 💡 Quick Reference

| Task | File | Quick Link |
|------|------|-----------|
| Change colors | `tailwind.config.ts` | Line ~10 |
| Update hero | `src/components/HeroSection.tsx` | Line ~25 |
| Edit services | `src/components/ServicesSection.tsx` | Line ~6 |
| Update nav | `src/components/Navbar.tsx` | Line ~3 |
| Customize babylon.js | `src/lib/babylon-setup.ts` | Line ~11 |
| Add new section | `src/components/` | Copy AboutSection.tsx |

---

## 📞 Need Help?

- **Installation:** See [SETUP.md](./SETUP.md)
- **Architecture:** See [README.md](./README.md)
- **Components:** See [COMPONENTS_REFERENCE.md](./COMPONENTS_REFERENCE.md)
- **AI Agent:** See [.github/copilot-instructions.md](./.github/copilot-instructions.md)

---

**Good luck with your launch! 🚀**

Print this checklist and check off items as you complete them. You've got this!
