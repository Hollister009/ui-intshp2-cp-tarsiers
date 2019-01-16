import React, { Component } from 'react';
import { connect } from 'react-redux';

import Carousel from '../Carousel/Carousel';
import styles from './ProductContainer.module.scss';

class ProductContainer extends Component {
  title = 'New Arrivals';

  render() {
    const { products } = this.props;
    const titleArr = this.title.split(' ');

    return (
      products && (
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
            <Carousel itemsPerView={4} data={products.products} />
          </div>
        </section>
      )
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(ProductContainer);
