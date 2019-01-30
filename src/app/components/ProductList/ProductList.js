import React, { Component } from 'react';
import ProductItem from '../../shared/ProductItem';
import Spinner from '../../shared/Spinner/index';
import './ProductList.scss';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { skip: 0, limit: 6, isButtonVisible: false };
    this.scrollRef = React.createRef();
    this.final = [];
    this.setClass = 'hide';
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    const scrollHeight = this.scrollRef.current.offsetHeight;
    const trashHole = 500;

    if (window.scrollY >= scrollHeight - trashHole) {
      const { skip, limit } = this.state;
      const skipped = skip === 0 ? limit : skip + limit;

      if (this.final.length >= 15) {
        this.setState({ isButtonVisible: true, limit: 0, skip: skipped });
        window.removeEventListener('scroll', this.handleScroll);
      } else {
        this.setState({
          skip: skipped,
          limit: 3
        });
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
    window.removeEventListener('scroll', this.handleScroll);
  };

  render() {
    const { products } = this.props;
    const { skip, limit, isButtonVisible } = this.state;
    const part = products.slice(skip, skip + limit);

    this.final = this.final.concat(part);

    const list =
      this.final &&
      this.final.map(el => <ProductItem key={el._id} data={el} extended />);

    return (
      <div>
        <div className="product_list__page">
          <div className="products" ref={this.scrollRef}>
            {list.length === 0 ? (
              <div className="spin-position">
                <Spinner />
              </div>
            ) : (
              <div className="product_list">{list}</div>
            )}
            <button
              type="button"
              className={
                isButtonVisible && products.length > this.final.length
                  ? ''
                  : 'hide'
              }
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
