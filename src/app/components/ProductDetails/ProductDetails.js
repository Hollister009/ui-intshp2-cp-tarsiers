import React from 'react';
import ProductDescription from '../ProductDescription/ProductDescription';
import ImgPreview from './ImgPreview';

const ProductDetails = props => {
  const { id, products } = props;

  const item = products.find(el => el._id === id);

  return (
    <div className="container">
      <ProductDescription item={item} />
      <ImgPreview item={item} />
    </div>
  );
};

export default ProductDetails;
