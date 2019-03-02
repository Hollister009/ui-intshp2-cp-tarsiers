/* eslint-disable object-curly-newline */
import React from 'react';
import { PropTypes } from 'prop-types';
import Carousel from '../../shared/Carousel';
import ProductItemContainer from '../../shared/ProductItem/ProductItemContainer';
import { isAddedToCart } from '../../../utils/inCartInWishlist.service';

import styles from './WishList.module.scss';

const title = 'Wish list';
const message = 'Currently your wishlist is empty. Add products to it first';

const WishList = props => {
  const { wishlist, cart } = props;

  console.log('wishlist props', props);

  const titleArr = title.split(' ');

  const list =
    wishlist.length &&
    wishlist.map(el => (
      <ProductItemContainer
        key={el._id}
        data={el}
        isAddedToCart={isAddedToCart(el._id, cart)}
      />
    ));

  return !list.length ? null : (
    <section className={styles.wishlist}>
      <div className="section_heading">
        <h2>
          <span className="highlighted">{titleArr[0]}</span>
          &nbsp;
          {titleArr[1]}
        </h2>
        {!wishlist.length ? <p>{message}</p> : ''}
      </div>
      <div className={styles.wishlist__display}>
        <Carousel data={wishlist}>{list}</Carousel>
      </div>
    </section>
  );
};

WishList.propTypes = {
  wishlist: PropTypes.arrayOf(PropTypes.string)
};

WishList.defaultProps = {
  wishlist: []
};

export default WishList;
