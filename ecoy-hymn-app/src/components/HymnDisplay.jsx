// src/pages/HymnDisplay.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { databases } from '../lib/appwrite';

function HymnDisplay() {
  const { id } = useParams();
  const [hymn, setHymn] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHymn = async () => {
      try {
        const res = await databases.getDocument(
          '668336560036a2192b6c',
          '66833697001c8423ab57',
          id
        );
        setHymn(res);
      } catch (err) {
        console.error('Error fetching hymn:', err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchHymn();
  }, [id]);

  if (loading) return <p style={{ padding: '20px' }}>Loading...</p>;
  if (!hymn) return <p style={{ padding: '20px' }}>Hymn not found.</p>;

  return (
    <>
      <div className="hymn-display-con">
        <h2 className="hymn-title">{hymn.title}</h2>
        <div className="hymn-lyrics-wrapper">
          <pre className="hymn-lyrics">{hymn.lyrics}</pre>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HymnDisplay;
