"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MovieListItem } from "@/types/movie";
import { FallbackImage } from "../fallback-image";
import FavouriteButton from "./favourite-button";

export default function MovieListItemCard({ data }: { data: MovieListItem }) {
  const { Title: title, Year: year, imdbID, Type: type, Poster: poster } = data;

  return (
    <Card className="overflow-hidden shadow-lg">
      <CardHeader className="p-0">
        <FallbackImage
          fallbackSrc="/images/movie.svg"
          src={poster}
          alt={title}
          width={320}
          height={480}
          className="w-full h-72 object-fill"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {type.toUpperCase()} • {year}
        </p>
      </CardContent>
      <CardFooter className="p-4 flex justify-between">
        <Button variant="outline" asChild>
          <Link href={`/movie/${imdbID}`} passHref>
            View details
          </Link>
        </Button>
        <FavouriteButton data={data} />
      </CardFooter>
    </Card>
  );
}
