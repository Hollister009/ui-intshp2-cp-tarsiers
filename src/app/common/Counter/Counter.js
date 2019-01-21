import React from 'react';

export default props => {
  const { counter } = props;

  return <div className="Counter">{counter}</div>;
};
