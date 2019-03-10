import { connect } from 'react-redux';
import NewArrivals from './NewArrivals';

const mapStateToProps = state => ({
  newArrivals: state.products.newArrivals,
  wishlist: state.wishlist.wishlist,
  cart: state.cart
});

const NewArrivalsContainer = connect(mapStateToProps)(NewArrivals);

export default NewArrivalsContainer;
