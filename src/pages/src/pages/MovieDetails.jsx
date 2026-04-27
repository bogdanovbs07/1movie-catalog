import { useParams, Link } from 'react-router-dom';

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div>
        <h1>Фильм не найден</h1>
        <Link to="/">← Вернуться на главную</Link>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <h1>{movie.title}</h1>
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <p><strong>Год выпуска:</strong> {movie.year}</p>
        <p><strong>Жанр:</strong> {movie.genre}</p>
        <p><strong>Режиссёр:</strong> {movie.director}</p>
        <p><strong>Рейтинг:</strong> {movie.rating}/10</p>
      </div>
      <div style={{
        marginBottom: '20px'
      }}>
        <h2>Описание</h2>
        <p style={{ lineHeight: '1.6' }}>{movie.description}</p>
      </div>
      <Link 
        to="/"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#333',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px'
        }}
      >
        ← Назад к списку фильмов
      </Link>
    </div>
  );
}

export default MovieDetails;
