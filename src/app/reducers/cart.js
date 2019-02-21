import { ADD_TO_CART, REMOVE_FROM_CART, ORDER_NOW } from '../actions';

const initialState = { value: 0, productsIds: [], orders: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        value: state.value + 1,
        productsIds: [...state.productsIds, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        value: state.value ? state.value - 1 : 0,
        productsIds: state.productsIds.filter(id => id !== action.payload)
      };
    case ORDER_NOW:
      return {
        ...state,
        value: state.value + 1,
        orders: [
          ...state.orders,
          {
            title: action.payload.title,
            price: action.payload.price * action.payload.quantity,
            quantity: action.payload.quantity,
            size: action.payload.size,
            color: action.payload.color,
            src: action.payload.src
          }
        ]
      };
    default:
      return state;
  }
};
