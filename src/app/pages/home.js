import React from 'react';
import Promotions from '../components/Promotions/Promotions';
import ProductContainer from '../components/NewArrivals/NewArrivals';
import AdvertisingArea from '../shared/Advertising';
import JoinUs from '../components/JoinUs/JoinUs';
import WishListContainer from '../components/WishList/WishList';

const HomePage = () => (
  <>
    <Promotions />
    <ProductContainer />
    <AdvertisingArea />
    <JoinUs />
    <WishListContainer />
  </>
);

export default HomePage;
