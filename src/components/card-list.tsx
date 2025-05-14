import { MovieListItem } from "@/types/movie";
import MovieCard, { CARD_TYPES } from "./movie-card";

const CardList = (props: { data: MovieListItem[] }) => {
  const { data } = props;

  return (
    <div className="flex flex-col max-w-full justify-start items-center overflow-hidden">
      <div className="w-[960px] max-w-[inherit] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 p-3">
        {data?.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            type={CARD_TYPES.LIST_ITEM}
            data={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
