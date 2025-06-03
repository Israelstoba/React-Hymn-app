import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMusic } from '@fortawesome/free-solid-svg-icons';

function Hymn() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div id="hymn-wrapper">
      <Header onMenuClick={toggleSidebar} />
      {isSidebarOpen && <Sidebar onClose={closeSidebar} />}
      <Content />
      <Footer />
    </div>
  );
}
export default Hymn;
