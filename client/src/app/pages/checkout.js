import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TOGGLE_HEADER_AND_FOOTER_VISIBILITY } from '../actions';
import HttpService from '../../utils/http.service';

class CheckoutPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(TOGGLE_HEADER_AND_FOOTER_VISIBILITY);
  }

  componentWillUnmount() {
    const { dispatch } = this.props;

    dispatch(TOGGLE_HEADER_AND_FOOTER_VISIBILITY);
  }

  handleSubmit = e => {
    e.preventDefault();

    HttpService.post('/api/payment').then(res => this.extRedirect(res.data));
  };

  extRedirect = url => {
    window.location.assign(url);
  };

  render() {
    return (
      <section className="checkout">
        <h1>Hello from CheckoutPage page</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(CheckoutPage);
