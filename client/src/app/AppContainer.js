import { connect } from 'react-redux';
import { updateNewArrivals, getWishList, updateFiltered } from './actions';
import App from './App';

const mapStateToProps = state => ({
  products: state.products.products,
  wishlist: state.wishlist.wishlist
});

const mapDispatchToProps = dispatch => ({
  updateNewArrivals: data => dispatch(updateNewArrivals(data)),
  getWishListItems: data => dispatch(getWishList(data)),
  updateFiltered: data => dispatch(updateFiltered(data))
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
