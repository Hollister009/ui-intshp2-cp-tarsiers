import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
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
    case SET_COMMON_TOTAL: {
      return {
        ...state,
        total: action.payload
      };
    }
    case CLEAR_CART:
      return { ...initialState };
    default:
      return state;
  }
};
