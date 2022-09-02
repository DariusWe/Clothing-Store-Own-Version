import { getProductsFromFirestore } from "../../utils/firebase";
import { PRODUCTS_ACTION_TYPES } from "./products.types";

// THESE ARE INDEED CATEGORIES, NOT PRODUCTS. CHANGE THE NAME?
// ALSO: STORE THE DATA IN THE MOST BASIC FORM IN THE STORE. ADDITIONAL SELECTING AND LOGIC SHOULD LIVE IN THE SELECTORS.

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
        type: PRODUCTS_ACTION_TYPES.FETCH_AND_SET_PRODUCTS,
        payload: products,
    };
}