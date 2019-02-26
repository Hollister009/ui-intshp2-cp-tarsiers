import { ADD_TO_CART, REMOVE_FROM_CART, ORDER_NOW } from '../actions';

const initialState = { value: 0, productsInCart: [], orders: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        value: state.value + 1,
        productsInCart: [
          ...state.productsInCart,
          {
            _id: action.payload._id,
            title: action.payload.title,
            src: action.payload.src,
            price: action.payload.price,
            quantity: action.payload.quantity,
            sizes: action.payload.sizes,
            colors: action.payload.colors,
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
    case ORDER_NOW:
      return {
        ...state,
        orders: [
          ...state.orders,
          {
            title: action.payload.title,
            price: action.payload.price,
            quantity: action.payload.quantity,
            size: action.payload.size,
            color: action.payload.color,
            src: action.payload.src,
            total: action.payload.price * action.payload.quantity
          }
        ]
      };
    default:
      return state;
  }
};
