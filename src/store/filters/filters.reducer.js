import { FILTERS_ACTION_TYPES } from "./filters.types";

const INITIAL_STATE = {
  sortByFilterValue: "recommended",
  colorFilterValues: [],
};

export const FiltersReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FILTERS_ACTION_TYPES.SET_SORT_BY_FILTER_VALUE:
      return {
        ...state,
        sortByFilterValue: payload,
      };
    case FILTERS_ACTION_TYPES.SET_COLOR_FILTER_VALUE:
      return {
        ...state,
        colorFilterValues: payload,
      };
    default:
      return state;
  }
};
