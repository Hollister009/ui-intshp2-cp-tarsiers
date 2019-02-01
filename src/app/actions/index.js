const actionHelper = (payload, type) => ({ type, payload });

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_WISHLIST = 'GET_WISHLIST';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const RM_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export const TOGGLE_HEADER_AND_FOOTER_VISIBILITY = {
  type: 'TOGGLE_HEADER_AND_FOOTER_VISIBILITY'
};
export const getProducts = data => actionHelper(data, GET_PRODUCTS);
export const getWishList = data => actionHelper(data, GET_WISHLIST);
export const addToWishList = data => actionHelper(data, ADD_TO_WISHLIST);
export const removeFromWishList = data => actionHelper(data, RM_FROM_WISHLIST);
