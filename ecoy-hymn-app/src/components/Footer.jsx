import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faHouseChimney,
  faHeart,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Check if it's the Hymn Display Page (e.g., /hymn/23)
  const isHymnPage =
    currentPath.startsWith('/hymn/') && currentPath !== '/hymn';

  return (
    <div className="footer-con">
      <Link to="/">
        <FontAwesomeIcon className="home-icon icons" icon={faHouseChimney} />
      </Link>

      <Link to="/hymn">
        <FontAwesomeIcon className="icons" icon={faMusic} />
      </Link>

      {/* Show heart only on home and hymnPage */}
      {(currentPath === '/' || isHymnPage) && (
        <FontAwesomeIcon className="icons" icon={faHeart} />
      )}

      <FontAwesomeIcon className="icons" icon={faPenToSquare} />
    </div>
  );
}

export default Footer;
