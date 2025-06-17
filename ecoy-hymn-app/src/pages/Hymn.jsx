import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Footer from '../components/Footer';

function Hymn() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // 👈 New state

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div id="hymn-wrapper">
      <Header onMenuClick={toggleSidebar} onSearchChange={setSearchTerm} />{' '}
      {/* 👈 Pass handler */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <Content searchTerm={searchTerm} /> {/* 👈 Pass searchTerm */}
      <Footer />
    </div>
  );
}

export default Hymn;
