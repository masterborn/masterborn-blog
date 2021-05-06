import mapValues from 'lodash/mapValues';

const mapValueToUndefined = (object) => {
  return mapValues(object, value => (value === '' || value === false ? undefined : value));
};

export default mapValueToUndefined;
