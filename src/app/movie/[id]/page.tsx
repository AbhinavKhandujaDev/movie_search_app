import MovieCard, { CARD_TYPES } from "@/components/movie-card";
import Navbar from "@/components/navbar";
import { NEXT_URL } from "@/lib/config";
import { MovieDetailItem } from "@/types/movie";

const Movie = async ({ params }: { params: Promise<any> }) => {
  const { id } = await params;

  const data = await fetch(`${NEXT_URL}/api/movies?i=${id}`, {
    next: { revalidate: false },
  }).then((res) => res.json() as Promise<MovieDetailItem>);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Navbar />
      <div className="flex-1 w-full grid place-items-center px-4">
        <MovieCard type={CARD_TYPES.DETAIL_ITEM} data={data} />
      </div>
    </div>
  );
};

export default Movie;
