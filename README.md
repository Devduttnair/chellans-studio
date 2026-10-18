# Chellan's Studio — Concept Website

A cinematic, luxury editorial website concept for **Chellan's Studio**
(Chellans Studio and Frames), a photography studio in Tripunithura, Ernakulam,
Kerala, established 1976.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4,
Motion for React, and Lucide icons. Vercel ready.

## Demo honesty

This is a **concept demonstration website** prepared to show the studio how
their business could present itself online. Important notes:

- Every photograph on the site is an **illustrative sample**, not the studio's
  own work. The footer carries this notice, and portfolio captions and the
  restoration demo are labeled as illustrative samples.
- No awards, testimonials, review counts, ratings, client names, project
  counts, or opening hours are claimed anywhere. The Reviews section links out
  to the studio's real Google Maps listing without showing any numbers.
- The heritage timeline uses only the verified founding year (1976); no
  historical milestones are invented. "Five decades" is plain arithmetic.
- The enquiry form does **not** store anything. It composes a message and
  opens WhatsApp (`wa.me`) so the visitor sends it from their own account.
- No website-development prices appear anywhere on the client-facing pages.

## Verified business facts

The following details come from the studio's own printed material (business
card + photo order envelope, saved in `reference/`), not from the brief:

- Email: chellanstpra@gmail.com
- Their tagline: "We capture your memories forever"
- Two branches: **Tripunithura** (Main Road, Tripunithura) and **Kakkanad**
  (Edappally - Pukkattupady Rd, Near Kosamattam Finance, Judgemukku,
  Thrikkakara)
- Counter services: one-minute passport photos, photo enlargement, photo
  lamination, album designing, mug printing, personalized gifts

Everything else on the site (reviews, hours, milestones, client names) remains
deliberately unclaimed, per the demo-honesty rules above.

## Local setup

Requires Node.js 18.18+ (tested on Node 24).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (must pass with zero errors)
npm start        # serve the production build
npm run lint
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In the Vercel dashboard: **Add New → Project → Import** the GitHub repo.
3. Framework is auto-detected as **Next.js**. No build settings to change
   (`npm run build`, output `.next`).
4. Optional: set `NEXT_PUBLIC_SITE_URL` (e.g. `https://chellans-studio.in`)
   so the sitemap, robots, and Open Graph URLs use the canonical domain.
5. Press **Deploy**.

No environment secrets, databases, or paid services are required.

## Replacing the sample photographs

All images live in `public/images/` and are referenced from
`src/data/images.ts` (the `GALLERY` manifest: file, alt text, caption,
category, dimensions).

To replace a photo with the studio's own work:

1. Export the photo at max 1600px on the long edge, JPEG quality ~75 or
   WebP quality ~72, aiming under ~300KB each.
2. Drop it into `public/images/` (keep the same filename, or update the
   `src` in `src/data/images.ts`).
3. Update the `alt` text to describe the actual photograph, and the
   `caption` if needed. Set `w`/`h` to the real dimensions.
4. The hero image is `public/images/hero.webp` (referenced in
   `src/components/Hero.tsx` and in the Open Graph metadata in
   `src/app/layout.tsx`).
5. The restoration demo uses `restore-before.jpg` / `restore-after.webp`
   (see `src/components/Restoration.tsx`). Replace both with a genuine
   before/after pair from the studio, keeping the same aspect ratio.
6. Rebuild (`npm run build`) and redeploy.

When the studio's own photographs replace the samples, remove the
"illustrative samples" notices in the footer (`src/components/Location.tsx`),
the portfolio intro (`src/components/Portfolio.tsx`), and the lightbox
caption.

## Image provenance

Sample photographs are free stock photos downloaded from Pexels
(https://www.pexels.com), whose license permits free use, including
commercial use, without attribution. Each file was preflighted (HTTP 200,
image content type), downloaded locally (no hotlinking), and optimized.

Pexels photo IDs used (see `src/data/images.ts` for the mapping):

- hero: 27443997 (2560px) · photo-4 (haldi): 12153938 (2560px) · video-1: 10395639 (2560px)
- portraits: 34921744, 37524408, 14677599, 20198788
- photography: 17657612, 27443997, 19613670, 12153938, 37045023, 35069916
- videography: 10395639, 3062549, 13811051
- frames: 29985393, 310435, 7877826
- retouch: 8384894 · restoration: 17477621
- heritage: 3945336, 21274274

`restore-before.jpg` is a locally generated "damaged" derivative of the
restoration sample (fading, sepia cast, scratches), created only to
demonstrate the before/after slider. It is labeled illustrative on the page.

## Project structure

```
src/
  app/
    layout.tsx      # fonts, SEO metadata, Open Graph, LocalBusiness JSON-LD
    page.tsx        # section composition
    globals.css     # Tailwind v4 theme (brand palette), keyframes
    sitemap.ts      # /sitemap.xml
    robots.ts       # /robots.txt
    not-found.tsx / error.tsx
  components/
    Intro.tsx       # cinematic brand reveal (skippable, ~2s)
    Nav.tsx         # fixed nav, mobile menu, scroll progress
    Hero.tsx        # fullscreen hero, Ken Burns, staggered headline
    Heritage.tsx    # 1976 → 2026 year counter, parallax composition
    Portfolio.tsx   # filters, masonry grid, lightbox (keyboard + touch)
    Services.tsx    # 6 image-led editorial service rows, WhatsApp CTAs
    Restoration.tsx # before/after slider (pointer + keyboard)
    Frames.tsx      # frames & fine prints showcase
    Reviews.tsx     # neutral Google listing link (no fabricated claims)
    Enquiry.tsx     # form → opens WhatsApp with composed message
    Location.tsx    # address, map embed, directions, footer
    Reveal.tsx      # scroll-reveal + eyebrow helpers
  data/
    site.ts         # business facts, WhatsApp helpers
    images.ts       # image manifest
public/images/      # optimized local images
```

## Accessibility and motion

- Semantic landmarks, aria labels on interactive controls, visible gold
  focus rings, keyboard-operable lightbox (Esc/arrows) and restoration
  slider (arrow keys).
- All motion is gated on `prefers-reduced-motion`: the intro is skipped,
  Ken Burns/parallax/stagger animations are disabled, and CSS animations
  are neutralized.
