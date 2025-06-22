import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoriteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Favorite() {
  const { favorites, clearFavorites } = useFavorites();

  return (
    <div id="favorite-page-con">
      <div className="favorite-wrapper">
        <div className="favorite-header">
          <h2 className="favorite-title card-txt">💞 My Picks</h2>
          {favorites.length > 0 && (
            <h2
              className="clear-favorite-btn card-txt"
              onClick={clearFavorites}
            >
              Clear All
              <FontAwesomeIcon className="trash-can" icon={faTrash} />
            </h2>
          )}
        </div>
        <br />
        {favorites.length === 0 ? (
          <p className="no-favorites-text card-txt">🤭 No favorite hymn yet.</p>
        ) : (
          <ul className="favorite-list">
            {favorites.map((hymn) => (
              <li key={hymn.$id} className="favorite-items">
                <Link to={`/hymn/${hymn.$id}`} className="favorite-link">
                  {hymn.title || 'Untitled Hymn'}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Favorite;
