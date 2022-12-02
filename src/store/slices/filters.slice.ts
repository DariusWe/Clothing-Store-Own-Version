import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum COLOR_FIILTER_VALUES {
  WHITE = "white", 
  BLACK = "black", 
  RED = "red", 
  PURPLE = "purple", 
  GREEN = "green", 
  BLUE = "blue", 
  ORANGE = "orange", 
  PINK = "pink"
};

export enum SORT_BY_VALUES {
  RECOMMENDED = "recommended",
  LOWEST_PRICE = "lowest price",
  HIGHEST_PRICE = "highest price",
}

type SliceState = {
  sortBy: SORT_BY_VALUES;
  colors: COLOR_FIILTER_VALUES[];
};

const initialState: SliceState = {
  sortBy: SORT_BY_VALUES.RECOMMENDED,
  colors: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    setSortBy: (state, { payload }: PayloadAction<SORT_BY_VALUES>) => {
      state.sortBy = payload;
    },
    setColors: (state, { payload }: PayloadAction<COLOR_FIILTER_VALUES>) => {
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
