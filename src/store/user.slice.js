import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isProfileMenuOpen: false,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    toggleProfileMenu: (state) => {
      state.isProfileMenuOpen = !state.isProfileMenuOpen;
    },
  },
});

export const { setCurrentUser, toggleProfileMenu } = userSlice.actions;
export const userReducer = userSlice.reducer;
