/**
 * Emerald Sanctuary Design System - Color Tokens
 *
 * A comprehensive sage and emerald-based color palette
 * inspired by mystical sanctuaries and ancient wisdom
 */

export const emeraldSanctuary = {
  // Primary Sage Palette - The heart of the sanctuary
  sage: {
    50: 'hsl(142, 20%, 97%)', // Whisper of sage
    100: 'hsl(142, 18%, 92%)', // Morning mist
    200: 'hsl(142, 16%, 84%)', // Soft sage
    300: 'hsl(142, 14%, 72%)', // Gentle sage
    400: 'hsl(142, 12%, 58%)', // True sage
    500: 'hsl(142, 15%, 45%)', // Deep sage - Primary
    600: 'hsl(142, 18%, 38%)', // Forest sage
    700: 'hsl(142, 22%, 32%)', // Ancient sage
    800: 'hsl(142, 26%, 25%)', // Shadow sage
    900: 'hsl(142, 30%, 18%)', // Mystic sage
    950: 'hsl(142, 35%, 12%)', // Void sage
  },

  // Emerald Accent Palette - The sanctuary's gemstone heart
  emerald: {
    50: 'hsl(156, 60%, 97%)', // Crystal light
    100: 'hsl(156, 58%, 94%)', // Emerald whisper
    200: 'hsl(156, 55%, 88%)', // Light emerald
    300: 'hsl(156, 52%, 78%)', // Soft emerald
    400: 'hsl(156, 48%, 64%)', // True emerald
    500: 'hsl(156, 50%, 45%)', // Deep emerald - Accent
    600: 'hsl(156, 55%, 38%)', // Forest emerald
    700: 'hsl(156, 60%, 32%)', // Ancient emerald
    800: 'hsl(156, 65%, 25%)', // Shadow emerald
    900: 'hsl(156, 70%, 18%)', // Mystic emerald
    950: 'hsl(156, 75%, 12%)', // Void emerald
  },

  // Gold Accent Palette - Ancient wisdom and divine light
  gold: {
    50: 'hsl(48, 100%, 97%)', // Sunlight whisper
    100: 'hsl(48, 95%, 92%)', // Golden mist
    200: 'hsl(48, 90%, 84%)', // Light gold
    300: 'hsl(48, 85%, 72%)', // Soft gold
    400: 'hsl(48, 80%, 58%)', // True gold
    500: 'hsl(48, 75%, 45%)', // Deep gold
    600: 'hsl(45, 70%, 38%)', // Ancient gold
    700: 'hsl(42, 65%, 32%)', // Shadow gold
    800: 'hsl(39, 60%, 25%)', // Mystic gold
    900: 'hsl(36, 55%, 18%)', // Void gold
  },

  // Neutral Palette - The sanctuary's foundation
  neutral: {
    0: 'hsl(0, 0%, 100%)', // Pure white
    50: 'hsl(142, 8%, 97%)', // Sage whisper
    100: 'hsl(142, 6%, 92%)', // Sage mist
    200: 'hsl(142, 5%, 84%)', // Light sage neutral
    300: 'hsl(142, 4%, 68%)', // Sage neutral
    400: 'hsl(142, 3%, 52%)', // Mid sage neutral
    500: 'hsl(142, 2%, 36%)', // Dark sage neutral
    600: 'hsl(142, 3%, 28%)', // Deep neutral
    700: 'hsl(142, 4%, 22%)', // Shadow neutral
    800: 'hsl(142, 5%, 16%)', // Dark shadow
    900: 'hsl(142, 8%, 10%)', // Void neutral
    950: 'hsl(142, 12%, 6%)', // Deep void
    1000: 'hsl(0, 0%, 0%)', // Pure black
  },

  // Status Colors - Sanctuary guardians
  success: 'hsl(156, 50%, 45%)', // Emerald
  warning: 'hsl(48, 75%, 45%)', // Gold
  error: 'hsl(0, 65%, 55%)', // Coral
  info: 'hsl(195, 75%, 55%)', // Aqua
} as const;

// Semantic color mappings for the design system
export const semanticColors = {
  // Light theme mappings
  light: {
    background: emeraldSanctuary.neutral[0],
    foreground: emeraldSanctuary.neutral[900],

    primary: emeraldSanctuary.sage[500],
    'primary-foreground': emeraldSanctuary.neutral[0],

    secondary: emeraldSanctuary.sage[100],
    'secondary-foreground': emeraldSanctuary.sage[800],

    accent: emeraldSanctuary.emerald[500],
    'accent-foreground': emeraldSanctuary.neutral[0],

    muted: emeraldSanctuary.neutral[100],
    'muted-foreground': emeraldSanctuary.neutral[500],

    card: emeraldSanctuary.neutral[0],
    'card-foreground': emeraldSanctuary.neutral[900],

    border: emeraldSanctuary.sage[200],
    input: emeraldSanctuary.sage[200],
    ring: emeraldSanctuary.emerald[500],
  },

  // Dark theme mappings
  dark: {
    background: emeraldSanctuary.neutral[950],
    foreground: emeraldSanctuary.neutral[50],

    primary: emeraldSanctuary.emerald[400],
    'primary-foreground': emeraldSanctuary.neutral[950],

    secondary: emeraldSanctuary.sage[800],
    'secondary-foreground': emeraldSanctuary.sage[100],

    accent: emeraldSanctuary.emerald[300],
    'accent-foreground': emeraldSanctuary.neutral[950],

    muted: emeraldSanctuary.neutral[800],
    'muted-foreground': emeraldSanctuary.neutral[300],

    card: emeraldSanctuary.neutral[900],
    'card-foreground': emeraldSanctuary.neutral[50],

    border: emeraldSanctuary.sage[700],
    input: emeraldSanctuary.sage[700],
    ring: emeraldSanctuary.emerald[400],
  },
} as const;

export type EmeraldSanctuaryColor = keyof typeof emeraldSanctuary;
export type SemanticColorTheme = keyof typeof semanticColors;
export type SemanticColorKey = keyof typeof semanticColors.light;
