import { createContext } from "react";
import { useReducer, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase";

export const UserAuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const UserReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in UserReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserAuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  const { currentUser } = state;
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserAuthContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserAuthContext.Provider>;
};
