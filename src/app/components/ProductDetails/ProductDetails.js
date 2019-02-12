import React from 'react';
import ProductDescription from '../ProductDescription/ProductDescription';
import ImgPreview from '../ProductDescription/ImgPreview';

const ProductDetails = props => {
  const { id, products } = props;

  const item = products.find(el => el._id === id);

  if (!item) {
    return null;
  }

  return (
    <div className="product-details">
      <ImgPreview item={item} />
      <ProductDescription item={item} />
    </div>
  );
};

export default ProductDetails;
