import { memo } from 'react';

import { NavMenu } from '@components/Nav';
import { UserPanel } from '@components/User';
import { CreateTweet, LogoIcon } from '@root/constants';

import { Logo, StyledSidebar, TweetButton, TweetButtonText } from './styled';
import { INavSidebarProps } from './types';

export const NavSidebar = memo(function NavSidebar(props: INavSidebarProps) {
  const { isBurgerActive, onLinkClick } = props;

  return (
    <StyledSidebar $isBurgerActive={isBurgerActive}>
      <Logo>
        <LogoIcon />
      </Logo>
      <NavMenu onLinkClick={onLinkClick} />
      <TweetButton>
        <CreateTweet />
        <TweetButtonText>Tweet</TweetButtonText>
      </TweetButton>
      <UserPanel />
    </StyledSidebar>
  );
});
