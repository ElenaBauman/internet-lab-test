import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_FAVORITE_KEY } from "@/constants/storage";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_FAVORITE_KEY).then((data) => {
      if (!data) {
        return;
      }

      setFavorites(JSON.parse(data));
    });
  }, []);

  const isFavorite = (id: string) => favorites.includes(id);

  const toggle = (id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id)
          ? prev.filter((favoriteId) => favoriteId !== id)
          : [...prev, id];

      AsyncStorage.setItem(STORAGE_FAVORITE_KEY, JSON.stringify(next));

      return next;
    });
  };

  return { isFavorite, toggle };
};
