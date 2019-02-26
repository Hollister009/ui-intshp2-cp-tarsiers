import React from 'react';
import { Flags } from 'react-feature-flags';

import appConfig from '../../config/appConfig';
import Promotions from '../components/Promotions/Promotions';
import NewArrivalsContainer from '../components/NewArrivals/NewArrivalsContainer';
import AdvertisingArea from '../shared/Advertising';
import JoinUs from '../components/JoinUs/JoinUs';
import WishListContainer from '../components/WishList/WishListContainer';

const HomePage = props => {
  const { location } = props;

  console.log(location.search);

  if (location.search === '?checkout=success') {
    alert('Succeded');
  }

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
};

export default HomePage;
