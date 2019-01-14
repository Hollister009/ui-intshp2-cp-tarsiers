import React from 'react';
import WishListItem from '../WishListItem/WishListItem';
import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';
import './WishListContainer.scss';

class WishListContainer extends React.Component {
  state = {
    wishList: []
  };

  componentDidMount() {
    HttpService.get(appConfig.apiResources.wishList).then(res => {
      console.log('res wishlist', res);
      this.setState({ wishList: res });
    });
  }

  render() {
    const { wishList } = this.state;
    const Items = wishList
      ? wishList.map(item => <WishListItem key={item} {...item} />)
      : null;

    return wishList ? (
      <div className="wishlist-container">
        <h2 className="wishlist-title">
          Wish
          <span> List</span>
        </h2>
        <p>Lorem ipsum dolor sit amet here goes important text</p>
        <div className="wishlist-block">{Items}</div>
      </div>
    ) : null;
  }
}

export default WishListContainer;
