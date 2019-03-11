import React from 'react';

const CartItemView = props => {
  const { item, total, styles, sizes, colors, quantity, itemRemove } = props;

  return (
    item && (
      <div className={styles.block}>
        <img src={item.src} alt={item.title} className={styles.image} />
        <h3 className={styles.title}>{item.title}</h3>
        <div className={styles.select_colors}>
          <div className={styles.scrollbar}>{colors}</div>
        </div>
        <div className={styles.select_sizes}>
          <div className={styles.scrollbar}>{sizes}</div>
        </div>
        <div>{item.price}</div>
        <div className={styles.select_quantity}>{quantity}</div>
        <button
          type="button"
          className={styles.remove_btn}
          onClick={itemRemove}
          data-type="remove-btn"
        >
          <i className="far fa-trash-alt" />
        </button>
        <h3 className={styles.total}>{total}</h3>
      </div>
    )
  );
};

export default CartItemView;
