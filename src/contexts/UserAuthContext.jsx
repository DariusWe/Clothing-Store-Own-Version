import { createContext } from "react";
import { useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase";

export const UserAuthContext = createContext(null);

export const UserAuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  
  return <UserAuthContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserAuthContext.Provider>;
};
