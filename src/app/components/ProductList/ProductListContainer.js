import { connect } from 'react-redux';
import { getFiltered } from '../../actions';
import ProductList from './ProductList';

const mapStateToProps = state => ({
  products: state.products.products,
  filteredItems: state.filteredProducts.items
});
const mapDispatchToProps = dispatch => ({
  getFiltered: data => dispatch(getFiltered(data))
});
const ProductListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);

export default ProductListContainer;
