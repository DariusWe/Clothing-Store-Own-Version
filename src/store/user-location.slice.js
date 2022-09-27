import { createSlice } from "@reduxjs/toolkit";

const userLocationSlice = createSlice({
  name: "userLocation",
  initialState: {
    userLocation: "women",
  },
  reducers: {
    setUserLocation: (state, action) => {
      if (action.payload === "/" || action.payload.includes("/women")) {
        state.userLocation = "women";
      } else if (action.payload.includes("/men")) {
        state.userLocation = "men";
      } else {
        state.userLocation = "other";
      }
    },
  },
});

export const { setUserLocation } = userLocationSlice.actions;
export const userLocationReducer = userLocationSlice.reducer;
