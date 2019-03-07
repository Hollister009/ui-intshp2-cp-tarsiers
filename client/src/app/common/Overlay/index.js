import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../shared/Spinner';
import './Overlay.scss';

const Overlay = ({ show }) => {
  const componentClasses = ['overlay'];

  if (show) componentClasses.push('show');

  return (
    <div className={componentClasses.join(' ')}>
      <Spinner />
    </div>
  );
};

Overlay.propTypes = {
  show: PropTypes.bool.isRequired
};

export default Overlay;
