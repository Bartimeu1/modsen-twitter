import { useAppDispatch } from '@root/hooks';
import { toggleTheme } from '@store/features/theme/themeSlice';

import { StyledToggleButton } from './styled';

export const ToggleButton = () => {
  const dispatch = useAppDispatch();

  const onToggleButtonClick = () => {
    dispatch(toggleTheme());
  };

  return <StyledToggleButton type="checkbox" onClick={onToggleButtonClick} />;
};
