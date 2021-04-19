import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import useDealForm from '../hooks/useDealForm';

import TextField from './forms/TextField';
import TextAreaField from './forms/TextAreaField';
import CheckBoxField from './forms/CheckBoxField';
import Button from './Button';

const Form = styled.form`
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  max-width: 100%;
  grid-template-columns: 50%;
  grid-template-rows: 6rem 6rem auto auto 6rem 6rem;


`;


const Submit = styled(Button)`
  grid-column: 1 / end;
  justify-self: center;
  align-self: center;
  width: 18rem;
  font-size: 1.8rem;
  margin-left: auto;

`;
function DealForm({ headerComponent: HeaderComponent, onSubmitComplete }) {
  const onSuccess = () => {
    onSubmitComplete();
  };

  const onError = () => {
    onSubmitComplete();
  };

  const [{
    values,
    pending,
    errors,
  }, onChange, onSubmit] = useDealForm(onSuccess, onError);

  return (
    <div cols={8}>
      <section id="contact-form">
        <HeaderComponent />
        <Form onSubmit={onSubmit}>
          <TextField
            name="firstName"
            label="First Name"
            value={values.firstName}
            onChange={onChange}
            error={errors.firstName}
            disabled={pending}
          />
          <TextField
            name="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={onChange}
            error={errors.lastName}
            disabled={pending}
          />
          <TextField
            name="phone"
            label="Telephone (optional)"
            value={values.phone}
            onChange={onChange}
            error={errors.phone}
            disabled={pending}
          />
          <TextField
            name="email"
            type="email"
            label="E-mail address"
            value={values.email}
            onChange={onChange}
            error={errors.email}
            disabled={pending}
          />
          <TextAreaField
            name="description"
            value={values.description}
            onChange={onChange}
            error={errors.description}
            disabled={pending}
            maxWidth="78rem"
            label="Tell us about your idea"
            maxLength={2800}
          />
          <CheckBoxField
            name="privacy"
            value={values.privacy}
            error={errors.privacy}
            onChange={onChange}
            disabled={pending}
          >
            I agree to processing of my personal data included in this form for
            the present and future recruitment-related purposes
            by MasterBorn with its registered office in Wrocław, Krupnicza 13,
            Poland, KRS 0000673935, NIP 899-281-66-01
            For details see our Privacy Policy.*
          </CheckBoxField>
          <CheckBoxField
            name="marketing"
            value={values.marketing}
            error={errors.marketing}
            onChange={onChange}
            disabled={pending}
          >
            I agree to processing my personal data for the marketing activities by
            MasterBorn with its registered office in Wrocław, Krupnicza 13,
            Poland, KRS 0000673935, NIP 899-281-66-01
            For details see our Privacy Policy.
          </CheckBoxField>
          <Submit
            type="submit"
            disabled={pending}
            loader={pending}
            variant="cta"
            size="cta"
          >
            Send
          </Submit>
        </Form>
      </section>
    </div>
  );
}

DealForm.propTypes = {
  headerComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.func,
  ]),
  onSubmitComplete: PropTypes.func,
};

DealForm.defaultProps = {
  headerComponent: () => null,
  onSubmitComplete() {},
};

export default DealForm;
