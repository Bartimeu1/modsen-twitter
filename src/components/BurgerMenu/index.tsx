import { memo } from 'react';

import { BurgerContent, BurgerRow, StyledBurgerMenu } from './styled';
import { IBurgerMenuProps } from './types';

export const BurgerMenu = memo(function BurgerMenu(props: IBurgerMenuProps) {
  const { isActive, onClick } = props;

  return (
    <StyledBurgerMenu onClick={onClick} data-testid="burger-menu">
      <BurgerContent $isActive={isActive}>
        <BurgerRow />
      </BurgerContent>
    </StyledBurgerMenu>
  );
});
