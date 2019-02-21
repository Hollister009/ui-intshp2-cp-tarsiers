import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../shared/Spinner';
import { productType, cartType } from '../../types';
import {
  isAddedToCart,
  isAddedToWishList
} from '../../../utils/inCartInWishlist.service';
import ProductDescriptionContainer from './ProductDescription/ProductDescriptionContainer';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import ImagePreview from '../ImagePreview/ImagePreview';

class ProductDetails extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(productType),
    wishlist: PropTypes.arrayOf(PropTypes.string),
    cart: cartType.isRequired
  };

  static defaultProps = { products: [], wishlist: [] };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { id, products, wishlist, cart } = this.props;
    const item = products.find(el => el._id === id);
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
