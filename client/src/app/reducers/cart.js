import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ORDER_NOW,
  SET_COLOR,
  SET_QUANTITY_AND_TOTAL,
  SET_SIZE
} from '../actions';

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
    default:
      return state;
  }
};
