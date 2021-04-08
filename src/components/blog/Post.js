import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import { media } from '../../utils/emotion';
import Heading from '../Heading';
import mdxComponents from '../mdxComponents';
import RightSidebar from '../RightSidebar/RightSidebar';

import AuthorBox from './AuthorBox';
import BlogContent from './BlogContent';

const Wrapper = styled('div')`
  ${media.desktop`
    padding-top: 12rem;
  `}
`;

const PostHeader = styled('div')`
  margin-bottom: 5.5rem;
`;

const PostContent = styled('div')`
  display: grid;
  grid-row-gap: 2rem;
  grid-template-areas:
    'body'
    'sidebar';
  ${media.desktop`
  grid-row-gap: 0;
  grid-column-gap: 6rem;
  grid-template-columns: 9fr 3fr;
   grid-template-areas:
    "body sidebar";
  `}
`;

const PostBody = styled('div')`
  grid-area: body;
  min-width: 0;
`;

const RightSidebarWrapper = styled('div')`
  grid-area: sidebar;
  min-width: 0;
`;

const Post = ({
  filePath,
  title,
  body,
  date,
  author,
  authorAvatar,
  tableOfContents,
  timeToRead,
  description,
}) => {
  const localeDate = new Date(date).toLocaleDateString();
  return (
    <Wrapper>
      <BlogContent>
        <PostContent>
          <PostBody>
            <PostHeader>
              <Heading as="h1" mb={3}>
                {title}
              </Heading>
              <Heading as="h5" mb={3} mt={1} opacity={0.9}>
                {description}
              </Heading>
              <AuthorBox image={authorAvatar} name={author} date={localeDate} timeToRead={timeToRead} />
            </PostHeader>
            <MDXProvider components={mdxComponents}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </PostBody>
          <RightSidebarWrapper>
            <RightSidebar
              relativePath={filePath}
              tableOfContents={tableOfContents}
            />
          </RightSidebarWrapper>
        </PostContent>
      </BlogContent>
    </Wrapper>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorAvatar: PropTypes.string.isRequired,
  filePath: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  tableOfContents: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

Post.defaultProps = {
  tableOfContents: { items: [] },
};

export default Post;
