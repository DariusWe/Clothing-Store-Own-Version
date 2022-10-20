import { createSlice } from "@reduxjs/toolkit";

// Define CurrentUser type here or better somewhere else?

type CurrentUser = {
  uid: null | number,
  email: string,
  displayName: string,
}

type SliceState = {
  currentUser: CurrentUser,
  isProfileMenuOpen: boolean,
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {
      uid: null,
      email: "",
      displayName: "",
    },
    isProfileMenuOpen: false,
  } as SliceState,
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
