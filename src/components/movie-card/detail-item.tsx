import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MovieDetailItem } from "@/types/movie";
import Image from "next/image";
import { FallbackImage } from "../fallback-image";
import FavouriteButton from "./favourite-button";

const MovieDetailItemCard = ({ data }: { data: MovieDetailItem }) => {
  const {
    Title,
    Poster,
    Plot,
    Genre,
    Director,
    Actors: Cast,
    imdbRating: ImdbRating,
  } = data;

  return (
    <Card className="flex flex-col md:flex-row overflow-hidden shadow-lg sm:w-full lg:w-1/2 max-h-[90vh]">
      <div className="relative w-full md:w-1/3 h-96 md:h-auto">
        <FallbackImage
          fallbackSrc="/images/movie.svg"
          src={Poster}
          alt={Title}
          fill
          className="object-contain md:object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
      <CardContent className="p-6 space-y-4 md:w-2/3">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">{Title}</h1>
            <p className="text-sm text-muted-foreground">
              IMDb Rating: {ImdbRating}/10
            </p>
          </div>
          <FavouriteButton data={data} />
        </div>
        <div className="flex flex-wrap gap-2">
          {Genre.split(",").map((g) => (
            <Badge key={g.trim()} variant="secondary">
              {g.trim()}
            </Badge>
          ))}
        </div>
        <p className="text-base">{Plot}</p>
        <p>
          <span className="font-semibold">Director:</span> {Director}
        </p>
        <p>
          <span className="font-semibold">Cast:</span> {Cast}
        </p>
      </CardContent>
    </Card>
  );
};

export default MovieDetailItemCard;
