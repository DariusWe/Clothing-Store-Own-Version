import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsFromFirestore } from "../utils/firebase";

export const fetchProductsAsync = createAsyncThunk("products/FETCH_PRODUCTS", async () => {
  try {
    const womenCategories = await getProductsFromFirestore("women");
    const menCategories = await getProductsFromFirestore("men");
    return { womenCategories, menCategories };
  } catch (error) {
    console.log(error);
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    womenCategories: [],
    menCategories: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchProductsAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProductsAsync.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.womenCategories = payload.womenCategories;
      state.menCategories = payload.menCategories;
    },
    [fetchProductsAsync.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const productsReducer = productsSlice.reducer;
