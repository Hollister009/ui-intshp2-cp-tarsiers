import React, { Component } from 'react';

import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';
import Carousel from '../Carousel/Carousel';
import './WishListContainer.scss';
import styles from '../NewArrivals/NewArrivals.module.scss';

class WishList extends Component {
  componentDidMount() {
    const { getWhishListItems } = this.props;

    HttpService.get(appConfig.apiResources.whishlist)
      .then(res => getWhishListItems(res.data))
      .catch(error => console.log(error));
  }

  render() {
    const { products, whishlist } = this.props;
    const filteredItems = products.filter(({ _id }) => whishlist.includes(_id));

    return (
      whishlist && (
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
            <Carousel itemsPerView={3} data={filteredItems} />
          </div>
        </section>
      )
    );
  }
}

export default WishList;
