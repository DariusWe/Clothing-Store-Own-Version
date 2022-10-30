import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootStateType } from "./root-reducer";
import { AppDispatch } from "./store";

// Placing this file in top level src folder really good practice? 

// What i did here:
// https://redux.js.org/usage/usage-with-typescript#define-typed-hooks

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useTypedDispatch: () => AppDispatch = useDispatch;