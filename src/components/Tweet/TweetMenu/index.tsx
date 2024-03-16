import { useEffect, useState } from 'react';

import defaultAvatar from '@assets/images/defaultAvatar.png';
import { Picture } from '@components/Picture';
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
  UserAvatar,
} from './styled';

export const TweetMenu = () => {
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
  };

  const onPreviewCloseButtonClick = () => {
    setUploadedImage(null);
  };

  return (
    <StyledTweetMenu>
      <UserAvatar>
        <Picture
          image={userData.data?.avatar || defaultAvatar}
          width={50}
          alt="tweet-avatar"
        />
      </UserAvatar>
      <TweetContent>
        <TweetTextarea
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
              <PreviewCloseButton onClick={onPreviewCloseButtonClick}>
                <CloseIcon />
              </PreviewCloseButton>
            </ImagePreview>
          ) : (
            <ImageButton>
              <FileInput type="file" onChange={onFileInputChange} />
              <UploadImage />
            </ImageButton>
          )}
          <TweetButton
            onClick={onTweetButtonClick}
            disabled={isTweetButtonDisabled}>
            Tweet
          </TweetButton>
        </TweetControls>
      </TweetContent>
    </StyledTweetMenu>
  );
};