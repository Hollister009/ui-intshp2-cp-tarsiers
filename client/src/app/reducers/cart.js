import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  LOAD_CART,
  UPDATE_CART_ITEM
} from '../actions';

const initialState = { productsInCart: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        productsInCart: [
          ...state.productsInCart,
          {
            ...action.payload,
            chosenSize: action.payload.sizes[0],
            chosenColor: action.payload.colors[0],
            chosenQuantity: 1,
            total: action.payload.price
          }
        ]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
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
    case CLEAR_CART:
      return { ...initialState };
    case LOAD_CART:
      return { ...action.payload };
    default:
      return state;
  }
};
