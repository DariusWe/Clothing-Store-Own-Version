import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsFromFirestore } from "../utils/firebase";

// Declare Item and Category type here or somewhere else?

export type Item = {
  id: number;
  name: string;
  color: string;
  price: number;
  imageUrl: string;
};

export type Category = {
  id: number;
  title: string;
  titleSanitized: string;
  items: Item[];
};

type SliceState = {
  womenCategories: Category[];
  menCategories: Category[];
  isLoading: boolean;
};

// The return statement in the catch block is to get rid of typescript warning. Probably not best practice. Remove to see warning.
// Improve error handling.

export const fetchProductsAsync = createAsyncThunk("products/FETCH_PRODUCTS", async () => {
  try {
    const womenCategories: Category[] = await getProductsFromFirestore("women");
    const menCategories: Category[] = await getProductsFromFirestore("men");
    return { womenCategories, menCategories };
  } catch (error) {
    console.log(error);
    return { womenCategories: [], menCategories: [] };
  }
});

// extraReducers are typed via "builder callback" like recommended by RTK docs. More info:
// https://redux-toolkit.js.org/usage/usage-with-typescript#type-safety-with-extrareducers

const productsSlice = createSlice({
  name: "products",
  initialState: {
    womenCategories: [],
    menCategories: [],
    isLoading: false,
  } as SliceState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductsAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.womenCategories = payload.womenCategories;
      state.menCategories = payload.menCategories;
    });
    builder.addCase(fetchProductsAsync.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const productsReducer = productsSlice.reducer;
