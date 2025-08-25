# Tasks — Cursor Prompt Plan (≤ 8 prompts)

1. **Init + Theme + Structure** — Scaffold Next.js TS + Tailwind; layout, sticky nav, purple theme; empty components & content files.
2. **Gate (3 Qs)** — Modal stepper, hash‑compare util, localStorage flag; ARIA focus trap.
3. **Countdown + Hero** — Correct timezone logic; first‑load confetti burst at zero; click → `PawConfetti`.
4. **Love Letter + Particles** — Typewriter intro, soft heart particles (reduced on `prefers-reduced-motion`).
5. **Gallery + Lightbox** — Responsive grid; portal lightbox with keyboard/swipe; lazy‑load images.
6. **Messages (JSON)** — Render `/content/messages.json`; card layout; fallback states.
7. **Footer + Share** — SVG cat mascot, Web Share API with copy fallback; credits.
8. **Polish (optional)** — Tiny cat game, music toggle (user‑initiated), 22‑reasons modal; a11y/perf sweep.

### Commit message suggestions
- chore: scaffold Next.js TS app with Tailwind and base purple theme
- feat(gate): add 3‑question verification with hashed answers and focus‑trapped modal
- feat(hero): countdown to 2025‑08‑30T00:00:00+07:00 + paw confetti
- feat(letter): typewriter intro + subtle heart particles (reduced motion aware)
- feat(gallery): responsive grid + custom lightbox with keyboard/swipe
- feat(messages): render /content/messages.json into message cards
- feat(footer): add cat mascot SVG + Web Share API with copy fallback
- chore: polish a11y/perf; optional mini‑game/music/22‑reasons
