/** @type {import('tailwindcss').Config} */

var plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./tmp/**/*.html'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              whiteSpace: 'pre-wrap',
              backGroundColor: '#cccccc',
            },
            h1: {
              fontWeight: 'bold',
            },
            h3: {
              fontWeight: 'bold',
            },
            h4: {
              fontWeight: 'bold',
            },
            code: {
              fontWeight: 'bold',
            },
            a: {
              fontWeight: 'normal',
            },
            strong: {
              fontWeight: 'bold',
            },
            thead: {
              th: {
                fontWeight: 'bold',
              }
            }
          }
        }
      }
    },
    fontFamily: {
      sans: ["Noto Sans CJK HK", "Helvetica", "DejaVuSans", "Noto Color Emoji", "sans-serif", "Free HK Kai"],
      serif: ["Noto Serif CJK HK", "Times", "DejaVuSerif", "serif", "Free HK Kai"],
      mono: ["Courier", "DejaVuMono", "monospace"],
    },
    fontSize: {
      'xs': '10pt',
      'sm': '12pt',
      'base': '14pt',
      'lg': '16pt',
      'xl': '18pt',
      '2xl': '20pt',
      '3xl': '24pt',
      '4xl': '30pt',
      '5xl': '36pt',
      '6xl': '48pt',
      '7xl': '64pt',
      '8xl': '72pt',
    },
    spacing: {
      0.5: '1pt',
      1: '2pt',
      1.5: '2.5pt',
      2: '4pt',
      2.5: '8pt',
      3: '10pt',
      3.5: '12pt',
      4: '14pt',
      5: '16pt',
      6: '20pt',
      7: '24pt',
      8: '28pt',
      9: '32pt',
      10: '36pt',
      11: '40pt',
      12: '44pt',
      14: '48pt',
      16: '56pt',
      20: '64pt',
      24: '80pt',
      28: '96pt',
      32: '112pt',
      36: '116pt',
      40: '128pt',
      44: '144pt',
      48: '160pt',
      52: '176pt',
      56: '192pt',
      56: '208pt',
      60: '224pt',
      64: '240pt',
      72: '256pt',
      80: '288pt',
      88: '320pt',
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
  corePlugins: [
    // background
    'backgroundColor',
    'backgroundImage',
    'backgroundPosition',
    'backgroundRepeat',
    'backgroundSize',
    
    // border
    'borderCollapse',
    'borderColor',
    'borderRadius',
    'borderSpacing',
    'borderStyle',
    'borderWidth',

    // page breaks
    'breakAfter',
    'breakBefore',
    'breakInside',

    'clear',
    'content',
    'display',

    'float',

    // fonts
    'fontFamily',
    'fontSize',
    'fontStyle',
    'fontWeight',

    'height',
    'inset',
    'letterSpacing',
    'lineHeight',
    'listStylePosition',
    'listStyleType',

    'margin',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',

    'opacity',
    'padding',
    'position',

    'preflight',
    'rotate',
    'scale',
    'skew',
    'tableLayout',

    // text
    'textAlign',
    'textColor',
    'textDecoration',
    'textDecorationColor',
    'textDecorationStyle',
    'textDecorationThickness',
    'textIndent',
    'textOpacity',

    'textTransform',
    'transform',
    'transformOrigin',
    'translate',
    'verticalAlign',
    'visibility',
    'whitespace',
    'width',
    'wordBreak',
    'zIndex',

    plugin(function ({ addUtilities }) {
      const newUtilities = {
          '.page-break': { 'page-break-after': 'always' },
          '.page-break-before': { 'page-break-before': 'always' },
      }

      addUtilities(newUtilities)
    })
  ]
}
