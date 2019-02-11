import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../shared/Carousel/index';
import ProductItemContainer from '../../shared/ProductItem/ProductItemContainer';

import './RelatedProducts.scss';

const title = 'Related Products';

const RelatedProducts = props => {
  const titleArr = title.split(' ');
  const { products, wishlist } = props;
  const extended = true;
  const isAddedtoWishList = id => wishlist.includes(id);

  const list =
    products &&
    products.map(el => (
      <ProductItemContainer
        isAddedtoWishList={isAddedtoWishList(el._id)}
        extended={extended}
        key={el._id}
        data={el}
      />
    ));

  return (
    <section className="container related-products">
      <div className="section_heading">
        <h2>
          <span className="highlighted">{titleArr[0]}</span>
          &nbsp;
          {titleArr[1]}
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <Carousel data={products} extended>
        {list}
      </Carousel>
    </section>
  );
};

RelatedProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  wishlist: PropTypes.arrayOf(PropTypes.string)
};

RelatedProducts.defaultProps = {
  products: [],
  wishlist: []
};

export default RelatedProducts;
