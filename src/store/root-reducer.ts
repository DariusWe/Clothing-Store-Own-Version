import { userReducer } from "./slices/user.slice";
import { cartReducer } from "./slices/cart.slice";
import { productsReducer } from "./slices/products.slice";
import { filtersReducer } from "./slices/filters.slice";
import { slideMenuReducer } from "./slices/slide-menu.slice";
import { favouritesReducer } from "./slices/favourites.slice";
import { currentViewportReducer } from "./slices/current-viewport.slice";
import { navbarSideMobileReducer } from "./slices/navbar-side-mobile.slice";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
  filters: filtersReducer,
  slideMenu: slideMenuReducer,
  favourites: favouritesReducer,
  currentViewport: currentViewportReducer,
  navbarSideMobile: navbarSideMobileReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
