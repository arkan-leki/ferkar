# Ferkar — website

The agency website for **Ferkar**, rebuilt to match the visual language of the original
site (`ferkar-ow2i42.app.builtwithrocket.new`) but with **real content**: Arkan's actual
work in the development section, Hazhar's in the business/design section.

No build step, no framework, no dependencies. Open `index.html` and it runs.

---

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page — structure and all the markup |
| `styles.css` | The design system (neumorphic / soft UI) |
| `app.js` | Language switching (EN / KU / AR) and the mobile menu |
| `assets/logo-mark.png` | The Ferkar **F** mark, transparent — used in the header |
| `assets/logo.png` | The full Ferkar lockup (mark + FERKAR + IDEA TO REALITY), transparent |
| `assets/favicon.png` | Browser tab icon, 256×256 from the mark |
| `assets/og-image.jpg` | Social preview image, 1200×675 |
| `assets/map.png` | Static map of the office location, 1024×768, built from OpenStreetMap tiles |
| `.preview/` | Screenshots used to check rendering — safe to delete |

---

## The design

Taken from the original site's own CSS, so it looks like the same family:

- **Background** `#e0e0e0` — the [neumorphism.io](https://neumorphism.io/#e0e0e0) base
- **Shadow colours** `#bebebe` (dark) and `#ffffff` (light) — the values the generator
  produces for that base
- **Text** `#1A1A2E` (dark navy) · **Gold accents** `#C8965A` / `#E0B070`
- **Neumorphic shadows** — raised and inset, scaled from the generator's 20px/60px default:
  `--neo-shadow-lg` 20/60 for large surfaces · `--neo-shadow` 12/24 for cards ·
  `--neo-shadow-sm` 6/12 for buttons and chips · matching `--neo-inset*` for pressed states
- Sections alternate between `#e0e0e0` and `#dadada`
- **Hero background:** the Ferkar **mark** (`assets/logo-mark.png`) at 7.5% opacity,
  centred behind the headline. The PNG's real alpha channel means opacity alone fades it —
  no blend modes or filters needed.
- **Type** — Plus Jakarta Sans for headings, Manrope for body (Google Fonts)
- **Radius** 1rem / 1.5rem

All of it lives in `:root` at the top of `styles.css`. Change a value there and it
propagates everywhere.

---

## How to edit the text

**All copy is in `app.js`, in the `T` object — three blocks: `en`, `ku`, `ar`.**

Each block has the same ~89 keys. To change a sentence, edit the key in all three
languages. The HTML only holds the key name:

```html
<h2 data-i18n="workH2">What we've built</h2>
```

→ change `workH2` in `T.en`, `T.ku` and `T.ar`.

There is a validation check worth running after edits — it catches any key that exists in
one language but not the others:

```bash
node -e '
const fs=require("fs");
const html=fs.readFileSync("index.html","utf8"), js=fs.readFileSync("app.js","utf8");
const used=[...new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map(m=>m[1]))];
const T=eval("("+js.match(/const T = \{[\s\S]*?\n\};/)[0].replace("const T = ","").replace(/;$/,"")+")");
for(const l of ["en","ku","ar"]){
  const miss=used.filter(k=>T[l][k]===undefined);
  console.log(l, miss.length?("MISSING: "+miss.join(", ")):"ok");
}'
```

---

## ⚠️ What still needs filling in before this goes public

These are marked clearly in the page itself with a gold-bordered notice, so they are hard
to ship by accident.

1. **Hazhar's real projects.** The three cards in *Design & Marketing* are placeholders
   describing disciplines, not projects. Replace them with real case studies — client
   names, before/after, results, and images of the work. **Do this before launch.**
2. **Real images.** There are no photographs or screenshots yet. Real screenshots of
   Gihan, Zuba, Kapitan POS and Ferga would beat illustration every time.
3. **No testimonials section yet — on purpose.** The original site had three, and they
   read as AI-written. **Only add testimonials if they are real and you have the client's
   permission to name them.** A named, verifiable quote is worth more than five invented
   ones, and an invented one is a liability.
4. **The contact form does not send anything.** It is markup only (`onsubmit="return false"`).
   Either wire it to a form service (Formspree / Netlify Forms) or replace it with
   **WhatsApp and email links**, which is what local clients will actually use.
5. ~~Favicon and social preview image~~ — **done.** `assets/favicon.png` and
   `assets/og-image.jpg` are wired into the `<head>`.

---

## The map

`assets/map.png` is a **static map image**, not an iframe. Twelve OpenStreetMap tiles
(zoom 16, 4×3 grid) stitched together, with a pin drawn at the exact coordinates and the
required OSM attribution baked in.

**Why static rather than an embedded map:**
- It **always renders.** An iframe depends on a third party responding, and Google's
  `output=embed` endpoint rendered nothing when tested.
- No third-party scripts, no cookies, no tracking, and no consent banner.
- It is one small file that loads instantly.

The whole map is a link to Google Maps, and the **Get directions** button points at
Google Maps too — which is what people actually navigate with.

**To move the pin:** edit `LAT` / `LON` in the coordinates shown in `index.html`, then
regenerate `assets/map.png` by re-running the tile-stitching step (zoom 16, 4×3 tiles).
**Coordinates:** `34.612062, 45.311939` — Kalar Mall, Kalar, Sulaymaniyah, Iraq.

---

## Language switching

- The switcher sits in the nav: **EN / KU / AR**
- Kurdish and Arabic flip the whole page to **RTL** automatically
- The choice is remembered in `localStorage`
- First visit falls back to the browser language
- **`?lang=ku` / `?lang=ar` / `?lang=en` force a language** — useful for sending someone
  a link straight into their own language

---

## Deploying

Any static host. No build command, no output directory — just the folder.

- **Netlify** — drag the folder onto app.netlify.com/drop
- **Vercel** — `vercel` in this directory
- **GitHub Pages** — push and enable Pages on the branch

Fonts load from Google Fonts, so the page needs internet on first load (they are then
cached by the browser).

---

## Notes

- Verified rendering at 1280px, 400px and 360px, in English and Kurdish.
- All 89 translation keys are present in all three languages.
- The mobile nav hides the "Start a Project" button (it lives in the hero and the contact
  section) so the language switcher and menu always fit.

---

## Brand assets

The logos in `assets/` were derived from the Gemini-generated originals in
`~/Downloads/ferkar/`. The originals had an opaque light-grey textured background, so the
background was keyed out to produce clean transparent PNGs (logo at luminance 32–95,
background at 224–255 — a wide, clean gap).

- **`logo-mark.png`** — just the F mark. Used in the header next to the wordmark, because
  the full three-line lockup is illegible at 40px.
- **`logo.png`** — the full lockup. Available for places with more room (footer, print,
  social profiles).
- **`favicon.png`** — the mark, padded square.
- **`og-image.jpg`** — the wide circuit-board brand banner from the same folder.

**If a vector (SVG) version of the logo appears, use it instead** — it will stay sharp at
every size and this keyed PNG can be retired.
