import { getProductsFromFirestore } from "../../utils/firebase";
import { PRODUCTS_ACTION_TYPES } from "./products.types";

/*
  Data stored in the redux store should have the most basic form. Right now the structure of my store data fits to the structure 
  of my database, where i store the products for women and men separately in the following form:

    - women
      - jackets
        - jacket 1
        - jacket 2
        - ...
      - shirts
        - shirt 1
        - shirt 2
        - ... 
    
  Probably not the best solution. Will change as i dig into database design/structuring.
 */

const fetchProductsStart = () => {
  return {
    type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START,
  };
};

const fetchProductsSuccess = (products) => {
  return {
    type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

const fetchProductsError = (error) => {
  return {
    type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_ERROR,
    payload: error,
  };
};


export const fetchProductsAsync = () => async (dispatch) => {
  dispatch(fetchProductsStart());

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
    dispatch(fetchProductsSuccess(products));
  } catch(error) {
    dispatch(fetchProductsError(error));
  }
};
