import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { createFilter } from "redux-persist-transform-filter";
import { rootReducer } from "./root-reducer";

// Only the cartItems should persist in my app (as of right now). The redux-persist-transform-filter extension helps here.
const cartSubsetFilter = createFilter("cart", ["cartItems"]);

// Define what state should persist and where:
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
  transforms: [cartSubsetFilter],
};

// If Redux Devtools Browser Extension is installed, use its compose method. Otherwise, use the one from Redux:
const composeEnhancers = (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Define MiddleWares:
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);

// Compose MiddleWares:
const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

// createStore() needs a rootReducer. Before passing it in, leverage Redux-Persist to create a persisted Reducer.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted root reducer and the middlewares.
export const store = createStore(persistedReducer, undefined, composedEnhancers);

// Create the persisted store (needed for the Redux-Persist Wrapper in index.js)
export const persistor = persistStore(store);
