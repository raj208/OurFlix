# Humari Kahani — your personal "Netflix" 💛

A mobile-first, Netflix-style site for your 3 months with Nandini.
Flow: **tap-to-start TUDUM → PIN → "Who's watching?" → Browse → tap any photo/video.**

You only ever edit **one file: `content.js`.**

---

## 1. Add your photos & videos

Drop your files into the **`public/media/`** folder, then reference them in
`content.js` starting with `/media/...`.

```
public/media/hero.jpg   →   src: "/media/hero.jpg"
```

**Keep total media under ~100MB** (Vercel's comfort zone). For videos:

```bash
# compress a clip with ffmpeg (install ffmpeg first)
ffmpeg -i input.mov -vcodec libx264 -crf 28 -vf "scale=720:-2" -acodec aac output.mp4
```

Always give each video a `poster` image (the thumbnail shown before it plays).

## 2. Fill in `content.js`

- `pin` — **change `"0208"`** to the 4-digit code you'll text Nandini.
- `hero` — your standout photo + title (put your name) + tagline (edit mine).
- `rows` — rename `{{TRIP 1 NAME}}` / `{{TRIP 2 NAME}}`, add/reorder rows,
  and write the captions (I left them blank on purpose).

Missing media shows a soft "add a photo" placeholder instead of breaking —
so it always looks intentional while you fill it in.

## 3. Run it locally


```bash
npm install
npm run dev
# open http://localhost:3000 (use your phone on the same wifi via your PC's IP)
```

## 4. Deploy to Vercel

**Option A — from GitHub (recommended):**
1. Push this folder to a private GitHub repo.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Framework auto-detects as **Next.js**. Click **Deploy**.
4. Share the `*.vercel.app` link with Nandini.

**Option B — Vercel CLI:**
```bash
npm i -g vercel
vercel        # first run links/creates the project
vercel --prod # ship it
```

---

## Notes
- The PIN is a *friendly* lock, not real security (it lives in the client bundle).
  Fine for keeping a stray link-opener out. For anything stronger, put the site
  behind **Vercel Password Protection** (Project → Settings → Deployment Protection).
- Search-engine indexing is turned off (`robots: noindex`) so the link stays low-key.
- The "TUDUM" sound is **synthesized live in the browser** — no copyrighted audio shipped.
- Not affiliated with Netflix; it's an affectionate homage for private use.

Made to be handed straight to her. Go get 'em. 🎬
