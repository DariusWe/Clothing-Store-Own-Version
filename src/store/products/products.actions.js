import { getProductsFromFirestore } from "../../utils/firebase";
import { PRODUCTS_ACTION_TYPES } from "./products.types";

// THESE ARE INDEED CATEGORIES, NOT PRODUCTS. CHANGE THE NAME?
// ALSO: STORE THE DATA IN THE MOST BASIC FORM IN THE STORE. ADDITIONAL SELECTING AND LOGIC SHOULD LIVE IN THE SELECTORS.
// Fetch instead of FetchAndSet?

const fetchAndSetProductsStart = () => {
  return {
    type: PRODUCTS_ACTION_TYPES.FETCH_AND_SET_PRODUCTS_START,
  };
};

const fetchAndSetProductsSuccess = (products) => {
  return {
    type: PRODUCTS_ACTION_TYPES.FETCH_AND_SET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

const fetchAndSetProductsError = (error) => {
  return {
    type: PRODUCTS_ACTION_TYPES.FETCH_AND_SET_PRODUCTS_ERROR,
    payload: error,
  };
};


export const fetchAndSetProductsAsync = () => async (dispatch) => {
  dispatch(fetchAndSetProductsStart());

  // Try and fetch the products from firestore:
  // Better would be selecting men or women products in selectors and store basic data in store.
  try {
    const products = {
      womenProducts: [],
      menProducts: [],
    };

    const snapshotWomen = await getProductsFromFirestore("women");
    snapshotWomen.docs.forEach((category) => {
      products.womenProducts.push({
        ...category.data(),
        titleSanitized: category.data().title.toLowerCase().replace(/\s+/gm, ""),
      });
    });

    const snapshotMen = await getProductsFromFirestore("men");
    snapshotMen.docs.forEach((category) => {
      products.menProducts.push({
        ...category.data(),
        titleSanitized: category.data().title.toLowerCase().replace(/\s+/gm, ""),
      });
    });
    dispatch(fetchAndSetProductsSuccess(products));
  } catch(error) {
    dispatch(fetchAndSetProductsError(error));
  }
};
