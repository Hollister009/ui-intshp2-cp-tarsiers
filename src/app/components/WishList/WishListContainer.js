import { connect } from 'react-redux';
import WishList from './WishList';

const mapStateToProps = state => ({
  products: state.products.products,
  wishlist: state.wishlist.wishlist
});

const wishlistContainer = connect(mapStateToProps)(WishList);

export default wishlistContainer;
