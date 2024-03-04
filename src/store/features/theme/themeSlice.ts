import { ThemeColorsEnum } from '@root/types/theme';
import { createSlice } from '@reduxjs/toolkit';
import { IThemeSliceState } from './types';

const initialState: IThemeSliceState = {
  currentTheme: ThemeColorsEnum.light,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme =
        state.currentTheme === ThemeColorsEnum.dark
          ? ThemeColorsEnum.light
          : ThemeColorsEnum.dark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
