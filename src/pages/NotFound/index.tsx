import { LogoIcon } from '@constants/icons';

import { BackLink,NotFoundText, StyledNotFound } from './styled';

export const NotFoundPage = () => {
  return (
    <StyledNotFound>
      <LogoIcon />
      <NotFoundText>This page does not Exist</NotFoundText>
      <BackLink to="/home">Home</BackLink>
    </StyledNotFound>
  );
};
