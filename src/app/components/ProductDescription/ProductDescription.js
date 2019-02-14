import React, { Component } from 'react';
import productType from '../../../types';
import appConfig from '../../../config/appConfig';
import styles from './ProductDescription.module.scss';

class ProductDescription extends Component {
  static propTypes = { item: productType };

  static defaultProps = { item: null };

  state = { quantity: 0 };

  increment = () => {
    this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
  };

  decrement = () => {
    const { quantity } = this.state;

    if (quantity > 0) {
      this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
    }
  };

  render() {
    const { item } = this.props;
    const { quantity } = this.state;

    if (!item) {
      return null;
    }

    const price = quantity > 0 ? item.price * quantity : item.price;
    const sizes = item.sizes.map((element, index, array) => (
      <React.Fragment key={element}>
        <a href="/" className={styles.size} onClick={e => e.preventDefault()}>
          {element}
        </a>
        {index + 1 !== array.length ? <span>-</span> : null}
      </React.Fragment>
    ));

    return (
      <section className={styles.section}>
        <div className={styles.details}>
          <div className={styles.info}>
            <h1 className={styles.title}>{item.title}</h1>
            <h3 className={styles.subtitle}>
              {appConfig.productDescription.subheader}
            </h3>
            <p className={styles.text}>
              {appConfig.productDescription.description}
            </p>
          </div>
          <div className={styles.select}>
            <div className={styles.flex_row}>
              <p className={styles.choose}>Choose Size</p>
              <div className={styles.sizes}>{sizes}</div>
            </div>
            <div className={styles.flex_row}>
              <p className={styles.choose}>Choose Quantity</p>
              <div className={styles.quantity}>
                <button
                  type="button"
                  onClick={this.increment}
                  data-type="increment"
                >
                  &#43;
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={this.decrement}
                  data-type="decrement"
                >
                  &#45;
                </button>
              </div>
            </div>
          </div>
          <div className={styles.order}>
            <p className={styles.price}>{`Price: ${price}$`}</p>
            <div className={styles.buttons_row}>
              <button type="button">
                <i className="fas fa-globe" />
              </button>
              <button type="button">
                <i className="fas fa-cart-plus" />
              </button>
              <button type="button">
                <i className="far fa-heart" />
              </button>
              <button type="button" className={styles.btn_order}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDescription;
