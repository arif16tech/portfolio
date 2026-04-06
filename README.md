# Arif — Developer Portfolio

A modern, dark-themed developer portfolio built with **React + Vite + Tailwind CSS**.

## Tech Stack

- **React 18** — UI framework
- **Vite** — Fast build tool and dev server
- **Tailwind CSS 3** — Utility-first CSS
- **React Router DOM** — Client-side routing
- **Framer Motion** — Minimal, smooth animations
- **Lucide React** — Clean SVG icons
- **Devicon** — Technology/language icons (CDN)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Tech Stack, Featured Projects |
| `/projects` | All projects with live search filter |
| `/about` | Bio, Backend focus areas, Learning timeline, Skills |
| `/contact` | Email, GitHub, LinkedIn contact cards |

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site runs at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Fixed top nav with mobile menu
│   ├── Footer.jsx        # Footer with social links
│   ├── ProjectCard.jsx   # Reusable project card
│   └── SearchBar.jsx     # Controlled search input
├── pages/
│   ├── Home.jsx          # Hero + Tech Stack + Featured Projects
│   ├── Projects.jsx      # All projects with search
│   ├── About.jsx         # Bio + expertise + timeline
│   └── Contact.jsx       # Contact links
├── data/
│   └── projects.js       # Project data array
└── index.css             # Global styles + Tailwind directives
```

## Customization

1. Edit **`src/data/projects.js`** to add your own projects
2. Update developer name, bio, and links in each page
3. Adjust colors in `tailwind.config.js` and `src/index.css`
