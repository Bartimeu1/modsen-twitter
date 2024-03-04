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
    xxxs: 13,
    xxs: 14,
    xs: 16,
    sm: 18,
    md: 20,
    lg: 22,
    xl: 24,
    xxl: 42,
    xxxl: 84,
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
    xxxs: 6,
    xxs: 10,
    xs: 27,
    sm: 31,
    md: 42,
    lg: 50,
    xl: 60,
    xxl: 76,
    xxxl: 120,
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
