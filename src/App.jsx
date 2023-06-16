import './App.css'
import Movies from './componentes/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()

  return (
    <div className="container">
      <header>
        <h1>Movie Search App</h1>
        <form className="form">
          <input
            placeholder="Forest gump, Fast and furious, Avengers ..."
            type="search"
          />
          <button>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
