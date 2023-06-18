import { useState } from 'react'
import './App.css'
import Movies from './componentes/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const [searchText, setSearchText] = useState('')
  const { movies, error } = useMovies(searchText)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const { search } = Object.fromEntries(formData)
    setSearchText(search)
  }

  return (
    <div className="container">
      <header>
        <h1>Movie Search App</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            placeholder="Forest gump, Fast and furious, Avengers ..."
            type="search"
            autoComplete="off"
            name="search"
          />
          <button>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} error={error} />
      </main>
    </div>
  )
}

export default App
