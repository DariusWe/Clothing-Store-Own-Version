import { createSlice } from "@reduxjs/toolkit";

const slideMenuSlice = createSlice({
  name: "slideMenu",
  initialState: {
    isSlideMenuOpen: false,
  },
  reducers: {
    toggleSlideMenu: (state) => {
      state.isSlideMenuOpen = !state.isSlideMenuOpen;
    },
  },
});

export const slideMenuReducer = slideMenuSlice.reducer;
export const { toggleSlideMenu } = slideMenuSlice.actions;
