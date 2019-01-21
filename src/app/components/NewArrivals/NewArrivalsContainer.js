import { connect } from 'react-redux';
import { getProducts, getWishList } from '../../actions';
import NewArrivals from './NewArrivals';

const mapStateToProps = state => ({
  whishlist: state.whishlist.whishlist,
  products: state.products.products
});
const mapDispatchToProps = dispatch => ({
  getWhishListItems: data => dispatch(getWishList(data)),
  getProductsItems: data => dispatch(getProducts(data))
});
const NewArrivalsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewArrivals);

export default NewArrivalsContainer;
