import { getProductsFromFirestore } from "../../utils/firebase";

export const fetchAndSetProducts = async () => {
    const products = {
        womenProducts: [],
        menProducts: [],
    };
    const snapshotWomen = await getProductsFromFirestore("women");
    snapshotWomen.docs.forEach((category) => {
      products.womenProducts.push({ ...category.data(), titleSanitized: category.data().title.toLowerCase().replace(/\s+/gm, "") });
    });

    const snapshotMen = await getProductsFromFirestore("men");
    snapshotMen.docs.forEach((category) => {
      products.menProducts.push({ ...category.data(), titleSanitized: category.data().title.toLowerCase().replace(/\s+/gm, "") });
    });

    return {
        type: "FETCH_AND_SET_PRODUCTS",
        payload: products,
    };
}