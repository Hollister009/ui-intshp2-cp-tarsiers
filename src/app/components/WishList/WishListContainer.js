import { connect } from 'react-redux';
import { getWishList } from '../../actions';
import WhishList from './WhishList';

const mapStateToProps = state => ({
  whishlist: state.whishlist.whishlist,
  products: state.products.products
});
const mapDispatchToProps = dispatch => ({
  getWhishListItems: data => dispatch(getWishList(data))
});
const WhishListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WhishList);

export default WhishListContainer;
