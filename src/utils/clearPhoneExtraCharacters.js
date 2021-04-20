const clearPhoneExtraCharacters = (str) => {
  if (!str) return str;
  return str.replace(/\D/g, '');
};

export default clearPhoneExtraCharacters;
