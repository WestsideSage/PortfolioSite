/**
 * Emerald Sanctuary Design System - Utilities
 *
 * Utility functions and helpers for the design system
 */

import {
  emeraldSanctuary,
  semanticColors,
  type SemanticColorTheme,
  type SemanticColorKey,
} from '../tokens/colors';
import { sanctuaryGradients, type SanctuaryGradient } from '../gradients';

// Convert HSL string to CSS custom property format
export const hslToCSSProperty = (hsl: string): string => {
  // Extract values from hsl(h, s%, l%) format
  const match = hsl.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
  if (!match) return hsl;

  const [, h, s, l] = match;
  return `${h} ${s}% ${l}%`;
};

// Generate CSS custom properties for colors
export const generateColorProperties = (theme: SemanticColorTheme = 'light') => {
  const colors = semanticColors[theme];
  const properties: Record<string, string> = {};

  Object.entries(colors).forEach(([key, value]) => {
    properties[`--${key}`] = hslToCSSProperty(value);
  });

  return properties;
};

// Generate full color palette CSS properties
export const generateFullColorProperties = () => {
  const properties: Record<string, string> = {};

  // Add all emerald sanctuary colors
  Object.entries(emeraldSanctuary).forEach(([colorName, colorValue]) => {
    if (typeof colorValue === 'object') {
      Object.entries(colorValue).forEach(([shade, value]) => {
        properties[`--${colorName}-${shade}`] = hslToCSSProperty(value);
      });
    } else {
      properties[`--${colorName}`] = hslToCSSProperty(colorValue);
    }
  });

  return properties;
};

// Get color by path (e.g., 'sage.500', 'emerald.300')
export const getColor = (path: string): string => {
  const [colorName, shade] = path.split('.');
  const colorGroup = emeraldSanctuary[colorName as keyof typeof emeraldSanctuary];

  if (typeof colorGroup === 'object' && shade) {
    return (colorGroup as any)[shade] || '';
  }

  return (colorGroup as string) || '';
};

// Create a color with opacity
export const withOpacity = (color: string, opacity: number): string => {
  const match = color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
  if (!match) return color;

  const [, h, s, l] = match;
  return `hsla(${h}, ${s}%, ${l}%, ${opacity})`;
};

// Generate theme toggle utilities
export const createThemeToggle = () => {
  return {
    setTheme: (theme: 'light' | 'dark') => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    },

    getTheme: (): 'light' | 'dark' => {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    },

    toggleTheme: () => {
      const current = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', current);
      localStorage.setItem('theme', current);
      return current;
    },
  };
};

// Tailwind color configuration generator
export const generateTailwindColors = () => {
  const colors: Record<string, any> = {};

  Object.entries(emeraldSanctuary).forEach(([colorName, colorValue]) => {
    if (typeof colorValue === 'object') {
      colors[colorName] = {};
      Object.entries(colorValue).forEach(([shade, value]) => {
        colors[colorName][shade] = value;
      });
    } else {
      colors[colorName] = colorValue;
    }
  });

  return colors;
};

// Animation utilities for the sanctuary theme
export const sanctuaryAnimations = {
  'sanctuary-breath': {
    '0%, 100%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
  },
  'sanctuary-pulse': {
    '0%, 100%': {
      opacity: '1',
    },
    '50%': {
      opacity: '0.7',
    },
  },
  'sage-glow': {
    '0%, 100%': {
      boxShadow: `0 0 20px ${withOpacity(emeraldSanctuary.sage[400], 0.3)}`,
    },
    '50%': {
      boxShadow: `0 0 30px ${withOpacity(emeraldSanctuary.sage[400], 0.6)}, 0 0 40px ${withOpacity(emeraldSanctuary.emerald[400], 0.3)}`,
    },
  },
  'emerald-glow': {
    '0%, 100%': {
      boxShadow: `0 0 20px ${withOpacity(emeraldSanctuary.emerald[400], 0.3)}`,
    },
    '50%': {
      boxShadow: `0 0 30px ${withOpacity(emeraldSanctuary.emerald[400], 0.6)}, 0 0 40px ${withOpacity(emeraldSanctuary.sage[400], 0.3)}`,
    },
  },
};

export type DesignSystemUtility = {
  getColor: typeof getColor;
  withOpacity: typeof withOpacity;
  generateColorProperties: typeof generateColorProperties;
  generateFullColorProperties: typeof generateFullColorProperties;
  createThemeToggle: typeof createThemeToggle;
};
