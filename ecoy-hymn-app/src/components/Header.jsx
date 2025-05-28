import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <div className="header-con">
      <h3 className="title">Ecoy Hymnal</h3>
      <FontAwesomeIcon icon={faEllipsisVertical} />
    </div>
  );
}

export default Header;
