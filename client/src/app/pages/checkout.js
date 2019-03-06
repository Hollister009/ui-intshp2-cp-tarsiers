import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TOGGLE_HEADER_AND_FOOTER_VISIBILITY } from '../actions';
import HttpService from '../../utils/http.service';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';

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
    // TODO: add spinner state to display
  };

  renderOverlay = () => (
    <div className="checkout_overlay">
      <h2>Hello from redirect!</h2>
    </div>
  );

  render() {
    const { redirecting } = this.state;

    return (
      <section className="checkout container">
        {redirecting ? this.renderOverlay() : null}
        <h1>Please enter your shipping information bellow:</h1>
        <CheckoutForm handleSubmit={this.handleSubmit} />
      </section>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(CheckoutPage);
