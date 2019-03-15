import React from 'react';
import { Link } from 'react-router-dom';

const CartItemView = props => {
  const { item, total, styles, markup, itemRemove } = props;
  const { sizes, colors, quantity } = markup;

  return (
    item && (
      <div className={styles.block}>
        <Link to={`/products/${item._id}`}>
          <img src={item.src} alt={item.title} className={styles.image} />
        </Link>
        <h3 className={styles.title}>{item.title}</h3>
        <div className={styles.select_colors}>
          <div className={styles.scrollbar}>{colors}</div>
        </div>
        <div className={styles.select_sizes}>
          <div className={styles.scrollbar}>{sizes}</div>
        </div>
        <div>{item.price.toFixed(2)}</div>
        <div className={styles.select_quantity}>{quantity}</div>
        <button
          type="button"
          className={styles.remove_btn}
          onClick={itemRemove}
          data-type="remove-btn"
        >
          <i className="far fa-trash-alt" />
        </button>
        <h3 className={styles.total}>{total.toFixed(2)}</h3>
      </div>
    )
  );
};

export default CartItemView;
