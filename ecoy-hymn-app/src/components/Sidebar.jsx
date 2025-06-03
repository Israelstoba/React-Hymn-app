import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faEye,
  faUsersViewfinder,
  faBullseye,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

function Sidebar({ onClose }) {
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose(); // Close sidebar if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="sidebar-overlay">
      <div className="sidebar slide-in" ref={sidebarRef}>
        <FontAwesomeIcon
          className="exit-btn"
          icon={faCircleXmark}
          onClick={onClose} // Close on X click
        />

        <ul className="sidebar-list">
          <li className="sidebar-links">
            <FontAwesomeIcon
              className="sidebar-link-icons"
              icon={faUsersViewfinder}
            />
            About
          </li>
          <li className="sidebar-links">
            <FontAwesomeIcon className="sidebar-link-icons" icon={faHeart} />
            Favourite Hymn
          </li>
          <li className="sidebar-links">
            <FontAwesomeIcon className="sidebar-link-icons" icon={faEye} />
            Vision/Mission
          </li>
          <li className="sidebar-links">
            <FontAwesomeIcon className="sidebar-link-icons" icon={faBullseye} />
            Mission
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
