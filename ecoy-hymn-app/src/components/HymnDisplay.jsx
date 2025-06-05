// src/pages/HymnDisplay.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { databases } from '../lib/appwrite';
import Footer from '../components/Footer';

function HymnDisplay() {
  const { id } = useParams();
  const [hymn, setHymn] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activePart, setActivePart] = useState('verse');

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

  const [versesPart, chorusPart] = hymn.lyrics.split(/Chorus:/i);
  const hasChorus = Boolean(chorusPart);

  return (
    <div className="hymn-display-con">
      <h4 className="hymn-title">{hymn.title}</h4>
      {hasChorus && (
        <div className="hymn-tabs">
          <button
            className={activePart === 'verse' ? 'active' : ''}
            onClick={() => setActivePart('verse')}
          >
            Verse
          </button>
          <button
            className={activePart === 'chorus' ? 'active' : ''}
            onClick={() => setActivePart('chorus')}
          >
            Chorus
          </button>
        </div>
      )}
      <div className="hymn-text">
        <pre>
          {activePart === 'verse'
            ? versesPart.trim()
            : hasChorus
            ? 'Chorus:\n' + chorusPart.trim()
            : versesPart.trim()}
        </pre>
      </div>
    </div>
  );
}

export default HymnDisplay;
