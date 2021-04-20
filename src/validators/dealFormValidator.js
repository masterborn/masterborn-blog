import validate from './validate';
import schemaCompilator from './schemaCompilator';

const schema = {
  required: ['firstName', 'lastName', 'email', 'privacy'],
  properties: {
    firstName: { type: 'string', maxLength: 100 },
    lastName: { type: 'string', maxLength: 100 },
    phone: { type: 'string' },
    email: {
      type: 'string',
      format: 'email',
      maxLength: 40,
    },
    linkedin: { type: 'string', maxLength: 100 },
    portfolio: { type: 'string', maxLength: 100 },
    recommendation: { type: 'string' },
    other: { type: 'string', maxLength: 100 },
    privacy: { type: 'boolean' },
    marketing: { type: 'boolean' },
    resume: { type: 'object' },
    stage: { type: 'string' },
  },
  additionalProperties: false,
  errorMessage: {
    required: {
      firstName: 'First name is required.',
      lastName: 'Last name is required.',
      email: 'Email is required.',
      privacy: 'Privacy is required.',
    },
    properties: {
      firstName: 'First Name name must be max 100 chars long.',
      lastName: 'Last Name must be max 100 chars long.',
      email: 'Email must be a correct email address and max 40 chars long.',
      linkedin: 'LinkedIn URL must be max 100 chars long.',
      portfolio: 'Portfolio/GitHub URL must be max 100 chars long.',
      other: 'Description must be max 100 chars long.',
    },
  },
};

const validateSchema = schemaCompilator(schema);
const offerFormValidator = data => validate(data, validateSchema);

export default offerFormValidator;
