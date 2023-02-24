import { MovieCard } from "./MovieCard";

function Movielist(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => {
          return <MovieCard key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}

export { Movielist };
