import { connect } from 'react-redux';
import { createNotification } from 'react-redux-notify';
import { removeFromCart, orderNow } from '../../actions';
import Cart from './Cart';

const mapStateToProps = state => ({
  cart: state.cart,
  orders: state.orders,
  products: state.products.products
});
const mapDispatchToProps = dispatch => ({
  removeFromCart: data => dispatch(removeFromCart(data)),
  createNotification: config => dispatch(createNotification(config)),
  orderNowItem: data => dispatch(orderNow(data))
});
const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;
