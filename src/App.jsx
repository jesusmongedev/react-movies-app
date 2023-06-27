import { useState } from 'react'
import './App.css'
import Movies from './componentes/Movies'
import { useMovies } from './hooks/useMovies'
import useSearch from './hooks/useSearch'

function App() {
  const { search, setSearch, error } = useSearch()
  const [sort, setSort] = useState(false)

  const {
    movies,
    getMovies,
    loading,
    error: moviesError,
  } = useMovies({ search, sort })

  const handleChange = (e) => {
    const { value } = e.target

    if (value === ' ') return

    setSearch(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies()
  }

  const toggleSort = () => setSort((prevSort) => !prevSort)

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
            value={search}
            onChange={handleChange}
            style={{ border: error && '1px solid red' }}
          />
          <button>Search</button>
        </form>
        {/* Input type switch to sort movies by title */}
        <div>
          <label htmlFor="sort">Sort by title</label>
          <input
            type="checkbox"
            name="sort"
            id="sort"
            onChange={toggleSort}
            checked={sort}
          />
        </div>
        {error && <p className="error">{error}</p>}
        {moviesError && <p className="error">{moviesError}</p>}
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
