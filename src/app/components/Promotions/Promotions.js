import React, { Component } from 'react';
import appConfig from '../../../config/appConfig';
import Slider from '../Slideshow/sliderComponents/Slider';
import Spinner from '../../shared/Spinner';

import './Promotions.scss';

export default class Promotions extends Component {
  constructor(props) {
    super(props);
    this.state = { slides: [] };
  }

  componentDidMount = () => {
    setTimeout(
      () => this.setState({ slides: [...appConfig.promotions.slides] }),
      1500
    );
  };

  get isLoaded() {
    const { slides } = this.state;

    return slides.length;
  }

  render() {
    const { slides } = this.state;

    return this.isLoaded ? (
      <div className="promotions-container">
        <Slider slides={slides} />
      </div>
    ) : (
      <div className="promotions-container">
        <Spinner />
      </div>
    );
  }
}
