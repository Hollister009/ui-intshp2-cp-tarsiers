import { connect } from 'react-redux';
import { getProducts, getWishList } from './actions';
import App from './App';

const mapStateToProps = state => ({
  products: state.products.products,
  wishlist: state.wishlist.wishlist
});

const mapDispatchToProps = dispatch => ({
  getProductsItems: data => dispatch(getProducts(data)),
  getWishListItems: data => dispatch(getWishList(data))
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
