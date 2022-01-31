import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GithubIcon from 'emotion-icons/simpleIcons/GitHub';

import useSiteMetadata from '../hooks/useSiteMetadata';

import Icon from './Icon';
import Link from './Link';
import Button from './Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const GithubLink = styled(Button)`
  padding-right: 0;
  padding-left: 0;
`;

const EditOnGithubLink = ({ filePath }) => {
  const {
    githubRepoUrl,
    markdownPath,
    githubProductionPath,
  } = useSiteMetadata();
  const githubUrl = `${githubRepoUrl}/${githubProductionPath}/${markdownPath}/${filePath}`;

  return (
    <Container>
      <GithubLink variant="link" as={Link} to={githubUrl} target="_blank">
        <Icon mr={2} size={20} icon={GithubIcon} />
        Edit this page
      </GithubLink>
    </Container>
  );
};

EditOnGithubLink.propTypes = {
  filePath: PropTypes.string.isRequired,
};

export default EditOnGithubLink;
