# Acs Films — Modern Casting Company Website

## Tech Stack

- React 19 + Vite 8 + TypeScript
- Tailwind CSS v4 (via @tailwindcss/vite)
- React Router DOM v7
- TanStack Query v5
- Framer Motion v12
- React Hook Form + Zod

## Getting Started

```bash
# Install dependencies
yarn

# Dev server
yarn dev

# Production build
yarn build

# Preview build
yarn preview
```

## Design Tokens

- Navy `#0F172A` — primary text/backgrounds
- Violet `#7C3AED` — CTAs, accents
- Coral `#FF5C35` — secondary actions
- Display Font: Playfair Display
- Body Font: Inter

## Pages

- `/` Home (Hero + About + Workshops + Programs + Gallery + Testimonials + Newsletter)
- `/about` Founder, Vision/Mission, Timeline
- `/our-work` Filterable film poster grid
- `/workshops` Search + filter + grid/list toggle
- `/workshops/:slug` Detail + sticky register sidebar
- `/news` + `/news/:slug` News listing and article
- `/testimonials` Full testimonials grid
- `/contact` React Hook Form + Zod validation
- `*` Cinematic 404 page

## Connecting a Real API

Replace mock data in `src/constants/mockData.ts` with Axios calls in `src/services/`.
Use `useQuery` from TanStack Query in page components.
