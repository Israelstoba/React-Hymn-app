import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faHouseChimney,
  faHeart,
  faPenToSquare,
  faBook,
  faBookOpen,
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
        <div className="footer-icon-wrapper">
          <FontAwesomeIcon className="home-icon icons" icon={faHouseChimney} />
          <small className="footer-icon-title">Home</small>
        </div>
      </Link>

      <Link to="/hymn">
        <div className="footer-icon-wrapper">
          <FontAwesomeIcon className="icons" icon={faBookOpen} />
          <small className="footer-icon-title">Hymns</small>
        </div>
      </Link>

      {/* Show heart only on home and hymnPage */}
      {(currentPath === '/' || isHymnPage) && (
        <Link to="/favorite">
          <div className="footer-icon-wrapper">
            <FontAwesomeIcon className="icons" icon={faHeart} />
            <small className="footer-icon-title">Favorite</small>
          </div>
        </Link>
      )}

      <Link to="#">
        <div className="footer-icon-wrapper">
          <FontAwesomeIcon className="icons" icon={faPenToSquare} />
          <small className="footer-icon-title">Note</small>
        </div>
      </Link>
    </div>
  );
}

export default Footer;
