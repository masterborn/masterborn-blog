import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import useModal from '../hooks/useModal';
import navigateToWebsiteCarrier from '../utils/navigateToWebsiteCarrier';

import ContactModal from './ContactModal';
import Heading from './Heading';
import Button from './Button';

const Container = styled('div')`
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  text-align: left;
  box-shadow: 0 35px 42px -33px rgba(0,0,0,0.08);
  padding: 4rem;
  padding-bottom: 3.5rem;
  margin: 2rem 0;
  position: sticky;
  top: 14rem;
`;

const StyledHeading = styled(Heading)`
  letter-spacing: 0;
  line-height: 2.6rem;
  color: ${({theme}) => theme.colors.ctaArticle.text};
  
`;

const StyledBorder = styled.div`
  width: 60%;
  height: 2px;
  margin: 1.5rem 0;
  // margin-bottom: 1.5rem;
  background: ${props => props.theme.colors.primary};
`;

const SidebarCta = ({ isInPoland }) => {
  const onSubmitContactForm = () => {}

  const [, showContactModal] = useModal(ContactModal, { onSubmitContactForm, alwaysHideOnSubmit: true });


  function openContactModal () {
    showContactModal();
  };

  const contactButtonAction = isInPoland ? navigateToWebsiteCarrier : openContactModal;
  return (
    <Container>
      <StyledHeading as="h5">
        {isInPoland ? 'World-class React & Node.js experts' : 'We build success with U.S. based startups'}
      </StyledHeading>
      <StyledBorder />
      <Button
        variant="cta"
        size="cta"
        mt={3}
        mb={3}
        width="100%"
        onClick={contactButtonAction}
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
