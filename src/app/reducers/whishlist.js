import { GET_WISHLIST, ADD_TO_WISHLIST, RM_FROM_WISHLIST } from '../actions';

const initialState = { whishlist: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WISHLIST:
      return { ...state, whishlist: action.payload };
    case ADD_TO_WISHLIST:
      return { ...state, whishlist: [...state.whishlist, action.payload] };
    case RM_FROM_WISHLIST:
      return {
        ...state,
        whishlist: state.whishlist.filter(id => id !== action.payload)
      };
    default:
      return state;
  }
};
