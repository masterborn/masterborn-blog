import React, { useContext } from 'react';

import InfoModalContext, { SUCCESS_MODAL, FAILED_MODAL } from '../contexts/InfoModalContext';
import tickIcon from '../assets/tick.svg';
import errorIcon from '../assets/error.svg';

import ModalIcon from "./modal/ModalIcon";
import ModalDescription from './modal/ModalDescription';
import ModalWrapper from "./modal/ModalWrapper";
import Modal from "./modal/Modal";
import ModalTitle from "./modal/ModalTitle";
import Button from './Button';

const InfoModal = () => {
  const { infoModal, setInfoModal } = useContext(InfoModalContext);

  const icons = {
    [SUCCESS_MODAL]: tickIcon,
    [FAILED_MODAL]: errorIcon,
  };

  const closeModal = () => {
    setInfoModal(null);
  };

  if (!infoModal) return null;

  return (
    <ModalWrapper>
      <Modal hide={closeModal} isActive={!!infoModal}>
        <ModalIcon icon={icons[infoModal.type] || tickIcon} type={infoModal.type} />
        <ModalTitle>{infoModal.title}</ModalTitle>
        <ModalDescription>
          {infoModal.description}
        </ModalDescription>
        <Button
          variant="cta"
          size="cta"
          onClick={closeModal}
        >OK
        </Button>
      </Modal>
    </ModalWrapper>
  );
};

export default InfoModal;
