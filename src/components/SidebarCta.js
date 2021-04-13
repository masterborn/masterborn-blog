import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Button from './Button';
import Heading from './Heading';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  text-align: left;
  box-shadow: 0 35px 42px -33px rgba(0,0,0,0.08);
  padding: 4rem;
  margin: 2rem 0;
  position: sticky;
  top: 14rem;
`;

const StyledHeading = styled(Heading)`
  letter-spacing: 0;
  line-height: 26px;
`

const StyledBorder = styled.div`
  width: 60%;
  height: 2px;
  margin: 1rem 0;
  background:  ${props => props.theme.colors.primary};
`

const SidebarCta = ({ isInPoland }) => {
  return (
    <Container className="sticky">
      <StyledHeading as="h5">We build valuable products</StyledHeading>
      <StyledBorder />
      <Button
        variant="cta"
        size="cta"
        mt={3}
        mb={3}
        width="100%"
      >{isInPoland ? 'Join us!' : 'Hire us!'}
      </Button>
    </Container>
  );
};

SidebarCta.propTypes = {
  isInPoland: PropTypes.bool,
}

SidebarCta.defaultProps = {
  isInPoland: null,
};

export default SidebarCta;
