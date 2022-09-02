import { PRODUCTS_ACTION_TYPES } from "./products.types";

const INITIAL_STATE = {
  womenProducts: [],
  menProducts: [],
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS_ACTION_TYPES.FETCH_AND_SET_PRODUCTS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
