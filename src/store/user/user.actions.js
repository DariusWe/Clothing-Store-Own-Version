import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) => {
    return {
        type: USER_ACTION_TYPES.SET_CURRENT_USER,
        payload: user,
    }
}

export const toggleProfileMenu = () => {
    return {
        type: USER_ACTION_TYPES.TOGGLE_PROFILE_MENU,
    }
}