import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
  ...state,
  cart: state.cart
});

export default connect(mapStateToProps)(Header);
