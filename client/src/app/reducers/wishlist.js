import { GET_WISHLIST, ADD_TO_WISHLIST, RM_FROM_WISHLIST } from '../actions';

const initialState = { wishlist: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WISHLIST:
      return { ...state, wishlist: action.payload };
    case ADD_TO_WISHLIST:
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case RM_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(el => el._id !== action.payload._id)
      };
    default:
      return state;
  }
};
