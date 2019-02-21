import { connect } from 'react-redux';
import { updateFiltered, addItemsToFiltered } from '../../actions';
import { updateSkip, updateLimit } from '../../actions/filterActions';
import ProductList from './ProductList';

const mapStateToProps = state => ({
  products: state.products.products,
  wishlist: state.wishlist.wishlist,
  cart: state.cart,
  filteredItems: state.filteredProducts.items,
  filter: state.filter
});
const mapDispatchToProps = dispatch => ({
  updateFiltered: data => dispatch(updateFiltered(data)),
  updateSkip: data => dispatch(updateSkip(data)),
  updateLimit: data => dispatch(updateLimit(data)),
  addItemsToFiltered: data => dispatch(addItemsToFiltered(data))
});
const ProductListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);

export default ProductListContainer;
