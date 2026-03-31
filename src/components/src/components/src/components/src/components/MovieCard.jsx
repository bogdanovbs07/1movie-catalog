import './MovieCard.css';

function MovieCard({ movie }) {
  const getStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    if (hasHalfStar) {
      stars.push('½');
    }
    return stars.join('');
  };

  return (
    <div className="movie-card">
      <h3 className="movie-title">{movie.title}</h3>
      <div className="movie-info">
        <p><strong>Год:</strong> {movie.year}</p>
        <p><strong>Режиссёр:</strong> {movie.director}</p>
        <p><strong>Жанр:</strong> {movie.genre}</p>
        <div className="movie-rating">
          <strong>Рейтинг:</strong> {movie.rating}/10
          <span className="stars">{getStarRating(movie.rating)}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
