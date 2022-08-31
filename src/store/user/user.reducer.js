const INITIAL_STATE = {
  currentUser: null,
  profileMenuIsOpen: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };
    case "TOGGLE_PROFILE_MENU":
      return {
        ...state,
        profileMenuIsOpen: !state.profileMenuIsOpen,
      };
    default:
      return state;
  }
};
