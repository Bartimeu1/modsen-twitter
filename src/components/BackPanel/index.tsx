import { ToggleButton } from '@components/ToggleButton';
import { BackArrowIcon } from '@root/constants';

import { BackLink, Content, StyledBackPanel } from './styled';

export const BackPanel = () => {
  return (
    <StyledBackPanel>
      <Content>
        <BackLink to="/home">
          <BackArrowIcon />
          Home
        </BackLink>
        <ToggleButton />
      </Content>
    </StyledBackPanel>
  );
};
