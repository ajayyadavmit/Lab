# Conscious Systems & Applied AI Lab

A simple, responsive one-page site for the **Conscious Systems & Applied AI Lab**. It introduces the lab's inquiry into consciousness and applied AI and invites curious researchers and collaborators to join.

<!-- toc -->

- [About the lab](#about-the-lab)
- [Website features](#website-features)
- [Project structure](#project-structure)
- [Run locally](#run-locally)
- [Customize the design](#customize-the-design)
- [Update the content and shared fragments](#update-the-content-and-shared-fragments)
- [Publish](#publish)
- [Accessibility and privacy notes](#accessibility-and-privacy-notes)
- [Contact](#contact)

<!-- tocstop -->

## About the lab

The lab explores how applied AI can support human awareness, agency, learning, and meaningful connection. The site makes this focus accessible through a short research introduction and open questions for prospective collaborators.

## Website features

- Dark-only visual identity with bright, high-contrast accents and a landscape-format hero image.
- Distinctive type pairing: [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) for editorial headings and [Atkinson Hyperlegible](https://fonts.google.com/specimen/Atkinson+Hyperlegible) for readable supporting text.
- Responsive layouts for mobile and desktop, semantic page sections, keyboard focus styling, a skip link, and reduced-motion support.
- Reusable header and footer HTML fragments, loaded by a small vanilla JavaScript file.
- Central CSS design tokens for easy customization.
- No framework, package installation, build step, or backend required. Google Fonts are loaded online; system fallbacks are provided.

## Project structure

```text
.
├── index.html                 # Main page content and document metadata
├── components/
│   ├── header.html            # Shared site identity and navigation
│   └── footer.html            # Shared footer content
├── css/
│   └── styles.css             # Design tokens, layout, responsive styles
├── images/
│   └── hero-landscape.svg     # Replaceable landscape-format hero artwork
├── js/
│   └── main.js                # Loads the shared HTML fragments and year
├── LICENSE
└── README.md
```

## Run locally

The header and footer are loaded using the browser Fetch API, so serve the files over HTTP rather than opening `index.html` directly as a `file://` URL.

With Python installed, run this from the repository root:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

Alternatively, use any static local server or the VS Code Live Server extension.

## Customize the design

Edit the custom properties at the top of [`css/styles.css`](css/styles.css):

```css
:root {
  --color-bg: #111511;
  --color-surface: #191f1a;
  --color-ink: #f0efe8;
  --color-muted: #b7c0b5;
  --color-accent: #c2e6a8;
  --font-display: "Instrument Serif", Georgia, serif;
  --font-body: "Atkinson Hyperlegible", Arial, sans-serif;
  --page-width: 1240px;
  --page-gutter: clamp(1.25rem, 6vw, 5.5rem);
  --space-section: clamp(5rem, 10vw, 9rem);
}
```

Replace `images/hero-landscape.svg` with your own landscape image, or update the image path in `index.html`. The hero frame scales with the viewport and is about half the screen height on mobile. To add or reorder menu links, edit the `<nav>` in `components/header.html` and point each link to a section ID on the page. Change the Google Fonts URL in `index.html` to try other typefaces; the CSS includes local fallbacks.

## Update the content and shared fragments

- Edit `index.html` to update the hero, research focus, questions, and invitation.
- Edit `components/header.html` to change the lab name or navigation.
- Edit `components/footer.html` to update the footer statement.
- Edit `js/main.js` if changing how fragments are loaded or how the copyright year is rendered.

The header and footer are fetched from relative paths. Keep the directory structure intact, or update the `data-include` paths in `index.html` if you move the fragments. When publishing under a project subpath, serve the repository root as the site root so these relative URLs continue to resolve.

## Publish

This is a static website and can be deployed with GitHub Pages or another static hosting provider. For GitHub Pages, configure the repository's Pages source to publish from the branch and directory containing `index.html` (for example, the root of `main`). No build command is needed. After deployment, check the page on mobile and desktop and confirm that the shared header and footer load successfully.

## Accessibility and privacy notes

The page uses landmarks, meaningful heading order, descriptive link text, visible keyboard focus, a skip link, and a text alternative for the decorative hero illustration. The reduced-motion preference is respected. Google Fonts requests go to Google when a visitor loads the page; remove the font preconnect and stylesheet link in `index.html` and rely on the CSS fallback fonts if you prefer not to make those requests.

## Contact

The website currently links to the lab's GitHub repository rather than displaying an unverified email address. Update the invitation link in `index.html` when an official lab contact address or collaboration page is available.
