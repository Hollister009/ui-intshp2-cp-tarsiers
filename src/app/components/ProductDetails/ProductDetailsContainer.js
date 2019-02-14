import { connect } from 'react-redux';
import ProductDetails from './ProductDetails';

const mapStateToProps = state => ({
  products: state.products.products,
  wishlist: state.wishlist.wishlist,
  cart: state.cart
});
const mapDispatchToProps = () => ({});
const ProductDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);

export default ProductDetailsContainer;
