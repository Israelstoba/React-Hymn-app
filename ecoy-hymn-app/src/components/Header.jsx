import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

function Header({ onMenuClick }) {
  const location = useLocation();

  const getHeaderTitle = () => {
    if (location.pathname === '/hymn') {
      return 'Ecoy Hymnal List';
    } else if (location.pathname.startsWith('/hymn/')) {
      return 'Hymn Details';
    } else {
      return 'Ecoy Hymnal';
    }
  };

  return (
    <div className="header-con">
      <div className="header-con-top">
        <h3 className="title">{getHeaderTitle()}</h3>
        <FontAwesomeIcon
          className="menu-icon"
          onClick={onMenuClick}
          icon={faEllipsisVertical}
        />
      </div>
    </div>
  );
}

export default Header;
