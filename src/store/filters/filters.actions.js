import { store } from "../store";

import { FILTERS_ACTION_TYPES } from "./filters.types";

export const setSortByFilterValue = (payload) => {
  return {
    type: FILTERS_ACTION_TYPES.SET_SORT_BY_FILTER_VALUE,
    payload,
  };
};

export const setColorFilterValues = (payload) => {
  const colorFilterValues = store.getState().filters.colorFilterValues;
  if (colorFilterValues.includes(payload)) {
    return {
      type: FILTERS_ACTION_TYPES.SET_COLOR_FILTER_VALUE,
      payload: colorFilterValues.filter((value) => value !== payload),
    };
  } else {
    return {
      type: FILTERS_ACTION_TYPES.SET_COLOR_FILTER_VALUE,
      payload: [...colorFilterValues, payload],
    };
  }
};
