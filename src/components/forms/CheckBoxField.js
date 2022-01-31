import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const getBorderColor = props => {
  if (props.checked) return 'pink';
  return props.error ? 'red' : 'black';
};

const Checkbox = styled.span`
  width: 2rem;
  height: 2rem;
  display: block;
  min-width: 2rem;
  border-radius: 4px;
  margin-right: 1.5rem;
  cursor: pointer;
  position: relative;
  background-color: ${props =>
    props.checked ? props.theme.colors.primary : 'transparent'};
  border: 2px solid ${getBorderColor};

  &:focus {
    outline: none;
  }

  &::after {
    content: '\\0000AC';
    display: ${props => (props.checked ? 'block' : 'none')};
    font-size: 2.6rem;
    top: 50%;
    left: 50%;
    position: absolute;
    color: ${props => props.theme.colors.black};
    transform: translate(-38%, -50%) rotate(135deg);
  }
`;

const CheckBoxFieldInput = styled.input`
  display: none;
`;

const CheckBoxFieldWrapper = styled.div`
  width: 100%;
  display: flex;
  color: ${props => props.theme.colors.input.border};
  position: relative;
  cursor: pointer;
  grid-column: 1 / end;

  &:hover ${Checkbox} {
    border-color: ${props => props.theme.colors.primary};
  }
`;

const CheckBoxFieldLabel = styled.label`
  pointer-events: none;
  display: block;
  color: black;
  font-size: 1.4rem;
  line-height: 1.4;
`;

const CheckBoxField = ({
  name,
  value,
  error,
  disabled,
  onChange,
  children,
}) => {
  const onClickHandler = () => {
    onChange({ [name]: !value });
  };

  return (
    <CheckBoxFieldWrapper onClick={onClickHandler}>
      <CheckBoxFieldInput
        name={name}
        type="checkbox"
        checked={value}
        disabled={disabled}
        onChange={() => {}}
      />
      <Checkbox checked={value} error={error} />
      <CheckBoxFieldLabel>{children}</CheckBoxFieldLabel>
    </CheckBoxFieldWrapper>
  );
};

CheckBoxField.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};

CheckBoxField.defaultProps = {
  children: null,
  disabled: false,
  error: '',
  name: '',
  onChange() {},
  value: false,
};

export default CheckBoxField;
