# PRD — Aliyya’s 22nd Birthday Website

**Type:** MVP single‑page website • **Deploy:** Vercel • **When:** 2025‑08‑30 00:00 (GMT+7) • **Theme:** cats + soft purple

## 1) Summary
A cute, single‑page birthday site for **Aliyya (22)** with cats and purple gradients. The landing gate asks **3 personal questions** to verify it’s her. Once verified, the page reveals: countdown, love letter (typewriter), gallery (lightbox), friend messages from JSON, and a cozy footer. Optional polish: tiny cat mini‑game, music toggle (user‑initiated), and a modal with **“22 reasons I love you.”**

## 2) Audience & Tone
- Primary: **Aliyya** (mobile‑first). Secondary: close friends/family.
- Tone: sweet, playful, elegant; animations subtle and non‑distracting.

## 3) Scope (MVP, single‑page)
Sticky top nav → anchors scroll to: **Hero + Countdown** → **Love Letter** → **Gallery** → **Messages** → **Footer**.

### Hero + Countdown
- “HBD Aliyya” with **countdown to 2025‑08‑30 00:00:00 GMT+7**.
- Soft purple gradient background; floating cat silhouettes.
- **Confetti cats**: tap/click spawns floating paw prints (emoji/SVG) that drift & fade.

### Landing Gate (3 questions)
- Modal stepper with 3 questions (set at build). All correct ⇒ unlocks page content (state + optional localStorage).
- Wrong answers: friendly retry; after N attempts, show hint.

### Love Letter
- Typewriter entrance for first lines, then fade‑in paragraphs.
- Subtle **heart particles** behind text; respect `prefers-reduced-motion`.

### Gallery (12–24 photos)
- Responsive grid (2–3 cols mobile → 4–6 cols desktop). Click opens **lightbox** with swipe/keyboard nav.
- Lazy‑load images, precompute aspect ratios to avoid CLS.

### Messages
- Read from `/content/messages.json` (static file). Render name, relation (optional), message, optional avatar.

### Footer
- Tiny cat mascot (inline SVG), signature, **share buttons** (Web Share API with copy‑link fallback), and credits.

### Optional (time‑permits)
- Tiny **cat game** (click to catch fish, score counter, 20–30s).
- **Music toggle** (user click to play; no autoplay). Lo‑fi/cute instrumental loop.
- **Surprise modal**: “**22 reasons I love you**” from `/content/reasons.json`.

## 4) Non‑Functional Requirements
- **Performance:** image optimization, lazy loading, component splitting; minimal deps; avoid blocking fonts.
- **Accessibility:** keyboard focus traps (modals/lightbox), aria labels, color contrast, reduced motion.
- **Privacy:** gate is playful, not auth; answers hashed & compared client‑side (no plain text).
- **Device support:** modern mobile Safari/Chrome/Edge; graceful animation fallback.

## 5) User Stories
- As **Aliyya**, I answer **3 questions**; if correct, I can view the page. (AC: wrong ⇒ retry + hint)
- As **Aliyya**, I see a **countdown** accurate to GMT+7. (AC: ticks every second, not negative after date)
- As **Aliyya**, tapping the hero spawns **paw confetti** that floats and fades. (AC: 1–2s lifespan)
- As **Aliyya**, I read a **love letter** with typewriter entrance and subtle hearts. (AC: respects reduced motion)
- As **Aliyya**, I browse a **gallery** and open images in a **lightbox** with swipe/ESC to close.
- As **Aliyya**, I read **messages** loaded from `/content/messages.json`.
- As **visitor**, I can **share** via share sheet or copy link.

## 6) Acceptance Criteria (by section)
- **Gate:** three steps; per‑step validation; on success set `isVerified=true` (+ optional `localStorage` flag).
- **Countdown:** computes delta to `2025‑08‑30T00:00:00+07:00`; clamps at 0; triggers celebration state at zero.
- **Particles/Confetti:** 60fps‑friendly; capped emitters; no jank on low‑end devices.
- **Gallery:** images responsive; lightbox supports keyboard & swipe; close on backdrop or ESC.
- **Messages:** render cards; tolerate missing fields gracefully.
- **Footer:** Web Share API with fallback; SVG mascot has `role="img"` + `aria-label`.

## 7) Content & Assets Needed
- **3 verification questions + answers** (hashed at build).
- **Love letter** text (2–5 short paragraphs).
- **12–24 photos** (web‑ready).
- **messages.json** content (see schema below).
- (Optional) **reasons.json** (22 strings).
- (Optional) 1–2 audio tracks (royalty‑free, <1MB loop each).

### `/content/messages.json` schema
```json
{
  "messages": [
    { "name": "Nadia", "relation": "Bestie", "text": "So proud of you!", "avatar": "/images/avatars/nadia.jpg" },
    { "name": "Mom",  "text": "Happy 22, sayang!", "avatar": null }
  ]
}
```

### `/content/reasons.json` schema (optional)
```json
{ "reasons": [
  "Your laugh makes every room brighter",
  "You rescue every stray cat you meet"
]}
```

## 8) Out of Scope
- No backend/database, no admin panel, no form submissions.
- No login/auth; the 3‑Q gate is a playful gate only.

## 9) Milestones
1) Scaffold & Theme • 2) Gate + Countdown • 3) Love Letter + Particles • 4) Gallery + Lightbox • 5) Messages (JSON) • 6) Footer + Share • 7) Optional polish

## 10) Open Questions
- Any hint rules after N failed attempts?
- Final brand purple hexes?
- Photo sources & any to hide from lightbox?
- Music + 22‑reasons now or later?
