import { URL_ACTION_TYPES } from "./url.types";

export const setUrlGender = (gender) => {
  return {
    type: URL_ACTION_TYPES.SET_URL_GENDER,
    payload: gender,
  };
};
