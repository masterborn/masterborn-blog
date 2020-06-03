import React from 'react';
import PropTypes from 'prop-types';
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
import EditOnGithubLink from './EditOnGithubLink';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2.2rem 0;
  box-shadow: 0px -10px 29px -15px
    ${({ theme }) => theme.colors.accentBackground};
`;

const SocialBox = ({ filePath }) => {
  const location = useLocation();
  const url = location.href || '';
  return (
    <Container>
      <Text fontWeight="500">Share:</Text>
      <ShareButton button={LinkedinShareButton} icon={LinkedinSquare} url={url}>
        LinkedIn
      </ShareButton>
      <ShareButton button={TwitterShareButton} icon={Twitter} url={url}>
        Twitter
      </ShareButton>
      <ShareButton button={FacebookShareButton} icon={FacebookSquare} url={url}>
        Facebook
      </ShareButton>
      <Text fontWeight="500" mt={3}>
        Request change:
      </Text>
      <EditOnGithubLink filePath={filePath} />
    </Container>
  );
};

SocialBox.propTypes = {
  filePath: PropTypes.string.isRequired,
};

export default SocialBox;
