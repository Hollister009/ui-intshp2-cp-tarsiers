import { UPDATE_FILTERED, ADD_ITEMS_TO_FILTERED } from '../actions/index';

const initialState = { items: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTERED:
      return { ...state, items: action.payload };
    case ADD_ITEMS_TO_FILTERED:
      return { ...state, items: state.items.concat(action.payload) };
    default:
      return state;
  }
};
