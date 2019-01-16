import React from 'react';
import appConfig from '../../../config/appConfig';

const HeaderTop = () => {
  const renderLinks = list =>
    list.map(link => {
      const { id, href, icon } = link;

      return (
        <a key={id} href={href} rel="noopener noreferrer" target="_blank">
          <i className={icon} />
        </a>
      );
    });

  const { links } = appConfig.header;
  const socialLinks = <ul>{renderLinks(links)}</ul>;

  return (
    <div className="line-between">
      <div className="header-top container">
        <a href="mailto: info@shopy.com">
          <i className="far fa-envelope" />
          {appConfig.header.mail}
        </a>
        <i className="fa fa-phone" />
        <span>{appConfig.header.phone}</span>
        <div className="icons-right">{socialLinks}</div>
      </div>
    </div>
  );
};

export default HeaderTop;
