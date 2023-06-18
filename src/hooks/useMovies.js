import { useEffect } from 'react'
import { useState } from 'react'

const BASE_URL = 'http://www.omdbapi.com'
const API_KEY = 'bba0f986'

const adaptMovies = (_movies) =>
  _movies.map(({ imdbID, Title, Year, Poster }) => ({
    id: imdbID,
    title: Title,
    year: Year,
    poster: Poster,
  }))

export function useMovies(searchText) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    if (searchText === '') return

    async function searchMovie() {
      try {
        const resp = await fetch(
          `${BASE_URL}/?apikey=${API_KEY}&s=${searchText}`
        )
        const { Search, Response, Error } = await resp.json()

        if (Response === 'True') {
          const adaptedMovies = adaptMovies(Search)
          setMovies(adaptedMovies)
          setError(null)
        } else {
          setMovies([])
          setError(Error)
        }
      } catch (error) {
        console.error(error)
      }
    }

    searchMovie()
  }, [searchText])

  return {
    movies,
    error,
  }
}
