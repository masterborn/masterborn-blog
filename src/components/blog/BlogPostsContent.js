import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';

import { media } from '../../utils/emotion';
import CtaArticleComponent from '../mdxComponents/CtaArticleComponent';
import navigateToWebsiteCarrier from '../../utils/navigateToWebsiteCarrier';
import { CountryContext } from '../../contexts/CountryContext';
import ContactModal from '../ContactModal';
import useModal from '../../hooks/useModal';

import BlogContent from './BlogContent';
import PostsTiles from './PostsTiles';

const Container = styled(BlogContent)`
  background-color: ${props => props.theme.colors.blogTextBackground};
  padding-bottom: 0;
  ${media.desktop`
    padding-bottom: 0;
    padding-top: 10rem;
    width: 129rem;
    max-width: 129rem;
  `};

  .pagination {
    display: grid;
    grid-auto-flow: column;
    width: max-content;
    margin: auto;
    opacity: 0.9;
    font-family: sans-serif;
    margin-bottom: 9rem;
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
    .previous, .next {
      width: 10rem;
    }
  }
`;

const CtaContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: 600pt;
  justify-content: center;
`;

const BlogPostsContent = ({postsPerPage, offset, posts, setOffset })=> {
  const { isInPoland } = useContext(CountryContext);
  const pageCount = Math.ceil(posts.length / postsPerPage);
  const onPageChange = ({ selected }) => setOffset(Math.ceil(selected * postsPerPage));
  const paginatedPosts = posts.slice(offset, offset + postsPerPage);
  const ctaHeading = ['Be bold and create your future','Your React & Node.js trusted partners'];
  const ctaButtonText = ['See open positions!', 'Contact us!'];
  const [, showContactModal, hideContactModal] = useModal(ContactModal, { onSubmitContactForm });
  const contactButtonAction = isInPoland ? navigateToWebsiteCarrier : showContactModal;

  function onSubmitContactForm(){
    hideContactModal();
  }

  return (
    <Container>
      <PostsTiles posts={paginatedPosts}>
        <CtaContainer>
          <CtaArticleComponent
            onClick={contactButtonAction}
            heading={ctaHeading}
            buttonText={ctaButtonText}
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
      />
    </Container>
  );
}

BlogPostsContent.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    setOffset: PropTypes.func.isRequired,
    postsPerPage: PropTypes.number,
    offset: PropTypes.number,
};

BlogPostsContent.defaultProps = {
    postsPerPage: 12,
    offset: 0,
};

export default BlogPostsContent;