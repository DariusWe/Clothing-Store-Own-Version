import { createContext } from "react";
import { useEffect, useState } from "react";
import { getProductsFromFirestore } from "../utils/firebase";

export const ShopProductsContext = createContext({
  womenProducts: [],
  menProducts: [],
});

export const ShopProductsContextProvider = ({ children }) => {
  const [womenProducts, setWomenProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);

  useEffect(() => {
    fetchAndSetProducts("women");
    fetchAndSetProducts("men");
  }, []);

  const fetchAndSetProducts = async (gender) => {
    /*
    Whats happening here? We fetch our shopData from firestore and store it in a Snapshot (it's an object).
    Then, we iterate through the docs in our shopData, which represent the categories (shoes, jackets, women, ...).
    We push the data of each doc into an temporarry array, which we then use to set the state variable "shopData".
    */
    const tmpArr = [];
    const snapshot = await getProductsFromFirestore(gender);
    snapshot.docs.forEach((category) => {
      tmpArr.push({ ...category.data(), titleSanitized: category.data().title.toLowerCase().replace(/\s+/gm, "") });
    });
    gender === "women" ? setWomenProducts(tmpArr) : setMenProducts(tmpArr);
  };

  return <ShopProductsContext.Provider value={{ womenProducts, menProducts }}>{children}</ShopProductsContext.Provider>;
};
