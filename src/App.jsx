import { useState } from 'react'
import './App.css'
import Movies from './componentes/Movies'
import { useMovies } from './hooks/useMovies'
import { useEffect } from 'react'

const BASE_URL = 'http://www.omdbapi.com'
const API_KEY = 'bba0f986'

function App() {
  const { movies } = useMovies()
  const [searchText, setSearchText] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const { search } = Object.fromEntries(formData)
    setSearchText(search)
  }

  useEffect(() => {
    if (!searchText) return
    async function searchMovie() {
      const resp = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${searchText}`)
      const moviesReponse = await resp.json()
      console.log('moviesReponse', moviesReponse)
    }

    searchMovie()
  }, [searchText])

  return (
    <div className="container">
      <header>
        <h1>Movie Search App</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            placeholder="Forest gump, Fast and furious, Avengers ..."
            type="search"
            name="search"
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
