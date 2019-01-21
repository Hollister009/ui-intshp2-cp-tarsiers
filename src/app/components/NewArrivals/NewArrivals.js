import React, { Component } from 'react';

import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';
import Carousel from '../../shared/Carousel';
import ProductItem from '../../shared/ProductItem';

import './NewArrivals.scss';

const CN = 'new-arrivals';
const title = 'New Arrivals';

class NewArrivals extends Component {
  state = { products: [], extended: true };

  componentDidMount() {
    HttpService.get(appConfig.apiResources.products).then(res =>
      this.setState({ products: res.data })
    );
  }

  render() {
    const { products, extended } = this.state;
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
