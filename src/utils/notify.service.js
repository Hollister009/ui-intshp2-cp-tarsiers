import React from 'react';
import 'react-redux-notify/dist/ReactReduxNotify.css';

import {
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_ERROR,
  NOTIFICATION_TYPE_INFO
} from 'react-redux-notify';

class NotifyService {
  added = {
    message: 'Added to wishlist!',
    type: NOTIFICATION_TYPE_SUCCESS,
    duration: 800,
    canDismiss: true,
    icon: <i className="fas fa-check" />
  };

  removed = {
    message: 'Removed from wishlist!',
    type: NOTIFICATION_TYPE_WARNING,
    duration: 800,
    canDismiss: true,
    icon: <i className="fas fa-ban" />
  };

  error = {
    message: 'Error!',
    type: NOTIFICATION_TYPE_ERROR,
    duration: 800,
    canDismiss: true,
    icon: <i className="fas fa-exclamation" />
  };

  cartAdd = {
    message: 'Added to cart!',
    type: NOTIFICATION_TYPE_SUCCESS,
    duration: 800,
    canDismiss: true,
    icon: <i className="fa fa-check" />
  };

  cartRemove = {
    message: 'Removed from cart!',
    type: NOTIFICATION_TYPE_WARNING,
    duration: 800,
    canDismiss: true,
    icon: <i className="fas fa-ban" />
  };

  ordered = {
    message: 'You successfully ordered!',
    type: NOTIFICATION_TYPE_INFO,
    duration: 800,
    canDismiss: true,
    icon: <i className="far fa-thumbs-up" />
  };

  chooseSize = {
    message: 'Choose size first!',
    type: NOTIFICATION_TYPE_WARNING,
    duration: 800,
    canDismiss: true,
    icon: <i className="fas fa-tag" />
  };

  chooseColor = {
    message: 'Choose color first!',
    type: NOTIFICATION_TYPE_WARNING,
    duration: 800,
    canDismiss: true,
    icon: <i className="fas fa-tag" />
  };

  position = {
    topRight: 'TopRight',
    topLeft: 'TopLeft',
    bottomRight: 'BottomRight',
    bottomLeft: 'BottomLeft'
  };
}

export default new NotifyService();
