import { combineReducers } from 'redux';
import notifyReducer from 'react-redux-notify';
import headerFooterVisibility from './headerFooterVisibility';
import products from './products';
import wishlist from './wishlist';
import filter from './filter';
import cart from './cart';
import filteredProducts from './filteredProducts';

export default combineReducers({
  headerFooterVisibility,
  products,
  wishlist,
  cart,
  filter,
  notifications: notifyReducer,
  filteredProducts
});
