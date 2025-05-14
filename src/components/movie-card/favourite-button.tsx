"use client";

import useFavourite from "@/hooks/useFavourite";
import { useMemo } from "react";
import { Button } from "../ui/button";
import { HeartIcon } from "lucide-react";

const FavouriteButton = (props: { data: any }) => {
  const { data } = props;
  const { imdbID } = data;
  const { favs, updateFavs } = useFavourite();

  const handleFav = () => updateFavs(data);

  const favCls = useMemo(() => {
    if (favs[imdbID]) {
      return "text-red-700 fill-current";
    }
    return "";
  }, [favs?.[imdbID]]);
  return (
    <Button size="icon" variant="ghost" onClick={handleFav}>
      <HeartIcon className={favCls} />
    </Button>
  );
};

export default FavouriteButton;
