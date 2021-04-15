import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import PageLayout from '../layouts/PageLayout';

const Wrapper = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.background};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  z-index: 3;
  position: relative;
`;

const PageTemplate = ({ children, location }) => {
  return (
    <PageLayout location={location}>
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </PageLayout>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default PageTemplate;
