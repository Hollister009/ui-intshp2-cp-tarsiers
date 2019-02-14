import React from 'react';
import ProductDescriptionContainer from '../ProductDescription/ProductDescriptionContainer';
import {
  isAddedToCart,
  isAddedToWishList
} from '../../../utils/inCartInWishlist.service';

const ProductDetails = props => {
  const { id, products, wishlist, cart } = props;

  const item = products.find(el => el._id === id);

  return (
    <div className="container">
      {wishlist && cart ? (
        <ProductDescriptionContainer
          item={item}
          wished={isAddedToWishList(id, wishlist)}
          inCart={isAddedToCart(id, cart)}
        />
      ) : null}
    </div>
  );
};

export default ProductDetails;
