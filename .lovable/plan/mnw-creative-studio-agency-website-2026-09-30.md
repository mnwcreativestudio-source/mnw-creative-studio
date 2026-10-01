# MNW Creative Studio — Agency Website

A single-page premium agency site at `/`, with anchor-based navigation between sections. Visual identity: deep black/charcoal base, white text, metallic gold accents, generous spacing, large type, subtle gold gradients and glass blur, fast scroll-in and hover animations.

No location is mentioned anywhere; positioning is global. No testimonials, client logos, awards or statistics are invented.

## Sections (in order)

1. **Sticky navbar** — logo wordmark, links (Home, Services, Work, Process, About, Contact), gold "Get Started" button, hamburger menu on mobile with full-screen overlay.
2. **Hero** — "Turn Your Ideas Into a Powerful Digital Experience." with the supporting line, "Start Your Project" and "View Our Work" buttons, a laptop/browser mockup showing a modern website, and a softly animated gold-glow background.
3. **Value strip** — DESIGN • DEVELOPMENT • REDESIGN • DIGITAL EXPERIENCE as a quiet marquee/divider band.
4. **What We Build** — six cards: Web Design, Development, Redesign, Business Websites, E-commerce, Custom Solutions. Each with a line icon, one-line description, gold hover lift.
5. **Why MNW** — "Built For Businesses That Want To Stand Out." with the six points as a clean grid. No guarantee claims.
6. **Selected Work** — case-study style showcase for "W Dental Clinic — Website Concept" with a large site preview mockup and a "View Live Demo" button to https://wi-dental-clinic.vercel.app (opens in a new tab).
7. **From Idea To Launch** — 01 Discover, 02 Design, 03 Develop, 04 Launch on a connected timeline, horizontal on desktop and vertical on mobile.
8. **About** — "Digital Experiences, Built With Purpose." with the provided paragraph.
9. **CTA band** — "Ready To Build Something Great?" on a dark gold-lit panel with "Start Your Project".
10. **Contact** — "Let's Build Your Website.", the email as a mailto link, and a form (Name, Email, Business Name, Project Type, Message, Submit).
11. **Footer** — wordmark, tagline, nav links, Instagram link, email, © 2026 line.

## Images

Two generated visuals: the hero laptop/browser mockup and the dental-clinic project preview. Both styled dark/gold to match the brand.

## Contact form behaviour

Built with real validation and a clear success state, but no invented backend: on submit it opens a pre-filled email to mnwcreativestudio@gmail.com so no message is silently lost. Wiring it to real email delivery is a separate step whenever you want it.

## Technical notes

- TanStack Start route at `src/routes/index.tsx` (replacing the placeholder), sections as components under `src/components/`.
- Black/charcoal/white/gold tokens added to `src/styles.css` as semantic design tokens (oklch); no hardcoded colour classes in components.
- Scroll reveals via a small intersection-observer hook; transitions kept short (150–400ms) and reduced-motion respected.
- Route-level `head()` with agency-specific title, description, og and twitter metadata.

## Needs your input

- **Facebook page** — I don't have your official page URL, so I'll leave Facebook out of the footer rather than guess. Send the link and I'll add it.
- **Logo** — I'll set a refined gold wordmark. If you have the logo image file, upload it and I'll use it in the navbar and footer instead.
