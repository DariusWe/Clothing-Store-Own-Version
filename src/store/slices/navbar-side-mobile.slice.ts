import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isOpen: false,
};

const navbarSideMobileSlice = createSlice({
  name: "navbarSideMobile",
  initialState: INITIAL_STATE,
  reducers: {
    toggleNavbarSideMobile: (state) => {
      state.isOpen = !state.isOpen;
      console.log(state.isOpen);
    },
  },
});

export const { toggleNavbarSideMobile } = navbarSideMobileSlice.actions;
export const navbarSideMobileReducer = navbarSideMobileSlice.reducer;