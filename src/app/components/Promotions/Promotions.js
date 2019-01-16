import React, { Component } from 'react';
import Slider from '../Slideshow/sliderComponents/Slider';
import appConfig from '../../../config/appConfig';

export default class Promotions extends Component {
  constructor(props) {
    super(props);
    this.state = { slides: [] };
  }

  componentDidMount = () => {
    this.setState({ slides: [...appConfig.promotions.slides] });
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
