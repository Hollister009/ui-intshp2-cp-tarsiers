export const SET_CATEGORY = 'SET_CATEGORY';
export const ADD_SIZE = 'ADD_SIZE';
export const REMOVE_SIZE = 'REMOVE_SIZE';
export const ADD_BRAND = 'ADD_BRAND';
export const REMOVE_BRAND = 'REMOVE_BRAND';
export const UPDATE_MIN_PRICE = 'UPDATE_MIN_PRICE';
export const UPDATE_MAX_PRICE = 'UPDATE_MAX_PRICE';
export const TOGGLE_AVAILABILITY = 'TOGGLE_AVAILABILITY';
export const UPDATE_SKIP = 'UPDATE_SKIP';
export const UPDATE_LIMIT = 'UPDATE_LIMIT';

export const setCategory = payload => ({
  type: SET_CATEGORY,
  payload
});

export const addSize = payload => ({
  type: ADD_SIZE,
  payload
});

export const removeSize = payload => ({
  type: REMOVE_SIZE,
  payload
});

export const addBrand = payload => ({
  type: ADD_BRAND,
  payload
});

export const removeBrand = payload => ({
  type: REMOVE_BRAND,
  payload
});

export const updateMinPrice = payload => ({
  type: UPDATE_MIN_PRICE,
  payload
});

export const updateSkip = payload => ({
  type: UPDATE_SKIP,
  payload
});

export const updateLimit = payload => ({
  type: UPDATE_LIMIT,
  payload
});

export const updateMaxPrice = payload => ({
  type: UPDATE_MAX_PRICE,
  payload
});

export const toggleAvailability = () => ({
  type: TOGGLE_AVAILABILITY
});
