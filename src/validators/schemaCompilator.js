import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';

const ajv = new Ajv({ allErrors: true, jsonPointers: true });
ajvErrors(ajv);

const schemaCompilator = schema => ajv.compile(schema);

export default schemaCompilator;
