import { connect } from 'react-redux';
import { createNotification } from 'react-redux-notify';
import {
  removeFromCart,
  setColor,
  setSize,
  setQuantityAndTotal,
  setCommonTotal,
  clearCart
} from '../../actions';
import Cart from './Cart';

const mapStateToProps = state => ({
  cart: state.cart
});
const mapDispatchToProps = dispatch => ({
  removeFromCart: data => dispatch(removeFromCart(data)),
  createNotification: config => dispatch(createNotification(config)),
  setColor: data => dispatch(setColor(data)),
  setSize: data => dispatch(setSize(data)),
  setQuantityAndTotal: data => dispatch(setQuantityAndTotal(data)),
  setCommonTotal: data => dispatch(setCommonTotal(data)),
  clearCart: data => dispatch(clearCart(data))
});
const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;
