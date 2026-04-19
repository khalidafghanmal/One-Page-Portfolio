<div align="center">

# **LumenDesk**

### *One-page portfolio for UI/UX designers & front-end engineers*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)](https://jquery.com/)

**LumenDesk** is a refined, production-minded single-page template: glass-style navigation, a code-editor hero, scroll-driven motion, an interactive work carousel (Swiper), and accessibility-minded structure—without a heavy build step.

</div>

---

## Hero preview

The screenshot below is the **above-the-fold hero**: split layout with status chips, gradient headline, CTAs, stack pills, and a **live-style code terminal** (`HeroCard.tsx` / `tokens.css`) with floating “Design tokens” and “Motion” cues—matching the template’s front-end narrative.

<div align="center">

![LumenDesk hero section — dark theme, glass nav, code editor mockup, purple accents](image.PNG)


</div>

---

## Features

| Area | What you get |
|------|----------------|
| **Hero** | Full-viewport intro, badges (availability / timezone), gradient typography, primary & secondary CTAs, stack tags, checklist row, **typed terminal** mockup with React-flavored sample code. |
| **Navigation** | Sticky header (jQuery Sticky), pill / glass styling, mobile drawer, smooth in-page scrolling with easing and scroll-spy active states. |
| **About** | Advanced about layout with cards, metrics, and optional portrait area. |
| **Education** | Timeline-style education blocks with responsive grid. |
| **Skills** | Dual-panel skills layout with **animated progress bars** (Intersection Observer in `custom.js`) and WCAG-friendly `aria-valuenow`. |
| **Experience** | **Experience Pro** timeline (`experience-advanced.css`) with accent variables per role. |
| **Profiles** | Profile hub with icon cards (Flaticon + Font Awesome). |
| **Work** | **Swiper**-based portfolio strip; slides generated from data in `work-portfolio.js` with filters. |
| **Clients** | **Owl Carousel** logo strip for social proof. |
| **Contact** | Rich contact section with form UI, map embed, and social links. |
| **Footer** | Copyright block + scroll-to-top control. |

<details>
<summary><strong>Technical highlights</strong> (expand)</summary>

- **Tailwind CSS** via Play CDN with extended theme (fonts, brand colors, keyframes for fades, float, scroll bounce).
- **No bundler required** — open `index.html` in a browser or serve statically (see [Quick start](#-quick-start)).
- **Progressive enhancement**: scroll-reveal uses `IntersectionObserver` where available.
- **External CDNs**: Tailwind, Swiper, jQuery Easing—keep versions pinned if you deploy to production.

</details>

---

## Project structure

```text
portfolio/
├── index.html                 # Single entry — all sections & asset links
├── image.PNG                  # Hero screenshot (this README + your marketing)
├── README.md                  # You are here
├── assets/
│   ├── css/
│   │   ├── style.css          # Base / legacy layout hooks
│   │   ├── responsive.css     # Breakpoints & mobile tweaks
│   │   ├── modern.css         # Modern portfolio + hero / nav / sections
│   │   ├── work-portfolio.css # Swiper work section
│   │   ├── experience-advanced.css
│   │   ├── font-awesome.min.css
│   │   ├── flaticon.css
│   │   ├── owl.carousel.min.css
│   │   └── owl.theme.default.min.css
│   ├── js/
│   │   ├── jquery.js
│   │   ├── jquery.sticky.js
│   │   ├── owl.carousel.min.js
│   │   ├── work-portfolio.js  # ISO_DATA + Swiper init
│   │   └── custom.js          # Nav, scroll, reveals, skills bars, Owl #client
│   └── fonts/                 # Flaticon + Font Awesome webfonts
└── …
```


---

## Quick start

1. **Clone or download** this repository.
2. **Optional — local server** (recommended so CDN scripts behave consistently):

   ```bash
   npx --yes serve .
   ```

   Then open the URL shown in the terminal (often `http://localhost:3000`).

3. **Or** open `index.html` directly — most features work over `file://`; some environments still prefer HTTP for iframes or strict browser policies.




<div align="center">


*— LumenDesk*

</div>
