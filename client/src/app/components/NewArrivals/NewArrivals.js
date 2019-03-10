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
  const { newArrivals, wishlist, cart } = props;
  const extended = true;
  const titleArr = title.split(' ');

  const list =
    newArrivals &&
    newArrivals.map(el => (
      <ProductItemContainer
        isAddedToWishList={isAddedToWishList(el._id, wishlist)}
        isAddedToCart={isAddedToCart(el._id, cart)}
        extended={extended}
        key={el._id}
        data={el}
      />
    ));

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
        <Carousel data={newArrivals} extended>
          {list}
        </Carousel>
      </div>
    </section>
  );
};

NewArrivals.propTypes = {
  newArrivals: PropTypes.arrayOf(PropTypes.object)
};

NewArrivals.defaultProps = {
  newArrivals: []
};

export default NewArrivals;
