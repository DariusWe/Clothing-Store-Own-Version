import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const GenderInUrlContext = createContext(null);

export const GenderInUrlContextProvider = ({ children }) => {
  const [gender, setGender] = useState("women");
  const location = useLocation();

  useEffect(() => {
    location.pathname.includes("/men") ? setGender("men") : setGender("women");
  }, [location]);

  return (
    <GenderInUrlContext.Provider value={gender}>
      {children}
    </GenderInUrlContext.Provider>
  );
};
