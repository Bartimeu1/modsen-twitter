import { memo, useState } from 'react';

import { NavMenu } from '@components/Nav';
import { TweetModal } from '@components/Tweet';
import { UserPanel } from '@components/User';
import { CreateTweet, LogoIcon } from '@root/constants';

import { Logo, StyledSidebar, TweetButton, TweetButtonText } from './styled';
import { INavSidebarProps } from './types';

export const NavSidebar = memo(function NavSidebar(props: INavSidebarProps) {
  const { isBurgerActive, onLinkClick } = props;

  const [isTweetModalVisible, setIsTweetModalVisible] = useState(false);

  const closeTweetModal = () => {
    setIsTweetModalVisible(false);
  };

  const onTweetButtonClick = () => {
    setIsTweetModalVisible(true);
  };

  return (
    <StyledSidebar $isBurgerActive={isBurgerActive}>
      <Logo>
        <LogoIcon />
      </Logo>
      <NavMenu onLinkClick={onLinkClick} />
      <TweetButton onClick={onTweetButtonClick}>
        <CreateTweet />
        <TweetButtonText>Tweet</TweetButtonText>
      </TweetButton>
      <UserPanel />
      {isTweetModalVisible && <TweetModal closeTweetModal={closeTweetModal} />}
    </StyledSidebar>
  );
});
