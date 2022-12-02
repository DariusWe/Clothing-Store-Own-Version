import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { createFilter } from "redux-persist-transform-filter";
//import logger from "redux-logger";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartSubsetFilter = createFilter("cart", ["cartItems"]);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
  transforms: [cartSubsetFilter],
};

// What does the typing mean here? Check https://github.com/reduxjs/redux-toolkit/issues/324 the last post.
// In short: Is necessary to make "export type RootStateType = ReturnType<typeof store.getState>" down below work.
const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// To activate logger, add ".concat(process.env.NODE_ENV === "development" && logger).filter(Boolean)" after getDefaultMiddleware({...}).
export const persistor = persistStore(store);

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;