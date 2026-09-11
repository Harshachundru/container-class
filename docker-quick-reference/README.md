# Docker Manifest

A printable, one-page Docker command reference — install, build images, publish to Docker Hub, and run containers — styled like a cargo manifest.

Plain HTML/CSS/JS, no build step, no dependencies beyond a Google Fonts stylesheet link.

## Files

- `index.html` — markup and content
- `styles.css` — all styling, including print styles and a dark-mode palette
- `script.js` — wires up the "Print this sheet" button

## Run it locally

Just open `index.html` in a browser, or serve the folder:

```sh
npx serve .
# or
python3 -m http.server
```

## Hosting on GitHub Pages

Once this lives in its own repo:

1. Push `index.html`, `styles.css`, and `script.js` to the repo root (or a `docs/` folder).
2. In the repo's **Settings → Pages**, set the source to the branch/folder containing these files.
3. GitHub publishes it at `https://<username>.github.io/<repo>/`.

No other configuration is needed — everything is static.
