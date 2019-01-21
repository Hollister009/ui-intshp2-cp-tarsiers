import React, { Component } from 'react';

import Carousel from '../../shared/Carousel';
import ProductItem from '../../shared/ProductItem';

import './WishList.scss';

const CN = 'whishlist';
const title = 'Best sales';

// eslint-disable-next-line react/prefer-stateless-function
class WishList extends Component {
  render() {
    const { products } = this.props;
    const titleArr = title.split(' ');

    const list =
      products && products.map(el => <ProductItem key={el._id} data={el} />);

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
          <Carousel data={products}>{list}</Carousel>
        </div>
      </section>
    );
  }
}

export default WishList;
