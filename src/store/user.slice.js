import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {
      uid: null,
      email: "",
      displayName: "",
    },
    isProfileMenuOpen: false,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setDisplayName: (state, action) => {
      state.currentUser.displayName = action.payload;
    },
    toggleProfileMenu: (state) => {
      state.isProfileMenuOpen = !state.isProfileMenuOpen;
    },
  },
});

export const { setCurrentUser, setDisplayName, toggleProfileMenu } = userSlice.actions;
export const userReducer = userSlice.reducer;
