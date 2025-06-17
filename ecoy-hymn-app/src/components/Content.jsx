import { useEffect, useState } from 'react';
import { databases, Query } from '../lib/appwrite';
// import { Query } from 'appwrite';
import { useNavigate } from 'react-router-dom';

function Content() {
  const [hymns, setHymns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllHymns = async () => {
      let allHymns = [];
      let lastId = null;
      const batchSize = 100; // fetch 100 per request

      try {
        while (true) {
          const queries = [Query.limit(batchSize)];
          if (lastId) {
            queries.push(Query.cursorAfter(lastId));
          }

          const response = await databases.listDocuments(
            '668336560036a2192b6c', // Database ID
            '66833697001c8423ab57', // Collection ID
            queries
          );

          const docs = response.documents;
          allHymns = [...allHymns, ...docs];

          if (docs.length < batchSize) break;
          lastId = docs[docs.length - 1].$id;
        }

        setHymns(allHymns);
      } catch (err) {
        console.error('Error fetching hymns:', err.message || err);
        setError(
          'Failed to fetch hymns. Please check your Appwrite setup and permissions.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAllHymns();
  }, []);

  if (loading) return <p style={{ padding: '20px' }}>Loading hymns...</p>;
  if (error) return <p style={{ padding: '20px', color: 'red' }}>{error}</p>;
  if (hymns.length === 0)
    return <p style={{ padding: '20px' }}>No hymns available.</p>;

  return (
    <main className="hymn-list-con">
      <ul>
        {hymns.map((hymn) => (
          <li
            className="hymn-list-item"
            key={hymn.$id}
            onClick={() => navigate(`/hymn/${hymn.$id}`)}
            style={{ cursor: 'pointer' }}
          >
            <h5 className="hymn-list-title">{hymn.title}</h5>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Content;
