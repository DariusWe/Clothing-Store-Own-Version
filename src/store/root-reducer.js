import { userReducer } from "./user.slice";
import { cartReducer } from "./cart.slice";
import { productsReducer } from "./products.slice";
import { userLocationReducer } from "./user-location.slice";
import { filtersReducer } from "./filters.slice";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  userLocation: userLocationReducer,
  products: productsReducer,
  filters: filtersReducer,
});
