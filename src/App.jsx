import { useState } from 'react'
import './App.css'
import Movies from './componentes/Movies'
import { useMovies } from './hooks/useMovies'
import { useEffect } from 'react'
import { useRef } from 'react'

function useSearch() {
  const [searchText, setSearchText] = useState('')
  const [error, setError] = useState()
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = searchText === ''
      return
    }

    if (searchText === '') {
      setError('Please enter a movie name')
      return
    }

    if (searchText.length < 3) {
      setError('Please enter at least 3 characters')
      return
    }

    setError(null)
  }, [searchText])

  return { searchText, setSearchText, error }
}

function App() {
  const { searchText, setSearchText, error } = useSearch()
  const {
    movies,
    getMovies,
    loading,
    error: moviesError,
  } = useMovies(searchText)

  const handleChange = (e) => {
    const { value } = e.target

    if (value === ' ') return

    setSearchText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies()
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
            value={searchText}
            onChange={handleChange}
            style={{ border: error && '1px solid red' }}
          />
          <button>Search</button>
        </form>
        {error && <p className="error">{error}</p>}
        {moviesError && <p className="error">{moviesError}</p>}
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
