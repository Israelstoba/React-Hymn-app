// src/context/FavoriteContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  const [currentHymn, setCurrentHymn] = useState(null);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (hymn) => {
    setFavorites((prev) => {
      const isAlreadyFavorite = prev.some((fav) => fav.$id === hymn.$id);
      if (isAlreadyFavorite) {
        return prev.filter((fav) => fav.$id !== hymn.$id);
      } else {
        return [...prev, hymn];
      }
    });
  };

  const isFavorite = (id) => favorites.some((fav) => fav.$id === id);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        currentHymn,
        setCurrentHymn,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoriteContext);
}
