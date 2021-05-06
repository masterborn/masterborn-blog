import { useContext } from 'react';

import InfoModalContext, { FAILED_MODAL, SUCCESS_MODAL } from '../contexts/InfoModalContext';
import dealFormValidator from '../validators/dealFormValidator';
import ApiClient from '../clients/ApiClient';
import getDate from '../utils/getDate';
import mapValueToUndefined from '../utils/mapValueToUndefined';
import clearPhoneExtraCharacters from '../utils/clearPhoneExtraCharacters';

import useForm from './useForm';

const isSelected = value => (value ? 'YES' : 'NO');

const getPreparedData = values => ({
  person: JSON.stringify(mapValueToUndefined({
    name: `${values.firstName} ${values.lastName}`,
    phone: clearPhoneExtraCharacters(values.phone),
    email: values.email,
    privacy: isSelected(values.privacy),
    marketing: isSelected(values.marketing),
  })),
  deal: JSON.stringify({
    title: `(${getDate()}) ${values.firstName} ${values.lastName}`,
    stage: 'leads',
  }),
  note: JSON.stringify({
    content: `
        <strong>First Name:&nbsp;</strong>${values.firstName}</br>
        <strong>Last Name:&nbsp;</strong>${values.lastName}</br>
        <strong>Email:&nbsp;</strong>${values.email}</br>
        <strong>Phone:&nbsp;</strong>${values.phone || 'not specified'}</br>
        <strong>Description:&nbsp;</strong>${values.description}</br></br>
        Processing additional data in recruitment processes and in future recruitment processes:&nbsp;
        <strong>${isSelected(values.privacy)}</strong></br>
        Marketing:&nbsp;<strong>${isSelected(values.marketing)}</strong> `,
  }),
});

const submit = async values => ApiClient.postDeal(getPreparedData(values));

const useDealForm = (onSuccess = () => {}, onError = () => {}) => {
  const { setInfoModal } = useContext(InfoModalContext);

  const handleFormSuccess = (resp) => {
    setInfoModal({
      type: SUCCESS_MODAL,
      title: 'Congratulations!',
      description: 'Your form has been successfully submited. We will contact you as fast as possible.',
    });
    onSuccess(resp);
  };

  const handleFormError = (err) => {
    setInfoModal({
      type: FAILED_MODAL,
      title: 'Form sending error!',
      description: 'We will fix it as soon as possible!',
    });
    onError(err);
  };

  const [{
    values,
    pending,
    errors,
  }, onChange, onSubmit] = useForm(submit, {
    onError: handleFormError,
    validate: dealFormValidator,
    onSubmitResolved: handleFormSuccess,
  });

  return [
    {
      values,
      pending,
      errors,
    },
    onChange,
    onSubmit,
  ];
};

export default useDealForm;
