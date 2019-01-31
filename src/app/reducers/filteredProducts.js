import { UPDATE_FILTERED } from '../actions/index';

const initialState = { items: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTERED:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
