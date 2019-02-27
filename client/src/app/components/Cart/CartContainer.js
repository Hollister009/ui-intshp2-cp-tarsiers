import { connect } from 'react-redux';
import { createNotification } from 'react-redux-notify';
import {
  removeFromCart,
  orderNow,
  setColor,
  setSize,
  setQuantityAndTotal,
  setCommonTotal
} from '../../actions';
import Cart from './Cart';

const mapStateToProps = state => ({
  cart: state.cart,
  orders: state.orders
});
const mapDispatchToProps = dispatch => ({
  removeFromCart: data => dispatch(removeFromCart(data)),
  createNotification: config => dispatch(createNotification(config)),
  orderNowItem: data => dispatch(orderNow(data)),
  setColor: data => dispatch(setColor(data)),
  setSize: data => dispatch(setSize(data)),
  setQuantityAndTotal: data => dispatch(setQuantityAndTotal(data)),
  setCommonTotal: data => dispatch(setCommonTotal(data))
});
const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;
