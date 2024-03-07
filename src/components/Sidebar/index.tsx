import { NavMenu } from '@components/NavMenu';
import { UserPanel } from '@components/UserPanel';
import { LogoIcon } from '@constants/icons';

import { Logo, StyledSidebar, TweetButton } from './styled';

const Sidebar = () => {
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

export default Sidebar;
