import { connect } from 'react-redux';
import {
  setCategory,
  addSize,
  removeSize,
  addBrand,
  removeBrand,
  updateMinPrice,
  updateMaxPrice,
  toggleAvailability
} from '../actions/filterActions';
import ProductsListPage from './PLP';

const mapStateToProps = state => ({
  whishlist: state.whishlist.whishlist,
  products: state.products.products,
  filter: state.filter
});
const mapDispatchToProps = dispatch => ({
  setCategory: data => dispatch(setCategory(data)),
  addSize: data => dispatch(addSize(data)),
  removeSize: data => dispatch(removeSize(data)),
  addBrand: data => dispatch(addBrand(data)),
  removeBrand: data => dispatch(removeBrand(data)),
  updateMinPrice: data => dispatch(updateMinPrice(data)),
  updateMaxPrice: data => dispatch(updateMaxPrice(data)),
  toggleAvailability: data => dispatch(toggleAvailability(data))
});
const ProductListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsListPage);

export default ProductListContainer;
