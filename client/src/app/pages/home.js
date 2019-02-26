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
  // TODO
  /**
   * 1. loop trough searchParams with query object
   * 2. create methods for success and cancel endpoints
   * 3. call endpoint passing query object
   */

  componentDidMount() {
    const { location } = this.props;
    const searchParams = new URLSearchParams(location.search);

    console.log(searchParams.get('payment'));

    if (searchParams.get('payment') === 'success') {
      httpService.get('/api/success').then(res => console.log(res));
    }
    if (searchParams.get('payment') === 'cancel') {
      httpService.get('/api/cancel').then(res => console.log(res));
    }
  }

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
