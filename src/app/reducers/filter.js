import {
  SET_CATEGORY,
  ADD_SIZE,
  REMOVE_SIZE,
  ADD_BRAND,
  REMOVE_BRAND
} from '../actions/filterActions';

const initialState = { category: null, sizes: [], brands: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    case ADD_SIZE:
      return { ...state, sizes: [...state.sizes, action.payload] };
    case REMOVE_SIZE:
      return {
        ...state,
        sizes: state.sizes.filter(el => el !== action.payload)
      };
    case ADD_BRAND:
      return { ...state, brands: [...state.brands, action.payload] };
    case REMOVE_BRAND:
      return {
        ...state,
        brands: state.brands.filter(el => el !== action.payload)
      };
    default:
      return state;
  }
};
