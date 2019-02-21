import React, { Component } from 'react';
import ProductItemContainer from '../../shared/ProductItem/ProductItemContainer';
import Spinner from '../../shared/Spinner/index';
import './ProductList.scss';
import {
  isAddedToCart,
  isAddedToWishList
} from '../../../utils/inCartInWishlist.service';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { showButton: false };
    this.scrollRef = React.createRef();
    this.scrollSet = false;
    this.setClass = 'hide';
  }

  componentDidMount() {
    this.forceUpdate();

    this.scroll = this.throttled(500, this.handleScroll.bind(this));
  }

  throttled = (delay, fn) => {
    let lastCall = 0;

    return function mock(...args) {
      const now = new Date().getTime();

      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      // eslint-disable-next-line consistent-return
      return fn(...args);
    };
  };

  componentDidUpdate = prevProps => {
    const { filter } = this.props;

    const shouldUpdate =
      JSON.stringify(prevProps.filter) !== JSON.stringify(filter) &&
      prevProps.filter.skip === filter.skip &&
      prevProps.filter.limit === filter.limit;

    if (shouldUpdate) {
      const {
        getFilteredProducts,
        updateFiltered,
        updateSkip,
        updateLimit
      } = this.props;

      const { sizes, brands, price, available, category } = filter;

      updateSkip(0);
      updateLimit(6);

      const params = { sizes, brands, price, available, category };

      params.skip = 0;
      params.limit = 6;
      getFilteredProducts({ params }).then(res => updateFiltered(res.data));
      return;
    }

    const { filteredItems } = this.props;
    const { showButton } = this.state;

    if (prevProps.filteredItems.length > filteredItems.length) {
      this.setState({ showButton: false });
      this.scrollSet = false;
    } else if (filteredItems.length >= 12 && !showButton) {
      if (prevProps.filteredItems.length !== filteredItems.length) {
        this.setState({ showButton: true });
      } else {
        window.removeEventListener('scroll', this.scroll);
      }
    }

    if (!this.scrollSet) {
      window.addEventListener('scroll', this.scroll);
      this.scrollSet = true;
    }
  };

  handleScroll = () => {
    const {
      updateSkip,
      updateLimit,
      filteredItems,
      addItemsToFiltered,
      getFilteredProducts,
      filter
    } = this.props;

    const {
      sizes,
      brands,
      category,
      price,
      available,
      skip,
      limit,
      tag
    } = filter;

    const params = {
      sizes,
      brands,
      category,
      price,
      available,
      skip,
      limit,
      tag
    };

    let scrollHeight;

    if (filteredItems.length) {
      scrollHeight = this.scrollRef.current.offsetHeight;
    }
    const threshold = 450;

    if (window.scrollY >= scrollHeight - threshold) {
      const skipped = skip === 0 ? limit : skip + limit;

      if (filteredItems.length >= 12) {
        this.scrollSet = false;
        window.removeEventListener('scroll', this.scroll);
        this.setState({ showButton: true });
      } else {
        params.limit = 3;
        params.skip = skipped;

        updateLimit(3);
        updateSkip(skipped);

        getFilteredProducts({ params }).then(res => {
          addItemsToFiltered(res.data);
          if (res.data.length) {
            updateLimit(3);
            updateSkip(skipped);
          } else {
            this.scrollSet = false;
            window.removeEventListener('scroll', this.scroll);
          }
        });
      }
    }
  };

  handleClick = () => {
    const {
      updateSkip,
      updateLimit,
      addItemsToFiltered,
      getFilteredProducts,
      filter
    } = this.props;

    const { sizes, brands, category, price, available, skip, limit } = filter;

    const params = { sizes, brands, category, price, available, skip, limit };

    const skipped = skip === 0 ? limit : skip + limit;

    params.limit = 3;
    params.skip = skipped;

    getFilteredProducts({ params }).then(res => {
      addItemsToFiltered(res.data);
      if (res.data.length) {
        updateLimit(3);
        updateSkip(skipped);
      }
      if (res.data.length < params.limit) {
        this.setState({ showButton: false });
      }
    });
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.scroll);
  };

  render() {
    const { filteredItems, wishlist, cart } = this.props;
    const extended = true;

    if (!filteredItems.length) {
      return (
        <div className="product_list__page">
          <div className="spin-position">
            <Spinner />
          </div>
        </div>
      );
    }
    const { showButton } = this.state;
    const list =
      filteredItems &&
      filteredItems.map(el => (
        <ProductItemContainer
          isAddedToWishList={isAddedToWishList(el._id, wishlist)}
          isAddedToCart={isAddedToCart(el._id, cart)}
          extended={extended}
          key={el._id}
          data={el}
        />
      ));

    return (
      <div>
        <div className="product_list__page">
          <div className="products" ref={this.scrollRef}>
            <div className="product_list">{list}</div>
            <button
              type="button"
              className={showButton ? '' : 'hide'}
              onClick={this.handleClick}
            >
              <Dots />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const Dots = () => (
  <div className="dots">
    <i className="fas fa-circle" />
    <i className="fas fa-circle" />
    <i className="fas fa-circle" />
  </div>
);
