import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleHFVisibility, loadCart } from '../actions';

import ls from '../../utils/localStorage.service';
import HttpService from '../../utils/http.service';
import { getTotalPrice } from '../../utils/priceFormat.service';

import Overlay from '../common/Overlay';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';

import '../../styles/pages/checkout.scss';

class CheckoutPage extends Component {
  state = { redirecting: false };

  componentDidMount() {
    const { toggleHFV, loadPrevCart, cart } = this.props;
    const prevState = ls.getState('cart');
    const productsLen = cart.productsInCart.length;

    if (productsLen !== 0) {
      ls.setState('cart', cart);
    } else {
      loadPrevCart(prevState);
    }

    toggleHFV();
    // TODO: Display Cart Data
    // console.table(cart.productsInCart);
  }

  componentWillUnmount() {
    const { toggleHFV } = this.props;

    toggleHFV();
  }

  handleSubmit = validate => {
    const { cart } = this.props;
    const { productsInCart } = cart;

    if (validate()) {
      this.setState({ redirecting: true }, () => {
        HttpService.post('/api/payment', productsInCart).then(res =>
          this.extRedirect(res.data)
        );
      });
    }
  };

  extRedirect = url => {
    console.log(`redirecting to: ${url}`);
    window.location.assign(url);
  };

  render() {
    const { cart } = this.props;
    const { redirecting } = this.state;
    const onBlur = redirecting ? 'blur' : '';

    return (
      <React.Fragment>
        <Overlay show={redirecting} />
        <section className={`checkout container ${onBlur}`}>
          <h1>Please enter your shipping information bellow:</h1>
          <CheckoutForm handleSubmit={this.handleSubmit} />
          <h2>
            Total Price:
            {getTotalPrice(cart.productsInCart)}
          </h2>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  toggleHFV: () => dispatch(toggleHFVisibility()),
  loadPrevCart: data => dispatch(loadCart(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);
