import { get } from 'lodash';

const getErrorMessages = (errors) => {
  const messages = {};

  if (!errors) return messages;
  errors.forEach((error) => {
    let key = get(error,'params.errors[0].params.missingProperty');

    const [parentPath, nestedPath] = error.dataPath.replace('/', '').split('/');

    if (!key) key = parentPath;

    messages[key] = nestedPath ? { ...messages[key], [nestedPath]: error.message } : error.message;
  });

  return messages;
};

const validate = (data, validateSchema) => {
  const isValid = validateSchema(data);

  const errors = getErrorMessages(validateSchema.errors);

  return { isValid, errors };
};

export default validate;
