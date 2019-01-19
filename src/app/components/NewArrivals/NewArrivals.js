import React, { Component } from 'react';

import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';
import Carousel from '../Carousel/Carousel';
import ProductItem from '../../shared/ProductItem/ProductItem';

import styles from './NewArrivals.scss';

class ProductContainer extends Component {
  title = 'New Arrivals';

  state = { products: [], extended: true };

  componentDidMount() {
    HttpService.get(appConfig.apiResources.products).then(res =>
      this.setState({ products: res })
    );
  }

  updateTranslateStep = value => {
    this.setState({
      translateStep: value
    });
  };

  render() {
    const { products, extended, translateStep } = this.state;
    const titleArr = this.title.split(' ');

    const list =
      products &&
      products.map(el => (
        <ProductItem
          extended={extended}
          key={el._id}
          updateTranslateStep={this.updateTranslateStep}
          data={el}
        />
      ));

    return (
      <section className={`${styles.products} container`}>
        <div className={styles.products_heading}>
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
        <div className={styles.products_list}>
          <Carousel
            itemsPerView={4}
            data={products}
            translateStep={translateStep}
            extended
          >
            {list}
          </Carousel>
        </div>
      </section>
    );
  }
}

export default ProductContainer;
