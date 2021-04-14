import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { ReactComponent as SearchIcon } from '../assets/search.svg';




const StyledInput = styled.input`
  border: 0px;
  margin-left: auto;
  margin-right: 1rem;
  min-width: 19rem;
`
``
const Search = ({ keyword, setKeyword }) => {
  return (
    <>
      <StyledInput 
        value={keyword}
        placeholder="|Search article by name..."
        onChange={event => setKeyword(event.target.value)}
      />
      <SearchIcon />
    </>
);
}

Search.propTypes = {
  keyword: PropTypes.string.isRequired,
  setKeyword: PropTypes.func.isRequired,
}

export default Search;