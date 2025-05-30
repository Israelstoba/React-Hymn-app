import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMusic } from '@fortawesome/free-solid-svg-icons';

function Hymn() {
  return (
    <div id="hymn-wrapper">
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}
export default Hymn;
