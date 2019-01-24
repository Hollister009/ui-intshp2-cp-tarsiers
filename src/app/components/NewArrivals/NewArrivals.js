import React from 'react';
import PropTypes from 'prop-types';

import Carousel from '../../shared/Carousel';
import ProductItem from '../../shared/ProductItem/ProductItem';

import './NewArrivals.scss';

const CN = 'new-arrivals';
const title = 'New Arrivals';

const NewArrivals = props => {
  const { products } = props;
  const extended = true;
  const titleArr = title.split(' ');

  const list =
    products &&
    products.map(el => (
      <ProductItem extended={extended} key={el._id} data={el} />
    ));

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
        <Carousel data={products} extended>
          {list}
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
