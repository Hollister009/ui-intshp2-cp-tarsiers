/* eslint-disable no-console */
import React, { Component } from 'react';
import { Flags } from 'react-feature-flags';

import appConfig from '../../config/appConfig';
import Promotions from '../components/Promotions/Promotions';
import NewArrivalsContainer from '../components/NewArrivals/NewArrivalsContainer';
import AdvertisingArea from '../shared/Advertising';
import JoinUs from '../components/JoinUs/JoinUs';
import WishListContainer from '../components/WishList/WishListContainer';
import httpService from '../../utils/http.service';

class HomePage extends Component {
  componentDidMount() {
    const { location } = this.props;
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.toString();

    if (searchParams.get('payment') === 'success') {
      this.callSuccesful(query);
    }
    if (searchParams.get('payment') === 'cancel') {
      this.callCanceled(query);
    }
  }

  // TODO: User notifications on success or cancel

  callSuccesful = query => {
    httpService
      .get(`/api/success?${query}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  callCanceled = query => {
    httpService
      .get(`/api/cancel?${query}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  // TODO: write utility function to clear routes

  render() {
    return (
      <React.Fragment>
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

export default HomePage;
