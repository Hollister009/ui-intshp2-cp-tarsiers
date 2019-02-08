import { connect } from 'react-redux';
import {
  addToWishList,
  removeFromWishList,
  addToCart,
  removeFromCart
} from '../../actions';
import ProductItem from './ProductItem';

const mapStateToProps = state => ({
  wishlist: state.wishlist.wishlist,
  cart: state.cart.value
});
const mapDispatchToProps = dispatch => ({
  addToWishListItem: data => dispatch(addToWishList(data)),
  removeFromWishListItem: data => dispatch(removeFromWishList(data)),
  addToCartListItem: data => dispatch(addToCart(data)),
  removeFromCartListItem: data => dispatch(removeFromCart(data))
});

const ProductItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem);

export default ProductItemContainer;
