# harry.rebes.co

Single static page; no build step or dependencies. Everything lives in `public/`.

- Preview: `python3 -m http.server -d public 8000`, then open http://localhost:8000. Pages use absolute paths (`/vendor/...`), so `file://` won't load three.js.
- three.js is pinned to r128 in `public/vendor/three.min.js` (UMD global `THREE`). Newer releases drop the UMD build; upgrading means moving to ES modules.
- r128 quirks: `Texture` has no `userData`; `InstancedMesh` needs `frustumCulled = false` because culling uses the base geometry's bounds.
- Headless Chromium has no WebGL; verify the world in a headed browser.
- The CSP in `vercel.json` only allows self-hosted scripts plus Google Fonts. Update it if you add an external resource.
