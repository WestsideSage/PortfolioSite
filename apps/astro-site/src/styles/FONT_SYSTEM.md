# Emerald Sanctuary Font System

A carefully curated typography system that embodies the mystical and sophisticated nature of the Emerald Sanctuary brand.

## Font Hierarchy

### 1. **Bricolage Grotesque** - Logo & Hero Headlines

- **Purpose**: Large display text, hero titles, brand elements, logos
- **Character**: Calm-but-quirky curves that echo natural forms
- **Usage**: `font-display` class
- **Why it fits**: Soft, slightly wonky shapes pair beautifully with sage-green accents

```astro
<h1 class="hero-title">Emerald Sanctuary</h1>
<div class="hero-subtitle">Your mystical subtitle</div>
```

### 2. **Clash Grotesk** - Section Headings

- **Purpose**: Section headings, card titles, subsection titles
- **Character**: Confident, tech-meets-editorial aesthetic
- **Usage**: `font-heading` class
- **Why it fits**: Closed apertures give confident feel, helps titles pop without shouting

```astro
<h2 class="section-heading">Section Title</h2>
<h3 class="subsection-heading">Subsection Title</h3>
<h4 class="card-heading">Card Title</h4>
```

### 3. **Inter Variable** - Body Text & Navigation

- **Purpose**: Paragraphs, articles, main content, navigation links
- **Character**: Neutral, highly readable, with optical sizing
- **Usage**: `font-body` or `font-sans` class
- **Why it fits**: Neutrality lets emerald accents breathe, crisp at any viewport

```astro
<p class="body-large">Large body text for important content</p>
<p class="body-regular">Standard paragraph text</p>
<p class="body-small">Small supporting text</p>
<nav class="font-body">Navigation links</nav>
```

### 4. **Geist Mono** - Code Snippets / Stat Blocks

- **Purpose**: Code snippets, technical content, stat blocks only
- **Character**: Modern, clean, monospace technical feel
- **Usage**: `font-mono` class
- **Why it fits**: Perfect for technical content, native to developer portfolios

```astro
<!-- Code snippets -->
<code class="code-inline">inline code</code>
<pre class="code-block">
  // Code block content
</pre>

<!-- Stat blocks -->
<div class="stats-block">42 Projects Completed</div>
```

### 5. **Fraunces Variable** - Pull Quotes & Special Numerals

- **Purpose**: Pull quotes, large numbers, special accents only
- **Character**: Vintage-modern blend with botanical motifs
- **Usage**: `font-flourish` or `font-serif` class
- **Why it fits**: Subtle curves echo botanical themes without being kitsch

```astro
<blockquote class="pull-quote">"An elegant quote or testimonial"</blockquote>
<div class="big-number">42</div>
<div class="elegant-accent">Special accent text</div>
```

## Implementation Details

### Font Loading

Fonts are loaded via Google Fonts and Fontshare with optimized loading strategies:

```css
/* Import Emerald Sanctuary font collection - Following exact hierarchy */
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:opsz,wght@14..32,100..900&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap');
@import url('https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,500,600,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap');
```

### Tailwind Configuration

All fonts are configured in `tailwind.config.mjs`:

```javascript
fontFamily: {
  'display': ['Bricolage Grotesque', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Logo & hero headlines
  'heading': ['Clash Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Section headings
  'sans': ['Inter Variable', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Body text & navigation
  'body': ['Inter Variable', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Body text & navigation
  'mono': ['Geist Mono', 'ui-monospace', 'monospace'], // Code snippets / stat blocks
  'serif': ['Fraunces Variable', 'Fraunces', 'ui-serif', 'serif'], // Pull quotes & special numerals
  'flourish': ['Fraunces Variable', 'Fraunces', 'ui-serif', 'serif'], // Pull quotes & special numerals
}
```

## Best Practices

### 1. Font Pairing Guidelines

- **Heroes**: Always use Bricolage Grotesque for maximum brand impact
- **Content Hierarchy**: Clash Grotesk for headings, Inter for body text
- **Technical Content**: Geist Sans for captions, Geist Mono for code
- **Special Moments**: Fraunces for quotes and elegant accents

### 2. Responsive Considerations

All font classes include responsive scaling:

- Mobile: Optimized for touch and small screens
- Tablet: Balanced proportions for medium viewports
- Desktop: Full typographic expression

### 3. Accessibility Features

- High contrast ratios with theme colors
- Proper line-height and letter-spacing
- Screen reader friendly font selection
- Variable font optical sizing for optimal readability

### 4. Performance Optimizations

- Font-display: swap for better loading experience
- Variable fonts for fewer network requests
- Preload critical fonts in the document head

## Variable Font Controls

### Fraunces Special Features

```css
/* Soft, organic curves */
.font-soft {
  font-variation-settings: 'SOFT' 100;
}

/* Subtle wonkiness for personality */
.font-wonky {
  font-variation-settings: 'WONK' 1;
}
```

### Inter Optical Sizing

```css
/* Small text optimization */
.font-optical-small {
  font-variation-settings: 'opsz' 14;
}

/* Large display optimization */
.font-optical-large {
  font-variation-settings: 'opsz' 32;
}
```

## Usage Examples

### Blog Post Layout

```astro
<article class="content-section">
  <h1>Blog Post Title</h1>
  <!-- Uses Clash Grotesk -->
  <div class="metadata">Published on March 15, 2024</div>
  <!-- Uses Geist Sans -->

  <p>Article content using Inter Variable...</p>
  <!-- Uses Inter -->

  <blockquote>
    "A meaningful quote" <!-- Uses Fraunces -->
  </blockquote>

  <code>const example = 'code';</code>
  <!-- Uses Geist Mono -->
</article>
```

### Portfolio Card

```astro
<div class="project-card">
  <h3 class="card-heading">Project Name</h3>
  <!-- Uses Clash Grotesk -->
  <p class="body-regular">Project description...</p>
  <!-- Uses Inter -->
  <div class="caption">Tech stack details</div>
  <!-- Uses Geist Sans -->
</div>
```

### Hero Section

```astro
<section class="hero">
  <h1 class="hero-title">Emerald Sanctuary</h1>
  <!-- Uses Bricolage Grotesque -->
  <p class="hero-subtitle">Mystical portfolio experience</p>
  <!-- Uses Bricolage Grotesque -->
</section>
```

This font system creates a cohesive, sophisticated, and highly readable experience that perfectly complements the Emerald Sanctuary aesthetic while maintaining excellent performance and accessibility standards.
