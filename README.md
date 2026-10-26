# harry.rebes.co

Personal site for Harry Rebesco: a single static page with a procedurally generated lakeside at dusk (three.js r128, vendored) and a pixel title card on top. Every visit rolls a new lake.

- `public/index.html` is the whole site (markup, styles, world generation).
- `public/vendor/three.min.js` is three.js r128, the last release with a UMD build.
- `public/resume.pdf` is linked from the page.

No build step. Preview locally with `python3 -m http.server -d public 8000`. Vercel serves `public/` as-is (see `vercel.json`).
