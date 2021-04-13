import React from 'react';
import styled from '@emotion/styled';

import Heading from '../Heading';
import Text from '../Text';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  text-align: left;
  box-shadow: 0 35px 42px -33px rgba(0,0,0,0.08);
  padding: 3rem;
  margin: 4rem 0;
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


const SidebarCta = () => {
  return (
    <Container className="sticky">
      <StyledHeading as="h5">We build valuable products</StyledHeading>
      <StyledBorder />



    </Container>
  );
};

SidebarCta.defaultProps = {
  tableOfContents: {},
  isInPoland: null,
};

export default SidebarCta;
