import React, { Component } from 'react';

import Carousel from '../../shared/Carousel';
import ProductItem from '../../shared/ProductItem';

import './NewArrivals.scss';

const CN = 'new-arrivals';
const title = 'New Arrivals';

class NewArrivals extends Component {
  state = { extended: true };

  render() {
    const { products } = this.props;
    const { extended } = this.state;
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
  }
}

export default NewArrivals;
