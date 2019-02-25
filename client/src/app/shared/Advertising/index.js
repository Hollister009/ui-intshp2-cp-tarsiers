import React, { Component } from 'react';
import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';
import mySanitize from '../../../utils/sanitizer';

import Dynamic from './Dynamic';
import './Advertising.scss';

export default class AdvertisingArea extends Component {
  constructor() {
    super();
    this.state = { htmlSnipet: '' };
  }

  componentDidMount() {
    HttpService.get(appConfig.apiResources.baner).then(response => {
      const clean = mySanitize(response.data.htmlSnipet);

      this.setState({ htmlSnipet: clean });
    });
  }

  render() {
    const mySnipet = this.state;

    return (
      <section className="advert container">
        <Dynamic html={mySnipet.htmlSnipet} />
      </section>
    );
  }
}
