import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum VIEWPORT_TYPES {
  DESKTOP = "desktop",
  TABLET = "tablet",
  MOBILE = "mobile",
}

/*
In comparison to some components (for example button component) i use enum here to define the possible string values
instead of directly assigning "type: "desktop" | "tablet" | "mobile" in the SliceState type. Reason for this inconsistency
is that i want to work with both solutions to learn about practical advantages/disadvantages of each one. Some reasons for
not using enum can be found in button.tsx file.
*/

type SliceState = {
  type: VIEWPORT_TYPES;
};

const initialState: SliceState = {
  type: VIEWPORT_TYPES.DESKTOP,
};

const currentViewportSlice = createSlice({
  name: "currentViewport",
  initialState: initialState,
  reducers: {
    setViewportType: (state, action: PayloadAction<VIEWPORT_TYPES>) => {
      state.type = action.payload;
    },
  },
});

export const { setViewportType } = currentViewportSlice.actions;
export const currentViewportReducer = currentViewportSlice.reducer;
