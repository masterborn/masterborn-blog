import React, {useContext} from 'react';
import styled from '@emotion/styled';

import { media } from '../../utils/emotion';
import { CountryContext } from '../../contexts/CountryContext';
import useModal from '../../hooks/useModal';
import ContactModal from '../ContactModal';
import navigateToWebsiteCarrier from '../../utils/navigateToWebsiteCarrier';
import Button from '../Button';

import Heading from './Heading';

const Container = styled('div')`
  display: block;
  margin: 5rem 0;
  border-radius: 4px;
  justify-items: center;
  background: linear-gradient(
    90deg,
    ${props => props.theme.colors.white} 27%,
    ${props => props.theme.colors.ctaArticle.background} 27%
  );
  ${media.desktop`
    margin: 2rem 0;
    display: grid;
    grid-row-gap: 0;
    grid-column-gap: 1rem;
    grid-template-columns: 1fr;
    padding: 4rem 4rem 4rem 0;
    grid-template-columns: 3fr 2fr;
  `}
`;

const StyledHeading = styled(Heading)`
  letter-spacing: 0;
  line-height: 26px;
  font-size: 2.2rem;
  align-self: center;
`

const StyledButton = styled(Button)`
  padding: 0.6rem 3.5rem;
  margin: 3rem 0;
  ${media.desktop`
   margin: 1.2rem auto;
  `}
`

const headings = [
  "Let’s build disruptive JavaScript products together",
  'Build your modern Web App with top React & Node.js Engineers',
  ]
const buttonTexts = ['Join our Team!', "Let's talk!"];

const CtaArticleComponent = () => {
  const { isInPoland } = useContext(CountryContext);
  const [, showContactModal, hideContactModal] = useModal(ContactModal, { onSubmitContactForm });

  function onSubmitContactForm () {
    hideContactModal();
  }

  function openContactModal () {
    showContactModal();
  };

  const buttonAction = isInPoland ? navigateToWebsiteCarrier : openContactModal;
  return (
    <Container>
      <StyledHeading as="h5" mb={0}>{isInPoland ? headings[0] : headings[1]}
      </StyledHeading>
      <StyledButton
        variant="cta"
        size="cta"
        onClick={buttonAction}
      >{isInPoland ? buttonTexts[0] : buttonTexts[1]}
      </StyledButton>
    </Container>
  );
};

export default CtaArticleComponent;
