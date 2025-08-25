# Architecture — Aliyya’s 22nd Birthday Website

## A) Tech Stack & Rationale
- **Next.js (App Router) + TypeScript** — single‑page + anchors; easy Vercel deploy.
- **Tailwind CSS** for theming; **Framer Motion** for animations; **no heavy UI kit**.
- **Lightbox** and **particles** are custom/lightweight (no heavy deps).
- **Content:** static JSON in `/content` (import or fetch). No DB.
- **Hosting:** **Vercel Hobby** (free).

## B) Performance & Accessibility
- Known `width/height` images; lazy‑load; system font fallback.
- Respect `prefers-reduced-motion`; reduce particle count accordingly.
- Focus management for modals; semantic landmarks; sufficient contrast.

## C) File/Folder Structure (proposed)
```
app/
  layout.tsx
  page.tsx                # sections + anchors; gate wrapper
  components/
    Gate.tsx              # 3‑question stepper
    Countdown.tsx
    Hero.tsx
    LoveLetter.tsx
    PawConfetti.tsx
    Gallery.tsx
    Lightbox.tsx
    Messages.tsx
    Footer.tsx
  styles/
    globals.css
content/
  messages.json
  reasons.json            # optional
public/
  images/...
  audio/...
.env.example
```

## D) Gate (3‑Q) — Notes
- Questions & **hashed answers** set at build time (SHA‑256 with shared salt).
- Client hashes input + salt and compares (keeps plain answers out of source).
- On success: set `isVerified` state (+ optional `localStorage`).

## E) Countdown — Timezone
- Event date `2025‑08‑30T00:00:00+07:00`.
- Compute remaining time each second via fixed timestamp; clamp at 0; celebrate at zero.

## F) Paw Confetti / Particles
- On click/tap: create N small absolutely‑positioned `<span>`/`<svg>` → animate via Framer Motion (random angle/speed); unmount after ~1–2s. Cap concurrent particles (≈80).

## G) Gallery + Lightbox
- Grid → portal lightbox; keyboard: left/right, ESC; swipe on touch.

## H) Messages
- Import or fetch `/content/messages.json`; render cards; placeholder avatar if missing.

## I) Footer & Sharing
- Inline SVG mascot (cat). Use **Web Share API** with clipboard fallback.

## J) Theming
- Purple palette example: `#B48CEC` (primary), `#9B71E8` (primary‑600), `#F5EEFF` (surface), `#2A123C` (ink).
- Fonts: headings **Poppins** (or **Sora**), body **Inter**; love‑letter accent **Caveat**.

## K) Environment
- `NEXT_PUBLIC_GATE_SALT="…"`
- `NEXT_PUBLIC_GATE_HASH_Q1="…"` (and Q2/Q3).
- (Optional) `NEXT_PUBLIC_AUDIO_ENABLED=true`

## L) Dependencies (lean)
- `next`, `react`, `react-dom`, `typescript`, `tailwindcss`, `framer-motion`.

## M) Vercel
- Connect repo; add env vars; auto‑deploy on push.
