const theme = {
  color: {
    white: '#ffffff',
    black: '#111111',
    grayscale900: '#22223D',
    grayscale700: '#525068',
    grayscale600: '#6B677D',
    grayscale500: '#837E92',
    grayscale300: '#B2ADBB',
    grayscale200: '#C9CDDB',
    grayscale100: '#E0DDE4',
    grayscale50: '#F7F6F8',
    malibu100: '#E1F4FB',
    malibu500: '#88CFFB',
  },
  weight: {
    bold: 700,
    medium: 500,
    regular: 400,
  },
  zIndex: {
    negative: -1,
    default: 0,
    first: 1,
    second: 2,
  },
};

export type Theme = typeof theme;

export default theme;
