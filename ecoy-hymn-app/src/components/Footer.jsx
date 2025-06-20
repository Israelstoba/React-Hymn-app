// src/components/Footer.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimney,
  faHeart,
  faPenToSquare,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { useFavorites } from '../context/FavoriteContext';

function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isHymnPage =
    currentPath.startsWith('/hymn/') && currentPath !== '/hymn';

  const { currentHymn, toggleFavorite, isFavorite } = useFavorites();

  const handleToggle = () => {
    if (currentHymn) toggleFavorite(currentHymn);
  };

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

      {isHymnPage && currentHymn && (
        <li onClick={handleToggle} style={{ cursor: 'pointer' }}>
          <div className="footer-icon-wrapper">
            <FontAwesomeIcon
              className="icons"
              icon={faHeart}
              style={{ color: isFavorite(currentHymn.$id) ? 'red' : 'gray' }}
            />
            <small className="footer-icon-title">Favorite</small>
          </div>
        </li>
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
