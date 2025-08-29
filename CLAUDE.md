# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
npm run dev

# Build for production  
npm run build

# Start production server
npm start

# Lint the codebase
npm run lint
```

## Architecture Overview

This is a **Next.js 14 (App Router)** birthday website with a **time-based reveal system**. The application has three distinct phases:

### Phase 1: Pre-Birthday (Before Aug 30, 2025)
- Shows only countdown timer and minimal UI
- Full site content is hidden until birthday date

### Phase 2: Gate System (On Birthday)
- 3-question Indonesian quiz system with SHA-256 hash verification
- Questions are personal to Aliyya with pre-hashed answers
- Gate success triggers confetti animation and unlocks full site

### Phase 3: Full Experience (After Gate)
- Complete birthday website with all sections
- Navigation, hero, love letter, gallery, messages, footer

## Key Implementation Details

### Time-Based Logic (`app/page.tsx:20-32`)
- Birthday check runs every minute via `setInterval`
- Target date: `2025-08-30T00:00:00+07:00` (Jakarta timezone)
- Development bypass available via `?bypass=true` URL parameter

### Security System (`app/utils/crypto.ts`)
- Gate answers are hashed using SHA-256 with salt
- Salt: `NEXT_PUBLIC_GATE_SALT` (default: "HBD-ALIYYA-22")
- Client-side hashing prevents storing plain answers in code
- Hash comparison happens in `app/components/Gate.tsx:52-54`

### Static Export Configuration (`next.config.js`)
- Configured for GitHub Pages deployment
- Static export with `output: 'export'`
- Production base path: `/aliyya-22-birthday`
- Image optimization disabled for static hosting

### Content Management
- Messages: `content/messages.json` - Birthday messages from friends/family
- Environment: `env.example` - Gate question hashes (copy to `.env.local`)

## Component Architecture

**Main Sections** (rendered after gate success):
- `Gate.tsx` - 3-question authentication system
- `Countdown.tsx` - Real-time countdown to birthday
- `Hero.tsx` - Main header section  
- `LoveLetter.tsx` - Personal message section
- `Gallery.tsx` - Photo gallery with custom lightbox
- `Messages.tsx` - Birthday messages display
- `PawConfetti.tsx` - Celebration animation

**Key Features**:
- Custom lightbox implementation in `Gallery.tsx`
- Framer Motion animations throughout
- Glassmorphism UI design with purple cat theme
- Responsive design with Tailwind CSS

## Development Notes

### Gate Question Answers (for development):
1. "siapa kucing ter gemes se dunia (warna krem)" → **Niko**
2. "babybooboo .....poopoo" → **cutie**  
3. "berapa streak tiktok kamu sama pacarmu?" → **300-500**

### Color Palette:
- Primary: `#B48CEC`
- Primary-600: `#9B71E8` 
- Surface: `#F5EEFF`
- Ink: `#2A123C`

### Typography:
- Headings: Poppins
- Body: Inter
- Love letter accent: Caveat

## Deployment

The site auto-deploys to GitHub Pages via GitHub Actions on push to `main` branch. Required GitHub secrets:
- `NEXT_PUBLIC_GATE_SALT`
- `NEXT_PUBLIC_GATE_HASH_Q1`
- `NEXT_PUBLIC_GATE_HASH_Q2` 
- `NEXT_PUBLIC_GATE_HASH_Q3`

Live URL: https://skyaerostudio.github.io/aliyya-22-birthday/