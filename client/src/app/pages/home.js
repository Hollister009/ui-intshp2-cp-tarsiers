/* eslint-disable no-console */
import React, { Component } from 'react';
import { Flags } from 'react-feature-flags';
import { connect } from 'react-redux';
import { createNotification, Notify } from 'react-redux-notify';

import { clearCart } from '../actions';
import appConfig from '../../config/appConfig';
import httpService from '../../utils/http.service';
import NotifyService from '../../utils/notify.service';

import Promotions from '../components/Promotions/Promotions';
import NewArrivalsContainer from '../components/NewArrivals/NewArrivalsContainer';
import AdvertisingArea from '../shared/Advertising';
import JoinUs from '../components/JoinUs/JoinUs';
import WishListContainer from '../components/WishList/WishListContainer';

class HomePage extends Component {
  componentDidMount() {
    const { location } = this.props;
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.toString();

    /**
     * Checking payment type:
     *
     * 1 payment successful - call clearCart() to cleanup state.cart
     * 2 payment canceled - loadPrevCart() is handled in App.js
     * We have subscribed LocalStorage to state.cart in Header.js
     *
     */
    if (searchParams.get('payment') === 'success') {
      clearCart();
      this.callSuccesful(query);
    } else if (searchParams.get('payment') === 'cancel') {
      this.callCanceled(query);
    }
  }

  clearRoute = res => {
    const { history, createNotification } = this.props;

    history.push('/');
    if (res.data === 'Success') {
      createNotification(NotifyService.paymentSuccess);
    } else {
      createNotification(NotifyService.paymentCancel);
    }
    console.log(res);
  };

  callSuccesful = query => {
    httpService
      .get(`/api/success?${query}`)
      .then(res => this.clearRoute(res))
      .catch(err => console.log(err));
  };

  callCanceled = query => {
    httpService
      .get(`/api/cancel?${query}`)
      .then(res => this.clearRoute(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <Notify position={NotifyService.position.topRight} />
        <Promotions />
        <NewArrivalsContainer />
        <Flags authorizedFlags={[appConfig.killswitch.advertising]}>
          <AdvertisingArea />
        </Flags>
        <JoinUs />
        <Flags authorizedFlags={[appConfig.killswitch.wishlist]}>
          <WishListContainer />
        </Flags>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart()),
  createNotification: config => dispatch(createNotification(config))
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
