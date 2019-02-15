import { connect } from 'react-redux';
import WishList from './WishList';

const mapStateToProps = state => ({
  products: state.products.products,
  wishlist: state.wishlist.wishlist,
  cart: state.cart
});

const WishlistContainer = connect(mapStateToProps)(WishList);

export default WishlistContainer;
