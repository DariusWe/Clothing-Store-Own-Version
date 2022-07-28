import { createContext } from "react";
import { useEffect, useState } from "react";
import { getProductsFromFirestore } from "../utils/firebase";

export const ProductContext = createContext([]);

export const ProductContextProvider = ({ children }) => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    /* 
    Whats happening here? We fetch our shopData from firestore and store it in shopDataSnapshot (it's an object).
    Then, we iterate through the docs in our shopData, which represent the categories (shoes, jackets, women, ...).
    We push the data of each doc into an temporarry array, which we then use to set the state variable "shopData".
    */
    const tmpFunc = async () => {
      const tmpArr = [];
      const shopDataSnapshot = await getProductsFromFirestore();
      shopDataSnapshot.docs.forEach((categorie) => {
        tmpArr.push(categorie.data());
      });
      setShopData(tmpArr);
    };
    tmpFunc();
  }, []);

  return <ProductContext.Provider value={shopData}>{children}</ProductContext.Provider>;
};
