"use client";

import CardList from "@/components/card-list";
import Navbar from "@/components/navbar";
import Spinner from "@/components/spinner";
import useFavourite from "@/hooks/useFavourite";
import { useMemo } from "react";

const Favourites = () => {
  const { loading, favs } = useFavourite();

  const list = useMemo(() => Object.values(favs), [favs]);

  return (
    <div className="w-screen flex flex-col items-center gap-3">
      <Navbar label="Favourites" />
      {loading ? <Spinner /> : <CardList data={list} />}
    </div>
  );
};

export default Favourites;
