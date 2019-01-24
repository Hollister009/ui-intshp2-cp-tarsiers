import React from 'react';
import { PropTypes } from 'prop-types';
import Carousel from '../../shared/Carousel';
import ProductItem from '../../shared/ProductItem/ProductItem';

import './WishList.scss';

const CN = 'whishlist';
const title = 'Best sales';

const WishList = props => {
  const { wishlist } = props;
  const titleArr = title.split(' ');

  const list =
    wishlist && wishlist.map(el => <ProductItem key={el._id} data={el} />);

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
        <Carousel data={wishlist}>{list}</Carousel>
      </div>
    </section>
  );
};

WishList.propTypes = {
  wishlist: PropTypes.arrayOf(PropTypes.object)
};

WishList.defaultProps = {
  // For the sake of test purpose assign one item
  wishlist: [
    {
      _id: 9000,
      src: '/images/products/running-jacket.png',
      title: 'Reebok Track Jacket',
      price: 100,
      sizes: ['s', 'm', 'l', 'xl'],
      colors: ['#e12e3f', '#34404b', '#3ab3ff', '#2fd967']
    }
  ]
};

export default WishList;
