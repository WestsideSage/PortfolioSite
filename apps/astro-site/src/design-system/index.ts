/**
 * Emerald Sanctuary Design System
 *
 * A comprehensive design system inspired by ancient mystical sanctuaries,
 * featuring sage and emerald color palettes with beautiful gradients.
 *
 * @author WestsideSage
 * @theme Emerald Sanctuary
 */

// Core exports
export { emeraldSanctuary, semanticColors } from './tokens/colors';
export {
  sanctuaryGradients,
  gradientCSSProperties,
  getGradient,
  gradientClasses,
} from './gradients';
export {
  hslToCSSProperty,
  generateColorProperties,
  generateFullColorProperties,
  getColor,
  withOpacity,
  createThemeToggle,
  generateTailwindColors,
  sanctuaryAnimations,
} from './utils';

// Types
export type { EmeraldSanctuaryColor, SemanticColorTheme, SemanticColorKey } from './tokens/colors';
export type { SanctuaryGradient } from './gradients';
export type { DesignSystemUtility } from './utils';

// Design System Configuration
export const DESIGN_SYSTEM_CONFIG = {
  name: 'Emerald Sanctuary',
  version: '1.0.0',
  author: 'WestsideSage',
  description: 'A mystical design system featuring sage and emerald color palettes',
  themes: ['light', 'dark'] as const,
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  spacing: {
    unit: '0.25rem', // 4px
    scale: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64],
  },
  typography: {
    fontFamily: {
      display: ['Bricolage Grotesque', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Logo & hero headlines
      heading: ['Clash Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Section headings
      sans: ['Inter Variable', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Body text & navigation
      body: ['Inter Variable', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Body text & navigation
      mono: ['Geist Mono', 'ui-monospace', 'monospace'], // Code snippets / stat blocks
      serif: ['Fraunces Variable', 'Fraunces', 'ui-serif', 'serif'], // Pull quotes & special numerals
      flourish: ['Fraunces Variable', 'Fraunces', 'ui-serif', 'serif'], // Pull quotes & special numerals
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
  },
} as const;
