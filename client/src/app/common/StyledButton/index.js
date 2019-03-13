/* eslint-disable react/button-has-type */
import React from 'react';
import './StyledButton.scss';

// const AcceptBtn = ({ callback }) => (
//   <button
//     type="submit"
//     onClick={callback}
//     className="styled-btn accept"
//   >
//     <i className="fas fa-check" />
//     <span>Accept</span>
//   </button>
// );

// const CancelBtn = ({ callback }) => (
//   <button
//     type="submit"
//     onClick={callback}
//     className="styled-btn cancel"
//   >
//     <i className="fas fa-times" />
//     <span>Cancel</span>
//   </button>
// );

// const BackBtn = ({ callback }) => (
//   <button
//     type="submit"
//     onClick={callback}
//     className="styled-btn backward"
//   >
//     <i className="fas fa-backward" />
//     <span>GoBack</span>
//   </button>
// );

// const StyledButton = ({ callback, accept, cancel, backward }) => {
//   if (accept) return <AcceptBtn {...callback} />;
//   if (cancel) return <CancelBtn {...callback} />;
//   if (backward) return <BackBtn {...callback} />;
//   return null;
// };

const StyledButton = ({ callback, type, btnClass, children }) => {
  const classes = ['styled-btn'];
  let content = null;

  if (btnClass) {
    classes.push(btnClass);
  }

  if (children) {
    content = children;
  }

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
    <button type={type} className={classes.join(' ')} onClick={callback}>
      {content}
    </button>
  );
};

export default StyledButton;
