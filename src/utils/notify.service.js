import React from 'react';
import 'react-redux-notify/dist/ReactReduxNotify.css';

import {
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_INFO,
  NOTIFICATION_TYPE_ERROR
} from 'react-redux-notify';

class NotifyService {
  added = {
    message: 'Added to wishlist!',
    type: NOTIFICATION_TYPE_SUCCESS,
    duration: 800,
    canDismiss: true,
    icon: <i className="fa fa-check" />
  };

  removed = {
    message: 'Removed from wishlist!',
    type: NOTIFICATION_TYPE_WARNING,
    duration: 800,
    canDismiss: true,
    icon: <i className="fa fa-check" />
  };

  error = {
    message: 'Error!',
    type: NOTIFICATION_TYPE_ERROR,
    duration: 800,
    canDismiss: true,
    icon: <i className="fa fa-check" />
  };

  cart = {
    message: 'Added to cart!',
    type: NOTIFICATION_TYPE_INFO,
    duration: 800,
    canDismiss: true,
    icon: <i className="fa fa-check" />
  };

  position = {
    topRight: 'TopRight',
    topLeft: 'TopLeft',
    bottomRight: 'BottomRight',
    bottomLeft: 'BottomLeft'
  };
}

export default new NotifyService();
