import { useState } from 'react';

// Избранные матчи (по id). Хранятся только в памяти, пока открыто приложение.
export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const isFavorite = (id: string) => favorites.includes(id);

  const toggle = (id: string) => {
    setFavorites((prev) =>
        prev.includes(id) ? prev.filter((favoriteId) => favoriteId !== id) : [...prev, id]
    );
  };

  return { isFavorite, toggle };
}
