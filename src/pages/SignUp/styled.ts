import { Link } from 'react-router-dom';

import bannerBg from '@assets/images/bannerBg.jpg';
import { FlexMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledSignUp = styled.section`
  ${FlexMixin({ direction: 'column' })}

  height: 100%;
`;

export const Topper = styled.div`
  ${FlexMixin({ align: 'center' })}

  height: 100%;
`;

export const Banner = styled.div`
  background-image: url(${bannerBg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  height: 100%;
  margin-right: 40px;
`;

export const Content = styled.div`
  ${FlexMixin({ direction: 'column', align: 'start' })}
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.xl4}px;
  font-weight: ${({ theme }) => theme.fontWeight.black};
  margin: 50px 0 46px 0;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.xl3}px;
  font-weight: ${({ theme }) => theme.fontWeight.black};
  margin-bottom: 31px;
`;

export const Buttons = styled.div`
  ${FlexMixin({ direction: 'column' })}

  margin-bottom: 31px;
`;

export const SignButton = styled.button`
  ${FlexMixin({ align: 'center', justify: 'center' })}

  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: 14px 97px;
  transition: 0.3s;

  & svg {
    margin-right: 3px;
    padding-bottom: 3px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.background};
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.background};
    transition: 0.3s;
  }

  &:first-child {
    margin-bottom: 21px;
  }
`;

export const SignLink = styled(Link)`
  ${FlexMixin({ align: 'center', justify: 'center' })}

  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: 14px 97px;
  transition: 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.color.background};
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.background};
    transition: 0.3s;
  }
`;

export const TermsText = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.xs2}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  max-width: 373px;
  margin-bottom: 20px;
`;

export const LogInText = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const InfoLink = styled(Link)`
  color: ${({ theme }) => theme.color.mdBlue};
  line-height: 20px;
`;

export const Nav = styled.nav`
  ${FlexMixin({ align: 'center', justify: 'center' })}

  padding: 19px 0;
  margin: 0 -19px;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.xs3}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  margin: 0 19px;
`;
