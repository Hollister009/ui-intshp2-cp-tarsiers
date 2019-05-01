import { connect } from 'react-redux';
import {
  updateNewArrivals,
  updateFiltered,
  getWishList,
  loadCart
} from './actions';
import App from './App';

const mapStateToProps = state => ({
  products: state.products.products,
  wishlist: state.wishlist.wishlist
});

const mapDispatchToProps = dispatch => ({
  updateNewArrivals: data => dispatch(updateNewArrivals(data)),
  updateFiltered: data => dispatch(updateFiltered(data)),
  getWishListItems: data => dispatch(getWishList(data)),
  loadPrevCart: data => dispatch(loadCart(data))
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
