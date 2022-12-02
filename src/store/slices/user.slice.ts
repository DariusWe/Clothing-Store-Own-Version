import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CurrentUser = {
  uid: string;
  email: string;
  displayName: string;
} | null;

type SliceState = {
  currentUser: CurrentUser;
  isProfileMenuOpen: boolean;
};

const initialState: SliceState = {
  currentUser: null,
  isProfileMenuOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, {payload}: PayloadAction<CurrentUser>) => {
      state.currentUser = payload;
    },
    setDisplayName: (state, {payload}: PayloadAction<string>) => {
      if (state.currentUser) {
        state.currentUser.displayName = payload;
      }
    },
    toggleProfileMenu: (state) => {
      state.isProfileMenuOpen = !state.isProfileMenuOpen;
    },
  },
});

export const { setCurrentUser, setDisplayName, toggleProfileMenu } = userSlice.actions;
export const userReducer = userSlice.reducer;
