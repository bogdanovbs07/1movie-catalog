import MovieCard from './MovieCard';
import './MovieList.css';

function MovieList({ movieList }) {
  if (movieList.length === 0) {
    return (
      <div className="empty-state">
        <p>В каталоге нет фильмов</p>
        <p className="empty-state-subtitle">Список фильмов пуст</p>
      </div>
    );
  }

  return (
    <div className="movie-list">
      {movieList.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
