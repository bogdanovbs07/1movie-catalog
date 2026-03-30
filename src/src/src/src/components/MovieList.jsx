import './MovieList.css'

function MovieList({ movieList, onToggleWatched }) {
  if (movieList.length === 0) {
    return (
      <div className="empty-state">
        <p>📭 Список фильмов пуст</p>
        <p className="empty-hint">Добавьте фильмы, чтобы они появились здесь</p>
      </div>
    )
  }

  return (
    <div className="movie-grid">
      {movieList.map(movie => (
        <div key={movie.id} className="movie-card">
          <h3 className="movie-title">{movie.title}</h3>
          <div className="movie-info">
            <span className="movie-year">📅 {movie.year}</span>
            <span className="movie-rating">⭐ {movie.rating}</span>
          </div>
          <p className="movie-genre">🎭 {movie.genre}</p>
          <div className="watched-checkbox">
            <label>
              <input
                type="checkbox"
                checked={movie.watched || false}
                onChange={() => onToggleWatched(movie.id)}
              />
              Просмотрено
            </label>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieList
