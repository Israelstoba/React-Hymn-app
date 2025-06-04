// HymnDetail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { databases } from '../lib/appwrite';

function HymnDetail() {
  const { id } = useParams();
  const [hymn, setHymn] = useState(null);
  const [currentSection, setCurrentSection] = useState('chorus');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHymn = async () => {
      try {
        const response = await databases.getDocument(
          '668336560036a2192b6c',
          '66833697001c8423ab57',
          id
        );
        setHymn(response);
      } catch (err) {
        console.error('Error fetching hymn:', err.message || err);
        setError('Could not load hymn.');
      }
    };
    fetchHymn();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!hymn) return <p>Loading hymn...</p>;

  const sections = ['chorus', 'verse1', 'verse2', 'verse3', 'verse4', 'verse5'];

  return (
    <div className="hymn-detail-con">
      <h3>{hymn.title}</h3>

      <div className="verse-tabs">
        {sections.map((key) =>
          hymn[key] ? (
            <button
              key={key}
              onClick={() => setCurrentSection(key)}
              className={currentSection === key ? 'active-tab' : ''}
            >
              {key === 'chorus' ? 'CH' : key.replace('verse', '')}
            </button>
          ) : null
        )}
      </div>

      <p
        className="hymn-lyrics"
        style={{ whiteSpace: 'pre-wrap', marginTop: '20px' }}
      >
        {hymn[currentSection]}
      </p>
    </div>
  );
}

export default HymnDetail;
