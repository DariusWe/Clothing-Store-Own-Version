import { CURR_USER_LOCATION_ACTION_TYPES } from "./curr-user-location.types";

//using let okay? why not?

export const setCurrLocation = (pathname) => {
  let location = "";

  if (pathname === "/" || pathname.includes("/women")) {
    location = "women";
  } else if (pathname.includes("/men")) {
    location = "men";
  } else {
    location = "other";
  }

  return {
    type: CURR_USER_LOCATION_ACTION_TYPES.SET_CURRENT_LOCATION,
    payload: location,
  };
};
