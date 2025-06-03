import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

function Header({ onMenuClick }) {
  const location = useLocation();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  // Reset click state when component mounts (fresh page view)
  useEffect(() => {
    setHasClicked(false);
    setIsSearchVisible(false);
  }, [location.pathname]);

  const handleSearchClick = () => {
    if (!hasClicked) {
      setIsSearchVisible(true);
      setHasClicked(true); // Prevent further clicks
    }
  };

  return (
    <div className="header-con">
      <div className="header-con-top">
        <h3 className="title">Ecoy Hymnal</h3>
        <FontAwesomeIcon onClick={onMenuClick} icon={faEllipsisVertical} />
      </div>

      <div className="search-con">
        {isSearchVisible && (
          <input
            type="text"
            className="input-field"
            placeholder="Search Hymn..."
          />
        )}
        <FontAwesomeIcon
          onClick={handleSearchClick}
          className="search-icon"
          icon={faMagnifyingGlass}
        />
      </div>
    </div>
  );
}

export default Header;
