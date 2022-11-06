import { createSlice } from "@reduxjs/toolkit";
import { URL_LOCATION } from "../constants/URL_LOCATIONS";

type SliceState = {
  userLocation: URL_LOCATION;
};

const userLocationSlice = createSlice({
  name: "userLocation",
  initialState: {
    userLocation: URL_LOCATION.WOMEN,
  } as SliceState,
  reducers: {
    setUserLocation: (state, action) => {
      if (action.payload === "/" || action.payload.includes("/women")) {
        state.userLocation = URL_LOCATION.WOMEN;
      } else if (action.payload.includes("/men")) {
        state.userLocation = URL_LOCATION.MEN;
      } else {
        state.userLocation = URL_LOCATION.OTHER;
      }
    },
  },
});

export const { setUserLocation } = userLocationSlice.actions;
export const userLocationReducer = userLocationSlice.reducer;
