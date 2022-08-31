const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalQuantity: 0,
  total: 0,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        //cartItems: payload,
        ...payload, // funktioniert das so?
      };
    case "TOGGLE_IS_CART_OPEN":
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    default:
      return state;
  }
};
