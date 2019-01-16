import React, { Component } from 'react';
import Slider from '../Slideshow/sliderComponents/Slider';
import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';

export default class Promotions extends Component {
  constructor(props) {
    super(props);
    this.state = { slides: [] };
  }

  componentDidMount = () => {
    HttpService.get(appConfig.apiResources.promotions).then(res => {
      this.setState({ slides: res.data.slides });
    });
  };

  get isLoaded() {
    const { slides } = this.state;

    return slides.length;
  }

  render() {
    const { slides } = this.state;

    return this.isLoaded ? <Slider slides={slides} /> : null;
  }
}
