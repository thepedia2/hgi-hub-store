# Image Audit

## Current visible slots

| Slot | Current state | Exact source choice | Decision |
|---|---|---|---|
| Hero art | Real local image | `higgs-games.png` (1254×1254), user-provided | Installed in hero with `object-fit: contain` |
| Product 100M | Real local image | `hu.png` (1085×1450), user-provided | Installed in the 100M card with full-frame containment |
| Product 500M | Real local image | `kucing.png` (1086×1448), user-provided | Installed in the 500M card with full-frame containment |
| Product 1B | Real local image | `zeus.png` (1084×1451), user-provided | Installed in the 1B card with full-frame containment |
| Product 2.5B | Real local image composition | `zeus.png` + `kucing.png`, user-provided | Paired in the ZEUS+KUCING card; both preserve their portrait ratios |
| Social proof | No visible image slot | None required; use text/status proof rather than fabricated avatars or testimonials | No change |
| Header brand mark | Real local image | `profile.png.png` (1254×1254), user-provided HGI Hub logo | Installed beside “Halo, member!” |
| Admin CTA icon | Real local image | `whatsapp.png` (64×64), user-provided WhatsApp icon | Installed inside the existing “Tanya Admin” button |

## Prompt/source policy

No image-generation prompt is used for the HGI logo or product covers because those are factual brand/product referents. If a non-factual atmospheric background is later requested, use: “premium dark emerald game marketplace atmosphere, subtle console-light reflections, restrained neon green highlights, clean negative space for readable UI, no logos, no text, no characters”.

All used images are project-local relative paths and are marked in `index.html` with `data-image-slot` and `data-image-source` for later catalog integration.
