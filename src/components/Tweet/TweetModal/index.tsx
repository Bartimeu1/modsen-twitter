import { useRef } from 'react';

import { PortalWrapper } from '@components/PortalWrapper';
import { TweetMenu } from '@components/Tweet';
import { CloseIcon } from '@root/constants';
import { useLockBodyScroll, useOnClickOutside } from '@root/hooks';

import { CloseButton, StyledTweetModal, TweetModalContent } from './styled';
import { ITweetModalProps } from './types';

export const TweetModal = (props: ITweetModalProps) => {
  const { closeTweetModal } = props;

  const tweetModalRef = useRef(null);

  useLockBodyScroll();
  useOnClickOutside(tweetModalRef, closeTweetModal);
  return (
    <PortalWrapper>
      <StyledTweetModal>
        <TweetModalContent ref={tweetModalRef}>
          <CloseButton
            onClick={closeTweetModal}
            data-testid="tweet-modal-close-button"
          >
            <CloseIcon />
          </CloseButton>
          <TweetMenu onAddTweet={closeTweetModal} />
        </TweetModalContent>
      </StyledTweetModal>
    </PortalWrapper>
  );
};
