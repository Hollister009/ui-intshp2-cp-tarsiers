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
      <div className="container">
        <div className="header-top">
          <a href="mailto:info@shopy.com">
            <i className="far fa-envelope" />
            info@shopy.com
          </a>
          <i className="fa fa-phone" />
          <span> 453 - 5553 - 996</span>
          <div className="icons-right">{socialLinks}</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
