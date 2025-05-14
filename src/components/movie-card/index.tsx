import { MovieDetailItem, MovieListItem } from "@/types/movie";
import dynamic from "next/dynamic";
import React from "react";

export const CARD_TYPES = {
  LIST_ITEM: "list-item",
  DETAIL_ITEM: "detail-item",
} as const;

const Card = {
  [CARD_TYPES.LIST_ITEM]: dynamic(() => import("./list-item")),
  [CARD_TYPES.DETAIL_ITEM]: dynamic(() => import("./detail-item")),
} as const;

type MovieCartProps =
  | ({ type: "list-item" } & { data: MovieListItem })
  | ({ type: "detail-item" } & { data: MovieDetailItem });

const MovieCard = (props: MovieCartProps) => {
  const { type, data } = props;

  const Comp = Card[type];

  if (!Comp) return <>Invalid card type</>;

  return <Comp data={data as any} />;
};

export default MovieCard;
