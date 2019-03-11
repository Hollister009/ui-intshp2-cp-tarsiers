import { TOGGLE_HF_VISIBILITY } from '../actions';

const initialState = { value: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HF_VISIBILITY:
      return { ...state, value: !state.value };
    default:
      return state;
  }
};
