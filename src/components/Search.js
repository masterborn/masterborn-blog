import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connectSearchBox } from "react-instantsearch-dom"

import { ReactComponent as SearchIcon } from '../assets/search.svg';

const StyledInput = styled.input`
  border: 0px;
  margin-left: auto;
  margin-right: 1rem;
  min-width: 19rem;
`;

const StyledForm = styled.form`
  margin-left: auto;
  min-width: 19rem;
  display: grid;
  grid-auto-flow: column;
`;

const StyledIcon = styled(SearchIcon)`
  cursor: pointer;
  margin-left: auto;
  margin-right: 0;
`;

const Search = ({ refine, onFocus }) => {
  const [keyword, setKeyword] = useState(null);
  const [visibility, setVisibility] = useState(false);
  const onSubmit = (event) => {
    event.preventDefault();
    refine(keyword);
  };
  return (
    <StyledForm
      onSubmit={onSubmit} 
      onMouseEnter={()=>setVisibility(true)}
      onMouseLeave={()=>setVisibility(false)}
    >
      {(keyword || visibility) && (
        <StyledInput 
          type="text"
          value={keyword}
          placeholder="|Search article by name..."
          aria-label="Search"
          onChange={event => setKeyword(event.target.value)}
          onFocus={onFocus}
        />
      )}
      <StyledIcon onClick={()=>refine(keyword)} />
    </StyledForm>
);
}

Search.propTypes = {
  refine: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
}

export default connectSearchBox(Search);