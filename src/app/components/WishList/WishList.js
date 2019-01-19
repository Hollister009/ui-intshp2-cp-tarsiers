import React, { Component } from 'react';

import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';
import Carousel from '../Carousel/Carousel';
import ProductItem from '../../shared/ProductItem/ProductItem';
import styles from '../NewArrivals/NewArrivals.scss';
import './WishList.scss';

class WishListContainer extends Component {
  state = { products: [], extended: false };

  componentDidMount() {
    HttpService.get(appConfig.apiResources.products).then(res =>
      this.setState({ products: res })
    );
  }

  render() {
    const { products, extended, translateStep } = this.state;

    const list =
      products &&
      products.map(el => (
        <ProductItem extended={extended} key={el._id} data={el} />
      ));

    return (
      <section className={`${styles.products} container`}>
        <h2 className="wishlist-title">
          Wish
          <span> List</span>
        </h2>
        <div className={styles.products_heading}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className={styles.products_list}>
          <Carousel data={products} translateStep={translateStep}>
            {list}
          </Carousel>
        </div>
      </section>
    );
  }
}

export default WishListContainer;
