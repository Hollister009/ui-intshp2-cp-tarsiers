import { connect } from 'react-redux';
import {
  setCategory,
  addSize,
  removeSize,
  addBrand,
  removeBrand,
  updateMinPrice,
  updateMaxPrice,
  toggleAvailability,
  updateSkip,
  updateLimit
} from '../../actions/filterActions';
import { updateFiltered } from '../../actions/index';
import FilterArea from './FilterArea';

const mapStateToProps = state => ({
  wishlist: state.wishlist.wishlist,
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
  toggleAvailability: () => dispatch(toggleAvailability()),
  updateFiltered: data => dispatch(updateFiltered(data)),
  updateLimit: data => dispatch(updateLimit(data)),
  updateSkip: data => dispatch(updateSkip(data))
});
const FilterAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterArea);

export default FilterAreaContainer;
