import React from 'react';
import Footer from '../components/Footer';

function About() {
  return (
    <div id="about-page-con">
      <div className="about-content">
        <h2 className="content-title">About This App</h2>
        <p className="txt">
          This hymnal app was created to bring timeless Christian hymns closer
          to your heart. Whether you're worshipping at home, in church, or on
          the go, this app gives you access to a collection of spirit-filled
          songs to uplift and inspire.
        </p>

        <p className="txt">
          The app features an easy-to-use interface, the ability to mark your
          favorite hymns, and offline access so you can sing along anytime.
        </p>

        <p className="txt card-txt">
          We are committed to preserving the spiritual heritage of hymns for
          future generations through technology. Thank you for using the app,
          and may your soul be richly blessed.
        </p>

        <p className="built-by">
          Ecoy Hymnal Is Built by the EcoyHomi Media Team
        </p>
        <p className="powered-by">⚡Powered by SamPhis</p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
