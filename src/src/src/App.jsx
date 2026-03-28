import { useState } from 'react'
import MovieList from './components/MovieList'
import './App.css'

const initialMovies = [
  { id: 1, title: 'Побег из Шоушенка', year: 1994, rating: 9.3, genre: 'Драма' },
  { id: 2, title: 'Крёстный отец', year: 1972, rating: 9.2, genre: 'Драма, Криминал' },
  { id: 3, title: 'Тёмный рыцарь', year: 2008, rating: 9.0, genre: 'Боевик, Драма' },
  { id: 4, title: 'Криминальное чтиво', year: 1994, rating: 8.9, genre: 'Криминал, Драма' },
  { id: 5, title: 'Властелин колец: Возвращение короля', year: 2003, rating: 9.0, genre: 'Фэнтези, Приключения' },
]

function App() {
  const [movieList, setMovieList] = useState(initialMovies)

  const handleClearList = () => {
    setMovieList([])
  }

  const movieCount = movieList.length

  return (
    <div className="app">
      <h1>🎬 Каталог фильмов</h1>
      
      <div className="counter-section">
        <div className="counter">
          📽️ Всего фильмов: <span>{movieCount}</span>
        </div>
        <button onClick={handleClearList} className="clear-btn">
          🗑️ Очистить список
        </button>
      </div>

      {/*
      <MovieList movieList={movieList} />
    </div>
  )
}

export default App
