import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextFieldWrapper = styled.div`
  width: 100%;
  font-size: 1.6rem;
  line-height: 1.6;
  position: relative;
  grid-column: ${props => (props.fullWidth ? '1 / end' : 'auto')};
`;

const TextFieldLabel = styled.label`
  pointer-events: none;
  display: block;
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: ${props =>
    props.filled || props.error ? 'translateY(-125%)' : 'translateY(-50%)'};
  opacity: ${props => (props.filled && props.error ? '0' : '1')};
  transition: all 0.1s linear;
  font-size: ${props => (props.filled ? '1.2rem' : '1.6rem')};
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(100% - 4rem);
  text-overflow: ellipsis;
`;

const TextFieldErrorLabel = styled.label`
  pointer-events: none;
  display: block;
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: ${props =>
    props.filled || props.error ? 'translateY(-125%)' : 'translateY(-50%)'};
  opacity: ${props => (props.filled && props.error ? '0' : '1')};
  transition: all 0.1s linear;
  font-size: 1.2rem;
`;

const TextFieldInput = styled.input`
  width: 100%;
  border-radius: 4px;
  display: block;
  height: 100%;
  font-size: 1.6rem;
  line-height: 1.6;
  background: transparent;
  padding: 3rem 2rem 1rem;
  border: 1px solid
    ${props =>
      !props.error
        ? props.theme.colors.input.border
        : props.theme.colors.alizarinCrimson};
  & + ${TextFieldLabel} {
    transform: ${props =>
      props.error && !props.value ? 'translateY(-10%)' : ''};
  }

  &:focus {
    outline: none;
    border-color: ${props =>
      !props.error
        ? props.theme.colors.input.border
        : props.theme.colors.alizarinCrimson};
    & + ${TextFieldLabel} {
      transform: translateY(-125%);
      font-size: 1.2rem;
      opacity: ${props => (props.error ? '0' : '1')};
    }
  }
`;

const TextField = ({
  name,
  value,
  label,
  error,
  fullWidth,
  disabled,
  onChange,
}) => {
  const onChangeHandler = e => {
    onChange({ [name]: e.target.value });
  };

  return (
    <TextFieldWrapper fullWidth={fullWidth}>
      <TextFieldInput
        name={name}
        type="text"
        value={value}
        error={error}
        onChange={onChangeHandler}
        disabled={disabled}
      />
      <TextFieldLabel filled={value} error={error}>
        {label}
      </TextFieldLabel>
      {error && (
        <TextFieldErrorLabel error={error}>{error}</TextFieldErrorLabel>
      )}
    </TextFieldWrapper>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

TextField.defaultProps = {
  error: null,
  fullWidth: false,
  label: null,
  onChange() {},
  value: '',
  disabled: false,
};

export default TextField;
