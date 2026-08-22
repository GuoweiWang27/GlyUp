/** @type {import('tailwindcss').Config} */
// Design system aligned with guoweiwang.com homepage (Catalyst Signature):
// warm paper background, Stanford cardinal accent, sand-gold support, teal secondary.
// 2026-08-22 retheme: science blue -> cardinal ramp; chem green -> teal; slate neutrals -> warm paper.
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Serif 4', 'Georgia', 'serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // primary accent ramp — Stanford cardinal (was sky blue)
        science: {
          50: '#faf8f5',
          100: '#f0ece4',
          200: '#e8d5b8',
          300: '#D4A76A',
          400: '#b98a45',
          500: '#8C1515',
          600: '#7a1212',
          700: '#6f1010',
          800: '#5a0d0d',
          900: '#471010',
        },
        // secondary — teal (was green)
        chem: {
          50: '#e6f2f0',
          100: '#e6f2f0',
          300: '#8fc4bc',
          500: '#2a7c6f',
          600: '#256b5e',
          700: '#1f5a4e',
          900: '#143a33',
        },
        // warm paper neutrals override (was cool slate)
        slate: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#eae4d8',
          300: '#d9d0bf',
          400: '#a89f8f',
          500: '#6f685d',
          600: '#5c5549',
          700: '#4a443b',
          800: '#33302a',
          900: '#1a1a1a',
        },
        // emerald accents used in badges — remap to teal family
        emerald: {
          100: '#e6f2f0',
          500: '#2a7c6f',
          600: '#256b5e',
          700: '#1f5a4e',
        },
      }
    },
  },
  plugins: [],
}
