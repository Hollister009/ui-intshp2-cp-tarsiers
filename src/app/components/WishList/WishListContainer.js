import { connect } from 'react-redux';
import WishList from './WishList';

const mapStateToProps = state => ({
  products: state.products.products,
  wishlist: state.wishlist.wishlist
});

const WishlistContainer = connect(mapStateToProps)(WishList);

export default WishlistContainer;
