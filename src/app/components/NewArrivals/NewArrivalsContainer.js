import { connect } from 'react-redux';
import NewArrivals from './NewArrivals';

const mapStateToProps = state => ({
  products: state.products.products,
  wishlist: state.wishlist.wishlist,
  cart: state.cart
});

const NewArrivalsContainer = connect(mapStateToProps)(NewArrivals);

export default NewArrivalsContainer;
