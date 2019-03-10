import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TOGGLE_HEADER_AND_FOOTER_VISIBILITY } from '../actions';

import HttpService from '../../utils/http.service';
import Overlay from '../common/Overlay';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';

import '../../styles/pages/checkout.scss';

class CheckoutPage extends Component {
  state = { redirecting: false };

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(TOGGLE_HEADER_AND_FOOTER_VISIBILITY);
  }

  componentWillUnmount() {
    const { dispatch } = this.props;

    dispatch(TOGGLE_HEADER_AND_FOOTER_VISIBILITY);
  }

  handleSubmit = (e, validate) => {
    e.preventDefault();

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

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(CheckoutPage);
