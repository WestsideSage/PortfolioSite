/**
 * Emerald Sanctuary Design System - Gradient Definitions
 *
 * Beautiful sage and emerald gradients that capture the essence
 * of an ancient mystical sanctuary
 */

import { emeraldSanctuary } from '../tokens/colors';

export const sanctuaryGradients = {
  // Primary Gradients - The heart of the sanctuary
  'sage-whisper': `linear-gradient(135deg, ${emeraldSanctuary.sage[50]} 0%, ${emeraldSanctuary.sage[100]} 100%)`,
  'sage-mist': `linear-gradient(135deg, ${emeraldSanctuary.sage[100]} 0%, ${emeraldSanctuary.sage[200]} 100%)`,
  'sage-flow': `linear-gradient(135deg, ${emeraldSanctuary.sage[200]} 0%, ${emeraldSanctuary.sage[400]} 100%)`,
  'sage-depths': `linear-gradient(135deg, ${emeraldSanctuary.sage[400]} 0%, ${emeraldSanctuary.sage[600]} 100%)`,
  'sage-shadow': `linear-gradient(135deg, ${emeraldSanctuary.sage[700]} 0%, ${emeraldSanctuary.sage[900]} 100%)`,

  // Emerald Gradients - The sanctuary's gemstone energy
  'emerald-light': `linear-gradient(135deg, ${emeraldSanctuary.emerald[100]} 0%, ${emeraldSanctuary.emerald[300]} 100%)`,
  'emerald-glow': `linear-gradient(135deg, ${emeraldSanctuary.emerald[300]} 0%, ${emeraldSanctuary.emerald[500]} 100%)`,
  'emerald-depths': `linear-gradient(135deg, ${emeraldSanctuary.emerald[500]} 0%, ${emeraldSanctuary.emerald[700]} 100%)`,
  'emerald-shadow': `linear-gradient(135deg, ${emeraldSanctuary.emerald[700]} 0%, ${emeraldSanctuary.emerald[900]} 100%)`,

  // Mixed Sanctuary Gradients - The perfect harmony
  'sanctuary-dawn': `linear-gradient(135deg, ${emeraldSanctuary.sage[200]} 0%, ${emeraldSanctuary.emerald[200]} 50%, ${emeraldSanctuary.gold[200]} 100%)`,
  'sanctuary-day': `linear-gradient(135deg, ${emeraldSanctuary.sage[300]} 0%, ${emeraldSanctuary.emerald[400]} 100%)`,
  'sanctuary-dusk': `linear-gradient(135deg, ${emeraldSanctuary.emerald[500]} 0%, ${emeraldSanctuary.sage[500]} 50%, ${emeraldSanctuary.gold[400]} 100%)`,
  'sanctuary-night': `linear-gradient(135deg, ${emeraldSanctuary.sage[800]} 0%, ${emeraldSanctuary.emerald[800]} 100%)`,
  'sanctuary-void': `linear-gradient(135deg, ${emeraldSanctuary.sage[900]} 0%, ${emeraldSanctuary.neutral[950]} 100%)`,

  // Radial Gradients - Mystical auras
  'sage-aura': `radial-gradient(circle at center, ${emeraldSanctuary.sage[400]} 0%, ${emeraldSanctuary.sage[600]} 100%)`,
  'emerald-aura': `radial-gradient(circle at center, ${emeraldSanctuary.emerald[400]} 0%, ${emeraldSanctuary.emerald[700]} 100%)`,
  'sanctuary-aura': `radial-gradient(circle at center, ${emeraldSanctuary.sage[300]} 0%, ${emeraldSanctuary.emerald[500]} 50%, ${emeraldSanctuary.sage[700]} 100%)`,

  // Animated Gradients - Living energy
  'sanctuary-breath': `linear-gradient(45deg, ${emeraldSanctuary.sage[400]} 0%, ${emeraldSanctuary.emerald[400]} 25%, ${emeraldSanctuary.sage[300]} 50%, ${emeraldSanctuary.emerald[500]} 75%, ${emeraldSanctuary.sage[500]} 100%)`,
  'sanctuary-pulse': `linear-gradient(90deg, ${emeraldSanctuary.emerald[300]} 0%, ${emeraldSanctuary.sage[400]} 50%, ${emeraldSanctuary.emerald[300]} 100%)`,

  // Text Gradients - For headings and special text
  'text-sage': `linear-gradient(135deg, ${emeraldSanctuary.sage[600]} 0%, ${emeraldSanctuary.sage[400]} 100%)`,
  'text-emerald': `linear-gradient(135deg, ${emeraldSanctuary.emerald[600]} 0%, ${emeraldSanctuary.emerald[400]} 100%)`,
  'text-sanctuary': `linear-gradient(135deg, ${emeraldSanctuary.sage[600]} 0%, ${emeraldSanctuary.emerald[500]} 50%, ${emeraldSanctuary.sage[400]} 100%)`,
  'text-mystic': `linear-gradient(135deg, ${emeraldSanctuary.emerald[700]} 0%, ${emeraldSanctuary.gold[500]} 50%, ${emeraldSanctuary.sage[600]} 100%)`,

  // Background Gradients - For sections and containers
  'bg-sanctuary-light': `linear-gradient(180deg, ${emeraldSanctuary.neutral[0]} 0%, ${emeraldSanctuary.sage[50]} 100%)`,
  'bg-sanctuary-soft': `linear-gradient(180deg, ${emeraldSanctuary.sage[50]} 0%, ${emeraldSanctuary.emerald[50]} 100%)`,
  'bg-sanctuary-dark': `linear-gradient(180deg, ${emeraldSanctuary.neutral[900]} 0%, ${emeraldSanctuary.sage[950]} 100%)`,

  // Special Domain Expansion Gradients
  'domain-expansion': `radial-gradient(circle at center, ${emeraldSanctuary.emerald[400]} 0%, ${emeraldSanctuary.sage[600]} 30%, ${emeraldSanctuary.neutral[900]} 70%, ${emeraldSanctuary.neutral[950]} 100%)`,
  'domain-energy': `linear-gradient(45deg, ${emeraldSanctuary.emerald[500]} 0%, ${emeraldSanctuary.gold[400]} 25%, ${emeraldSanctuary.sage[500]} 50%, ${emeraldSanctuary.emerald[600]} 75%, ${emeraldSanctuary.sage[700]} 100%)`,
} as const;

// CSS Custom Properties for gradients
export const gradientCSSProperties = Object.entries(sanctuaryGradients).reduce(
  (acc, [key, value]) => {
    acc[`--gradient-${key}`] = value;
    return acc;
  },
  {} as Record<string, string>
);

// Utility function to get gradient by name
export const getGradient = (name: keyof typeof sanctuaryGradients): string => {
  return sanctuaryGradients[name];
};

// Gradient class names for Tailwind
export const gradientClasses = {
  'sage-whisper': 'bg-gradient-to-br from-sage-50 to-sage-100',
  'sage-mist': 'bg-gradient-to-br from-sage-100 to-sage-200',
  'sage-flow': 'bg-gradient-to-br from-sage-200 to-sage-400',
  'sage-depths': 'bg-gradient-to-br from-sage-400 to-sage-600',
  'sage-shadow': 'bg-gradient-to-br from-sage-700 to-sage-900',
  'emerald-light': 'bg-gradient-to-br from-emerald-100 to-emerald-300',
  'emerald-glow': 'bg-gradient-to-br from-emerald-300 to-emerald-500',
  'emerald-depths': 'bg-gradient-to-br from-emerald-500 to-emerald-700',
  'emerald-shadow': 'bg-gradient-to-br from-emerald-700 to-emerald-900',
  'sanctuary-day': 'bg-gradient-to-br from-sage-300 to-emerald-400',
  'sanctuary-night': 'bg-gradient-to-br from-sage-800 to-emerald-800',
} as const;

export type SanctuaryGradient = keyof typeof sanctuaryGradients;
