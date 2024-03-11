import { FlexMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledTweetMenu = styled.div`
  ${FlexMixin({ align: 'start' })};

  width: 100%;
  position: relative;
  padding: 18px 0 13px 0;
  margin-bottom: 30px;

  &::after,
  &::before {
    position: absolute;
    left: 0;
    height: 1px;
    width: 100%;
    content: '';
    background: ${({ theme }) => theme.color.primary};
    opacity: 20%;
  }

  &::after {
    bottom: 0;
  }

  &::before {
    top: 0;
  }
`;

export const TweetContent = styled.div`
  ${FlexMixin({ direction: 'column' })};

  width: 100%;
  margin-left: 28px;
`;

export const TweetTextarea = styled.textarea`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  resize: none;

  &::placeholder {
    opacity: 80%;
  }
`;

export const TweetControls = styled.div`
  ${FlexMixin({ align: 'center', justify: 'space-between' })};
`;

export const ImageButton = styled.div`
  position: relative;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 20px;
  opacity: 0;

  &::-webkit-file-upload-button {
    cursor: pointer;
  }
`;

export const TweetButton = styled.button`
  background: ${({ theme }) => theme.color.ltBlue};
  border: 1px solid ${({ theme }) => theme.color.ltBlue};
  border-radius: ${({ theme }) => theme.borderRadius.xl3}px;
  color: ${({ theme }) => theme.color.background};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  padding: 15px 30px 18px 30px;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    background: inherit;
    color: ${({ theme }) => theme.color.ltBlue};
  }
`;
