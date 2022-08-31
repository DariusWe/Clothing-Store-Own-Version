const INITIAL_STATE = {
  womenProducts: [],
  menProducts: [],
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_AND_SET_PRODUCTS":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
