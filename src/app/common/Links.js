import React from 'react';
import { Link } from 'react-router-dom';

const RouterLink = props => {
  const { href, children } = props;

  return <Link to={href}>{children}</Link>;
};

const ExternalLink = props => {
  const { href, children } = props;

  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
};

export { RouterLink, ExternalLink };
