import { combineReducers } from 'redux';
import notifyReducer from 'react-redux-notify';
import counter from './counter';
import headerFooterVisibility from './headerFooterVisibility';
import products from './products';
import wishlist from './wishlist';
import filter from './filter';
import filteredProducts from './filteredProducts';

export default combineReducers({
  counter,
  headerFooterVisibility,
  products,
  wishlist,
  filter,
  notifications: notifyReducer,
  filteredProducts
});
