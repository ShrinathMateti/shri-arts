# Shri Arts — Next.js

A responsive murti showroom site (Ganesh, Hanuman, Krishna, Shiva, Durga), built with the
Next.js App Router.

## Structure

```
app/
  layout.js            Root layout, fonts, metadata
  page.js               Assembles all sections
  globals.css           All site styles (design tokens as CSS variables)
  data.js               Category + product data, Unsplash photo URLs
  components/
    Header.jsx          Sticky nav with mobile menu (client)
    Hero.jsx             Hero section with framed photo
    Collection.jsx       Category grid + filter bar + product grid (client, shared filter state)
    CraftBand.jsx         Craftsmanship section
    CustomCta.jsx         Custom order call-to-action
    Footer.jsx            Footer / contact
next.config.js           Allows next/image to load from images.unsplash.com
```

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes

- Product photos are placeholder Unsplash images grouped by deity category — swap the URLs
  in `app/data.js` for your own product photography whenever it's ready.
- Filtering (category cards + filter pills) is handled by shared React state in
  `Collection.jsx`, no page reload needed.
- Images are served through `next/image` for automatic optimization; the allowed remote
  domain is configured in `next.config.js`.
