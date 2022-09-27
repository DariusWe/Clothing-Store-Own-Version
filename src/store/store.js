import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { createFilter } from "redux-persist-transform-filter";
import logger from "redux-logger";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

/* 
Most of the code here is stupid boilerplate code to make persisting state with redux-persist possible. Look here for more info:
https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
*/

const cartSubsetFilter = createFilter("cart", ["cartItems"]);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
  transforms: [cartSubsetFilter],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(process.env.NODE_ENV === "development" && logger).filter(Boolean),
});

export const persistor = persistStore(store);