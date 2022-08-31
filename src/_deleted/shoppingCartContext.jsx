// import { createContext, useReducer } from "react";
// import { createAction } from "../utils/createAction";

// export const ShoppingCartContext = createContext({
//   shoppingCartIsOpen: false,
//   toggleShoppingCartIsOpen: () => null,
//   productsInShoppingCart: [],
//   addToShoppingCart: () => null,
//   removeFromShoppingCart: () => null,
//   decreaseQuantity: () => null,
//   totalQuantity: 0,
//   total: 0,
// });

// const CART_ACTION_TYPES = {
//   SET_CART_ITEMS: "SET_CART_ITEMS",
//   TOGGLE_CART_IS_OPEN: "TOGGLE_CART_IS_OPEN",
// };

// const CartReducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       };
//     case CART_ACTION_TYPES.TOGGLE_CART_IS_OPEN:
//       return {
//         ...state,
//         shoppingCartIsOpen: !state.shoppingCartIsOpen,
//       };
//     default:
//       throw new Error(`Unhandled type ${type} in UserReducer`);
//   }
// };

// const INITIAL_STATE = {
//   shoppingCartIsOpen: false,
//   productsInShoppingCart: [],
//   totalQuantity: 0,
//   total: 0,
// };

// export const ShoppingCartContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
//   const { shoppingCartIsOpen, productsInShoppingCart, totalQuantity, total } = state;

//   const updateCartItemsReducer = (newCartItems) => {
//     const newTotalQuantity = newCartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 0);
//     const newTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
//     dispatch(
//       createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//         productsInShoppingCart: newCartItems,
//         totalQuantity: newTotalQuantity,
//         total: newTotal,
//       })
//     );
//   };

//   const addToShoppingCart = (product) => {
//     const productAlreadyExists = state.productsInShoppingCart.some((item) => item.id === product.id);
//     if (productAlreadyExists) {
//       const newList = state.productsInShoppingCart.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       updateCartItemsReducer(newList);
//     } else {
//       updateCartItemsReducer([...state.productsInShoppingCart, { ...product, quantity: 1 }]);
//     }
//   };

//   const decreaseQuantity = (product) => {
//     const itemQuantity = state.productsInShoppingCart.filter((item) => item.id === product.id)[0].quantity;
//     if (itemQuantity > 1) {
//       const newList = state.productsInShoppingCart.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
//       );
//       updateCartItemsReducer(newList);
//     } else {
//       removeFromShoppingCart(product);
//     }
//   };

//   const removeFromShoppingCart = (product) => {
//     const newList = state.productsInShoppingCart.filter((item) => item.id !== product.id);
//     updateCartItemsReducer(newList);
//   };

//   const toggleShoppingCartIsOpen = () => {
//     dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART_IS_OPEN));
//   };

//   return (
//     <ShoppingCartContext.Provider
//       value={{
//         shoppingCartIsOpen,
//         toggleShoppingCartIsOpen,
//         productsInShoppingCart,
//         addToShoppingCart,
//         removeFromShoppingCart,
//         decreaseQuantity,
//         totalQuantity,
//         total,
//       }}
//     >
//       {children}
//     </ShoppingCartContext.Provider>
//   );
// };
