/* eslint-disable no-console */
import HttpService from './http.service';
import NotifyService from './notify.service';
import appConfig from '../config/appConfig';

const { addToWishList, removeFromWishList } = appConfig.apiResources;

export function addItem(id) {
  const { addToWishListItem, wished, createNotification } = this.props;

  HttpService.post(addToWishList, { productId: id })
    .then(res => {
      if (res.status === 200 && !wished) {
        addToWishListItem(id);
        console.log(`Added to the WishList: ${id}`);
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      this.setState({ heartDisabled: false });
    });

  createNotification(NotifyService.added);
}

export function removeItem(id) {
  const { removeFromWishListItem, wished, createNotification } = this.props;

  HttpService.post(removeFromWishList, { productId: id })
    .then(res => {
      if (res.status === 200 && wished) {
        removeFromWishListItem(id);
        console.log(`Removed from the WishList: ${id}`);
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      this.setState({ heartDisabled: false });
    });

  createNotification(NotifyService.removed);
}
