import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMusic } from '@fortawesome/free-solid-svg-icons';

function Hymn() {
  return (
    <div id="hymn-wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Hymn;
