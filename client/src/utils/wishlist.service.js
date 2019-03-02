/* eslint-disable no-console */
import HttpService from './http.service';
import NotifyService from './notify.service';
import appConfig from '../config/appConfig';

const { addToWishList, removeFromWishList } = appConfig.apiResources;

export function addItem(item) {
  const { addToWishListItem, wished, createNotification } = this.props;

  HttpService.post(addToWishList, item)
    .then(res => {
      if (res.status === 200 && !wished) {
        addToWishListItem(item);
        console.log(`Added to the WishList: ${item._id}`);
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      this.setState({ heartDisabled: false });
    });

  createNotification(NotifyService.added);
}

export function removeItem(item) {
  const { removeFromWishListItem, wished, createNotification } = this.props;

  HttpService.post(removeFromWishList, item)
    .then(res => {
      if (res.status === 200 && wished) {
        removeFromWishListItem(item);
        console.log(`Removed from the WishList: ${item._id}`);
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      this.setState({ heartDisabled: false });
    });

  createNotification(NotifyService.removed);
}
