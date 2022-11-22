import { createSlice } from "@reduxjs/toolkit";

export enum VIEWPORT_TYPES {
  DESKTOP = "desktop",
  TABLET = "tablet",
  MOBILE = "mobile",
}

/*
Why use enums when you could just define "type: "desktop" | "tablet" | "mobile" in the INITIAL_STATE?
One reason is if you do an equality check like in landing-page.tsx. Without the VIEWPORT_TYPES you would have
to compare to a string and you would have to look up the possible values of that string. Also, if the possible
values change, you might not get an error in some environments (here you would get the warning "Comparison will always result in true...",
but when working with enums you would get a more descriptive error)
*/

type SliceState = {
  type: VIEWPORT_TYPES;
};

const INITIAL_STATE = {
  type: VIEWPORT_TYPES.DESKTOP,
};

const currentViewportSlice = createSlice({
  name: "currentViewport",
  initialState: INITIAL_STATE as SliceState,
  reducers: {
    setViewportType: (state, { payload }) => {
      state.type = payload;
    },
  },
});

export const { setViewportType } = currentViewportSlice.actions;
export const currentViewportReducer = currentViewportSlice.reducer;
