import React from 'react';

import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';
import './WishListContainer.scss';
import Carousel from '../Carousel/Carousel';
import styles from '../ProductContainer/ProductContainer.module.scss';

// localStorage.clear();
// localStorage.setItem('products', JSON.stringify(products));

class WishListContainer extends React.Component {
  state = { products: [] };

  componentWillMount() {
    HttpService.get(appConfig.apiResources.products).then(res =>
      this.setState({ products: [...res] })
    );
  }

  render() {
    const { products } = this.state;

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
          <Carousel itemsPerView={3} data={products} />
        </div>
      </section>
    );
  }
}

export default WishListContainer;
