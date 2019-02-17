import { connect } from 'react-redux';
import ProductDetails from './ProductDetails';

const mapStateToProps = state => ({
  products: state.products.products,
  wishlist: state.wishlist.wishlist,
  cart: state.cart
});
const ProductDetailsContainer = connect(mapStateToProps)(ProductDetails);

export default ProductDetailsContainer;
