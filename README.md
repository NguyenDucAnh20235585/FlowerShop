# Our Blooms
This is a responsive flower shop website built from a Figma design.
## Tech Stack
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
## Run Project
Install dependencies:
```bash
npm install
```
Run development server:
```bash
npm run dev
```
Build:
```bash
npm run build
```
Lint:
```bash
npm run lint
```
## Project Structure
```text
src/
├── assets/
├── components/
├── pages/
│   ├── Home/
│   ├── Gallery/
│   └── About/
├── AppLayout.tsx
├── router.tsx
├── main.tsx
└── index.css
```
## Responsive
- Mobile: below 800px
- Tablet: 800px–1279px
- Desktop: 1280px and above
The project uses responsive images and reusable components based on the original Figma design.
## Review Notes

### Verified Design Decisions
- **Typography:** Font families, sizes, weights, and spacing follow the Figma design at the three reference widths (375px, 800px, and 1280px).
- **Links:** Existing Figma-related destinations are intentionally preserved to match the provided reference.
- **Alt text:** Image descriptions follow the supplied Figma specifications.

### Known Responsive Limitations
- **HomeAbout:** Heading text wrapping can appear less balanced at intermediate mobile viewport widths.
- **WorkWithUs:** Heading text wrapping has similar limitations at intermediate mobile widths.
- **HeroSection:** Image cropping around 700–750px may differ slightly from the Figma responsive preview.
- **Intermediate viewports:** Minor visual differences from Figma are accepted where content remains readable and the layout is functional.
These limitations are documented for potential future improvements.

### Deployment Notes
When deploying this React Router SPA to a static host, the server may need to rewrite application routes to `index.html`.
Without an SPA fallback, directly refreshing routes such as `/gallery` or `/about` may return a server-side 404 error.
The required configuration depends on the hosting provider and is outside the scope of the current review.