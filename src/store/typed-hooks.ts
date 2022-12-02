import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootStateType, AppDispatch } from "./store";

// What i did here:
// https://redux.js.org/usage/usage-with-typescript#define-typed-hooks

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useTypedDispatch: () => AppDispatch = useDispatch;