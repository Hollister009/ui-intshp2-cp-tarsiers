import React from 'react';
import Promotions from '../components/Promotions/Promotions';
import NewArrivals from '../components/NewArrivals/NewArrivals';
import AdvertisingArea from '../shared/Advertising';
import JoinUs from '../components/JoinUs/JoinUs';
import WishList from '../components/WishList/WishList';

const HomePage = () => (
  <>
    <Promotions />
    <NewArrivals />
    <AdvertisingArea />
    <WishList />
    <JoinUs />
  </>
);

export default HomePage;
