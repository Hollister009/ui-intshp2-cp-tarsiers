import React from 'react';
import ProductDescription from '../ProductDescription/ProductDescription';

const ProductDetails = props => {
  const { id, products } = props;

  const item = products.find(el => el._id === id);

  return (
    <div className="container">
      <ProductDescription item={item} />
    </div>
  );
};

export default ProductDetails;
