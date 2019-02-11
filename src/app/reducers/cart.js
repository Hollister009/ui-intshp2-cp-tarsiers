import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

const initialState = { value: 0, productsIds: [] };

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
    default:
      return state;
  }
};
