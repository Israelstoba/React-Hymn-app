// src/pages/Favorite.jsx
import React from 'react';
import Footer from '../components/Footer';
import { useFavorites } from '../context/FavoriteContext';
import { Link } from 'react-router-dom';

function Favorite() {
  const { favorites } = useFavorites();

  return (
    <div id="favorite-page-con">
      <div className="favorites-wrapper">
        <h2 className="favorites-title card-txt">My Picks💞</h2>
        <br />
        {favorites.length === 0 ? (
          <p className="no-favorites-text card-txt">
            {' '}
            🤭 No favorite hymns yet.
          </p>
        ) : (
          <ul className="favorites-list">
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
