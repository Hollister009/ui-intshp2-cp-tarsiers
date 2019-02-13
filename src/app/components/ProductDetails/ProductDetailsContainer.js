import { connect } from 'react-redux';
import ProductDetails from './ProductDetails';

const mapStateToProps = state => ({
  products: state.products.products
});
const mapDispatchToProps = () => ({});
const ProductDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);

export default ProductDetailsContainer;
