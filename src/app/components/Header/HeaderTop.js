import React from 'react';
import { ExternalLink } from '../Links';

const HeaderTop = props => {
  const renderLinks = list =>
    list.map(link => {
      const { id, href, icon } = link;

      return (
        <li key={id}>
          <ExternalLink href={href}>
            <i className={icon} />
          </ExternalLink>
        </li>
      );
    });

  const { links, contacts } = props;
  const socialLinks = <ul>{renderLinks(links)}</ul>;

  return (
    <div className="line-between">
      <div className="header-top container">
        <a href={`mailto:${contacts.email}`}>
          <i className="far fa-envelope" />
          {contacts.email}
        </a>
        <a href={`skype:${contacts.phone}`}>
          <i className="fab fa-skype" />
          {contacts.phone}
        </a>
        <div className="icons-right">{socialLinks}</div>
      </div>
    </div>
  );
};

export default HeaderTop;
