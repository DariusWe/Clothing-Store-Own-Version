import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { urlReducer } from "./url/url.reducer";
import { productsReducer } from "./products/products.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    url: urlReducer,
    products: productsReducer,
});