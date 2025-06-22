// src/components/HymnDisplay.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { databases } from '../lib/appwrite';
import { useFavorites } from '../context/FavoriteContext';
import { getHymnById } from '../lib/hymnDB'; // ✅

function HymnDisplay() {
  const { id } = useParams();
  const [hymn, setHymn] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setCurrentHymn } = useFavorites();

  useEffect(() => {
    const fetchHymn = async () => {
      try {
        const res = await databases.getDocument(
          '668336560036a2192b6c',
          '66833697001c8423ab57',
          id
        );
        setHymn(res);
        setCurrentHymn(res);
      } catch (err) {
        console.warn('Appwrite failed, trying IndexedDB...');
        try {
          const offlineHymn = await getHymnById(id);
          if (offlineHymn) {
            setHymn(offlineHymn);
            setCurrentHymn(offlineHymn);
          } else {
            console.error('Hymn not found in IndexedDB either.');
          }
        } catch (dbErr) {
          console.error('Error fetching from IndexedDB:', dbErr.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchHymn();
  }, [id]);

  if (loading) return <p style={{ padding: '20px' }}>Loading...</p>;
  if (!hymn) return <p style={{ padding: '20px' }}>Hymn not found.</p>;

  return (
    <div className="hymn-display-con">
      <h2 className="hymn-title">{hymn.title}</h2>
      <div className="hymn-lyrics-wrapper">
        <pre className="hymn-lyrics">{hymn.lyrics}</pre>
      </div>
    </div>
  );
}

export default HymnDisplay;
