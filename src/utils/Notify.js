import React from 'react';
import {
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_INFO,
  NOTIFICATION_TYPE_ERROR
} from 'react-redux-notify';

class NotifyService {
  mySuccessNotification = {
    message: 'Success!',
    type: NOTIFICATION_TYPE_SUCCESS,
    duration: 2000,
    canDismiss: true,
    icon: <i className="fa fa-check" />
  };

  myWarningNotification = {
    message: 'Warning!',
    type: NOTIFICATION_TYPE_WARNING,
    duration: 2000,
    canDismiss: true,
    icon: <i className="fa fa-check" />
  };

  myErrorNotification = {
    message: 'Error!',
    type: NOTIFICATION_TYPE_ERROR,
    duration: 2000,
    canDismiss: true,
    icon: <i className="fa fa-check" />
  };

  myInfoNotification = {
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
