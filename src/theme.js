export const theme = {
  colors: {
    primaryText: '#000',
    secondaryText: 'rgb(134 131 131)',
    backgroundMain: '#fff',
    backgroundBody: 'rgba(110, 160, 163, 0.52)',
    backgroundStat: 'rgba(177, 212, 215, 0.52)',
    background: 'rgba(0, 159, 170, 0.493)',
    accent: 'rgba(37, 40, 239, 0.685)',
    red: '#f00',
    white: 'white',
    green: 'green',
    borderColor: 'rgba(174, 196, 198, 0.52)',
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Fira Sans', sans-serif",
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '24px',
    xl: '32px',
  },

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },

  radii: {
    none: '0',
    normal: '5px',
    round: '50%',
  },

  shadows: {
    first:
      'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
    second: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
  },

  getRandomColor() {
    const r = Math.floor(Math.random() * 230);
    const g = Math.floor(Math.random() * 230);
    const b = Math.floor(Math.random() * 230);
    return `rgba(${r}, ${g}, ${b}, 0.8)`;
  },
};
