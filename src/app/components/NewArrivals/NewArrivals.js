import React from 'react';
import PropTypes from 'prop-types';

import Carousel from '../../shared/Carousel';
import ProductItemContainer from '../../shared/ProductItem/ProductItemContainer';

import styles from './NewArrivals.module.scss';
import cart from '../../reducers/cart';

const title = 'New Arrivals';

const NewArrivals = props => {
  const { products, wishlist } = props;
  const extended = true;
  const titleArr = title.split(' ');
  const isAddedtoWishList = id => wishlist.includes(id);
  const isAddedToCart = id => cart.includes(id);

  const list =
    products &&
    products.map(el => (
      <ProductItemContainer
        isAddedtoWishList={isAddedtoWishList(el._id)}
        isAddedToCart={isAddedToCart(el._id)}
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
        <Carousel data={products} extended>
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
