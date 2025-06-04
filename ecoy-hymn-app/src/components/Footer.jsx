import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faHouseChimney,
  faHeart,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-con">
      <Link to="/">
        <FontAwesomeIcon className="home-icon icons" icon={faHouseChimney} />
      </Link>
      <Link to="/hymn">
        <FontAwesomeIcon className="icons" icon={faMusic} />
      </Link>

      <FontAwesomeIcon className="icons" icon={faHeart} />
      <FontAwesomeIcon className="icons" icon={faPenToSquare} />
    </div>
  );
}

export default Footer;
