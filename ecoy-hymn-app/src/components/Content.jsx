import { useEffect, useState } from 'react';
import { databases, Query } from '../lib/appwrite';
import { useNavigate } from 'react-router-dom';

function Content() {
  const [hymns, setHymns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllHymns = async () => {
      let allHymns = [];
      let lastId = null;
      const batchSize = 100;

      try {
        while (true) {
          const queries = [Query.limit(batchSize)];
          if (lastId) {
            queries.push(Query.cursorAfter(lastId));
          }

          const response = await databases.listDocuments(
            '668336560036a2192b6c',
            '66833697001c8423ab57',
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

  const filteredHymns = hymns.filter((hymn) =>
    hymn.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p style={{ padding: '20px' }}>Loading hymns...</p>;
  if (error) return <p style={{ padding: '20px', color: 'red' }}>{error}</p>;

  return (
    <main className="hymn-list-con">
      {/* Search input at the top */}
      <div className="search-con">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search hymns..."
            className="input-field"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="clear-btn"
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              &times;
            </button>
          )}
        </div>
      </div>

      {filteredHymns.length === 0 ? (
        <p
          className="mis-match-txt"
          style={{ opacity: '1', transition: 'opacity 0.5s ease', top: '0' }}
        >
          ⚠️ Hymn match not found!
        </p>
      ) : (
        <ul>
          {filteredHymns.map((hymn) => (
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
      )}
    </main>
  );
}

export default Content;
