import React from 'react';
import { Flags } from 'react-feature-flags';

import appConfig from '../../../config/appConfig';

const CN = 'product-item--full';

const ViewFrontFull = props => {
  const { src, title, price } = props;

  return (
    <React.Fragment>
      <img className={`${CN}__img`} src={src} alt="" />
      <h4>{title}</h4>
      <span className="highlighted">{`${price} $`}</span>
    </React.Fragment>
  );
};

const ViewDetailsFull = props => {
  const { _id, src, title, sizes, colors, clickHandler } = props;
  const colorPins = colors.map(color => (
    <div key={color} style={{ backgroundColor: `${color}` }} />
  ));
  const allSizesArr = sizes.map((size, i) => (i !== 0 ? `- ${size}` : size));

  return (
    <React.Fragment>
      <img className={`${CN}__img-small`} src={src} alt="" />
      <h4 className="highlighted">{title}</h4>
      <div className={`${CN}__sizes`}>{`sizes : ${allSizesArr.join(' ')}`}</div>
      <div className={`${CN}__swatches`}>{colorPins}</div>
      <hr className="separate" />
      <div className="social_buttons">
        <button type="button" title="Share with others">
          <i className="fas fa-share-alt" />
        </button>
        <button type="button" title="Add to shopping-cart">
          <i className="fas fa-shopping-cart" />
        </button>
        <Flags authorizedFlags={[appConfig.killswitch.wishlist]}>
          <button
            type="button"
            onClick={e => clickHandler(e, _id)}
            title="Add to wish-list"
          >
            <i className="fas fa-heart" />
          </button>
        </Flags>
      </div>
    </React.Fragment>
  );
};

export { ViewFrontFull, ViewDetailsFull };
