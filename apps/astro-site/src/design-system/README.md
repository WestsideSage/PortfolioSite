# 🌿 Emerald Sanctuary Design System

A comprehensive design system inspired by ancient mystical sanctuaries, featuring sage and emerald color palettes with beautiful gradients.

## ✨ Overview

The Emerald Sanctuary Design System brings together the wisdom of nature and the mystique of ancient sanctuaries. Built with TypeScript and modern design principles, it provides a cohesive visual language that evokes tranquility, growth, and ancient wisdom.

## 🎨 Color Philosophy

### Primary Colors

- **Sage**: The heart of the sanctuary - representing wisdom, tranquility, and natural growth
- **Emerald**: The sanctuary's gemstone energy - symbolizing prosperity, harmony, and spiritual insight
- **Gold**: Ancient wisdom and divine light - adding warmth and illumination

### Color Palette Structure

```typescript
// Sage Palette (Primary)
sage: {
  50: 'hsl(142, 20%, 97%)',   // Whisper of sage
  500: 'hsl(142, 15%, 45%)',  // Deep sage - Primary
  950: 'hsl(142, 35%, 12%)',  // Void sage
}

// Emerald Palette (Accent)
emerald: {
  50: 'hsl(156, 60%, 97%)',   // Crystal light
  500: 'hsl(156, 50%, 45%)',  // Deep emerald - Accent
  950: 'hsl(156, 75%, 12%)',  // Void emerald
}
```

## 🌊 Gradient System

### Signature Gradients

#### Sanctuary Day

```css
linear-gradient(135deg, hsl(142, 14%, 72%) 0%, hsl(156, 48%, 64%) 100%)
```

#### Domain Expansion

```css
radial-gradient(circle at center, hsl(156, 48%, 64%) 0%, hsl(142, 18%, 38%) 30%, hsl(142, 30%, 18%) 70%, hsl(142, 35%, 12%) 100%)
```

#### Mystic Text

```css
linear-gradient(135deg, hsl(156, 60%, 32%) 0%, hsl(48, 70%, 38%) 50%, hsl(142, 18%, 38%) 100%)
```

## 🛠️ Usage

### Installation

```bash
# Import the design system
import { emeraldSanctuary, sanctuaryGradients, sanctuaryButtons } from '@/design-system';
```

### Component Classes

#### Buttons

```astro
<!-- Primary sage button -->
<button class={sanctuaryButtons.primary}> Sacred Action </button>

<!-- Gradient sanctuary button -->
<button class={sanctuaryButtons.gradient}> Mystical Journey </button>

<!-- Mystic floating button -->
<button class={sanctuaryButtons.mystic}> Ancient Wisdom </button>
```

#### Cards

```astro
<!-- Sage card -->
<div class={sanctuaryCards.sage}>
  <h3>Sage Wisdom</h3>
  <p>Content goes here...</p>
</div>

<!-- Domain expansion card -->
<div class={sanctuaryCards.domain}>
  <h3>Emerald Sanctuary</h3>
  <p>Domain expansion activated...</p>
</div>
```

#### Text Styling

```astro
<!-- Sanctuary gradient text -->
<h1 class={sanctuaryHeadings.sage}>Welcome to the Sanctuary</h1>

<!-- Mystic text with animation -->
<h2 class={sanctuaryHeadings.mystic}>Ancient Powers Awaken</h2>
```

## 🎭 Animations

### Available Animations

- `sanctuary-breath`: Gentle breathing effect (4s infinite)
- `sanctuary-pulse`: Mystical pulsing (2s infinite)
- `sage-glow`: Sage-colored glow effect (3s infinite)
- `emerald-glow`: Emerald-colored glow effect (3s infinite)
- `mystic-float`: Floating animation (3s infinite)

### Usage

```css
.mystical-element {
  @apply animate-sanctuary-breath;
}

.glowing-sage {
  @apply animate-sage-glow;
}

.floating-wisdom {
  @apply animate-mystic-float;
}
```

## 🌓 Theme Support

### Light Theme

- Background: Pure white with sage undertones
- Primary: Deep sage (#2d5c42)
- Text: Dark sage for readability

### Dark Theme

- Background: Deep void sage
- Primary: Bright emerald (#34a853)
- Text: Light sage for contrast

### Theme Toggle

```typescript
import { createThemeToggle } from '@/design-system';

const { setTheme, toggleTheme, getTheme } = createThemeToggle();

// Set specific theme
setTheme('dark');

// Toggle between themes
toggleTheme();

// Get current theme
const currentTheme = getTheme();
```

## 📚 Components

### Pre-built Component Utilities

#### Backgrounds

```typescript
// Light sanctuary background
sanctuaryBackgrounds.light;

// Mystic domain expansion background
sanctuaryBackgrounds.mystic;

// Section backgrounds
sanctuaryBackgrounds.section.sage;
```

#### Layouts

```typescript
// Responsive grid
sanctuaryLayouts.grid.responsive;

// Blog layout
sanctuaryLayouts.grid.blog;

// Centered container
sanctuaryLayouts.container;
```

## 🎯 Best Practices

### Color Usage

1. **Primary Actions**: Use sage colors for main interactions
2. **Accents**: Use emerald for highlights and important elements
3. **Status**: Use semantic colors (success: emerald, warning: gold)
4. **Backgrounds**: Use gradient backgrounds for visual interest

### Typography

1. **Headings**: Use gradient text for impact
2. **Body**: Stick to semantic colors for readability
3. **Interactive**: Use hover states with color transitions

### Animation

1. **Subtle**: Use gentle animations for ambiance
2. **Purpose**: Animate only when it enhances UX
3. **Performance**: Prefer transform and opacity animations

## 🚀 Advanced Usage

### Custom Gradients

```typescript
import { getGradient } from '@/design-system';

const customGradient = getGradient('sanctuary-dusk');
// Use in your CSS-in-JS or style attributes
```

### Tailwind Integration

The design system is fully integrated with Tailwind CSS:

```css
<!-- Use design system colors -->
<div class="bg-sage-100 text-sage-800">
  <h1 class="text-emerald-600">Emerald Sanctuary</h1>
</div>

<!-- Use design system gradients -->
<div class="bg-gradient-sanctuary-day">
  <h1 class="bg-gradient-text-mystic bg-clip-text text-transparent">
    Ancient Wisdom
  </h1>
</div>
```

## 📁 File Structure

```
src/design-system/
├── index.ts                 # Main export file
├── tokens/
│   └── colors.ts           # Color definitions
├── gradients/
│   └── index.ts            # Gradient definitions
├── components/
│   └── index.ts            # Component utilities
└── utils/
    └── index.ts            # Utility functions
```

## 🎨 Design Philosophy

The Emerald Sanctuary Design System embodies:

- **🌱 Growth**: Colors that evolve from light to deep
- **🧘 Tranquility**: Calm, sage-based primary colors
- **💎 Elegance**: Emerald accents for sophistication
- **🏛️ Wisdom**: Gold touches for ancient knowledge
- **🌊 Flow**: Smooth gradients and transitions
- **✨ Magic**: Subtle animations and glowing effects

## 📈 Performance

- **Minimal Bundle Size**: Tree-shakeable exports
- **CSS Optimization**: Uses CSS custom properties
- **Animation Performance**: Hardware-accelerated animations
- **Color Efficiency**: HSL-based for better browser support

## 🤝 Contributing

When extending the design system:

1. **Consistency**: Follow the sage/emerald/gold color philosophy
2. **Accessibility**: Ensure proper contrast ratios
3. **Documentation**: Update README and TypeScript types
4. **Testing**: Test across light and dark themes

---

_Built with love for the Emerald Sanctuary portfolio by WestsideSage_ 🌿✨
