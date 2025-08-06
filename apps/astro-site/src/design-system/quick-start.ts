/**
 * Emerald Sanctuary Design System - Quick Start Guide
 *
 * This file shows how to quickly integrate the design system into your components.
 */

// Import everything you need
export {
  emeraldSanctuary,
  sanctuaryGradients,
  sanctuaryButtons,
  sanctuaryCards,
  sanctuaryText,
  sanctuaryHeadings,
} from './index';

// Example usage in an Astro component (as a template string for reference):
export const exampleUsage = `
<!-- In your .astro component -->
<div class={sanctuaryCards.sage}>
  <h2 class={sanctuaryHeadings.sage}>Welcome to the Emerald Sanctuary</h2>
  <p class="text-muted-foreground mb-4">
    Experience the wisdom of ancient sage and the power of emerald energy.
  </p>
  <button class={sanctuaryButtons.gradient}>
    Enter the Sanctuary
  </button>
</div>

<style>
  /* Custom gradient background */
  .sanctuary-hero {
    background: linear-gradient(135deg, hsl(142, 16%, 84%) 0%, hsl(156, 55%, 88%) 50%, hsl(48, 90%, 84%) 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Mystical text effect */
  .mystical-text {
    background: linear-gradient(135deg, hsl(156, 60%, 32%) 0%, hsl(48, 70%, 38%) 50%, hsl(142, 18%, 38%) 100%);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: sanctuary-breath 4s ease-in-out infinite;
  }
  
  /* Glowing sage effect */
  .sage-glow {
    box-shadow: 0 0 20px hsl(142, 12%, 58%, 0.3);
    transition: box-shadow 0.3s ease;
  }
  
  .sage-glow:hover {
    box-shadow: 0 0 30px hsl(142, 12%, 58%, 0.6), 0 0 40px hsl(156, 48%, 64%, 0.3);
  }
</style>
`;

// CSS Custom Properties for easy theming:
export const emeraldSanctuaryCSSVars = `
  :root {
    --sanctuary-sage-50: hsl(142, 20%, 97%);
    --sanctuary-sage-500: hsl(142, 15%, 45%);
    --sanctuary-sage-950: hsl(142, 35%, 12%);
    
    --sanctuary-emerald-50: hsl(156, 60%, 97%);
    --sanctuary-emerald-500: hsl(156, 50%, 45%);
    --sanctuary-emerald-950: hsl(156, 75%, 12%);
    
    --sanctuary-gold-500: hsl(48, 75%, 45%);
    
    --gradient-sanctuary-day: linear-gradient(135deg, hsl(142, 14%, 72%) 0%, hsl(156, 48%, 64%) 100%);
    --gradient-sanctuary-dawn: linear-gradient(135deg, hsl(142, 16%, 84%) 0%, hsl(156, 55%, 88%) 50%, hsl(48, 90%, 84%) 100%);
    --gradient-text-sanctuary: linear-gradient(135deg, hsl(142, 18%, 38%) 0%, hsl(156, 50%, 45%) 50%, hsl(142, 12%, 58%) 100%);
    --gradient-text-mystic: linear-gradient(135deg, hsl(156, 60%, 32%) 0%, hsl(48, 70%, 38%) 50%, hsl(142, 18%, 38%) 100%);
    --gradient-domain-expansion: radial-gradient(circle at center, hsl(156, 48%, 64%) 0%, hsl(142, 18%, 38%) 30%, hsl(142, 30%, 18%) 70%, hsl(142, 35%, 12%) 100%);
  }
`;
