import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Footer from '../components/Footer';

function Hymn() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div id="hymn-wrapper">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <Content searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default Hymn;
