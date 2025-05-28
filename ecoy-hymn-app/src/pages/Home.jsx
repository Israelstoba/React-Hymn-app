import React from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMusic } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="home-con">
      <img className="app-logo" src={logo} alt="" />
      <div className="btn-con">
        <button className="btn btn-sec open-btn">
          <FontAwesomeIcon className="icon" icon={faArrowRight} />
          Open
          {/* <FontAwesomeIcon icon={faMusic} /> */}
        </button>
      </div>
    </div>
  );
}

export default Home;
