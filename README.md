# Rishi P — Engineering Portfolio

A responsive, single-page engineering portfolio for **Rishi P**, final-year
B.E. Electronics & Communication Engineering student at Global Academy of
Technology, Bengaluru.

Focus areas: embedded systems, firmware, RTL and digital design, IoT security,
robotics, autonomous systems and Edge AI.

React, Vite and Tailwind CSS are used here as implementation tools for the
portfolio itself — they are not the subject matter of the site.

The design is deliberately minimal: a pure black (`#000000`) background, no
background patterns or imagery, and text-only project cards. Everything you see
is type, spacing and thin borders.

Live site: `https://rishivexe-alt.github.io/Rishi-Portfolio/`

---

## Sections

| # | Section | Contents |
|---|---------|----------|
| 01 | About | ECE background, engineering mindset, interest in implementation principles and hardware–software integration |
| 02 | Education | Global Academy of Technology (B.E. ECE, CGPA 9.48 as listed in the CV, VTU B.E. Honours), RNS PU College (88%), Aryan Presidency School (ICSE, 94%) |
| 03 | Featured projects | Five public repositories, text-only cards: title, short description, technology tags, GitHub link |
| 04 | Skills | RTL & Digital Design, Embedded & Communication, Robotics & Autonomy, AI/Simulation & Tools |
| 05 | Currently Exploring | RTL verification, power-aware architectures, firmware & real-time systems, multi-agent robotics, hardware–software integration |
| 06 | Leadership | ECE Branch Representative, team lead roles, hackathon prototypes |
| 07 | Contact | Email, LinkedIn, GitHub and a professional closing |

The hero sits above these sections and carries a single name heading, the
headline, the introduction, the degree / CGPA / focus line, GitHub / LinkedIn /
projects buttons and a technology ticker.

There is **no work-experience section** and **no GitHub statistics section**: the
site is about education, skills and shipped projects only. The GitHub profile is
linked from the navigation, the hero and the contact and footer links, but no
profile numbers or membership dates are displayed.

---

## Colour theme

| Role | Colour |
|------|--------|
| Background | `#000000` pure black |
| Primary headings | `#E6C77A` warm champagne gold |
| Accent / highlight | `#D4AF37` gold |
| Secondary gold | `#BFA15F` |
| Main body text | `#E5E5E5` |
| Muted text | `#A3A3A3` |
| Borders and dividers | `#292316` |

Defined once in `tailwind.config.js` as the `accent` scale plus `line`. Gold is
used for headings, the active nav state, small section numbers, links, icons,
tags and card hover borders; body copy stays neutral grey so the page does not
read as gold-on-gold.

---

## Projects

Exactly five projects are listed, each with a public repository:

| Project | Repository |
|---------|------------|
| Secure IoT Communication System | [`AES-Enabled-Industrial-IoT-Monitoring-and-Safety-System`](https://github.com/rishivexe-alt/AES-Enabled-Industrial-IoT-Monitoring-and-Safety-System) |
| AeroCrypt | [`AeroCrypt`](https://github.com/rishivexe-alt/AeroCrypt) |
| AeroStack2 Multi-Drone Systems | [`aerostack2-multi-drone-systems`](https://github.com/rishivexe-alt/aerostack2-multi-drone-systems) |
| PCB AI Defect Inspector | [`PCB-AI-Defect-Inspector`](https://github.com/rishivexe-alt/PCB-AI-Defect-Inspector) |
| Robust Inductive Wireless EV Charging | [`Robust-Inductive-Wireless-Electric-Vehicle-Charging`](https://github.com/rishivexe-alt/Robust-Inductive-Wireless-Electric-Vehicle-Charging) |

No card has an image, a gallery, a placeholder thumbnail or an invented URL —
`repoUrl` is required and must be a real repository.

---

## Accuracy and data honesty

This is deliberate, and the code enforces it:

- **No profile statistics are shown at all.** The GitHub activity section, its
  live-API figures and the membership banner were removed, so nothing on the
  page can go stale or be mistaken for a claim.
- **Every project card links to a real public repository.** The `repoUrl` field
  is a required string, so a card cannot exist without a working link.
- **Project descriptions stay short and factual** — one or two sentences per
  project, with no unverified performance claims.
- **The AeroStack2 project is described as simulation only** — three simulated
  quadrotors in Gazebo with PX4 SITL. No physical multi-drone flight is claimed.
- **AeroCrypt and AeroStack2 are separate projects**: AeroCrypt is a secure
  long-range UAV telemetry link (ESP32, LoRa, GPS, AES-128-GCM), AeroStack2 is
  the ROS 2 multi-drone simulation work. They do not overlap, so they have
  separate cards.
- **The Secure IoT project uses an ESP8266**, not an ESP32.
- The Secure IoT project's Edge-AI detection module is described as documented
  at a high level with the implementation not published, matching the public
  repository.

---

## Tech stack

- React 18 + TypeScript 5
- Vite 5
- Tailwind CSS 3
- lucide-react (icons)
- GitHub Pages deployment via GitHub Actions

No UI framework, no state library, no runtime dependency beyond React and
lucide-react. There are no images on the page, so the bundle is roughly 62 kB
gzipped JS plus 6 kB gzipped CSS.

---

## Project structure

```
├── .github/workflows/deploy.yml   GitHub Pages build + deploy
├── public/
│   └── favicon.svg
├── src/
│   ├── config/site.ts             identity, links, education,
│   │                              projects, skills, exploring, leadership
│   ├── components/
│   │   ├── Navbar.tsx  Hero.tsx  About.tsx  Education.tsx
│   │   ├── Projects.tsx  Skills.tsx  Exploring.tsx
│   │   ├── Leadership.tsx  Contact.tsx  Footer.tsx
│   │   └── ui/                   Reveal, SectionHeading
│   ├── hooks/                    useScroll.ts
│   ├── lib/                      revealBus.ts
│   ├── App.tsx  main.tsx  index.css
├── index.html
├── tailwind.config.js  postcss.config.js  vite.config.ts
└── tsconfig*.json
```

Project, education, skills, leadership and site identity data are centralized
in **`src/config/site.ts`**, while section-specific presentation copy remains
within its component.

---

## Commands (Windows PowerShell)

Run these from the project folder.

```powershell
# 1. Install dependencies
npm install

# 2. Start the local dev server (http://localhost:5173)
npm run dev

# 3. Type-check only
npm run typecheck

# 4. Lint only
npm run lint

# 5. Production build into dist/
npm run build

# 6. Preview the production build (http://localhost:4173/Rishi-Portfolio/)
npm run preview
```

The dev server serves at the site root, so `npm run dev` opens
`http://localhost:5173/`. `npm run preview` serves the built output with the
`/Rishi-Portfolio/` base path, which is what GitHub Pages will do.

To preview the production build from the root path instead:

```powershell
$env:VITE_BASE_PATH = "/"
npm run build
npm run preview
```

---

## Deploying to GitHub Pages

The site is configured for a repository named **`Rishi-Portfolio`**, served at
`/Rishi-Portfolio/`.

**Step 1 — create the repository on GitHub.**

```powershell
git add .
git commit -m "Build portfolio site with React, Vite and Tailwind CSS"
git branch -M main
git remote add origin https://github.com/rishivexe-alt/Rishi-Portfolio.git
git push -u origin main
```

**Step 2 — enable Pages.** On GitHub, open
`Settings → Pages → Build and deployment → Source` and choose
**GitHub Actions**. The workflow in `.github/workflows/deploy.yml` then runs
install → type-check → lint → build → deploy automatically on every push to
`main`.

**Step 3 — wait for the deploy.** Check the Actions tab on the repository. When
it succeeds the site is live at:

```
https://rishivexe-alt.github.io/Rishi-Portfolio/
```

If the repository name differs, either rename the repository or change the
`base` value in `vite.config.ts` (and the `VITE_BASE_PATH` fallback in the
workflow).

---

## Editing content

| Task | Where |
|------|-------|
| Change name, email, LinkedIn, GitHub links | `src/config/site.ts` → `identity`, `links` |
| Add / edit a project | `src/config/site.ts` → `projects` |
| Change education results | `src/config/site.ts` → `education` |
| Add or remove a skill | `src/config/site.ts` → `skillGroups` |
| Add a leadership entry | `src/config/site.ts` → `leadership` |
| Add a certification | `src/config/site.ts` → `certifications` |
| Add / remove a nav section | `src/config/site.ts` → `navItems` **and** the section in `src/App.tsx` |
| Change the background colour | `src/index.css` → `body` / `html` rules |
| Change accent colours or fonts | `tailwind.config.js` |

---

## Accessibility and performance notes

- Skip-to-content link, visible focus rings, labelled icon buttons, and a mobile
  drawer that locks background scroll and closes on `Escape`.
- Motion is minimal and fully disabled when
  `prefers-reduced-motion: reduce` is set — content is shown without animation.
- Reveal-on-scroll uses `IntersectionObserver` plus a shared rAF-throttled
  scroll fallback, so fast scrolling can never leave content stuck invisible.
- No images, fonts beyond the four Google families (Playfair Display, Space
  Grotesk, Inter, JetBrains Mono), or decorative layers, so the
  page stays light and free of layout shift.

---

## Licence

Personal portfolio project. Project content and descriptions belong to their
respective repositories and authors.
