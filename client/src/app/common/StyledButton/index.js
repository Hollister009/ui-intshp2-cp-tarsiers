/* eslint-disable react/button-has-type */
import React from 'react';
import './StyledButton.scss';

const StyledButton = ({ callback, type, btnClass, children }) => {
  const classes = ['styled-btn'];
  let content = null;

  if (btnClass) classes.push(btnClass);

  if (children) content = children;

  switch (btnClass) {
    case 'accept':
      content = (
        <>
          <i className="fas fa-check" />
          <span>Accept</span>
        </>
      );
      break;
    case 'cancel':
      content = (
        <>
          <i className="fas fa-times" />
          <span>Cancel</span>
        </>
      );
      break;
    case 'backward':
      content = (
        <>
          <i className="fas fa-backward" />
          <span>GoBack</span>
        </>
      );
      break;
    default:
      return false;
  }

  return (
    <button type={type} onClick={callback} className={classes.join(' ')}>
      {content}
    </button>
  );
};

export default StyledButton;
