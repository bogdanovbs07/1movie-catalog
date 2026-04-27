import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home({ movies }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Каталог фильмов</h1>
      <input
        type="text"
        placeholder="Поиск фильмов..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          fontSize: '16px'
        }}
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {filteredMovies.map((movie) => (
          <div key={movie.id} style={{
            border: '1px solid #ccc',
            padding: '15px',
            borderRadius: '8px'
          }}>
            <Link 
              to={`/movie/${movie.id}`}
              style={{
                textDecoration: 'none',
                color: '#333'
              }}
            >
              <h2>{movie.title}</h2>
            </Link>
            <p>Год: {movie.year}</p>
            <p>Рейтинг: {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
