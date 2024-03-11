import { useEffect, useState } from 'react';

import defaultAvatar from '@assets/images/defaultAvatar.png';
import { Picture } from '@components/Picture';
import { CloseIcon,UploadImage } from '@constants/icons';
import { useAppSelector } from '@root/hooks';
import { createTweet } from '@utils/firestore';
import { generateImageURL } from '@utils/helpers';

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

export const TweetMenu = () => {
  const userId = useAppSelector((state) => state.user.id);

  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [tweetText, setTweetText] = useState('');
  const [isTweetButtonDisabled, setIsTweetButtonDisabled] = useState(true);

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
      userId: userId,
    };

    createTweet(tweetData);
    setTweetText('');
    setUploadedImage(null);
  };

  const onPreviewCloseButtonClick = () => {
    setUploadedImage(null);
  };

  return (
    <StyledTweetMenu>
      <Picture image={defaultAvatar} width={50} alt="tweet-avatar" />
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
