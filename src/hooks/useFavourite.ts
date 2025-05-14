"use client";

import { MovieListItem } from "@/types/movie";
import { useEffect, useState } from "react";

const LOCAL_FAV_KEY = "favs";

const getLocalFavs = () =>
  JSON.parse(global?.localStorage?.getItem(LOCAL_FAV_KEY) || "{}");

const useFavourite = () => {
  const [loading, setLoading] = useState(true);
  const [favs, setFavs] = useState<Record<string, MovieListItem>>({});

  const updateFavs = (movie: MovieListItem) => {
    const { imdbID: id } = movie;
    const localFavs = getLocalFavs();
    if (!localFavs[id]) {
      localFavs[id] = movie;
    } else {
      delete localFavs[id];
    }
    setFavs({ ...localFavs });
    localStorage.setItem(LOCAL_FAV_KEY, JSON.stringify(localFavs));
  };

  useEffect(() => {
    setFavs(getLocalFavs());
    setLoading(false);
  }, []);

  return { loading, favs, updateFavs };
};

export default useFavourite;
