import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextAreaWrapper = styled.div`
  width: 100%;
  font-size: 1.6rem;
  line-height: 1.6;
  position: relative;
  grid-column: 1 / end;
`;

const TextAreaLabel = styled.span`
  pointer-events: none;
  display: block;
  position: absolute;
  left: 2rem;
  top: 3rem;
  transform: ${props =>
    props.filled || props.error ? 'translateY(-100%)' : 'translateY(-50%)'};
  opacity: ${props => (props.filled && props.error ? '0' : '1')};
  transition: all 0.1s linear;
  font-size: ${props => (props.filled ? '1.rem' : '1.6rem')};
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(100% - 4rem);
  text-overflow: ellipsis;
`;

const TextAreaErrorLabel = styled.span`
  pointer-events: none;
  display: block;
  position: absolute;
  left: 2rem;
  top: 3rem;
  transform: ${props =>
    props.filled || props.error ? 'translateY(-125%)' : 'translateY(-50%)'};
  opacity: ${props => (props.filled && props.error ? '0' : '1')};
  transition: all 0.1s linear;
  font-size: 1.2rem;
`;

const TextArea = styled.textarea`
  font-family: 'Inter', sans-serif;
  width: 100%;
  border-radius: 4px;
  resize: vertical;
  display: block;
  height: 100%;
  min-width: 100%;
  min-height: 20rem;
  max-height: 100rem;
  max-width: ${props => (props.maxWidth ? props.maxWidth : '')};
  font-size: 1.6rem;
  line-height: 1.6;
  background: transparent;
  padding: 3rem 2rem 1rem;
  maxlength: ${props => props.maxLength};
  border: 1px solid
    ${props =>
      !props.error
        ? props.theme.colors.input.border
        : props.theme.colors.alizarinCrimson};
  & + ${TextAreaLabel} {
    transform: ${props => (props.error && !props.value ? 'translateY(0)' : '')};
  }

  &:focus {
    outline: none;
    border: 1px solid
      ${props =>
        !props.error
          ? props.theme.colors.input.border
          : props.theme.colors.alizarinCrimson};
    & + ${TextAreaLabel} {
      transform: translateY(-125%);
      font-size: 1.2rem;
      top: 3rem;
      opacity: 1;
    }
  }
`;

const TextAreaField = ({
  maxWidth,
  name,
  value,
  label,
  error,
  disabled,
  onChange,
  maxLength,
}) => {
  const onChangeHandler = e => {
    onChange({ [name]: e.target.value });
  };

  return (
    <TextAreaWrapper>
      <TextArea
        name={name}
        type="text"
        value={value}
        error={error}
        onChange={onChangeHandler}
        disabled={disabled}
        maxWidth={maxWidth}
        maxLength={maxLength}
      />
      <TextAreaLabel filled={value} error={error}>
        {label}
      </TextAreaLabel>
      {error && <TextAreaErrorLabel error={error}>{error}</TextAreaErrorLabel>}
    </TextAreaWrapper>
  );
};

TextAreaField.propTypes = {
  maxWidth: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  maxLength: PropTypes.number,
};

TextAreaField.defaultProps = {
  maxWidth: null,
  error: null,
  label: null,
  onChange() {},
  value: '',
  disabled: false,
  maxLength: -1,
};

export default TextAreaField;
