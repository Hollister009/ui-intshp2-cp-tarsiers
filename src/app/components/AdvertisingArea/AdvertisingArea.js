import React from 'react';
import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';
import Dynamic from './Dynamic';
import mySanitize from '../../../utils/sanitizer';
import './Banner.scss';

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

  render() {
    const mySnipet = this.state;

    return (
      <div className="adArea">
        <Dynamic html={mySnipet.htmlSnipet} />
      </div>
    );
  }
}
