import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faEye,
  faUsersViewfinder,
  faBullseye,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <FontAwesomeIcon className="exit-btn" icon={faCircleXmark} />

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
          Vision/Mission Statement
        </li>

        <li className="sidebar-links">
          <FontAwesomeIcon className="sidebar-link-icons" icon={faBullseye} />
          Mission
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
