import React from 'react';
import { Flags } from 'react-feature-flags';

import appConfig from '../../config/appConfig';
import Promotions from '../components/Promotions/Promotions';
import NewArrivalsContainer from '../components/NewArrivals/NewArrivalsContainer';
import AdvertisingArea from '../shared/Advertising';
import JoinUs from '../components/JoinUs/JoinUs';
import WishListContainer from '../components/WishList/WishListContainer';

const HomePage = () => (
  <>
    <Promotions />
    <NewArrivalsContainer />
    <Flags authorizedFlags={[appConfig.killswitch.advertising]}>
      <AdvertisingArea />
    </Flags>
    <JoinUs />
    <Flags authorizedFlags={[appConfig.killswitch.wishlist]}>
      <WishListContainer />
    </Flags>
  </>
);

export default HomePage;
