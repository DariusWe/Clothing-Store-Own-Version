import { createSlice } from "@reduxjs/toolkit";

type SliceState = {
  isSlideMenuOpen: boolean;
};

const initialState: SliceState = {
  isSlideMenuOpen: false,
};

const slideMenuSlice = createSlice({
  name: "slideMenu",
  initialState: initialState,
  reducers: {
    toggleSlideMenu: (state) => {
      state.isSlideMenuOpen = !state.isSlideMenuOpen;
    },
  },
});

export const slideMenuReducer = slideMenuSlice.reducer;
export const { toggleSlideMenu } = slideMenuSlice.actions;
