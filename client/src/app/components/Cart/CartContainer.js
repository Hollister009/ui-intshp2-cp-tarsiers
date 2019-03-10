import { connect } from 'react-redux';
import { createNotification } from 'react-redux-notify';
import {
  removeFromCart,
  updateCartItem,
  setCommonTotal,
  clearCart
} from '../../actions';
import Cart from './Cart';

const mapStateToProps = state => ({
  cart: state.cart
});
const mapDispatchToProps = dispatch => ({
  clearCart: data => dispatch(clearCart(data)),
  removeFromCart: data => dispatch(removeFromCart(data)),
  updateCartItem: data => dispatch(updateCartItem(data)),
  setCommonTotal: data => dispatch(setCommonTotal(data)),
  createNotification: config => dispatch(createNotification(config))
});
const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;
