import React from 'react';
import styles from './ProductItem.module.scss';

const DisplayFront = props => {
  const { src, title, price } = props;

  return (
    <React.Fragment>
      <img src={src} alt="" />
      <h4>{title}</h4>
      <span className="highlighted">{`${price} $`}</span>
    </React.Fragment>
  );
};

const DisplayDetails = props => {
  const {
    _id,
    src,
    title,
    sizes,
    colors,
    addToWishList,
    removeFromWishList
  } = props;
  const colorPins = colors.map(color => (
    <div key={color} style={{ backgroundColor: `${color}` }} />
  ));
  const allSizesArr = sizes.map((size, i) => (i !== 0 ? `- ${size}` : size));

  return (
    <React.Fragment>
      <img className={styles.img_small} src={src} alt="" />
      <h4 className="highlighted">{title}</h4>
      <div className={styles.sizes}>{`sizes : ${allSizesArr.join(' ')}`}</div>
      <div className={styles.color_circle}>{colorPins}</div>
      <hr className="separate" />
      <div className="social_buttons">
        <button type="button" title="Share with others">
          <i className="fas fa-share-alt" />
        </button>
        <button type="button" title="Add to shopping-cart">
          <i className="fas fa-shopping-cart" />
        </button>
        <button
          type="button"
          onClick={e => addToWishList(e, _id)}
          title="Add to wish-list"
        >
          <i className="fas fa-heart" />
        </button>
      </div>
    </React.Fragment>
  );
};

export { DisplayFront, DisplayDetails };
