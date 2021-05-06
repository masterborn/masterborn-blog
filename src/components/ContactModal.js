import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import DealForm from './DealForm';
import Modal from './modal/Modal';
import ModalTitle from './modal/ModalTitle';

const StyledModal = styled(Modal)`
  padding: 3rem 7rem;
`;

const StyledModalTitle = styled(ModalTitle)`
  margin-bottom: 4rem;
`;

const ContactModal = ({
  isActive, hide, onSubmitContactForm,
}) => (
  <StyledModal hide={hide} isActive={isActive}>
    <StyledModalTitle>Tell us about your next amazing project!</StyledModalTitle>
    <DealForm onSubmitComplete={onSubmitContactForm} isSection={false} />
  </StyledModal>

);

ContactModal.propTypes = {
  hide: PropTypes.func.isRequired,
  onSubmitContactForm: PropTypes.func.isRequired,
  payload: PropTypes.shape({
    email: PropTypes.string,
  }),
  isActive: PropTypes.bool,
};

ContactModal.defaultProps = {
  payload: {
    email: '',
  },
  isActive: false,
};

export default ContactModal;
