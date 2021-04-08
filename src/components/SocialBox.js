import React from 'react';
import LinkedinShareButton from 'react-share/es/LinkedinShareButton';
import LinkedinSquare from 'emotion-icons/fa-brands/Linkedin';
import TwitterShareButton from 'react-share/es/TwitterShareButton';
import Twitter from 'emotion-icons/fa-brands/Twitter';
import FacebookShareButton from 'react-share/es/FacebookShareButton';
import FacebookSquare from 'emotion-icons/fa-brands/FacebookSquare';
import styled from '@emotion/styled';

import useLocation from '../hooks/useLocation';

import ShareButton from './blog/ShareButton';
import Text from './Text';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  position: sticky;
`;

const ButtonsContainer = styled(`div`)`
  width: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
`

const SocialBox = () => {
  const location = useLocation();
  const url = location.href || '';
  return (
    <Container>
      <Text fontSize="bodySmall" mb="0">Share</Text>
      <ButtonsContainer>
        <ShareButton button={LinkedinShareButton} icon={LinkedinSquare} url={url} />
        <ShareButton button={TwitterShareButton} icon={Twitter} url={url} />
        <ShareButton button={FacebookShareButton} icon={FacebookSquare} url={url} />
      </ButtonsContainer>

    </Container>
  );
};

export default SocialBox;
