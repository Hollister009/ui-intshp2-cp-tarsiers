import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../shared/Spinner';
import { cartType } from '../../types';
import {
  isAddedToCart,
  isAddedToWishList
} from '../../../utils/inCartInWishlist.service';
import ProductDescriptionContainer from './ProductDescription/ProductDescriptionContainer';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import ImagePreview from '../ImagePreview/ImagePreview';
import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';

const { products } = appConfig.apiResources;

class ProductDetails extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    wishlist: PropTypes.arrayOf(PropTypes.string),
    cart: cartType.isRequired
  };

  static defaultProps = { wishlist: [] };

  state = { item: null };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.updateMainProduct();
  };

  componentDidUpdate = () => {
    const { item } = this.state;
    const { id } = this.props;

    if (item) {
      if (item._id !== id) {
        this.updateMainProduct();
      }
    }
  };

  updateMainProduct = () => {
    const { id } = this.props;

    const params = {
      _id: id
    };

    HttpService.get(products, { params }).then(res => {
      this.setState({ item: res.data[0] });
    });
  };

  render() {
    const { id, wishlist, cart } = this.props;
    const { item } = this.state;
    const wished = isAddedToWishList(id, wishlist);
    const inCart = isAddedToCart(id, cart);

    return item ? (
      <React.Fragment>
        <ProductDescriptionContainer
          item={item}
          wished={wished}
          inCart={inCart}
        >
          <ImagePreview item={item} />
        </ProductDescriptionContainer>
        <RelatedProducts item={item} wishlist={wishlist} cart={cart} />
      </React.Fragment>
    ) : (
      <div className="container">
        <Spinner height="80vh" />
      </div>
    );
  }
}

export default ProductDetails;
