import { CURR_USER_LOCATION_ACTION_TYPES } from "./curr-user-location.types";

export const setCurrLocation = (location) => {
  return {
    type: CURR_USER_LOCATION_ACTION_TYPES.SET_CURRENT_LOCATION,
    payload: location,
  };
};
