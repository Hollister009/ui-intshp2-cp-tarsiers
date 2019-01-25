import { GET_FILTERED } from '../actions/index';

const initialState = { items: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTERED:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
