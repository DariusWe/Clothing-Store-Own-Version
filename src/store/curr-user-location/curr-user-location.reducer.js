import { CURR_USER_LOCATION_ACTION_TYPES } from "./curr-user-location.types";

const INITIAL_STATE = {
  location: "women",
};

export const currLocationReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CURR_USER_LOCATION_ACTION_TYPES.SET_CURRENT_LOCATION:
      return {
        ...state,
        location: payload,
      };
    default:
      return state;
  }
};
