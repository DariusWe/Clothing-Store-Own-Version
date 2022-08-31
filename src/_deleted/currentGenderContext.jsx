// import { createContext, useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export const CurrentGenderContext = createContext(null);

// export const CurrentGenderContextProvider = ({ children }) => {
//   const [gender, setGender] = useState("women");
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === "/" || location.pathname.includes("/women")) {
//       setGender("women")
//     } else if (location.pathname.includes("/men")) {
//       setGender("men")
//     } else {
//       setGender("none")
//     }
//   }, [location]);

//   return (
//     <CurrentGenderContext.Provider value={gender}>
//       {children}
//     </CurrentGenderContext.Provider>
//   );
// };
