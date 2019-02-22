const initialState = { value: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_HEADER_AND_FOOTER_VISIBILITY':
      return { ...state, value: !state.value };
    default:
      return state;
  }
};
