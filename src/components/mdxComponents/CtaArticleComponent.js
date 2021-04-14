import React, {useContext} from 'react';
import styled from '@emotion/styled';

import { CountryContext } from '../../contexts/CountryContext';
import Button from '../Button';

import Heading from './Heading';

const Container = styled('div')`
  display: grid;
  grid-row-gap: 0;
  grid-column-gap: 1rem;
  grid-template-columns: 3fr 2fr;
  padding: 4rem 4rem 4rem 0;
  margin: 2rem 0;
  border-radius: 4px;
  justify-items: center;
  background: linear-gradient(
    90deg,
    ${props => props.theme.colors.white} 27%,
    ${props => props.theme.colors.ctaArticle.background} 27%
  );
`;

const StyledHeading = styled(Heading)`
  letter-spacing: 0;
  line-height: 26px;
  font-size: 2.2rem;
  align-self: center;
`

const StyledButton = styled(Button)`
  padding: 0.6rem 3.5rem;
  margin: 1.2rem auto;
`

const CtaArticleComponent = () => {
  const { isInPoland } = useContext(CountryContext);
  return (
    <Container>
      <StyledHeading as="h5" mb={0}>{
        isInPoland ? "Let’s build disruptive JavaScript products together"
          : 'Build your modern Web App with top React & Node.js Engineers'}
      </StyledHeading>
      <StyledButton
        variant="cta"
        size="cta"
      >{isInPoland ? 'Join our Team!' : "Let's talk!"}
      </StyledButton>
    </Container>
  );
};

export default CtaArticleComponent;