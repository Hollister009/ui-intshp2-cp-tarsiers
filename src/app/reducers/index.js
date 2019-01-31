import { combineReducers } from 'redux';
import counter from './counter';
import headerFooterVisibility from './headerFooterVisibility';
import products from './products';
import wishlist from './wishlist';
import filter from './filter';

export default combineReducers({
  counter,
  headerFooterVisibility,
  products,
  wishlist,
  filter
});
