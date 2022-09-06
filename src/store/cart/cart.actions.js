import { CART_ACTION_TYPES } from "./cart.types";

export const addItemToCart = (cartItems, newItem) => {
  let newCartItems = [];
  const productAlreadyExists = cartItems.some((item) => item.id === newItem.id);
  if (productAlreadyExists) {
    newCartItems = cartItems.map((item) => (item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item));
  } else {
    newCartItems = [...cartItems, { ...newItem, quantity: 1 }];
  }
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: {
      cartItems: newCartItems,
    },
  };
};

export const decreaseQuantity = (cartItems, product) => {
  let newCartItems = [];
  const itemQuantity = cartItems.filter((item) => item.id === product.id)[0].quantity;
  if (itemQuantity > 1) {
    newCartItems = cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item));
  } else {
    newCartItems = cartItems.filter((item) => item.id !== product.id);
  }
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: {
      cartItems: newCartItems,
    },
  };
};

export const removeFromCart = (cartItems, product) => {
  const newCartItems = cartItems.filter((item) => item.id !== product.id);
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: {
      cartItems: newCartItems,
    },
  };
};

export const toggleIsCartOpen = () => {
  return {
    type: CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN,
  };
};
