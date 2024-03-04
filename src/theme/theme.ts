const commonColors = {
  white: '#fff',
  black: '#000',
  grey: '#828282',
  blue: '#1D9BF0',
  ltBlue: '#1DA1F2',
};

const lightThemeColors = {
  background: '#fff',
  primary: '#000',
};

const darkThemeColors = {
  background: '#030304',
  primary: '#fff',
};

const layoutValues = {
  fontFamily: {
    primary: 'Roboto, sans-serif',
    secondary: 'Roboto Serif, sans-serif',
  },
  fontSize: {
    xs3: 13,
    xs2: 14,
    xs: 16,
    sm: 18,
    md: 20,
    lg: 22,
    xl: 24,
    xl2: 42,
    xl3: 84,
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
    xs3: 6,
    xs2: 10,
    xs: 27,
    sm: 31,
    md: 42,
    lg: 50,
    xl: 60,
    xl2: 76,
    xl3: 120,
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
