# Astro Site

A fast, static marketing site built with Astro 5 and Tailwind CSS.

## Features

- 🚀 Astro 5 with SSG (Static Site Generation)
- 🎨 Tailwind CSS for styling
- 📝 MDX support for blog content
- ⚡ Lightning-fast performance
- 🎵 Spotify integration for background music

## Spotify Integration

This site includes a live Spotify music player that shows your currently playing track. To set it up:

1. See [SPOTIFY_SETUP.md](./SPOTIFY_SETUP.md) for detailed instructions
2. Create a Spotify app at [developer.spotify.com](https://developer.spotify.com/dashboard)
3. Configure your environment variables
4. Get your refresh token through the setup flow

The music player appears in the bottom-right corner when you're actively listening to music on Spotify.

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
