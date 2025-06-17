import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faMagnifyingGlass,
  faX,
} from '@fortawesome/free-solid-svg-icons';

function Header({ onMenuClick }) {
  const location = useLocation();
  const params = useParams();

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    setHasClicked(false);
    setIsSearchVisible(false);
  }, [location.pathname]);

  const handleSearchClick = () => {
    if (!hasClicked) {
      setIsSearchVisible(true);
      setHasClicked(true);
    }
  };

  // Determine the header title based on the route
  const getHeaderTitle = () => {
    if (location.pathname === '/hymn') {
      return 'Ecoy Hymnal List';
    } else if (location.pathname.startsWith('/hymn/') && params.id) {
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
