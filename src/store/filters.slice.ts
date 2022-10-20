import { createSlice } from "@reduxjs/toolkit";

// ToDo: Define payload types and other "any"-types

// Move sortBy strings into constant?

type InitialStateType = {
  sortBy: "recommended" | "lowest price" | "highest price";
  colors: string[];
};

const INITIAL_STATE: InitialStateType = {
  sortBy: "recommended",
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
