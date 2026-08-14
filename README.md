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

## Adding your logo
1. Export your logo as a PNG or SVG with a **transparent background**. Since the header and footer are both dark navy, use a **light or white version** of your logo — a dark/full-color logo may be hard to see against that background.
2. Name the file `logo.png` (or `logo.svg` — if you use SVG, update the two `src="images/logo.png"` references in `index.html` to `images/logo.svg`).
3. Drop it into the `images/` folder.
4. That's it — the header and footer already reference `images/logo.png`. If the file's missing, the site quietly falls back to a text logo instead of showing a broken image.
5. Recommended height: roughly 60–120px tall for a crisp look at the sizes it's displayed (34px in the header, 40px in the footer) — CSS scales it down, so bigger source files stay sharp.

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
The new Pricing section (`#pricing`) has placeholder amounts in brackets — `₱[X,XXX]` — in both the main package card and the add-ons list. Search `index.html` for `[X,XXX]` and `[X]` to find every spot that needs a real number before launch.

## Contact form: Formspree, not Tally
The form is hand-coded HTML, and Tally can't act as a backend for a form you've already built — it only accepts submissions from forms built inside its own builder. Formspree is built for this case: point your existing form's submission at their endpoint and it emails you the results.
1. Sign up free at formspree.io and create a form.
2. Copy the endpoint it gives you (looks like `https://formspree.io/f/xxxxxxx`).
3. Open `script.js`, find the `FORM_ENDPOINT` constant near the top, and paste it in.

Until that's set up, the form falls back to opening a pre-filled email draft (mailto:) so no message is lost.

## Site structure
- **Home** (`#top`) — hero
- **Services** (`#services`) — what you build, merged with the "How It Works" process steps (no separate nav link for the process — it lives inside Services)
- **Portfolio** (`#portfolio`) — recent work
- **Pricing** (`#pricing`) — the package card and add-ons
- **Contact** (`#contact-me`) — linked from the nav CTA button, not a top-level nav link, keeping the menu to 4 items

## Other things to double-check before launch
- **Contact email**: the `mailto:` fallback in `script.js` currently points to `hello@yourdomain.com` — update it to your real inbox.
- **Social links**: update the Facebook and WhatsApp `href` values in the header and footer to your real profile/number.
- **Pricing numbers**: replace every `[X,XXX]` placeholder with real amounts.
