import { NavMenu } from '@components/NavMenu';
import { LogoIcon } from '@constants/icons';
import { UserPanel } from '@components/UserPanel';

import { StyledSidebar, Logo, TweetButton } from './styled';

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
