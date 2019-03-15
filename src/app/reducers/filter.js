import {
  SET_CATEGORY,
  ADD_SIZE,
  REMOVE_SIZE,
  ADD_BRAND,
  REMOVE_BRAND,
  UPDATE_MIN_PRICE,
  UPDATE_MAX_PRICE,
  TOGGLE_AVAILABILITY,
  UPDATE_LIMIT,
  UPDATE_SKIP
} from '../actions/filterActions';
import appConfig from '../../config/appConfig';

const initialState = {
  category: null,
  sizes: [],
  brands: [],
  price: { min: appConfig.filter.price.min, max: appConfig.filter.price.max },
  available: null,
  skip: 0,
  limit: 6,
  tag: null
};

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
    case UPDATE_MIN_PRICE:
      return {
        ...state,
        price: { ...state.price, min: action.payload }
      };
    case UPDATE_MAX_PRICE:
      return {
        ...state,
        price: { ...state.price, max: action.payload }
      };
    case TOGGLE_AVAILABILITY:
      return {
        ...state,
        available: !state.available
      };
    case UPDATE_LIMIT:
      return {
        ...state,
        limit: action.payload
      };
    case UPDATE_SKIP:
      return {
        ...state,
        skip: action.payload
      };
    default:
      return state;
  }
};
