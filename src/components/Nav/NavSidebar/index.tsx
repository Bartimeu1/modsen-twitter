import { NavMenu } from '@components/Nav';
import { UserPanel } from '@components/User';
import { LogoIcon } from '@root/constants';

import { Logo, StyledSidebar, TweetButton } from './styled';

export const NavSidebar = () => {
  return (
    <StyledSidebar>
      <Logo>
        <LogoIcon />
      </Logo>
      <NavMenu />
      <TweetButton>Tweet</TweetButton>
      <UserPanel />
    </StyledSidebar>
  );
};
