import { combineReducers } from 'redux';
import counter from './counter';
import headerFooterVisibility from './headerFooterVisibility';
import products from './products';
import whishlist from './whishlist';

export default combineReducers({
  counter,
  headerFooterVisibility,
  products,
  whishlist
});
