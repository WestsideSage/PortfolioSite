/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Semantic Colors (CSS Custom Properties)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        // Emerald Sanctuary Color Palette
        sage: {
          50: 'hsl(142, 20%, 97%)',
          100: 'hsl(142, 18%, 92%)',
          200: 'hsl(142, 16%, 84%)',
          300: 'hsl(142, 14%, 72%)',
          400: 'hsl(142, 12%, 58%)',
          500: 'hsl(142, 15%, 45%)',
          600: 'hsl(142, 18%, 38%)',
          700: 'hsl(142, 22%, 32%)',
          800: 'hsl(142, 26%, 25%)',
          900: 'hsl(142, 30%, 18%)',
          950: 'hsl(142, 35%, 12%)',
        },
        emerald: {
          50: 'hsl(156, 60%, 97%)',
          100: 'hsl(156, 58%, 94%)',
          200: 'hsl(156, 55%, 88%)',
          300: 'hsl(156, 52%, 78%)',
          400: 'hsl(156, 48%, 64%)',
          500: 'hsl(156, 50%, 45%)',
          600: 'hsl(156, 55%, 38%)',
          700: 'hsl(156, 60%, 32%)',
          800: 'hsl(156, 65%, 25%)',
          900: 'hsl(156, 70%, 18%)',
          950: 'hsl(156, 75%, 12%)',
        },
        gold: {
          50: 'hsl(48, 100%, 97%)',
          100: 'hsl(48, 95%, 92%)',
          200: 'hsl(48, 90%, 84%)',
          300: 'hsl(48, 85%, 72%)',
          400: 'hsl(48, 80%, 58%)',
          500: 'hsl(48, 75%, 45%)',
          600: 'hsl(45, 70%, 38%)',
          700: 'hsl(42, 65%, 32%)',
          800: 'hsl(39, 60%, 25%)',
          900: 'hsl(36, 55%, 18%)',
        },
        
        // Status colors
        success: 'hsl(156, 50%, 45%)',
        warning: 'hsl(48, 75%, 45%)',
        error: 'hsl(0, 65%, 55%)',
        info: 'hsl(195, 75%, 55%)',
      },
      backgroundImage: {
        // Sanctuary gradients
        'gradient-sanctuary-day': 'linear-gradient(135deg, hsl(142, 14%, 72%) 0%, hsl(156, 48%, 64%) 100%)',
        'gradient-sanctuary-dawn': 'linear-gradient(135deg, hsl(142, 16%, 84%) 0%, hsl(156, 55%, 88%) 50%, hsl(48, 90%, 84%) 100%)',
        'gradient-sanctuary-dusk': 'linear-gradient(135deg, hsl(156, 50%, 45%) 0%, hsl(142, 15%, 45%) 50%, hsl(48, 75%, 45%) 100%)',
        'gradient-sanctuary-night': 'linear-gradient(135deg, hsl(142, 26%, 25%) 0%, hsl(156, 65%, 25%) 100%)',
        'gradient-text-sanctuary': 'linear-gradient(135deg, hsl(142, 18%, 38%) 0%, hsl(156, 50%, 45%) 50%, hsl(142, 12%, 58%) 100%)',
        'gradient-text-mystic': 'linear-gradient(135deg, hsl(156, 60%, 32%) 0%, hsl(48, 70%, 38%) 50%, hsl(142, 18%, 38%) 100%)',
        'gradient-domain-expansion': 'radial-gradient(circle at center, hsl(156, 48%, 64%) 0%, hsl(142, 18%, 38%) 30%, hsl(142, 30%, 18%) 70%, hsl(142, 35%, 12%) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Sanctuary animations
        "sanctuary-breath": {
          '0%, 100%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          }
        },
        "sanctuary-pulse": {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.7'
          }
        },
        "sage-glow": {
          '0%, 100%': {
            boxShadow: '0 0 20px hsl(142, 12%, 58%, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 30px hsl(142, 12%, 58%, 0.6), 0 0 40px hsl(156, 48%, 64%, 0.3)'
          }
        },
        "emerald-glow": {
          '0%, 100%': {
            boxShadow: '0 0 20px hsl(156, 48%, 64%, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 30px hsl(156, 48%, 64%, 0.6), 0 0 40px hsl(142, 12%, 58%, 0.3)'
          }
        },
        "mystic-float": {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Sanctuary animations
        "sanctuary-breath": "sanctuary-breath 4s ease-in-out infinite",
        "sanctuary-pulse": "sanctuary-pulse 2s ease-in-out infinite",
        "sage-glow": "sage-glow 3s ease-in-out infinite",
        "emerald-glow": "emerald-glow 3s ease-in-out infinite",
        "mystic-float": "mystic-float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
