import { Link } from 'react-router-dom';

import bannerBg from '@assets/images/bannerBg.jpg';
import { FlexMixin, FontsMixin } from '@root/theme';
import styled, { css } from 'styled-components';

const SignButtonStyles = css`
  ${FlexMixin({ align: 'center', justify: 'center' })}
  ${FontsMixin({ size: 'md', weight: 'medium' })}

  color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: 14px 0;
  width: 400px;
  transition: 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.color.background};
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.background};
    transition: 0.3s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: ${({ theme }) => theme.fontSize.sm}px;
    width: 100%;
  }
`;

export const StyledSignUp = styled.section`
  ${FlexMixin({ direction: 'column' })}

  height: 100%;
  padding-right: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    padding: 0 13px;
  }
`;

export const Topper = styled.div`
  ${FlexMixin({ align: 'center' })}

  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
    ${FlexMixin({ justify: 'center' })}
  }
`;

export const Banner = styled.div`
  background-image: url(${bannerBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 100%;
  margin-right: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    display: none;
  }
`;

export const Content = styled.div`
  ${FlexMixin({ direction: 'column', align: 'start' })}

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
    ${FlexMixin({ direction: 'column', align: 'center', justify: 'center' })}
  }
`;

export const Title = styled.h2`
  ${FontsMixin({ size: 'xl4', weight: 'black' })}

  margin: 50px 0 46px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: ${({ theme }) => theme.fontSize.xl3}px;
    margin: 40px 0 25px 0;
  }
`;

export const Subtitle = styled.p`
  ${FontsMixin({ size: 'xl3', weight: 'black' })}

  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 31px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: ${({ theme }) => theme.fontSize.xl2}px;
    margin-bottom: 25px;
  }
`;

export const Buttons = styled.div`
  ${FlexMixin({ direction: 'column' })}

  margin-bottom: 31px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    ${FlexMixin({ direction: 'column', align: 'center' })}

    margin-bottom: 20px;
  }
`;

export const SignButton = styled.button`
  ${FlexMixin({ align: 'center', justify: 'center' })}
  ${SignButtonStyles}

  padding: 14px 0;

  & svg {
    margin-right: 3px;
    padding-bottom: 3px;
  }

  &:first-child {
    margin-bottom: 21px;
  }
`;

export const SignLink = styled(Link)`
  ${FlexMixin({ align: 'center', justify: 'center' })}
  ${SignButtonStyles}

  padding: 18px 0;
`;

export const TermsText = styled.p`
  ${FontsMixin({ size: 'xs2' })}

  color: ${({ theme }) => theme.color.primary};
  max-width: 373px;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: ${({ theme }) => theme.fontSize.xs3}px;
    margin-bottom: 15px;
  }
`;

export const LogInText = styled.p`
  ${FontsMixin({ size: 'xs' })}

  color: ${({ theme }) => theme.color.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: ${({ theme }) => theme.fontSize.xs2}px;
  }
`;

export const InfoLink = styled(Link)`
  color: ${({ theme }) => theme.color.mdBlue};
  line-height: 20px;
`;

export const Nav = styled.nav`
  ${FlexMixin({ align: 'center', justify: 'center' })}

  padding: 19px 0;
  margin: 0 -19px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopL}) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  ${FontsMixin({ size: 'xs3' })}

  color: ${({ theme }) => theme.color.primary};
  margin: 0 19px;
`;
