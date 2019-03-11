import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
  cart: state.cart,
  headerFooterVisibility: state.headerFooterVisibility
});

export default connect(mapStateToProps)(Header);
