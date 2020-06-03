import React from 'react';
import PropTypes from 'prop-types';

import PageLayout from '../layouts/PageLayout';
import styled from '@emotion/styled';

const GreyWrapper = styled.div`
  position: absolute;
  top: -8.8rem;
  left: 0;
  width: 100%;
  height: 62.5rem;
  background-color: ${props => props.theme.colors.accentBackground};
  z-index: 1;
`;

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
        <GreyWrapper />
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
