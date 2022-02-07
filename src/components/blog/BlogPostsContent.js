import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';
import { navigate } from '@reach/router';

import { media } from '../../utils/emotion';
import utmCampaignNames from '../../utils/utmCampaignNames';
import CtaArticleComponent from '../mdxComponents/CtaArticleComponent';

import BlogContent from './BlogContent';
import PostsTiles from './PostsTiles';

const Container = styled(BlogContent)`
  background-color: ${props => props.theme.colors.blogTextBackground};
  padding-bottom: 0;
  ${media.desktop`
    padding-bottom: 0;
    padding-top: 8rem;
    width: auto;
    max-width: 129rem;
  `};

  .pagination {
    display: grid;
    grid-auto-flow: column;
    width: max-content;
    margin: 4rem auto 0;
    opacity: 0.9;
    font-family: sans-serif;
    margin-bottom: 8rem;
    li {
      width: 3rem;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.pagination.available};
    }
    .active {
      color: ${({ theme }) => theme.colors.pagination.active};
    }
    .disabled {
      color: ${({ theme }) => theme.colors.pagination.disabled};
      cursor: auto;
    }
    .previous,
    .next {
      width: 10rem;
    }
  }
`;

const CtaContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: grid;
  justify-content: center;
  ${media.desktop`
    grid-template-columns: 600pt;
  `}
`;

const BlogPostsContent = ({ posts, page, pageCount }) => {
  const onPageChange = ({ selected }) => {
    const path = selected === 0 ? '/blog' : `/blog/posts/${selected + 1}`;
    navigate(path)
  };
  const ctaHeadings = [
    'Be bold and create your future',
    'Your React & Node.js trusted partners',
  ];
  const ctaButtonTexts = ['See open positions!', 'Contact us!'];
  const utmCampaignName = utmCampaignNames.HOMEPAGE_CTA;

  return (
    <Container>
      <PostsTiles posts={posts}>
        <CtaContainer>
          <CtaArticleComponent
            headings={ctaHeadings}
            showYellowUnderline
            buttonTexts={ctaButtonTexts}
            utmCampaign={utmCampaignName}
          />
        </CtaContainer>
      </PostsTiles>
      <ReactPaginate
        previousLabel="&#8592; Newer"
        nextLabel="Older &#8594;"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName="pagination"
        activeClassName="active"
        forcePage={page - 1}
      />
    </Container>
  );
};

BlogPostsContent.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default BlogPostsContent;
