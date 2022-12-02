import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "./products.slice";

type SliceState = {
  items: Item[];
  isFavouritesOpen: boolean;
};

const initialState: SliceState = {
  items: [],
  isFavouritesOpen: false,
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: initialState,
  reducers: {
    setFavourites: (state, { payload }: PayloadAction<Item>) => {
      const itemAlreadyExists = state.items.some(item => item.id === payload.id);
      if (itemAlreadyExists) {
        state.items = state.items.filter(item => item.id !== payload.id);
      } else {
        state.items = [...state.items, payload];
      }
    },
    toggleFavouritesList: (state) => {
      state.isFavouritesOpen = !state.isFavouritesOpen;
    }
  },
});

export const favouritesReducer = favouritesSlice.reducer;
export const { setFavourites, toggleFavouritesList } = favouritesSlice.actions;