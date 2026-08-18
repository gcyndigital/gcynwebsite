# GCYN Digital — Landing Page

A static site ready to deploy on GitHub Pages for free.

## Files
```
index.html
style.css
script.js
images/            ← your logo + portfolio screenshots go here
```

Terms and Conditions / Privacy Policy pages are intentionally left out for now — send over your current wording and they'll be added back in, matching this design, with working footer links restored.

## Deploy to GitHub Pages (free)
1. Create a new GitHub repository (e.g. `gcyn-digital`).
2. Upload everything in this folder — including the `images` folder — to the repo root.
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
6. Wait a minute, then your site is live at `https://<your-username>.github.io/<repo-name>/`.
7. Optional: to use a custom domain, add a `CNAME` file containing just that domain to the repo root, and point your domain's DNS at GitHub Pages (see GitHub's "Managing a custom domain" docs).

## Logo files — there are two
This site uses two different logo files for two different spots:

- **`images/logo.png`** — the small square "G" icon. Used in the site header (top nav) and the footer. Since both of those have a dark navy background, this should be a light/white version of the icon.
- **`images/logo-wordmark.png`** — the full "GCYN DIGITAL" wordmark (the wider lockup with the colored blocks and the "DIGITAL" bar). Used only as the small badge on the hero mockup graphic, overlapping the top-left corner of the browser-window preview.

Both need a transparent background — export as PNG with alpha, not a flat white background, so they sit cleanly on the navy sections.

If a file is missing, the header/footer quietly fall back to a text logo, and the hero badge just hides itself — neither breaks the layout.

Recommended source size: roughly 150–300px tall for either file so it stays crisp when CSS scales it down to its display size (38px in the header, 44px in the footer, ~20px in the hero badge).

## Portfolio images
Store them in the `images/` folder — no separate image host needed. Name them to match what's already wired into `index.html`:
```
images/talisay-aqua-pure.jpg
images/hands-home-massage.jpg
images/mobile-eatery.jpg
images/davao-plumbing-pro.jpg
```
Compress and resize before uploading (aim for under ~300KB each, roughly 1200px wide) — squoosh.app is a free, no-signup way to do this. A missing or broken image quietly falls back to a colored placeholder instead of breaking the layout.

## Pricing section
Three side-by-side plans — placeholder names **Starter / Growth / Premium** (the middle one is marked "Most Popular"), each with a bracketed price, tagline, and feature list. Search `index.html` for `[X,XXX]`, `[Feature`, and `[One-line description` to find every spot to fill in once you've settled on your actual plans. Rename the `<span class="plan-name">` text if you land on different names, and add or remove `<li>` items in each `.plan-features` list freely — the layout adjusts automatically.

## Contact form: Formspree, not Tally
The form is hand-coded HTML, and Tally can't act as a backend for a form you've already built — it only accepts submissions from forms built inside its own builder. Formspree is built for this case: point your existing form's submission at their endpoint and it emails you the results.
1. Sign up free at formspree.io and create a form.
2. Copy the endpoint it gives you (looks like `https://formspree.io/f/xxxxxxx`).
3. Open `script.js`, find the `FORM_ENDPOINT` constant near the top, and paste it in.

Until that's set up, the form falls back to opening a pre-filled email draft (mailto:) so no message is lost.

## Site structure
- **Home** (`#top`) — hero
- **Services** (`#services`) — what you build (three cards)
- **Portfolio** (`#portfolio`) — recent work
- **Pricing** (`#pricing`) — three plans, side by side
- **Contact** (`#contact-me`) — linked from the nav CTA button, not a top-level nav link, keeping the menu to 4 items

## Other things to double-check before launch
- **Contact email**: the `mailto:` fallback in `script.js` currently points to `hello@yourdomain.com` — update it to your real inbox.
- **Social links**: update the Facebook and WhatsApp `href` values in the header and footer to your real profile/number.
- **Pricing numbers**: replace every `[X,XXX]` placeholder with real amounts.
