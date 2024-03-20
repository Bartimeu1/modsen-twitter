import { useEffect, useState } from 'react';

import { Picture } from '@components/Picture';
import { UserAvatar } from '@components/User';
import {
  CloseIcon,
  failureText,
  successText,
  UploadImage,
} from '@root/constants';
import { useAppDispatch, useAppSelector } from '@root/hooks';
import { ToastTypesEnum } from '@root/types/toast';
import { generateImageURL } from '@root/utils';
import { addToast } from '@store/features/toast/toastSlice';
import { useCreateTweetMutation } from '@store/features/tweet/tweetApi';

import {
  FileInput,
  ImageButton,
  ImagePreview,
  PreviewCloseButton,
  StyledTweetMenu,
  TweetButton,
  TweetContent,
  TweetControls,
  TweetTextarea,
} from './styled';
import { ITweetMenuProps } from './types';

export const TweetMenu = (props: ITweetMenuProps) => {
  const { onAddTweet } = props;

  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user);

  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [tweetText, setTweetText] = useState('');
  const [isTweetButtonDisabled, setIsTweetButtonDisabled] = useState(true);

  const [createTweet, { isError }] = useCreateTweetMutation();

  useEffect(() => {
    setIsTweetButtonDisabled(!tweetText && !uploadedImage);
  }, [uploadedImage, tweetText]);

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedImage(e.target.files[0]);
    }
  };

  const onTweetTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweetText(e.target.value);
  };

  const onTweetButtonClick = () => {
    const tweetData = {
      text: tweetText || null,
      image: uploadedImage || null,
      userId: userData.id,
    };

    createTweet({ data: tweetData }).then(() => {
      dispatch(
        addToast({
          type: isError ? ToastTypesEnum.error : ToastTypesEnum.success,
          content: isError ? failureText : successText,
        }),
      );
    });
    setTweetText('');
    setUploadedImage(null);
    onAddTweet && onAddTweet();
  };

  const onPreviewCloseButtonClick = () => {
    setUploadedImage(null);
  };

  return (
    <StyledTweetMenu data-testid="tweet-menu">
      <UserAvatar size={50} image={userData.data?.avatar} />
      <TweetContent>
        <TweetTextarea
          data-testid="tweet-textarea"
          placeholder="What’s happening"
          onChange={onTweetTextChange}
          value={tweetText}
        />
        <TweetControls>
          {uploadedImage ? (
            <ImagePreview>
              <Picture
                image={generateImageURL(uploadedImage)}
                alt="preview-image"
              />
              <PreviewCloseButton
                data-testid="close-preview-button"
                onClick={onPreviewCloseButtonClick}>
                <CloseIcon />
              </PreviewCloseButton>
            </ImagePreview>
          ) : (
            <ImageButton>
              <FileInput
                data-testid="tweet-file-input"
                type="file"
                onChange={onFileInputChange}
              />
              <UploadImage />
            </ImageButton>
          )}
          <TweetButton
            data-testid="create-tweet-button"
            onClick={onTweetButtonClick}
            disabled={isTweetButtonDisabled}>
            Tweet
          </TweetButton>
        </TweetControls>
      </TweetContent>
    </StyledTweetMenu>
  );
};
