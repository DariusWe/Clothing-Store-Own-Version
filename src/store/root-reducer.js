import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { productsReducer } from "./products/products.reducer";
import { currLocationReducer } from "./curr-user-location/curr-user-location.reducer";
import { FiltersReducer } from "./filters/filters.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    currLocation: currLocationReducer,
    products: productsReducer,
    filters: FiltersReducer,
});