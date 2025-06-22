import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { databases } from '../lib/appwrite';
import { saveHymnsToDB, getAllHymnsFromDB } from '../lib/hymnDB';

function Hymn() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [hymns, setHymns] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const fetchHymns = async () => {
      try {
        const res = await databases.listDocuments(
          '668336560036a2192b6c', // your DB ID
          '66833697001c8423ab57' // your Collection ID
        );
        setHymns(res.documents);
        saveHymnsToDB(res.documents); // Save to IndexedDB
      } catch (err) {
        console.warn('⚠️ Error fetching from Appwrite, trying IndexedDB...');
        const offlineHymns = await getAllHymnsFromDB();
        setHymns(offlineHymns);
      } finally {
        setLoading(false);
      }
    };

    fetchHymns();
  }, []);

  return (
    <div id="hymn-wrapper">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      {loading ? (
        <p style={{ padding: '20px' }}>Loading hymns...</p>
      ) : (
        <Content hymns={hymns} searchTerm={searchTerm} />
      )}
      <Footer />
    </div>
  );
}

export default Hymn;
