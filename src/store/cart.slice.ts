import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import type { Item } from "../store/products.slice";
import { RootStateType } from "./root-reducer";

export interface CartItem extends Item {
  quantity: number;
}

type SliceState = {
  cartItems: CartItem[];
  isCartOpen: boolean;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    isCartOpen: false,
  } as SliceState,
  reducers: {
    addItemToCart: (state, { payload: newItem }) => {
      const itemAlreadyExists = state.cartItems.some((item) => item.id === newItem.id);
      if (itemAlreadyExists) {
        const itemThatExists = state.cartItems.filter((item) => item.id === newItem.id)[0];
        const listWithoutItem = state.cartItems.filter((item) => item.id !== newItem.id);
        state.cartItems = [...listWithoutItem, { ...itemThatExists, quantity: itemThatExists.quantity + 1 }];
      } else {
        state.cartItems = [...state.cartItems, { ...newItem, quantity: 1 }];
      }
    },
    increaseQuantity: (state, { payload: itemToIncrease }) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === itemToIncrease.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    },
    decreaseQuantity: (state, { payload: itemToDecrease }) => {
      const itemQuantity = state.cartItems.filter((item) => item.id === itemToDecrease.id)[0].quantity;
      state.cartItems =
        itemQuantity > 1
          ? state.cartItems.map((item) =>
              item.id === itemToDecrease.id ? { ...item, quantity: item.quantity - 1 } : item
            )
          : state.cartItems.filter((item) => item.id !== itemToDecrease.id);
    },
    removeFromCart: (state, { payload: itemToRemove }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== itemToRemove.id);
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItemToCart, increaseQuantity, decreaseQuantity, removeFromCart, toggleCart } = cartSlice.actions;

//// SELECTORS

/* 
cartTotal and cartQuantity shouldn't live in the store, as they can be derived from cartItems. The store should
only store the most basic state, selectors should handle further derivation.
Note: UseSelector will rerun when ANY action is dispatched. Also, while rerunning useSelect doesn't mean that the 
component will rerender, it WILL rerender if the selector function returns a new reference, even if the data is the same.
Memoization will help to prevent unnecessary calculations as well as unnecessary rerenders.
*/

// selectCartItems and selectIsCartOpen are simple state lookups (no heavy calculation) and do not always
// return a new reference (as it would be with map() or filter() calculations). Memoization isn't useful here.
export const selectCartItems = (state: RootStateType) => state.cart.cartItems;
export const selectIsCartOpen = (state: RootStateType) => state.cart.isCartOpen;

// selectCartTotal and selectCartQuantity leverage time consuming calculations AND always return a new reference.
// Memoization is needed here.
export const selectCartTotal = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
});

export const selectCartQuantity = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
});
