import React from 'react';
import JoinUs from '../JoinUs/JoinUs';
import Promotions from '../Promotions/Promotions';
import AdvertisingArea from '../AdvertisingArea/AdvertisingArea';
import WishListContainer from '../WishList/WishListContainer';
import NewArrivalsContainer from '../NewArrivals/NewArrivalsContainer';
import './_homepage.scss';

const HomePage = () => (
  <div className="slider__wrapper homepage">
    <Promotions />
    <NewArrivalsContainer />
    <AdvertisingArea />
    <JoinUs />
    <WishListContainer />
  </div>
);

export default HomePage;
