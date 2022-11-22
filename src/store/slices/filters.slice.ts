import { createSlice } from "@reduxjs/toolkit";

// ToDo: Define payload types and other "any"-types

export const COLOR_FIILTER_VALUES = ["white", "black", "red", "purple", "green", "blue", "orange", "pink"];

export enum SORT_BY_VALUE {
  RECOMMENDED = "recommended",
  LOWEST_PRICE = "lowest price",
  HIGHEST_PRICE = "highest price",
}

type InitialStateType = {
  sortBy: SORT_BY_VALUE;
  colors: string[];
};

const INITIAL_STATE: InitialStateType = {
  sortBy: SORT_BY_VALUE.RECOMMENDED,
  colors: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setSortBy: (state, { payload }) => {
      state.sortBy = payload;
    },
    setColors: (state, { payload }) => {
      if (state.colors.includes(payload)) {
        state.colors = state.colors.filter((value) => value !== payload);
      } else {
        state.colors = [...state.colors, payload];
      }
    },
    resetColors: (state) => {
      state.colors = [];
    },
  },
});

export const { setSortBy, setColors, resetColors } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
