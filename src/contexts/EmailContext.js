import PropTypes from 'prop-types';
import React, { useState } from 'react';

const EmailContext = React.createContext('');

export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState();

  return (
    <EmailContext.Provider
      value={{
        email,
        setEmail,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};

EmailProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default EmailContext;
