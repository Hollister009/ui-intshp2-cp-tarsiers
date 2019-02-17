import { connect } from 'react-redux';
import { createNotification } from 'react-redux-notify';
import {
  addToWishList,
  removeFromWishList,
  addToCart,
  removeFromCart,
  orderNow
} from '../../../actions';
import ProductDescription from './ProductDescription';

const mapStateToProps = state => ({
  wishlist: state.wishlist.wishlist,
  cart: state.cart,
  orders: state.orders
});
const mapDispatchToProps = dispatch => ({
  addToWishListItem: data => dispatch(addToWishList(data)),
  removeFromWishListItem: data => dispatch(removeFromWishList(data)),
  addToCart: data => dispatch(addToCart(data)),
  removeFromCart: data => dispatch(removeFromCart(data)),
  createNotification: config => dispatch(createNotification(config)),
  orderNowItem: data => dispatch(orderNow(data))
});
const ProductDescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDescription);

export default ProductDescriptionContainer;
