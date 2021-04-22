import React from 'react';
import PropTypes from 'prop-types';

import BlogTemplate from './BlogTemplate';
import PageTemplate from './PageTemplate';

const Index = ({ children, pageContext, location, ...rest }) => {
  const isBlogPage = pageContext.pageType === 'BLOG_POST';
  if (isBlogPage) {
    return (
      <BlogTemplate location={location} {...rest}>
        {children}
      </BlogTemplate>
    );
  }

  return (
    <PageTemplate location={location} {...rest}>
      {children}
    </PageTemplate>
  );
};

Index.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({
    pageType: PropTypes.oneOf(['BLOG_POST']),
    dependedRepos: PropTypes.arrayOf(PropTypes.shape({})),
    job: PropTypes.shape({}),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default Index;
