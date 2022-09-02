import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  profileMenuIsOpen: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.TOGGLE_PROFILE_MENU:
      return {
        ...state,
        profileMenuIsOpen: !state.profileMenuIsOpen,
      };
    default:
      return state;
  }
};
