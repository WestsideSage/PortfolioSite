# 🌟 Nova Astro Site

A modern portfolio site built with Astro 5, featuring the Emerald Sanctuary design system and mystical animations.

## ✨ Features

- 🚀 **Astro 5** with SSG (Static Site Generation)
- 🎨 **Emerald Sanctuary Design System** - Curated sage/emerald palette
- 🎭 **Domain Expansion Intro** - Interactive animation sequence
- 🎵 **Spotify Integration** - Live music player
- ⚡ **Lightning-fast Performance** - Optimized for speed
- 📝 **MDX Support** for blog content

## 📁 Project Structure (Reorganized)

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Navigation.astro
│   │   ├── ThemeToggle.astro
│   │   └── index.ts
│   ├── features/              # Feature-specific components
│   │   ├── SpotifyPlayer.astro
│   │   ├── FontShowcase.astro
│   │   └── index.ts
│   └── intro/                 # Intro animation system
├── design-system/             # Emerald Sanctuary design tokens
├── styles/
│   └── globals.css           # Consolidated styles & fonts
├── layouts/
├── pages/
└── lib/
```

## 🎨 Design System

The **Emerald Sanctuary** design system features:

- **Color Palette**: Sage greens, deep emeralds, and mystical golds
- **Typography Hierarchy**: 5 carefully selected fonts
  - Bricolage Grotesque (Logo & hero headlines)
  - Clash Grotesk (Section headings)
  - Inter Variable (Body text & navigation)
  - Geist Mono (Code snippets / stat blocks)
  - Fraunces Variable (Pull quotes & special numerals)
- **Component Utilities**: Pre-built classes for consistent styling
- **Animation System**: Domain expansion themed animations

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

## Routing notes

- The `/contact` route exists and 307-redirects to `/about`, where contact details live. This preserves existing navigation and links without changing user flow.
