import { Link } from 'react-router-dom';

import { FlexMixin, FontsMixin } from '@root/theme';
import styled from 'styled-components';

import { ITweetLikes } from './types';

export const StyledTweetItem = styled.article`
  ${FlexMixin({ align: 'start' })}

  padding-bottom: 20px;
  margin-top: 10px;
  position: relative;

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.color.primary};
    opacity: 20%;
    content: '';
  }
`;

export const UserLink = styled(Link)`
  cursor: pointer;
  padding-left: 15px;
  min-width: 65px;

  & img {
    border-radius: ${({ theme }) => theme.borderRadius.circle};
  }
`;

export const TweetContent = styled.div`
  ${FlexMixin({ direction: 'column' })}

  margin-left: 7px;
`;

export const TweetHeader = styled.div`
  ${FlexMixin({ align: 'center' })}

  margin-bottom: 5px;
`;

export const UserName = styled.p`
  ${FontsMixin({ size: 'md', weight: 'bold', family: 'secondary' })}

  color: ${({ theme }) => theme.color.primary};
  margin-right: 5px;
`;

export const UserSlug = styled.p`
  color: ${({ theme }) => theme.color.primary};
  opacity: 60%;
  margin-right: 12px;
  position: relative;

  &::after {
    position: absolute;
    content: '·';
    right: -8px;
  }
`;

export const TweetDate = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  color: ${({ theme }) => theme.color.primary};
  opacity: 60%;
`;

export const TweetText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.color.primary};
`;

export const TweetImage = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.xs2}px;
  width: 95%;
  max-height: 450px;
  margin-top: 15px;
`;

export const TweetLikes = styled.div<ITweetLikes>`
  ${FlexMixin({ align: 'center' })}

  margin-top: 25px;
  border: none;
  max-width: 50px;

  & svg path {
    fill: ${({ theme }) => theme.color.primary};
  }

  ${({ $isLiked, theme }) =>
    $isLiked &&
    `
  & p {
    color: ${theme.color.ltRed};
    font-weight: ${theme.fontWeight.semiBold};
  }
  
  & svg {
      stroke: ${theme.color.ltRed};
    }
  `}
`;

export const LikeButton = styled.button`
  border: none;
  padding: 0;
  margin-right: 5px;

  & svg {
    width: 24px;
    height: auto;
  }
`;

export const LikesCounter = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  color: ${({ theme }) => theme.color.primary};
  padding-bottom: 2px;
`;
