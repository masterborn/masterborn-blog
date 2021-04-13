import React from 'react';
import LinkedinShareButton from 'react-share/es/LinkedinShareButton';
import TwitterShareButton from 'react-share/es/TwitterShareButton';
import FacebookShareButton from 'react-share/es/FacebookShareButton';
import styled from '@emotion/styled';

import { ReactComponent as Twitter } from '../assets/twitter-share-icon.svg';
import { ReactComponent as LinkedinSquare } from '../assets/linkedin-share-icon.svg';
import { ReactComponent as FacebookSquare } from '../assets/facebook-share-icon.svg';
import useLocation from '../hooks/useLocation';

import ShareButton from './blog/ShareButton';
import Text from './Text';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
`;

const ButtonsContainer = styled(`div`)`
  width: auto;
  margin-left: auto;
  margin-right: -1rem;
  display: flex;
  align-items: center;
`

const SocialBox = () => {
  const location = useLocation();
  const url = location.href || '';
  return (
    <Container>
      <Text fontSize="bodySmall" fontWeight={1} mb="0">Share</Text>
      <ButtonsContainer>
        <ShareButton button={LinkedinShareButton} icon={LinkedinSquare} url={url} />
        <ShareButton button={TwitterShareButton} icon={Twitter} url={url} />
        <ShareButton button={FacebookShareButton} icon={FacebookSquare} url={url} />
      </ButtonsContainer>

    </Container>
  );
};

export default SocialBox;
