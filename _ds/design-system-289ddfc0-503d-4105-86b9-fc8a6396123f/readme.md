
# НФ Design System

Brand and asset system for **НФ — Неформальный форум по развитию территорий** ("Informal Forum for Territory Development"), a Russian civic/urban-development community that runs events, forums and city-branding initiatives (sample content references Костомукша and Выкса, and an "Ассоциация" — a city-producers association whose focus is "исследование трендов, образование и R&D, лучшие команды, партнеры и стейкхолдеры, бренд, кодекс этики").

**Source:** a single attached Figma file ("Untitled.fig", page `Page-1`, 93 frames). The file defines **no Figma components, no Variable collections and no Text Styles** — it is a flat sheet of finished print/social artwork (posters, event badges, Instagram-style posts, stickers, coffee packaging, t-shirt mockups). Everything in this design system was reverse-engineered from that artwork's exact geometry, type and color — there is no underlying app or website in scope.

Because the source defines no reusable UI components, this system does **not** invent generic app components (Button, Input, Card, etc. — see "Intentional additions" below for the few exceptions). Instead it captures the brand's real repeating visual devices: the logo lockup, the notched-corner badge/frame motif, circular photo stickers, pill stickers, and the A4/social poster template.

## Index
- `styles.css` — root stylesheet, imports all tokens
- `tokens/colors.css`, `tokens/typography.css` (+ `@font-face`), `tokens/spacing.css`
- `assets/fonts/` — Royal Theatre Sans & Serif (Light, Demibold, Light Italic) webfonts, supplied by the user
- `assets/logo/` — logo mark vector
- `assets/icons/` — the one bespoke icon found in the source (megaphone)
- `assets/images/` — a curated sample of the source's documentary photography/texture
- `components/brand/` — Logo, NotchedBadge (logo-lockup / label frame motif)
- `components/social/` — StickerCircle, PillSticker, PosterCard
- `guidelines/` — foundation specimen cards (Design System tab)
- `ui_kits/social-kit/` — clickable recreation of the social/print kit (poster, Instagram post, sticker sheet)
- `SKILL.md` — Claude Code portable skill

## Content fundamentals
- **Language:** all copy is Russian, no localization layer.
- **Case as design tool:** headlines and labels are set in ALL CAPS (`textTransform:uppercase`) in the display serif/sans; supporting copy (dates, small print, captions) drops to lowercase sentence case — the contrast between shouty caps headline and quiet lowercase footnote is a signature move (e.g. "ЦВЕТА" headline vs. "Дизайн-система 4" lowercase running head).
- **Wordplay on the brand name:** "не" + "форум" is set as two interlocking words/boxes — a visual pun on "нефорум"/"неформальный форум" (not-a-forum / informal forum). Expect this kind of playful compound wherever the logotype appears.
- **Voice:** informal, community-first, second-person-adjacent but often uses collective "мы" framing — copy like "и пьём кофе вместе" (and we drink coffee together), "обстучим вопросик" (colloquial/slangy "let's hash out the little question"), "посиделки у костра в непринужденной обстановке" (fireside hangouts, relaxed setting). Diminutives and slang ("вопросик") signal warmth over formality.
- **Event copy pattern:** date ranges + location + one-line pitch, e.g. "18–21 СЕНТЯБРЯ" / "ДЕДЛАЙН: 5 СЕНТЯБРЯ", "г. Выкса", "событие для тех, кто занимается развитием территорий, создаёт позитивные изменения…".
- **No emoji.** Typographic punctuation (em dashes, ALL CAPS, numerals) carries emphasis instead.

## Visual foundations
- **Color:** electric blue `#027BFD` is the dominant brand color (used for large fields, logo, headline type, hairline strokes). Lavender-purple `#B199FF` is the secondary brand color, used at roughly the same visual weight as blue on split layouts (see the two-swatch color spec page) and for sticker backgrounds. A small warm accent (burnt orange `#DD6928`/`#E6662B`) appears in rock/stone photo treatments and packaging. A muted green trio (`#4CD79B`, `#046540`, `#2B9579`) shows up sparingly as a tertiary accent. Neutrals are cool light greys (`#DADADA`, `#D9D9D9`, `#DDDDDF`) used as page/canvas backgrounds behind artwork, plus near-black `#161616` for body copy and a true black/white for contrast. There is no gradient system beyond one soft drop shadow and a couple of photo scrims (`linear-gradient(180deg, transparent, rgba(0,0,0,0.2))`) used to keep white sticker type legible over photos.
- **Type:** two custom families carry the whole system — **Royal Theatre Serif** (a warm slab/transitional serif, Light + Demibold + Light Italic) for display headlines and large numerals, and **Royal Theatre Sans** (Demibold-heavy grotesk, Light + Demibold + Light Italic) for labels, running heads and body copy. Headline pairs frequently mix the two families in the same line/box (serif word + sans word) to build the "не"+"форум" interlock. Tight, near-touching letter-spacing (`-0.07em` to `-0.13em`) is used on big Demibold lockups; looser, slightly-negative tracking (`-0.02em`) on big serif headlines. Two decorative fonts appear in small amounts for handwritten-signature-style accents (Normalidad, Panama, Gogol) — see Iconography/Typography caveats below.
- **Backgrounds:** mostly flat color fields (blue, purple, or grey `#DADADA`/`#D9D9D9` "presentation canvas" grey) rather than gradients. Documentary photography (people, city streets, stone/nature textures) is used full-bleed inside cut/notched shapes or circular sticker masks, always with real photos — never illustration.
- **Signature shape motif — the notch:** rectangles with one or two corners replaced by a diagonal or stepped cut recur everywhere: the logo mark itself, headline frame boxes on posters, badge/label boxes. Treat this as the brand's one geometric "logo language" element, alongside plain rectangles and full circles (photo stickers, pill stickers).
- **Cards / frames:** thin hairline strokes (`0.3–0.45px` inset box-shadow, not a CSS border) outline empty content frames on spec/reference pages — these are proportion guides, reproduced here as a light outline style for "placeholder" frames. Real content boxes are solid color fills, no radius (poster panels) or full radius (circular stickers, pill stickers `border-radius:24px`+).
- **Shadows:** minimal — one soft drop shadow (`0 4px 5px rgba(0,0,0,0.25)`) on small badge chips; everything else is flat.
- **Corner radii:** 0 (poster/panel blocks), 5px (small badge chips), ~24px (pill stickers), 50% (circular photo stickers).
- **Animation / hover / press:** none observed — this is a static print/social artwork system, not an interactive product. The components below add conventional, restrained hover/press states (opacity/scale) only where the recreated kit is clickable, using the brand's flat-color language rather than inventing new motion.
- **Transparency/blur:** transparency used only for (a) the `rgba(22,22,22,0.15)` "ghost" running-head watermark text and (b) a bottom photo scrim for legibility. No blur/glassmorphism anywhere in the source.
- **Imagery tone:** warm-neutral documentary photography — people, coffee, stone/rock textures, city scenes — not studio-lit, not black & white, no heavy grain observed in the sampled frames.

## Iconography
- The source defines **no icon font and no SVG icon set** — the only bespoke icon found across the sampled frames is a hand-drawn **megaphone** (used on a purple "announcement" sticker), copied to `assets/icons/icon-megaphone.svg`.
- QR codes appear on posters/packaging as functional artwork (dot-matrix), not a decorative icon — not reproduced here (would need a real target URL).
- No emoji, no unicode-glyph icons observed.
- **Recommendation:** if this system needs a broader icon set for future digital work, pick a simple single-weight line set (e.g. Lucide) — flagged here as a substitution, not sourced from the file.

## Typography/font substitutions (flag for the user)
Only the **Royal Theatre Sans/Serif** family was supplied as webfont files (`uploads/RoyalTheatreSans*.otf/.ttf`, `RoyalTheatreSerif*.otf/.ttf`) and is wired up in `tokens/typography.css`.
Three additional fonts appear in the source but were **not supplied**:
- **Normalidad** (Text Medium + UltraExtended Black) — used for social-caption headlines and big cover wordmarks. Substituted with **Archivo Black** (`--font-display-extended`) as the nearest free geometric-black fallback; it does not capture Normalidad's extended width.
- **Panama** (Italic) and **Gogol** (Italic) — both used sparingly for a handwritten-signature-style accent word (e.g. "Игорь"). Substituted with **Playfair Display Italic** (`--font-accent-italic`).
Please supply the real font files for Normalidad/Panama/Gogol if pixel-accurate reproduction of covers/signatures is needed.

## Intentional additions
The source has zero Figma components, so nothing here claims to be "from the file" beyond the motifs above. Two small components were added because the brand's own artwork repeats them constantly and a consumer would otherwise have to redraw them by hand each time:
- `PosterCard` — a generic A4/social poster shell (photo + notched headline frame + date/footer) generalized from ~6 near-identical poster frames in the source.
- `StickerCircle` / `PillSticker` — the circular photo-badge and rounded pill-badge shapes, generalized from the `nf-sticker-*` frames.

## Caveats
- No digital product (app/website) exists in the source — there is nothing to build a conventional "UI kit" from; the closest equivalent, a social/print kit, is provided instead under `ui_kits/social-kit/`.
- Normalidad, Panama and Gogol are font-substituted (see above) — ask for the real files to fix this.
- Only a small, size-conscious sample of the source's photography was copied into `assets/images/` (several images in the file are 5–14MB); more can be pulled on request.
- QR codes and literal event dates/venues from the sample frames are treated as placeholder content, not brand requirements.
