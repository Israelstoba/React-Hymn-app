import { useEffect, useState } from 'react';
import { databases } from '../lib/appwrite';

function Content() {
  const [hymns, setHymns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHymns = async () => {
      try {
        const response = await databases.listDocuments(
          '668336560036a2192b6c', // Your actual Database ID
          '66833697001c8423ab57' // Your actual Collection ID
        );

        console.log('Hymns fetched:', response);
        setHymns(response.documents || []);
      } catch (err) {
        console.error('Error fetching hymns:', err.message || err);
        setError(
          'Failed to fetch hymns. Please check your Appwrite setup and permissions.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchHymns();
  }, []);

  if (loading) return <p style={{ padding: '20px' }}>Loading hymns...</p>;
  if (error) return <p style={{ padding: '20px', color: 'red' }}>{error}</p>;
  if (hymns.length === 0)
    return <p style={{ padding: '20px' }}>No hymns available.</p>;

  return (
    <main className="hymn-list-con">
      <ul>
        {hymns.map((hymn) => (
          <li className="hymn-list-item" key={hymn.$id}>
            <h5>{hymn.title}</h5>
            <p style={{ whiteSpace: 'pre-wrap' }}>{hymn.lyrics}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Content;
