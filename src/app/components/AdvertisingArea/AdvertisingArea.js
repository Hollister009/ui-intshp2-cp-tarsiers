import React from 'react';
import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';
import Dynamic from './Dynamic';
import mySanitize from '../../../utils/sanitizer';
import './Banner.scss';

// const sanitizeHtml = require('sanitize-html');

export default class AdvertisingArea extends React.Component {
  constructor() {
    super();
    this.state = {
      htmlSnipet: ''
    };
  }

  componentDidMount() {
    HttpService.get(appConfig.apiResources.baner).then(response => {
      const clean = mySanitize(response.htmlSnipet);

      this.setState({ htmlSnipet: clean });
    });
  }

  // mySanitize(dirty) {
  //   const myClean = sanitizeHtml(dirty, {
  //     allowedTags: [
  //       'b',
  //       'i',
  //       'em',
  //       'strong',
  //       'a',
  //       'div',
  //       'p',
  //       'h1',
  //       'h2',
  //       'h3',
  //       'h4',
  //       'h5',
  //       'h6',
  //       'img',
  //       'style'
  //     ],
  //     allowedAttributes: { a: ['href'], img: ['src'] },
  //     allowedIframeHostnames: ['www.youtube.com'],
  //     allowedClasses: {
  //       p: ['item__description', 'simple'],
  //       div: ['baner', 'item', 'item__description', 'priceblock'],
  //       h3: ['item__name'],
  //       h2: ['priceblock__price'],
  //       img: ['banner__image', 'priceblock__cart']
  //     },
  //     nonTextTags: ['style']
  //   });

  //   return myClean;
  // }

  render() {
    const mySnipet = this.state;

    return (
      <div className="adArea">
        <Dynamic html={mySnipet.htmlSnipet} />
      </div>
    );
  }
}
