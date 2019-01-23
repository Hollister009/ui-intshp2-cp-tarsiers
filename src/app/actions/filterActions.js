export const SET_CATEGORY = 'SET_CATEGORY';
export const ADD_SIZE = 'ADD_SIZE';
export const REMOVE_SIZE = 'REMOVE_SIZE';
export const ADD_BRAND = 'ADD_BRAND';
export const REMOVE_BRAND = 'REMOVE_BRAND';

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
