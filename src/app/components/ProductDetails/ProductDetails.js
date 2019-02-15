import React, { Component } from 'react';
import ProductDescriptionContainer from '../ProductDescription/ProductDescriptionContainer';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import Spinner from '../../shared/Spinner';
import {
  isAddedToCart,
  isAddedToWishList
} from '../../../utils/inCartInWishlist.service';

class ProductDetails extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { id, products, wishlist, cart } = this.props;
    const item = products.find(el => el._id === id);

    return (
      <div className="container">
        {item ? (
          <React.Fragment>
            <ProductDescriptionContainer
              item={item}
              wished={isAddedToWishList(id, wishlist)}
              inCart={isAddedToCart(id, cart)}
            />
            <RelatedProducts
              id={id}
              item={item}
              products={products}
              wishlist={wishlist}
              cart={cart}
            />
          </React.Fragment>
        ) : (
          <Spinner height="80vh" />
        )}
      </div>
    );
  }
}

export default ProductDetails;
