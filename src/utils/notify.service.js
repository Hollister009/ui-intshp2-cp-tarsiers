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
    message: 'Added to cart!',
    type: NOTIFICATION_TYPE_SUCCESS,
    duration: 2000,
    canDismiss: true,
    icon: <i className="fa fa-check" />
  };

  removed = {
    message: 'Removed from cart!',
    type: NOTIFICATION_TYPE_WARNING,
    duration: 2000,
    canDismiss: true,
    icon: <i className="fa fa-check" />
  };

  error = {
    message: 'Error!',
    type: NOTIFICATION_TYPE_ERROR,
    duration: 2000,
    canDismiss: true,
    icon: <i className="fa fa-check" />
  };

  info = {
    message: 'Info!',
    type: NOTIFICATION_TYPE_INFO,
    duration: 2000,
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
