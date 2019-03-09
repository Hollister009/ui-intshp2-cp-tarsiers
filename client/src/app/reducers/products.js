import { UPDATE_NEW_ARRIVALS } from '../actions';

const initialState = { newArrivals: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_ARRIVALS:
      return { ...state, newArrivals: action.payload };
    default:
      return state;
  }
};
