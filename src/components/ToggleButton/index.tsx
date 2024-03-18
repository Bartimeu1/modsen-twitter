import { useAppDispatch, useAppSelector } from '@root/hooks';
import { ThemeColorsEnum } from '@root/types/theme';
import { toggleTheme } from '@store/features/theme/themeSlice';

import { StyledToggleButton } from './styled';

export const ToggleButton = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(({ theme }) => theme.currentTheme);

  const onToggleButtonClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <StyledToggleButton
      data-testid="theme-toggle-button"
      type="checkbox"
      onClick={onToggleButtonClick}
      $isChecked={currentTheme === ThemeColorsEnum.dark}
    />
  );
};
