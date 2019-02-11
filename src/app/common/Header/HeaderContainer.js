import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
  ...state,
  cart: [state.cart.value, state.cart.productIds]
});

export default connect(mapStateToProps)(Header);
