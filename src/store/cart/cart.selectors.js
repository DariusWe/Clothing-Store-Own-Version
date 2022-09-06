import { createSelector } from "reselect";

// Every single selector will re-run when any action is dispatched. Using memoization here to prevent that.

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector([selectCartReducer], (cartReducer) => cartReducer.cartItems);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => {
  cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
});

export const selectCartQuantity = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0)
);

export const selectIsCartOpen = createSelector([selectCartReducer], (cartReducer) => cartReducer.isCartOpen);
