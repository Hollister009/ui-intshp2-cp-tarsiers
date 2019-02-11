import { connect } from 'react-redux';
import { createNotification } from 'react-redux-notify';
import { addToWishList, removeFromWishList } from '../../actions';
import ProductItem from './ProductItem';

const mapStateToProps = state => ({ wishlist: state.wishlist.wishlist });
const mapDispatchToProps = dispatch => ({
  addToWishListItem: data => dispatch(addToWishList(data)),
  removeFromWishListItem: data => dispatch(removeFromWishList(data)),
  createNotification: config => dispatch(createNotification(config))
});

const ProductItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem);

export default ProductItemContainer;
