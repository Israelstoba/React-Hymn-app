import './main.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Hymn from './pages/Hymn';
import HymnPage from './pages/HymnPage';
import About from './pages/About';
import Mission from './pages/Mission';
import Favorite from './pages/Favorite';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// PWA: Register service worker (optional notification)
import { registerSW } from 'virtual:pwa-register';

function App() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const showHeader = location.pathname !== '/';

  // ✅ Register PWA service worker
  useEffect(() => {
    const updateSW = registerSW({
      onNeedRefresh() {
        if (confirm('New update available. Reload to update?')) {
          updateSW(true);
        }
      },
      onOfflineReady() {
        console.log('App is ready to work offline');
      },
    });
  }, []);

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
