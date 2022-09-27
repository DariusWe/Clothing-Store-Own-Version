import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    sortBy: "recommended",
    colors: [],
  },
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
