import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMusic } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-con">
      <img className="app-logo" src={logo} alt="" />
      <div className="btn-con">
        <Link to="/hymn" className="btn btn-sec open-btn">
          <FontAwesomeIcon className="icon" icon={faArrowRight} />
          Open
        </Link>
      </div>
    </div>
  );
}

export default Home;
