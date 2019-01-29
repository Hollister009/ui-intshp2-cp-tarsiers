import React, { Component } from 'react';
import ProductItem from '../../shared/ProductItem';
import Spinner from '../../shared/Spinner/index';
import './ProductList.scss';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skip: 0,
      limit: 6
    };
    this.heightRef = React.createRef();
    this.productHeight = React.createRef();
    this.final = [];
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    const scrollHeigh = this.productHeight.current.offsetHeight
      ? this.productHeight.current.offsetHeight
      : 770;

    if (window.scrollY >= scrollHeigh - 386) {
      this.setState(state => ({
        skip: state.skip === 0 ? state.limit : state.skip + state.limit,
        limit: 3
      }));
    }
    console.log(this.productHeight.current.offsetHeight);
  };

  handleClick = () => {};

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  render() {
    const { products } = this.props;
    const { skip, limit } = this.state;
    const part = products.slice(skip, skip + limit);

    this.final = this.final.concat(part);

    const list =
      this.final &&
      this.final.map(el => <ProductItem key={el._id} data={el} extended />);

    const setClass = list.length >= products.length ? 'hide' : '';

    return (
      <div>
        <div className="product_list__page">
          <div className="products" ref={this.heightRef}>
            {list.length === 0 ? (
              <div className="spin-position">
                <Spinner />
              </div>
            ) : (
              <div className="product_list" ref={this.productHeight}>
                {list}
              </div>
            )}
            <button
              type="button"
              onClick={this.handleClick}
              className={setClass}
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
