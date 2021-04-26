import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import {countryReducer, SET_COUNTRY} from '../reducers/countryReducer';

export const CountryContext = React.createContext();
const initialState = null;

export const CountryContextProvider = (props) => {
  const [state, dispatch] = useReducer(countryReducer, initialState);
  const setCountry = (results) => {
    dispatch({ type: SET_COUNTRY, payload: results });
  };

  return (
    <CountryContext.Provider
      value={{
        isInPoland: state,
        setCountry,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

CountryContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default CountryContextProvider;
