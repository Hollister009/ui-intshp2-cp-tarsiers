import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleHFVisibility } from '../actions';

import ls from '../../utils/localStorage.service';
import HttpService from '../../utils/http.service';

import Overlay from '../common/Overlay';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';

import '../../styles/pages/checkout.scss';

class CheckoutPage extends Component {
  state = { redirecting: false };

  componentDidMount() {
    const { toggleHFV } = this.props;

    toggleHFV();
  }

  componentWillUnmount() {
    const { toggleHFV } = this.props;

    toggleHFV();
  }

  handleSubmit = (e, validate) => {
    e.preventDefault();
    const { cart } = this.props;

    ls.setState('cart', cart);

    if (validate()) {
      this.setState({ redirecting: true }, () => {
        HttpService.post('/api/payment').then(res =>
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
    const { redirecting } = this.state;
    const onBlur = redirecting ? 'blur' : '';

    return (
      <React.Fragment>
        <Overlay show={redirecting} />
        <section className={`checkout container ${onBlur}`}>
          <h1>Please enter your shipping information bellow:</h1>
          <CheckoutForm handleSubmit={this.handleSubmit} />
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  toggleHFV: () => dispatch(toggleHFVisibility())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);
