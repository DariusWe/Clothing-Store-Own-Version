import { createSlice } from "@reduxjs/toolkit";
import { SORT_BY_VALUES } from "../constants/sortByFilterValues";

// ToDo: Define payload types and other "any"-types

type InitialStateType = {
  sortBy: SORT_BY_VALUES;
  colors: string[];
};

const INITIAL_STATE: InitialStateType = {
  sortBy: SORT_BY_VALUES.RECOMMENDED,
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
