import React from 'react';
import './Spinner.scss';

const Spinner = props => {
  const { height } = props;
  const spinnerStyle = { height };

  return (
    <div className="spinner-container" style={spinnerStyle}>
      <div className="spin-position">
        <div className="spinner">
          <i className="fas fa-sun" />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
