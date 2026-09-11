# Git Switchyard

A printable, one-page reference for running multiple Git/SSH identities on one machine — checking your active profile, generating and wiring SSH keys, and switching safely between personal, work, and GitLab accounts.

Plain HTML/CSS/JS, no build step, no dependencies beyond a Google Fonts stylesheet link.

## Files

- `index.html` — markup and content
- `styles.css` — all styling, including print styles and a dark-mode palette
- `script.js` — wires up the "Print this sheet" button

## Run it locally

```sh
npx serve .
# or
python3 -m http.server
```

## Hosting on GitHub Pages

Once this lives in its own repo (or alongside `docker-quick-reference/` in a small "quick reference" site):

1. Push `index.html`, `styles.css`, and `script.js` to the repo root (or a `docs/` folder).
2. In the repo's **Settings → Pages**, set the source to the branch/folder containing these files.
3. GitHub publishes it at `https://<username>.github.io/<repo>/`.
