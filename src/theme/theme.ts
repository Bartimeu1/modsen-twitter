const commonColors = {
  white: '#fff',
  black: '#000',
  grey: '#828282',
  lightGrey: '#B3B8BB',
  blue: '#1D9BF0',
  ltBlue: '#1DA1F2',
  mdBlue: '#1E97E1',
  red: '#FF0000',
  ltRed: '#EF1C5C',
  success: '#28A745',
};

const lightThemeColors = {
  background: '#fff',
  primary: '#000',
  border: '#00000020;',
  searchInput: '#EFF3F4',
  resultsPanel: '#F7F9F9',
};

const darkThemeColors = {
  background: '#030304',
  primary: '#fff',
  border: '#ffffff20',
  searchInput: 'red',
  resultsPanel: 'red',
};

const layoutValues = {
  fontFamily: {
    primary: 'Roboto, sans-serif',
    secondary: 'Roboto Serif, Arial',
  },
  fontSize: {
    xs3: 13,
    xs2: 14,
    xs: 16,
    sm: 18,
    md: 20,
    lg: 22,
    xl: 24,
    xl2: 30,
    xl3: 42,
    xl4: 84,
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    black: 900,
  },
  borderRadius: {
    xs4: 6,
    xs3: 10,
    xs2: 14,
    xs: 27,
    sm: 31,
    md: 42,
    lg: 50,
    xl: 60,
    xl2: 76,
    xl3: 120,
    circle: '50%',
  },
};

export const theme = {
  dark: {
    color: { ...commonColors, ...darkThemeColors },
    ...layoutValues,
  },
  light: {
    color: { ...commonColors, ...lightThemeColors },
    ...layoutValues,
  },
};
