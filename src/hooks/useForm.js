import { useState } from 'react';
import _ from 'lodash';

const useForm = (submit, options = {}) => {
  const {
    onError,
    validate,
    onSubmitResolved,
    onSubmitRejected,
  } = options;
  const [values, setValues] = useState({});
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState({});

  const onChange = (newState) => {
    if (_.isFunction(newState)) {
      setValues(newState);
      return;
    }

    setValues(state => ({ ...state, ...newState }));
  };

  const isDataValid = () => {
    if (!validate) return true;

    const { isValid, errors: validationErrors } = validate(values);
    if (!isValid) setErrors(validationErrors);

    return isValid;
  };

  const handleSuccess = (res) => {
    setPending(false);
    setValues({});
    if (onSubmitResolved) onSubmitResolved(res);
  };

  const handleError = (err) => {
    if (onError) onError(err);
    setPending(false);
    if (onSubmitRejected) onSubmitRejected(err);
  };

  const onSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!isDataValid()) return;

    setPending(true);
    setErrors({});

    await submit(values).then(handleSuccess, handleError);
  };

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

export default useForm;
