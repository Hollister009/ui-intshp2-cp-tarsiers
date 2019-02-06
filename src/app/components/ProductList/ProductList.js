import React, { Component } from 'react';
import ProductItemContainer from '../../shared/ProductItem/ProductItemContainer';
import Spinner from '../../shared/Spinner/index';
import './ProductList.scss';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { showButton: false };
    this.scrollRef = React.createRef();
    this.scrollSet = false;
    this.setClass = 'hide';
  }

  componentDidMount() {
    this.scroll = this.throttled(500, this.handleScroll.bind(this));
  }

  throttled = (delay, fn) => {
    let lastCall = 0;

    return function kek(...args) {
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
    const { filteredItems } = this.props;
    const { showButton } = this.state;

    if (prevProps.filteredItems.length > filteredItems.length) {
      this.setState({ showButton: false });
      this.scrollSet = false;
    } else if (filteredItems.length >= 12 && !showButton) {
      this.setState({ showButton: true });
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

    const { sizes, brands, category, price, available, skip, limit } = filter;

    const params = { sizes, brands, category, price, available, skip, limit };
    const scrollHeight = this.scrollRef.current.offsetHeight;
    const threshold = 450;

    if (window.scrollY >= scrollHeight - threshold) {
      const skipped = skip === 0 ? limit : skip + limit;

      if (filteredItems.length >= 12) {
        this.scrollSet = false;
        window.removeEventListener('scroll', this.scroll);
        this.setState({ showButton: true });
      } else {
        updateLimit(3);
        updateSkip(skipped);
        params.limit = 3;
        params.skip = skipped;

        getFilteredProducts({ params }).then(res => {
          addItemsToFiltered(res.data);
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

    updateLimit(3);
    updateSkip(skipped);
    params.limit = 3;
    params.skip = skipped;

    getFilteredProducts({ params }).then(res => addItemsToFiltered(res.data));
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.scroll);
  };

  isAddedtoWishList = id => this.wishlist.includes(id);

  render() {
    const { filteredItems, wishlist } = this.props;
    const isAddedtoWishList = id => wishlist.includes(id);

    if (!filteredItems.length) {
      return (
        <div className="spin-position">
          <Spinner />
        </div>
      );
    }
    const { showButton } = this.state;
    const list =
      filteredItems &&
      filteredItems.map(el => (
        <ProductItemContainer
          key={el._id}
          data={el}
          isAddedtoWishList={isAddedtoWishList(el._id)}
          extended
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
