import './main.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Hymn from './pages/Hymn';
import HymnPage from './pages/HymnPage';
import About from './pages/About';
import Mission from './pages/Mission';
import Favorite from './pages/Favorite';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // ✅ Only show Header if not on Home page
  const showHeader = location.pathname !== '/';

  return (
    <div className="app-wrapper">
      {showHeader && <Header onMenuClick={toggleSidebar} />}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/hymn" element={<Hymn />} />
          <Route path="/hymn/:id" element={<HymnPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
