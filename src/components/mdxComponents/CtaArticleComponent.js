import React, {useContext} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

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

const Underline = styled.div`
  width: 8rem;
  height: 0.2rem;
  position: absolute;
  background: ${props => props.theme.colors.primary};
  bottom: -1.5rem;
  ${media.desktop`
    bottom: -2.5rem;
  `}
`;

const StyledHeading = styled(Heading)`
  letter-spacing: 0;
  line-height: 26px;
  align-self: center;
  position: relative;
  font-size: 1.7rem;
  ${media.desktop`
    font-size: 2.2rem;
  `}
`

const StyledButton = styled(Button)`
  padding: 0.6rem 3.5rem;
  margin: 5rem 0 0;
  ${media.desktop`
   margin: 1.2rem auto;
  `}
`

// eslint-disable-next-line complexity
const CtaArticleComponent = ({ headings, buttonTexts, showYellowUnderline }) => {
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
      <StyledHeading as="h5" mb={0}>
        {isInPoland ? headings[0] : headings[1]}
        {showYellowUnderline && <Underline />}
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

CtaArticleComponent.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.string),
  buttonTexts: PropTypes.arrayOf(PropTypes.string),
  showYellowUnderline: PropTypes.bool,
};

CtaArticleComponent.defaultProps = {
  headings: [
    "Let’s build disruptive JavaScript products together",
    'Build your modern Web App with top React & Node.js Engineers',
  ],
  buttonTexts: ['Join our Team!', "Let's talk!"],
  showYellowUnderline: false,
}
export default CtaArticleComponent;
