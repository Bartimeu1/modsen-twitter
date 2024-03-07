import styled from 'styled-components';

export const StyledSidebar = styled.aside``;

export const Logo = styled.div`
  margin-bottom: 20px;

  & svg {
    width: 40px;
  }
`;

export const TweetButton = styled.button`
  background: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-radius: ${({ theme }) => theme.borderRadius.xs}px;
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  border: 1px solid ${({ theme }) => theme.color.blue};
  display: inline-block;
  padding: 15px 0 19px 0;
  width: 100%;
  transition: 0.3s;
  margin-bottom: 80px;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
    background: inherit;
    transition: 0.3s;
  }
`;
