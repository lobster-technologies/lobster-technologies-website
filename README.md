# Lobster Technologies — Website

Marketing website for Lobster Technologies, a custom software company based in Nairobi, Kenya.

Built with **Next.js 16**, **Tailwind CSS 4**, and **TypeScript**.

## Pages

| Route | Page |
|---|---|
| `/` | Homepage — hero, proof, problem, how we work, capabilities, case study, CTA |
| `/about` | About — mission, methodology, pillars, founder |
| `/case-studies` | Case studies index — all projects |
| `/case-studies/wendo-rms` | Wendo Coffee Bistro deep-dive |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding the founder photo

Place the photo file at:

```
public/edwinfred-kamau.jpg
```

The About page references this path. Any standard image format works — just rename it to `edwinfred-kamau.jpg` (or update the `src` in `app/about/page.tsx:L~170`).

## Updating contact details

All contact details are already set. To change them, search the codebase for the email or phone number:

- **WhatsApp:** `https://wa.me/254113176613`
- **Email:** `lobster.technologies.africa@gmail.com`

## Placeholders remaining

- `public/edwinfred-kamau.jpg` — founder photo (see above)

## Design system

- **Display font:** Instrument Serif (Google Fonts, via `next/font`)
- **Body font:** DM Sans (Google Fonts, via `next/font`)
- **Accent:** `#d4520a` (burnt orange)
- **Design tokens:** `app/globals.css`
