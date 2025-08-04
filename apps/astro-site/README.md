# Astro Site

A fast, static marketing site built with Astro 5 and Tailwind CSS.

## Features

- 🚀 Astro 5 with SSG (Static Site Generation)
- 🎨 Tailwind CSS for styling
- 📝 MDX support for blog content
- ⚡ Lightning-fast performance

## Development

```bash
# Start development server
pnpm --filter @nova/astro-site dev

# Build for production
pnpm --filter @nova/astro-site build

# Preview production build
pnpm --filter @nova/astro-site preview
```

## Structure

- `src/pages/` - Page routes
- `src/components/` - Reusable components
- `src/content/` - Content collections (blog posts)
- `src/layouts/` - Layout components
- `src/styles/` - Global styles

## Deployment

This site is configured to deploy to Vercel automatically on push to main branch.
