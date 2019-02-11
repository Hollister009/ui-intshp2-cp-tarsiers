import { connect } from 'react-redux';
import { addToCart } from '../../actions';
import ProductDetails from './ProductDetails';

const mapStateToProps = state => ({
  products: state.products.products,
  wishlist: state.wishlist.wishlist
});
const mapDispatchToProps = dispatch => ({
  addToCart: data => dispatch(addToCart(data))
});
const ProductDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);

export default ProductDetailsContainer;
