import styled from 'styled-components';

export const StyledTweetPage = styled.main`
  width: 100%;
  max-width: 930px;
  position: relative;

  &:before,
  &:after {
    background: ${({ theme }) => theme.color.primary};
    opacity: 10%;
    position: absolute;
    width: 1px;
    height: 100%;
    max-height: 870px;
    content: '';
    top: 0;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }
`;
