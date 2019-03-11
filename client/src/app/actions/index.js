const actionHelper = (payload, type) => ({ type, payload });

export const UPDATE_NEW_ARRIVALS = 'UPDATE_NEW_ARRIVALS';
export const GET_WISHLIST = 'GET_WISHLIST';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const ADD_ITEMS_TO_FILTERED = 'ADD_ITEMS_TO_FILTERED';
export const RM_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const UPDATE_FILTERED = 'UPDATE_FILTERED';
export const LOAD_CART = 'LOAD_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export const TOGGLE_HF_VISIBILITY = 'TOGGLE_HF_VISIBILITY';

export const updateNewArrivals = data =>
  actionHelper(data, UPDATE_NEW_ARRIVALS);
export const getWishList = data => actionHelper(data, GET_WISHLIST);
export const addToWishList = data => actionHelper(data, ADD_TO_WISHLIST);
export const addItemsToFiltered = data =>
  actionHelper(data, ADD_ITEMS_TO_FILTERED);
export const removeFromWishList = data => actionHelper(data, RM_FROM_WISHLIST);
export const updateFiltered = data => actionHelper(data, UPDATE_FILTERED);
export const addToCart = data => actionHelper(data, ADD_TO_CART);
export const removeFromCart = data => actionHelper(data, REMOVE_FROM_CART);
export const updateCartItem = data => actionHelper(data, UPDATE_CART_ITEM);
export const clearCart = () => actionHelper({}, CLEAR_CART);
export const loadCart = data => actionHelper(data, LOAD_CART);
export const toggleHFVisibility = () => actionHelper({}, TOGGLE_HF_VISIBILITY);
