import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_COLOR,
  SET_QUANTITY_AND_TOTAL,
  SET_SIZE,
  SET_COMMON_TOTAL,
  CLEAR_CART,
  UPDATE_CART_ITEM
} from '../actions';

const initialState = { value: 0, productsInCart: [], total: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        value: state.value + 1,
        productsInCart: [
          ...state.productsInCart,
          {
            ...action.payload,
            chosenSize: null,
            chosenColor: null,
            chosenQuantity: 1,
            total: action.payload.price
          }
        ]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        value: state.value ? state.value - 1 : 0,
        productsInCart: state.productsInCart.filter(
          element => element._id !== action.payload._id
        )
      };
    case SET_COLOR: {
      const itemId = state.productsInCart.findIndex(
        el => el._id === action.payload._id
      );
      const neededItem = state.productsInCart.find(
        el => el._id === action.payload._id
      );

      return {
        ...state,
        productsInCart: [
          ...state.productsInCart.slice(0, itemId),
          { ...neededItem, chosenColor: action.payload.color },
          ...state.productsInCart.slice(itemId + 1)
        ]
      };
    }
    case SET_SIZE: {
      const itemId = state.productsInCart.findIndex(
        el => el._id === action.payload._id
      );
      const neededItem = state.productsInCart.find(
        el => el._id === action.payload._id
      );

      return {
        ...state,
        productsInCart: [
          ...state.productsInCart.slice(0, itemId),
          { ...neededItem, chosenSize: action.payload.size },
          ...state.productsInCart.slice(itemId + 1)
        ]
      };
    }
    case SET_QUANTITY_AND_TOTAL: {
      const itemId = state.productsInCart.findIndex(
        el => el._id === action.payload._id
      );
      const neededItem = state.productsInCart.find(
        el => el._id === action.payload._id
      );

      return {
        ...state,
        productsInCart: [
          ...state.productsInCart.slice(0, itemId),
          {
            ...neededItem,
            chosenQuantity: action.payload.newQuantity,
            total: neededItem.price * action.payload.newQuantity
          },
          ...state.productsInCart.slice(itemId + 1)
        ]
      };
    }
    case SET_COMMON_TOTAL: {
      return {
        ...state,
        total: action.payload
      };
    }
    case CLEAR_CART:
      return { ...initialState };
    case UPDATE_CART_ITEM:
      return {
        ...state,
        productsInCart: state.productsInCart.map(el => {
          if (el._id !== action.payload._id) {
            return el;
          }
          return { ...el, ...action.payload.newItem };
        })
      };
    default:
      return state;
  }
};
