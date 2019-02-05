import { connect } from 'react-redux';
import { addToCart } from '../../actions';
import ProductDescription from './ProductDescription';

const mapStateToProps = state => ({
  products: state.products.products
});
const mapDispatchToProps = dispatch => ({
  addToCart: data => dispatch(addToCart(data))
});
const ProductDescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDescription);

export default ProductDescriptionContainer;
