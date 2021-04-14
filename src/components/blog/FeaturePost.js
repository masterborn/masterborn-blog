import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

import Heading from '../Heading';
import Text from '../Text';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import Link from '../Link';

const Container = styled.div`
  height: 500px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr 1fr;
  grid-gap: 5rem;
`;

const StyledImage = styled(Image)`
  height: 374px;
`;

const Description = styled(Text)`
  opacity: 0.9;
`;

const ReadMoreLink = styled(Link)`
  display: flex;
  grid-auto-flow: column;
`;

const ReadMoreText = styled(Text)`
  opacity: 0.9;
  font-weight: 600;
  font-size: 1.4rem;
  margin-right: 0.5rem;
`;

const FeaturePost = ({ post }) => {
  const { title, description, slug, metaImage } = post;
  return (
    <Container>
      <div>
        <Heading color="featurePost.header" fontWeight={600} as="h1">{title}</Heading>
        <Description opacity="0.9" lineHeight="2.6rem" fontSize="1.6rem" color="featurePost.description">
          {description}
        </Description>
        <ReadMoreLink to={slug}>
          <ReadMoreText color="featurePost.readMore">
            Read more
          </ReadMoreText>
          <Arrow />
        </ReadMoreLink>
      </div>
      <Link to={slug}>
        <StyledImage fluid={metaImage.fluid} />
      </Link>
    </Container>
  );
};


FeaturePost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorAvatar: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    metaImage: PropTypes.shape({
      fluid: PropTypes.shape({
        src: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default FeaturePost;
