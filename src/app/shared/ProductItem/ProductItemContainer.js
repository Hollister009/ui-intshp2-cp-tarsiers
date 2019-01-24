import { connect } from 'react-redux';
import { addToWishList, removeFromWishList } from '../../actions';
import ProductItem from './ProductItem';

const mapStateToProps = state => ({ whishlist: state.whishlist.whishlist });
const mapDispatchToProps = dispatch => ({
  addToWishList: data => dispatch(addToWishList(data)),
  removeFromWishList: data => dispatch(removeFromWishList(data))
});

const ProductItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem);

export default ProductItemContainer;
