import { URL_ACTION_TYPES } from "./url.types";

const INITIAL_STATE = {
  urlGender: "women",
};

export const urlReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case URL_ACTION_TYPES.SET_URL_GENDER:
      return {
        ...state,
        urlGender: payload,
      };
    default:
      return state;
  }
};
