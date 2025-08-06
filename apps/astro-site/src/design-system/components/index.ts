/**
 * Emerald Sanctuary Design System - Component Utilities
 *
 * Ready-to-use component classes and utilities
 */

// Button variants using the Emerald Sanctuary theme
export const sanctuaryButtons = {
  // Primary sage button
  primary: `
    inline-flex items-center justify-center rounded-md text-sm font-medium 
    bg-primary text-primary-foreground hover:bg-primary/90 
    shadow-lg hover:shadow-xl transition-all duration-200
    px-4 py-2 
    animate-sage-glow
  `,

  // Secondary sage button
  secondary: `
    inline-flex items-center justify-center rounded-md text-sm font-medium
    bg-secondary text-secondary-foreground hover:bg-secondary/80
    border border-input shadow-sm hover:shadow-md transition-all duration-200
    px-4 py-2
  `,

  // Emerald accent button
  emerald: `
    inline-flex items-center justify-center rounded-md text-sm font-medium
    bg-emerald-500 text-white hover:bg-emerald-600
    shadow-lg hover:shadow-xl transition-all duration-200
    px-4 py-2
    animate-emerald-glow
  `,

  // Gradient sanctuary button
  gradient: `
    inline-flex items-center justify-center rounded-md text-sm font-medium
    bg-gradient-sanctuary-day text-white hover:bg-gradient-sanctuary-dusk
    shadow-lg hover:shadow-xl transition-all duration-300
    px-4 py-2
    hover:scale-105 transform
  `,

  // Ghost sage button
  ghost: `
    inline-flex items-center justify-center rounded-md text-sm font-medium
    text-sage-600 hover:bg-sage-100 hover:text-sage-700
    transition-all duration-200
    px-4 py-2
  `,

  // Mystic floating button
  mystic: `
    inline-flex items-center justify-center rounded-md text-sm font-medium
    bg-gradient-text-mystic text-white
    shadow-lg hover:shadow-2xl transition-all duration-300
    px-4 py-2
    animate-mystic-float hover:animate-sanctuary-pulse
  `,
} as const;

// Card variants
export const sanctuaryCards = {
  // Standard sage card
  sage: `
    rounded-lg border border-sage-200 bg-card text-card-foreground 
    shadow-sm hover:shadow-md transition-all duration-200
    p-6
  `,

  // Emerald accent card
  emerald: `
    rounded-lg border border-emerald-200 bg-card text-card-foreground 
    shadow-sm hover:shadow-lg transition-all duration-200
    p-6 hover:border-emerald-300
  `,

  // Gradient background card
  gradient: `
    rounded-lg bg-gradient-sanctuary-dawn text-sage-800 
    shadow-lg hover:shadow-xl transition-all duration-300
    p-6 backdrop-blur-sm
  `,

  // Floating mystic card
  floating: `
    rounded-lg border border-sage-200 bg-card text-card-foreground 
    shadow-lg hover:shadow-2xl transition-all duration-300
    p-6 hover:scale-105 transform animate-mystic-float
  `,

  // Domain expansion style card
  domain: `
    rounded-lg bg-gradient-domain-expansion text-white 
    shadow-2xl border border-emerald-500/20
    p-6 backdrop-blur-md
  `,
} as const;

// Text utilities
export const sanctuaryText = {
  // Sage gradient text
  sage: `
    bg-gradient-text-sanctuary bg-clip-text text-transparent
    font-semibold
  `,

  // Emerald gradient text
  emerald: `
    bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent
    font-semibold
  `,

  // Mystic gradient text
  mystic: `
    bg-gradient-text-mystic bg-clip-text text-transparent
    font-bold animate-sanctuary-breath
    background-size: 200% 200%
  `,
} as const;

// Heading styles (separated to avoid circular reference)
export const sanctuaryHeadings = {
  sage: `text-3xl font-bold bg-gradient-text-sanctuary bg-clip-text text-transparent font-semibold`,
  emerald: `text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent font-semibold`,
  mystic: `text-4xl font-bold bg-gradient-text-mystic bg-clip-text text-transparent font-bold animate-sanctuary-breath background-size: 200% 200%`,
} as const;

// Background utilities
export const sanctuaryBackgrounds = {
  // Light sanctuary background
  light: `bg-gradient-sanctuary-dawn min-h-screen`,

  // Dark sanctuary background
  dark: `bg-gradient-sanctuary-night min-h-screen`,

  // Mystic floating background
  mystic: `bg-gradient-domain-expansion min-h-screen relative overflow-hidden`,

  // Section backgrounds
  section: {
    sage: `bg-gradient-to-r from-sage-50 to-sage-100 py-16`,
    emerald: `bg-gradient-to-r from-emerald-50 to-emerald-100 py-16`,
    neutral: `bg-gradient-to-r from-neutral-50 to-sage-50 py-16`,
  },
} as const;

// Animation utilities
export const sanctuaryAnimations = {
  // Gentle sanctuary breathing
  breath: `animate-sanctuary-breath`,

  // Mystic pulsing
  pulse: `animate-sanctuary-pulse`,

  // Sage glow effect
  sageGlow: `animate-sage-glow`,

  // Emerald glow effect
  emeraldGlow: `animate-emerald-glow`,

  // Floating mystically
  float: `animate-mystic-float`,

  // Hover effects
  hover: {
    scale: `hover:scale-105 transform transition-transform duration-200`,
    glow: `hover:shadow-2xl transition-shadow duration-300`,
    sage: `hover:bg-sage-50 transition-colors duration-200`,
    emerald: `hover:bg-emerald-50 transition-colors duration-200`,
  },
} as const;

// Layout utilities
export const sanctuaryLayouts = {
  // Centered container
  container: `container mx-auto px-4 sm:px-6 lg:px-8`,

  // Grid layouts
  grid: {
    responsive: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,
    blog: `grid grid-cols-1 lg:grid-cols-2 gap-8`,
    showcase: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`,
  },

  // Flex utilities
  flex: {
    center: `flex items-center justify-center`,
    between: `flex items-center justify-between`,
    col: `flex flex-col`,
    colCenter: `flex flex-col items-center justify-center`,
  },
} as const;

// Utility function to combine classes
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};
