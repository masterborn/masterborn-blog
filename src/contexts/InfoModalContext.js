import PropTypes from 'prop-types';
import React, { useState } from 'react';

const InfoModalContext = React.createContext({});

export const SUCCESS_MODAL = 'SUCCESS_MODAL';
export const FAILED_MODAL = 'FAILED_MODAL';

export const InfoModalProvider = ({ children }) => {
  const [infoModal, setInfoModal] = useState();

  return (
    <InfoModalContext.Provider
      value={{
        infoModal,
        setInfoModal,
      }}
    >
      {children}
    </InfoModalContext.Provider>
  );
};

InfoModalProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default InfoModalContext;
