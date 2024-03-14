import { ToggleButton } from '@components/ToggleButton';
import { BackArrowIcon } from '@constants/icons';

import { BackLink, Content,StyledBackPanel } from './styled';

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
