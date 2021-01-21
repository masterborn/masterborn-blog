import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../Heading';
import Text from '../Text';
import Hr from '../Hr';

import AuthorBox from './AuthorBox';
import PostDetailsBox from './PostDetailsBox';
import PostLink from './PostLink';
import Image from 'gatsby-image'

const Container = styled.div`
  margin-bottom: ${props => props.theme.space.large};
`;


const PostShort = ({
  post: { date, slug, title, description, authorAvatar, author, metaImage },
}) => {
  const localeDate = new Date(date).toLocaleDateString();
  return (
    <Container>
      <PostDetailsBox>Published at: {localeDate}</PostDetailsBox>
      <PostLink to={slug}>
        <Image fluid={metaImage.fluid} />
        <Heading as="h4" mb={2} mt={3}>
          {title}
        </Heading>
      </PostLink>
      <Text>{description}</Text>
      <AuthorBox image={authorAvatar} name={author} />
      <Hr mt={5} mb={5} />
    </Container>
  );
};

PostShort.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorAvatar: PropTypes.string,
  }).isRequired,
};

export default PostShort;
