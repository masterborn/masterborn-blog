const SET_COUNTRY = 'SET_COUNTRY'

const countryReducer = (state, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return action.payload;
    default:
      return state;
  }
};

export {
  countryReducer,
  SET_COUNTRY,
};
