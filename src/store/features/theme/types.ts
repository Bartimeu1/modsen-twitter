import { ThemeColorsEnum } from '@root/types/theme';

export interface IThemeSliceState {
  currentTheme: keyof typeof ThemeColorsEnum;
}
