/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Warm champagne gold on pure black. 200 = headings, 300 = primary
           accent, 400 = borders/hover, 500 = fills, 600/700 = pressed. */
        accent: {
          200: '#E6C77A',
          300: '#D4AF37',
          400: '#C2A14E',
          500: '#BFA15F',
          600: '#9E8447',
          700: '#7E6936',
        },
        /* Subtle warm dividers and card edges. */
        line: '#292316',
        signal: '#D4AF37',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        editorial: ['"Playfair Display"', '"Space Grotesk"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
        'marquee-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        blink: 'blink 1.8s ease-in-out infinite',
        'marquee-x': 'marquee-x 32s linear infinite',
      },
    },
  },
  plugins: [],
}
