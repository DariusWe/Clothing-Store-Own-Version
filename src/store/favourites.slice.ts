import { createSlice } from "@reduxjs/toolkit";
import type { Item } from "./products.slice";

type SliceState = {
  items: Item[];
  isFavouritesOpen: boolean;
};

const INITIAL_STATE: SliceState = {
  items: [],
  isFavouritesOpen: false,
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: INITIAL_STATE,
  reducers: {
    setFavourites: (state, { payload }) => {
      const itemAlreadyExists = state.items.some(item => item.id === payload.id);
      if (itemAlreadyExists) {
        state.items = state.items.filter(item => item.id !== payload.id);
      } else {
        state.items = [...state.items, payload];
      }
    },
    toggleFavouritesMenu: (state) => {
      state.isFavouritesOpen = !state.isFavouritesOpen;
    }
  },
});

export const favouritesReducer = favouritesSlice.reducer;
export const { setFavourites, toggleFavouritesMenu } = favouritesSlice.actions;