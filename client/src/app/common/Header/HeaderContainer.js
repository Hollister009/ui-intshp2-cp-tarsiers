import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
  cart: state.cart,
  toggleHFVisibility: state.toggleHFVisibility
});

export default connect(mapStateToProps)(Header);
