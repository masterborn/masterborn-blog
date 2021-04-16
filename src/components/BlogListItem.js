import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from 'gatsby-image'

import {ReactComponent as ArrowIcon} from '../assets/arrow-yellow.svg';

import Icon from './Icon';
import Heading from './Heading';
import Text from "./Text"
import Link from './Link';

const BlogItemWrapper = styled.div`
  &:hover {
    .image-wrapper {
      background: ${props => props.theme.colors.primary};
    }
    .gatsby-image-wrapper {
      opacity: 0.15;
    }
  }
`

const BlogImage = styled(Image)`
  border-radius: 4px;
  box-shadow: 0 35px 30px -37px rgba(0,0,0,0.2);
  margin-bottom: 2rem;
  height: 223px;
  transition: opacity .3s;
}
`
// some articles are missing images, lets enforce height to keep layout consistent
const ImageWrapper = styled.div`
  background: transparent;
  transition: background .3s;
  height: 223px;
`

const BlogLink = styled(Link)`
  font-weight: ${props => props.theme.fontWeights[2]};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.relatedArticles.link}
`
const BlogListItem = ({title, slug, image, description}) => {
  return (
    <BlogItemWrapper>
      <ImageWrapper className="image-wrapper">
        <Link to={`/${slug}`} title={title}>
          <BlogImage fluid={image.fluid} alt={title} />
        </Link>
      </ImageWrapper>
      <Link to={`/${slug}`} title={title}>
        <Heading as="h5" mt={3} mb={3}>{title}</Heading>
      </Link>
      <Text fontSize={2}>{description}</Text>
      <BlogLink to={`/${slug}`} title={title}>
        Read more <Icon icon={ArrowIcon} color="primary" width="24px" height="16px" ml={2} />
      </BlogLink>
    </BlogItemWrapper>
  );
};

BlogListItem.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({}).isRequired,
}

export default BlogListItem;
