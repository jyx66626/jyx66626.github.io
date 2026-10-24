# A Quiet Space

An anonymous, static front page. Plain HTML and CSS, no JavaScript shipped to visitors, no build step, analytics, external font requests, or backend.

## Local preview

Requires Node.js 18 or newer. No package installation is needed.

```sh
node tools/preview.mjs
```

Open `http://127.0.0.1:4173/`. The preview binds only to loopback and serves an explicit list of website files, without exposing Git data or directory listings. Stop with Ctrl+C. Set `PORT` to use a different port.

## Publication

The root `index.html`, `404.html`, `style.css`, `assets/`, and `.nojekyll` are ready for GitHub Pages. No build command is required. With branch publication, use the root of the approved branch. Do not enable or change publication until the design has been reviewed. A private source repository requires an eligible GitHub plan; repository privacy and published website privacy are separate settings.

The 404 page uses root-relative URLs because this site targets a Pages user-site root. Adapt these URLs if moving to a project subpath.

## Design

Paper `#f6f3eb`, ink `#30372f`, secondary text `#697064`, moss `#4c654d`, rules `#d9d8cc`. The layout uses a reading column with marginal notes, quiet rules, and one original botanical line drawing. There are no unpublished section links or fabricated entries.

The direction draws on the editorial rhythm and digital garden idea at [Maggie Appleton](https://maggieappleton.com/), the clear developer-homepage hierarchy at [Anthony Fu](https://antfu.me/), and the restrained details at [Paco Coursey](https://paco.me/). [Jacky Zhao](https://jzhao.xyz/) is a reference for future garden organization. No page, illustration, or visual asset is copied.

## Fonts

Self-hosted Newsreader (regular and true italic), Noto Serif SC for Chinese headings, and Noto Sans SC for Chinese body text, with system fallbacks. Original fonts come from the [Google Fonts repository](https://github.com/google/fonts), under the SIL Open Font License. Corresponding licenses are retained in `assets/OFL-*.txt`.

Latin subsets include U+0000–00FF and U+2010–205E. Chinese subsets cover the non-ASCII characters in both HTML pages. When adding Chinese text, regenerate the subsets from the original `ofl/notoserifsc/NotoSerifSC[wght].ttf` and `ofl/notosanssc/NotoSansSC[wght].ttf` with FontTools, or rely on the declared system fallbacks for new glyphs. Keep the licenses with redistributed fonts.

## Structure

```text
index.html               Anonymous front page
404.html                 Anonymous missing-page fallback
style.css                Tokens, typography, layout, responsive and motion rules
assets/                  Local font subsets, licenses and favicon
tools/preview.mjs        Local-only allowlisted preview server
.nojekyll                Serve static files without Jekyll
```

## Accessibility and content

The page uses landmarks, one H1, named sections, language annotations, a skip link, visible keyboard focus, and a native keyboard-operable details disclosure. Motion is limited to link feedback; `prefers-reduced-motion: reduce` removes transitions and smooth scrolling. No content depends on JavaScript or motion.

The page is intentionally anonymous, including metadata and the error page. Do not add identity information, contact links, hidden personal data, or empty future sections without explicit approval. `noindex` requests search-engine exclusion; it is not access control. Historical commits and host-provided error pages are outside the website source's privacy controls.
