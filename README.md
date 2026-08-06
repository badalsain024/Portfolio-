# 🚀 Alex Morgan — Premium 3D Developer Portfolio

A futuristic, cinematic, fully responsive 3D developer portfolio built with React, Three.js, Framer Motion, and GSAP. Inspired by Apple, Tesla, and Awwwards-level design.

---

## ✨ Features

- **3D Hero Scene** — React Three Fiber with animated distort sphere, orbiting rings, floating cubes, and particle field
- **Custom Cursor** — Animated dot + outline cursor with hover interactions (desktop)
- **Loading Screen** — Cinematic progress bar with animated logo
- **Smooth Scrolling** — Lenis-powered buttery smooth scroll
- **Particle Background** — Canvas-based connected particle network
- **Mouse Glow** — Subtle radial glow that follows the cursor
- **Navbar** — Sticky glassmorphism navbar with animated pill indicator and mobile hamburger menu
- **Hero Section** — Typing animation, stats, CTA buttons, social links, animated 3D card
- **About Section** — Animated skill bars, tech stack grid, tilt cards, profile card
- **Projects Section** — 3D tilt cards, hover overlays, detail modal, stagger animations
- **Certificates Section** — Glowing cards, shine effect, animated modal with credential details
- **Contact Section** — EmailJS form with validation, toast notifications, contact info cards
- **Footer** — Scroll-to-top button, social links, nav links

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + Vite | Frontend framework & build tool |
| Tailwind CSS v3 | Utility-first styling |
| Framer Motion | Page & component animations |
| Three.js / React Three Fiber | 3D hero scene |
| @react-three/drei | Three.js helpers (Float, Stars, etc.) |
| GSAP + ScrollTrigger | Scroll-triggered reveal animations |
| Lenis | Smooth scrolling |
| EmailJS | Contact form email delivery |
| react-hot-toast | Toast notifications |
| react-type-animation | Typing text effect |
| react-icons | Icon library |

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Cursor.jsx          # Custom animated cursor
│   │   ├── Footer.jsx          # Footer with scroll-to-top
│   │   ├── HeroScene.jsx       # React Three Fiber 3D scene
│   │   ├── LoadingScreen.jsx   # Cinematic loading screen
│   │   ├── Navbar.jsx          # Sticky animated navbar
│   │   └── ParticleBackground.jsx  # Canvas particle network
│   ├── data/
│   │   └── index.js            # All portfolio data (projects, certs, skills)
│   ├── hooks/
│   │   ├── useScrollReveal.js  # GSAP scroll-triggered animations
│   │   └── useTilt.js          # 3D mouse tilt effect
│   ├── sections/
│   │   ├── Hero.jsx            # Full-screen hero section
│   │   ├── About.jsx           # About + skills + tech stack
│   │   ├── Projects.jsx        # Project showcase with modal
│   │   ├── Certificates.jsx    # Certificates gallery with modal
│   │   └── Contact.jsx         # Contact form + info
│   ├── App.jsx                 # Root component + Lenis setup
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles + Tailwind
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Navigate to the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📧 EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Create an **Email Service** (Gmail, Outlook, etc.)
3. Create an **Email Template** with variables: `{{name}}`, `{{email}}`, `{{message}}`
4. Get your **Public Key** from Account > API Keys
5. Update `src/sections/Contact.jsx`:

```js
await emailjs.sendForm(
  "YOUR_SERVICE_ID",    // e.g. "service_abc123"
  "YOUR_TEMPLATE_ID",   // e.g. "template_xyz789"
  formRef.current,
  "YOUR_PUBLIC_KEY"     // e.g. "user_AbCdEfGhIjKlMnOp"
);
```

---

## 🎨 Customization

### Personal Info
Edit `src/data/index.js`:
```js
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  location: "Your City",
  bio: "Your bio...",
};
```

### Projects
Add/edit entries in the `projects` array in `src/data/index.js`.

### Certificates
Add/edit entries in the `certificates` array in `src/data/index.js`.

### Colors
Edit `tailwind.config.js` to change the color palette.

---

## 🏗 Build for Production

```bash
npm run build
```

Output goes to `dist/` folder.

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder to netlify.com/drop
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|---|---|
| Mobile | < 768px |
| Tablet | 768px – 1024px |
| Desktop | > 1024px |

> Custom cursor and some 3D effects are automatically disabled on mobile for performance.

---

## ⚡ Performance Tips

- Three.js canvas is lazy-loaded with `<Suspense>`
- Particle count scales with viewport size
- GSAP animations use `ScrollTrigger` to only run when in view
- Images use Unsplash CDN with optimized dimensions

---

## 📄 License

MIT License — free to use and modify for personal and commercial projects.

---

Built with ❤️ by Alex Morgan
