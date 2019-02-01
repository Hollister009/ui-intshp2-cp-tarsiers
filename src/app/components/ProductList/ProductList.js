import React, { Component } from 'react';
import ProductItem from '../../shared/ProductItem';
import Spinner from '../../shared/Spinner/index';
import './ProductList.scss';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { skip: 0, limit: 6, isButtonVisible: false };
    this.scrollRef = React.createRef();
    this.scrollSet = false;
    this.setClass = 'hide';
  }

  componentDidMount() {
    this.scroll = this.throttled(500, this.handleScroll.bind(this));
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    const { filteredItems } = this.props;
    const { isButtonVisible } = this.state;

    return (
      filteredItems !== nextProps.filteredItems ||
      isButtonVisible !== nextState.isButtonVisible
    );
  };

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

  componentDidUpdate = () => {
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
    const trashHold = 500;

    if (window.scrollY >= scrollHeight - trashHold) {
      const skipped = skip === 0 ? limit : skip + limit;

      if (filteredItems.length >= 15) {
        this.setState({ isButtonVisible: true });
        window.removeEventListener('scroll', this.scroll);
      } else {
        updateLimit(3);
        updateSkip(skipped);
        params.limit = 3;
        params.skip = skipped;

        getFilteredProducts({ params }).then(res =>
          addItemsToFiltered(res.data)
        );
      }
    }
  };

  handleClick = () => {
    const { skip, limit } = this.state;
    const skipped = skip === 0 ? limit : skip + limit;

    this.setState({
      skip: skipped,
      limit: 3
    });
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.scroll);
  };

  render() {
    const { filteredItems } = this.props;

    if (!filteredItems.length) {
      return <Spinner />;
    }
    const { isButtonVisible } = this.state;
    const list =
      filteredItems &&
      filteredItems.map(el => <ProductItem key={el._id} data={el} extended />);

    return (
      <div>
        <div className="product_list__page">
          <div className="products" ref={this.scrollRef}>
            <div className="product_list">{list}</div>
            <button
              type="button"
              className={isButtonVisible ? '' : 'hide'}
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
