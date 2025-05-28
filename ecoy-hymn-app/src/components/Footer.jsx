import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHouseChimney } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="footer-con">
      <FontAwesomeIcon icon={faHouseChimney} />
      <FontAwesomeIcon icon={faMusic} />
    </div>
  );
}

export default Footer;
