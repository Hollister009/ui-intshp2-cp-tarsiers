/* eslint-disable object-curly-newline */
import React from 'react';
import { PropTypes } from 'prop-types';
import Carousel from '../../shared/Carousel';
import ProductItemContainer from '../../shared/ProductItem/ProductItemContainer';

import './WishList.scss';

const CN = 'wishlist';
const title = 'Best sales';

const WishList = props => {
  const { products, wishlist } = props;
  const titleArr = title.split(' ');
  const filteredProducts = products.filter(item => wishlist.includes(item._id));

  const list =
    !!wishlist.length &&
    filteredProducts.map(el => <ProductItemContainer key={el._id} data={el} />);

  return (
    <section className={`${CN}`}>
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
      <div className={`${CN}__display`}>
        <Carousel data={filteredProducts}>{list}</Carousel>
      </div>
    </section>
  );
};

WishList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  wishlist: PropTypes.arrayOf(PropTypes.string)
};

/**
 * For the test purpose fake data
 */
WishList.defaultProps = {
  products: [
    {
      _id: '5c473090e7179a544940dfec',
      src: '/images/products/running-jacket.png',
      title: 'Reebok Track Jacket',
      price: 100,
      sizes: ['s', 'm', 'l', 'xl'],
      colors: ['#e12e3f', '#34404b', '#3ab3ff', '#2fd967']
    }
  ],
  wishlist: ['5c473090e7179a544940dfec']
};

export default WishList;
