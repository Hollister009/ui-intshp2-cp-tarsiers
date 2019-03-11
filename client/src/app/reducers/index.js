import { combineReducers } from 'redux';
import notifyReducer from 'react-redux-notify';

import cart from './cart';
import filter from './filter';
import products from './products';
import wishlist from './wishlist';
import filteredProducts from './filteredProducts';
import toggleHFVisibility from './toggleHFVisibility';

export default combineReducers({
  cart,
  filter,
  products,
  wishlist,
  filteredProducts,
  toggleHFVisibility,
  notifications: notifyReducer
});
