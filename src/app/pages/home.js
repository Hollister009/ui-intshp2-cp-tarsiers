import React from 'react';
import Promotions from '../components/Promotions/Promotions';
import NewArrivalsContainer from '../components/NewArrivals/NewArrivalsContainer';
import AdvertisingArea from '../shared/Advertising';
import JoinUs from '../components/JoinUs/JoinUs';
import WishListContainer from '../components/WishList/WishListContainer';

const HomePage = () => (
  <>
    <Promotions />
    <NewArrivalsContainer />
    <AdvertisingArea />
    <JoinUs />
    <WishListContainer />
  </>
);

export default HomePage;
