import { FlexMixin, FontsMixin } from '@root/theme';
import styled from 'styled-components';

export const StyledTweetMenu = styled.div`
  ${FlexMixin({ align: 'start' })};

  width: 100%;
  position: relative;
  padding: 18px 15px 13px 15px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopM}) {
    margin-left: 15px;
  }
`;

export const TweetTextarea = styled.textarea`
  ${FontsMixin({ size: 'lg', family: 'primary' })}

  color: ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.color.background};
  margin-bottom: 20px;
  border: none;
  outline: none;
  resize: none;
  transition: background 0.3s ease;

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
  ${FontsMixin({ size: 'xs', weight: 'bold', family: 'secondary' })}

  background: ${({ theme }) => theme.color.ltBlue};
  border: 1px solid ${({ theme }) => theme.color.ltBlue};
  border-radius: ${({ theme }) => theme.borderRadius.xl3}px;
  color: ${({ theme }) => theme.color.white};
  padding: 15px 30px 18px 30px;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    background: inherit;
    color: ${({ theme }) => theme.color.ltBlue};
  }
`;

export const ImagePreview = styled.div`
  position: relative;

  & img {
    max-width: 150px;
  }
`;

export const PreviewCloseButton = styled.button`
  position: absolute;
  border: none;
  right: 15px;
  height: auto;
  width: 20px;
  height: 20px;

  & svg {
    width: 20px;
  }
`;
