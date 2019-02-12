import React from 'react';
import ProductDescription from '../ProductDescription/ProductDescription';
import ImgPreview from '../ProductDescription/ImgPreview';
// import ImgSwitch from '../ProductDescription/ImgSwitch';

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
      {/* <ImgSwitch item={item} /> */}
    </div>
  );
};

export default ProductDetails;
