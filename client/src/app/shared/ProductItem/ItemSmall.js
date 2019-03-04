import React from 'react';
import { Notify } from 'react-redux-notify';
import NotifyService from '../../../utils/notify.service';

const ViewCartSmall = props => {
  const {
    id,
    title,
    styles,
    inCart,
    addToCart,
    removeFromCart,
    createNotification
  } = props;

  const toggleCart = e => {
    e.preventDefault();
    const cb = !inCart ? addToCart : removeFromCart;

    if (!inCart) {
      createNotification(NotifyService.cartAdd);
    } else {
      createNotification(NotifyService.cartRemove);
    }

    cb(id);
  };

  const addToCartText = 'Add to cart';
  const rmFromCartText = 'Remove from cart';

  return (
    <div className={styles.small__info}>
      <h4>{title}</h4>
      <Notify position={NotifyService.position.topRight} />
      <button
        type="button"
        className={styles.cart}
        onClick={e => toggleCart(e)}
      >
        {!inCart ? (
          <span className>
            <i className="fas fa-cart-plus" />
            {addToCartText}
          </span>
        ) : (
          <span>
            <i className="fas fa-cart-arrow-down" />
            {rmFromCartText}
          </span>
        )}
      </button>
    </div>
  );
};

const ViewInfoSmall = props => {
  const { title, price, styles } = props;

  return (
    <div className={styles.small__info}>
      <h4>{title}</h4>
      <div className={styles.info_group}>
        <div className={styles.rating}>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
        <span className={`${styles.price} highlighted`}>{`${price} $`}</span>
      </div>
    </div>
  );
};

export { ViewCartSmall, ViewInfoSmall };
