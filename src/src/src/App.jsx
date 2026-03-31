import { useState } from 'react';
import MovieList from './components/MovieList';
import './App.css';

const initialMovies = [
  {
    id: 1,
    title: "Начало",
    year: 2010,
    director: "Кристофер Нолан",
    genre: "Фантастика",
    rating: 8.8
  },
  {
    id: 2,
    title: "Побег из Шоушенка",
    year: 1994,
    director: "Фрэнк Дарабонт",
    genre: "Драма",
    rating: 9.3
  },
  {
    id: 3,
    title: "Криминальное чтиво",
    year: 1994,
    director: "Квентин Тарантино",
    genre: "Криминал",
    rating: 8.9
  },
  {
    id: 4,
    title: "Тёмный рыцарь",
    year: 2008,
    director: "Кристофер Нолан",
    genre: "Боевик",
    rating: 9.0
  },
  {
    id: 5,
    title: "Форрест Гамп",
    year: 1994,
    director: "Роберт Земекис",
    genre: "Драма",
    rating: 8.8
  }
];

function App() {
  const [movieList, setMovieList] = useState(initialMovies);

  const clearMovieList = () => {
    setMovieList([]);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Каталог фильмов</h1>
        <div className="stats">
          <span className="movie-count">
            Всего фильмов: {movieList.length}
          </span>
          {movieList.length > 0 && (
            <button onClick={clearMovieList} className="clear-btn">
              Очистить список
            </button>
          )}
        </div>
      </header>
      
      <main>
        <MovieList movieList={movieList} />
      </main>
    </div>
  );
}

export default App;
