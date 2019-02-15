import React from 'react';
import PropTypes from 'prop-types';

import Carousel from '../../shared/Carousel';
import ProductItemContainer from '../../shared/ProductItem/ProductItemContainer';
import {
  isAddedToCart,
  isAddedToWishList
} from '../../../utils/inCartInWishlist.service';
import styles from './NewArrivals.module.scss';

const title = 'New Arrivals';

const NewArrivals = props => {
  const { products, wishlist, cart } = props;
  const extended = true;
  const titleArr = title.split(' ');

  const list =
    products &&
    products.map(el => (
      <ProductItemContainer
        isAddedToWishList={isAddedToWishList(el._id, wishlist)}
        isAddedToCart={isAddedToCart(el._id, cart)}
        extended={extended}
        key={el._id}
        data={el}
      />
    ));

  const newArrivals = list.slice(0, 9);

  return (
    <section className={styles.arrivals}>
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
      <div className={styles.arrivals__display}>
        <Carousel data={products.slice(0, 9)} extended>
          {newArrivals}
        </Carousel>
      </div>
    </section>
  );
};

NewArrivals.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};

NewArrivals.defaultProps = {
  products: []
};

export default NewArrivals;
