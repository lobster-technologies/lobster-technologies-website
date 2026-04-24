# Sofia — Design System
**"Editorial Concierge"**

A premium, editorial design language built for Sofia — an AI Sales Agent landing page targeting African e-commerce businesses. The system balances high-end European editorial aesthetics with warmth and cultural relevance for the Kenyan market.

---

## 1. Design Principles

| Principle | Expression |
|---|---|
| **Editorial restraint** | Generous white space. Let content breathe. Never crowd. |
| **Intentional contrast** | Dark text on off-white. Color used sparingly — only to direct attention. |
| **Motion with purpose** | Every animation communicates something. No decoration for its own sake. |
| **Platform authenticity** | UI mockups (WhatsApp, M-Pesa) must look indistinguishable from the real thing. |
| **Culturally grounded** | Copy, colors, and context are rooted in the Kenyan SME experience. |

---

## 2. Color Palette

### Core
| Token | Hex | Usage |
|---|---|---|
| `background` | `#FCFCFA` | Page background. Vellum — warm off-white, never pure white. |
| `foreground` | `#1A1A1B` | Primary text. Charcoal — softer than pure black. |
| `primary` | `#E63946` | Lobster Red. CTAs, emphasis, brand moments. Use sparingly. |
| `secondary` | `#EEF5F0` | M-Pesa Mint. Eyebrow pills, subtle section backgrounds. |
| `accent` | `#F4F4F1` | Light grey. Card backgrounds, input fields, customer chat bubbles. |

### Extended (contextual)
| Value | Hex | Usage |
|---|---|---|
| WhatsApp Green | `#25D366` | Sofia chat bubbles, active status indicators. |
| WhatsApp Dark Green | `#0a8336` | Sofia chat bubble gradient end, hover states. |
| Instagram Pink | `#E1306C` | Instagram notification badges only. |
| Success Green | `#22c55e` | M-Pesa confirmation, checkmarks, success states. |
| Midnight Purple | `#9B8EC4` | Moon icon on the midnight pain point. Emotional accent only. |

### Opacity scale (on `foreground` `#1A1A1B`)
```
High emphasis text:    rgba(26,26,27, 1.0)
Body text:             rgba(26,26,27, 0.65)
Secondary text:        rgba(26,26,27, 0.55)
Muted / captions:      rgba(26,26,27, 0.40)
Placeholder / labels:  rgba(26,26,27, 0.35)
Hairlines / dividers:  rgba(26,26,27, 0.08)
```

### Rules
- **Primary red** appears on at most 2 elements per viewport at a time.
- **Never** use primary red as a background for large surfaces.
- **Dark mode is intentionally disabled.** The off-white background is brand-locked.

---

## 3. Typography

### Typefaces
| Role | Family | Source |
|---|---|---|
| **Serif** — Headlines | Instrument Serif | Google Fonts (`<link>` in layout.tsx) |
| **Sans** — Body, UI | Satoshi | Fontshare CDN (`<link>` in layout.tsx) |

Both are loaded as `<link rel="stylesheet">` tags in `app/layout.tsx`. Never use `next/font/google` — it requires build-time network access which fails in restricted environments.

### Type Scale
| Role | Size | Font | Weight | Tracking | Line Height |
|---|---|---|---|---|---|
| Hero headline | `clamp(2.8rem, 5.5vw, 5.5rem)` | Serif | 400 | `-0.035em` | `1.06` |
| Section headline | `clamp(2rem, 3.5vw, 2.85rem)` | Serif | 400 | `-0.025em` | `1.15` |
| Subheadline | `1.15rem` | Sans | 400 | `0` | `1.7` |
| Body | `1rem` | Sans | 400 | `0` | `1.65` |
| Large body | `1.125rem` | Sans | 400 | `0` | `1.7` |
| Eyebrow label | `0.72rem` | Sans | 500 | `0.10–0.12em` | `1` |
| Caption / micro | `0.78–0.82rem` | Sans | 400–500 | `0` | `1.4` |
| Phone UI text | `11–13px` | Sans | 400–700 | `0` | `1.2–1.4` |

### Rules
- **Italic Instrument Serif** is reserved for emotionally charged words in headlines (e.g. *"Never Sleeps"*). Apply sparingly — maximum one italic phrase per headline.
- **Red italic** (`color: #E63946, fontStyle: italic`) is the highest-emphasis state. Only one instance per page section.
- Eyebrow labels are always `UPPERCASE` with wide tracking (`0.10em+`).
- Never use font weights above 700.

---

## 4. Spacing

The system uses an extended spacing scale beyond Tailwind defaults. All values are multiples of `0.5rem` (8px base).

### Key layout values
| Purpose | Value |
|---|---|
| Section vertical padding (desktop) | `py-28` to `py-36` (`7–9rem`) |
| Section vertical padding (mobile) | `py-20` to `py-28` |
| Max content width | `max-w-6xl` (72rem) |
| Horizontal padding | `px-8 lg:px-16` |
| Grid gap (2-col) | `gap-16 lg:gap-24` |
| Component internal padding | `px-6 py-3` to `px-10 py-5` |

### Rule
When in doubt, add more space. White space is a first-class design element in this system — it signals premium quality.

---

## 5. Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `4px` | Chat bubble corners (tight side) |
| `--radius-md` | `8px` | Small cards, badges |
| `--radius-lg` | `16px` | Notification bubbles, large cards |
| `--radius-xl` | `24px` | M-Pesa card, feature cards |
| `--radius-2xl` | `32px` | Phone frame, modals |
| `rounded-full` | `9999px` | Pills, buttons, avatars, icon containers |

---

## 6. Shadows

Shadows are intentionally ultra-subtle. This is an editorial system, not a skeuomorphic one.

| Token | Value | Usage |
|---|---|---|
| `--shadow-soft` | `0 2px 20px rgba(26,26,27, 0.06)` | Cards at rest |
| `--shadow-card` | `0 4px 40px rgba(26,26,27, 0.08)` | Elevated cards |
| Phone float shadow | `drop-shadow(0 40px 80px rgba(26,26,27,0.22))` | Phone mockup depth |
| CTA button glow | `0 4px 24px rgba(230,57,70, 0.30)` | Primary button only |
| WA bubble shadow | `0 2px 12px rgba(37,211,102, 0.28)` | Sofia chat bubbles |

---

## 7. Animation System

All animations use **Framer Motion**. The guiding principle: animations should feel like physics, not CSS transitions.

### Timing vocabulary
| Name | Values | Usage |
|---|---|---|
| **Entrance** | `duration: 0.5–0.7, ease: "easeOut"` | Elements sliding/fading in |
| **Spring pop** | `type: "spring", stiffness: 100, damping: 14` | Bubbles, cards appearing |
| **Spring snappy** | `type: "spring", stiffness: 200, damping: 18` | Quick state changes |
| **Float loop** | `duration: 5, repeat: Infinity, ease: "easeInOut"` | Phone floating animation |
| **Stagger children** | `staggerChildren: 0.07–0.12` | List/word reveals |

### Standard entrance pattern
```tsx
// Section element entering viewport
initial={{ opacity: 0, y: 24 }}
animate={inView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6, ease: "easeOut" }}
```

### Word-by-word headline
```tsx
// Each word in the hero headline
initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
transition={{ delay: 0.1 + i * 0.07, duration: 0.55, ease: "easeOut" }}
// Last word adds a scale pulse: scale: [0.85, 1.06, 1]
```

### Scroll-linked effects
- Use `useScroll` + `useTransform` for parallax and color shifts.
- Always attach `target` ref and `offset` to scope the effect to the section.
- Navbar glass opacity: `scrollY [0→60px]` → `bgOpacity [0.72→0.97]`.

### Rules
- All interactive `motion` elements: `whileHover={{ scale: 1.04–1.05 }}`, `whileTap={{ scale: 0.95–0.96 }}`.
- Never animate `width` or `height` directly — use `scaleX`/`scaleY` or `transform` instead.
- Typing indicators: three dots, `y: [0, -4, 0]`, staggered by `0.18s`, `repeat: Infinity`.
- SVG path draws: `pathLength: 0 → 1` via `motion.path`.

---

## 8. Component Patterns

### Eyebrow label
```tsx
<span style={{
  background: "#EEF5F0",
  border: "1px solid rgba(26,26,27,0.08)",
  borderRadius: 9999,
  padding: "6px 16px",
  fontSize: "0.72rem",
  letterSpacing: "0.10em",
  textTransform: "uppercase",
  fontFamily: "Satoshi, sans-serif",
}}>
  Label text
</span>
```

### Primary CTA button
```tsx
// Lobster Red pill with shimmer sweep
style={{
  background: "#E63946",
  color: "#FCFCFA",
  borderRadius: 9999,
  padding: "1.1rem 2.5rem",
  boxShadow: "0 4px 24px rgba(230,57,70,0.30)",
  fontFamily: "Satoshi, sans-serif",
  fontSize: "1rem",
  letterSpacing: "-0.01em",
}}
// + shimmer: linear-gradient sweep via Framer Motion variants, every ~4s
```

### Secondary / ghost button
```tsx
style={{
  background: "#1A1A1B",
  color: "#FCFCFA",
  borderRadius: 9999,
  padding: "10px 20px",
  fontSize: "0.875rem",
}}
```

### Glass card / navbar pill
```tsx
style={{
  background: "rgba(252,252,250, 0.88)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(26,26,27,0.08)",
  boxShadow: "0 2px 20px rgba(26,26,27,0.06)",
}}
```

### Icon container (pill icon bullet)
```tsx
<span style={{
  width: 28, height: 28,
  borderRadius: "50%",
  background: "rgba(26,26,27,0.06)",
  display: "flex", alignItems: "center", justifyContent: "center",
}}>
  <Icon size={13} strokeWidth={1.5} style={{ color: "rgba(26,26,27,0.35)" }} />
</span>
```

---

## 9. Section Structure

Every section follows this shell:

```tsx
<section className="relative overflow-hidden" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
  {/* Optional: background texture / gradient */}
  <div className="absolute inset-0 pointer-events-none" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16">
    {/* Eyebrow → Headline → Body → Visual */}
  </div>
</section>
```

Section background progression down the page:
| Section | Background |
|---|---|
| Hero | `#FCFCFA` |
| Pain | Scroll-transitions `#FCFCFA → #F4F4F1` with noise texture |
| How It Works | `#FCFCFA` (reset to clean) |
| Features | `#EEF5F0` (M-Pesa Mint — subtle warmth) |
| Social Proof | `#FCFCFA` |
| CTA / Waitlist | `#1A1A1B` (Charcoal — high contrast finale) |
| Footer | `#1A1A1B` |

---

## 10. File Structure

```
/app
  layout.tsx          — font <link> tags, metadata, body base styles
  globals.css         — @theme tokens, base html/body styles
  page.tsx            — section composition

/components
  /ui
    Navbar.tsx         — fixed glass navbar, scroll-linked opacity
    PhoneMockup.tsx    — iPhone 16 Pro frame, WhatsApp UI, chat animations
  /sections
    Hero.tsx           — word reveal headline, CTA shimmer, phone visual
    PainSection.tsx    — Notification Graveyard, pain points, transition line
    HowItWorks.tsx     — (next)
    Features.tsx       — (upcoming)
    Testimonials.tsx   — (upcoming)
    WaitlistCTA.tsx    — (upcoming)
    Footer.tsx         — (upcoming)

/lib
  utils.ts             — cn() helper (clsx + tailwind-merge)
```

---

## 11. Do / Don't

| Do | Don't |
|---|---|
| Use `style={{}}` for one-off values that aren't design tokens | Add dark mode variants |
| Use `clamp()` for responsive font sizes | Hard-code pixel font sizes on headlines |
| Animate on `useInView` with `once: true` | Loop entrance animations |
| Keep icons thin: `strokeWidth={1.5}` | Use filled icons |
| Use `"spring"` transitions for interactive elements | Use `linear` easing for UI motion |
| Lock the off-white background across all sections | Let browser dark mode override background |
| Write inline `style` for exact brand colors | Use Tailwind color classes for brand colors (they may not match) |
