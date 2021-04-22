import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import { media } from '../../utils/emotion';
import Heading from '../Heading';
import mdxComponents from '../mdxComponents';
import RightSidebar from '../RightSidebar/RightSidebar';
import SidebarCta from '../SidebarCta';
import ArrowIcon from '../../assets/arrow-icon.svg';
import Link from '../Link';
import { CountryContext } from '../../contexts/CountryContext';
import BackToTop from '../BackToTop';

import AuthorBox from './AuthorBox';
import BlogContent from './BlogContent';
import RelatedArticles from './RelatedArticles';

const Wrapper = styled('div')`
  ${media.desktop`
    padding-top: 12rem;
  `}
`;

const PostHeader = styled('div')`
  margin-bottom: 2.5rem;
  ${media.desktop`
    margin-bottom: 5.5rem;
  `}
`;

const PostContent = styled('div')`
  display: grid;
  grid-row-gap: 2rem;
  grid-template-areas:
    'body'
    'sidebar';
  ${media.desktop`
  grid-row-gap: 0;
  grid-column-gap: 7rem;
  grid-template-columns: 7fr 3fr;
   grid-template-areas:
    "body sidebar";
  `}
`;

const PostBody = styled('div')`
  grid-area: body;
  min-width: 0;
  position: relative;
`;

const RightSidebarWrapper = styled('div')`
  grid-area: sidebar;
  min-width: 0;
  display: none;
  ${media.desktop`
    display: block;
  `}
`;

const BackLink = styled(Link)`
  position: absolute;
  display: none;
  top: 2rem;
  ${media.desktop`
    left: -4rem;
    display: block;
  `}
`

const PostHeading = styled(Heading)`
  font-size: 2.9rem;
  ${media.desktop`
    font-size: 4.3rem
  `}
`

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
  relatedPosts,
}) => {
  const localeDate = new Date(date).toLocaleDateString();
  const {isInPoland} = useContext(CountryContext);

  return (
    <Wrapper>
      <BlogContent>
        <PostContent>
          <PostBody>
            <PostHeader>
              <BackLink to="/" title="Back">
                <img src={ArrowIcon} alt="Back" />
              </BackLink>
              <PostHeading as="h1" mb={3}>
                {title}
              </PostHeading>
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
            <SidebarCta isInPoland={isInPoland} />
          </RightSidebarWrapper>
        </PostContent>
        <BackToTop />
      </BlogContent>
      <RelatedArticles relatedPosts={relatedPosts} />
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
  relatedPosts: PropTypes.arrayOf(PropTypes.shape({})),
  tableOfContents: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

Post.defaultProps = {
  relatedPosts: [],
  tableOfContents: { items: [] },
};

export default Post;
