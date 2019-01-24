import { connect } from 'react-redux';
import WishList from './WishList';

const mapStateToProps = state => ({
  whishlist: state.whishlist.whishlist
});

const WhishListContainer = connect(mapStateToProps)(WishList);

export default WhishListContainer;
