import { createSlice } from "@reduxjs/toolkit";

type SliceState = {
  isOpen: boolean;
};

const initialState: SliceState = {
  isOpen: false,
};

const navbarSideMobileSlice = createSlice({
  name: "navbarSideMobile",
  initialState: initialState,
  reducers: {
    toggleNavbarSideMobile: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleNavbarSideMobile } = navbarSideMobileSlice.actions;
export const navbarSideMobileReducer = navbarSideMobileSlice.reducer;
