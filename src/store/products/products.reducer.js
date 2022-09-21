import { PRODUCTS_ACTION_TYPES } from "./products.types";

// Better would be to just store products in the store and select women or men products with selectors.

const INITIAL_STATE = {
  womenProducts: [],
  menProducts: [],
  isLoading: false,
  error: null,
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
