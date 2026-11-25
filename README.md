# Conscious Systems & Applied AI Lab

A simple, responsive landing page for the **Conscious Systems & Applied AI Lab**. The site introduces the lab's focus on practical software engineering and ethical AI through cognitive resilience, intentional technology, and human-centered design, with an emphasis on computer science education research for pre-K–12 learners.

## About the lab

The lab's outward-facing language is accessible to schools, research partners, technology sponsors, and grant programs. Its deeper pedagogical philosophy brings practical computer science learning into conversation with inner awareness, contemplative inquiry, and intentional technology use. The goal is to support young people as capable creators, attentive thinkers, and responsible participants in a technological world.

## Website features

- Editorial, researcher-inspired visual identity with a warm paper palette, restrained green accents, and an abstract orbit illustration.
- Distinctive type pairing: [Newsreader](https://fonts.google.com/specimen/Newsreader) for expressive headings and [DM Mono](https://fonts.google.com/specimen/DM+Mono) for clear, technical supporting text.
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
  --color-paper: #f4f1e8;
  --color-paper-deep: #ebe6da;
  --color-ink: #20231f;
  --color-muted: #66695f;
  --color-accent: #385e50;
  --color-accent-light: #d3ded2;
  --color-line: #d5d0c3;
  --font-display: "Newsreader", Georgia, serif;
  --font-body: "DM Mono", "Courier New", monospace;
  --page-width: 1180px;
  --page-gutter: clamp(1.25rem, 6vw, 5.5rem);
  --space-section: clamp(5rem, 11vw, 9.5rem);
}
```

Change the Google Fonts URL in `index.html` to try other typefaces. Keep fallback fonts in the CSS so text remains readable if the external font service is unavailable.

## Update the content and shared fragments

- Edit `index.html` to update the hero, lab purpose, research areas, approach, and contact section.
- Edit `components/header.html` to change the lab name or navigation.
- Edit `components/footer.html` to update the footer statement.
- Edit `js/main.js` if changing how fragments are loaded or how the copyright year is rendered.

The header and footer are fetched from relative paths. Keep the directory structure intact, or update the `data-include` paths in `index.html` if you move the fragments. When publishing under a project subpath, serve the repository root as the site root so these relative URLs continue to resolve.

## Publish

This is a static website and can be deployed with GitHub Pages or another static hosting provider. For GitHub Pages, configure the repository's Pages source to publish from the branch and directory containing `index.html` (for example, the root of `main`). No build command is needed. After deployment, check the page on mobile and desktop and confirm that the shared header and footer load successfully.

## Accessibility and privacy notes

The page uses landmarks, meaningful heading order, descriptive link text, visible keyboard focus, a skip link, and a text alternative for the decorative hero illustration. The reduced-motion preference is respected. Google Fonts requests go to Google when a visitor loads the page; remove the font preconnect and stylesheet link in `index.html` and rely on the CSS fallback fonts if you prefer not to make those requests.

## Contact

The website currently links to the lab's GitHub repository rather than displaying an unverified email address. Update the contact link in `index.html` when an official lab contact address or collaboration page is available.
