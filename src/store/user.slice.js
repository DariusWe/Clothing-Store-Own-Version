import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    profileMenuIsOpen: false,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    toggleProfileMenu: (state) => {
      state.profileMenuIsOpen = !state.profileMenuIsOpen;
    },
  },
});

export const { setCurrentUser, toggleProfileMenu } = userSlice.actions;
export const userReducer = userSlice.reducer;
