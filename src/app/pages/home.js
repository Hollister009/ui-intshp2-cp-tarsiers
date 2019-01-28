import React from 'react';
import { Flags } from 'react-feature-flags';
import Promotions from '../components/Promotions/Promotions';
import NewArrivalsContainer from '../components/NewArrivals/NewArrivalsContainer';
import AdvertisingArea from '../shared/Advertising';
import JoinUs from '../components/JoinUs/JoinUs';
import WishListContainer from '../components/WishList/WishListContainer';

const HomePage = () => (
  <>
    <Flags authorizedFlags={['showPromotions']}>
      <Promotions />
    </Flags>
    <Flags authorizedFlags={['showNewArrivals']}>
      <NewArrivalsContainer />
    </Flags>
    <Flags authorizedFlags={['showAdvertisingArea']}>
      <AdvertisingArea />
    </Flags>
    <Flags authorizedFlags={['showJoinUs']}>
      <JoinUs />
    </Flags>
    <Flags authorizedFlags={['showWishlist']}>
      <WishListContainer />
    </Flags>
  </>
);

export default HomePage;
