import { createContext } from "react";
import { useEffect, useState } from "react";
import { getProductsFromFirestoreV2 } from "../utils/firebase";

export const ShopProductsContext = createContext({
  womenProducts: [],
  setWomenProducts: () => null,
  menProducts: [],
  setMenProducts: () => null,
});

export const ShopProductsContextProvider = ({ children }) => {
  const [womenProducts, setWomenProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);

  useEffect(() => {
    /* 
    Whats happening here? We fetch our shopData from firestore and store it in shopDataSnapshot (it's an object).
    Then, we iterate through the docs in our shopData, which represent the categories (shoes, jackets, women, ...).
    We push the data of each doc into an temporarry array, which we then use to set the state variable "shopData".
    */
    const tmpFunc = async () => {
      const tmpArr = [];
      const womenProductsSnapshot = await getProductsFromFirestoreV2("women");
      womenProductsSnapshot.docs.forEach((categorie) => {
        tmpArr.push(categorie.data());
      });
      setWomenProducts(tmpArr);
    };
    tmpFunc();
  }, []);

  useEffect(() => {
    const tmpFunc = async () => {
      const tmpArr = [];
      const menProductsSnapshot = await getProductsFromFirestoreV2("men");
      menProductsSnapshot.docs.forEach((categorie) => {
        tmpArr.push(categorie.data());
      });
      setMenProducts(tmpArr);
    };
    tmpFunc();
  }, []);

  return (
    <ShopProductsContext.Provider value={{ womenProducts, setWomenProducts, menProducts, setMenProducts }}>
      {children}
    </ShopProductsContext.Provider>
  );
};
